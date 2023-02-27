import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import prisma, { PrismaAdapter } from 'utils/prisma';

const createOptions = (req) => ({
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

        session.colorSchema = token.colorSchema;
        session.userId = userId;
        session.githubHandle = userData?.login ?? null;
      }

      return session;
    },
    async jwt({ user, token }) {
      if (req.query?.colorSchema) {
        token.colorSchema = req.query.colorSchema;
      }

      if (user) {
        token.uid = user.id;
        token.colorSchema = user.colorSchema;
      }

      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
});

export default async (req, res) => NextAuth(req, res, createOptions(req));
