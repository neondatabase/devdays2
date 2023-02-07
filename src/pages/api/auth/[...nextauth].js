import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import prisma, { PrismaAdapter } from 'utils/prisma';

const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID,
      clientSecret: process.env.GITHUB_APP_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        const userId = token.uid;
        let userData;
        const providerAccountId = session.user.image.split('/').slice(-1)[0].split('?')[0];
        try {
          // @TODO: how to shadow next auth types in js project?
          // we need to extend type and work with it,
          // not pull it manually
          userData = await fetch(`https://api.github.com/user/${providerAccountId}`, {
            headers: {
              Accept: 'application/vnd.github+json',
              'X-GitHub-Api-Version': '2022-11-28',
            },
          });
          userData = await userData.json();
        } catch (err) {
          console.log('err', err);
        }
        // pass these to session object
        session.userId = userId;
        session.githubHandle = userData?.login ?? null;
      }
      return session;
    },
    async callback(params) {
      console.log('callback', params);
    },
    async jwt({ user, token }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

export default (req, res) => NextAuth(req, res, options);
