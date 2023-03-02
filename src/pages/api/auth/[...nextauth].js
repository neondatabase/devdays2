import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import prisma, { PrismaAdapter } from 'utils/prisma';

const log = console;

const createOptions = (req) => ({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID,
      clientSecret: process.env.GITHUB_APP_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          login: profile.login,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.colorSchema = token.colorSchema;
        session.userId = token.uid;
        session.githubHandle = token.githubHandle;
      }

      return session;
    },
    async jwt({ user, account, token, profile }) {
      if (req.query?.colorSchema) {
        token.colorSchema = req.query.colorSchema;
      }

      if (user) {
        token.uid = user.id;
        token.colorSchema = user.colorSchema;
      }

      if (account) {
        token.access_token = account.access_token;
      }
      if (profile) {
        token.githubHandle = profile.login;
      }

      return token;
    },
    async redirect({ url, baseUrl }) {
      log.debug('redirect', { url, baseUrl });
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  session: {
    strategy: 'jwt',
  },
  logger: {
    error(code, metadata) {
      log.error(code, metadata);
    },
    warn(code) {
      log.warn(code);
    },
    debug(code, metadata) {
      log.debug(code, metadata);
    },
  },
});

export default async (req, res) => NextAuth(req, res, createOptions(req));
