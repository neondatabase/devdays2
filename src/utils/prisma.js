import { PrismaAdapter as _PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

// @NOTE: this is module extension
// required to alter prisma adapter
export const PrismaAdapter = (p) => ({
  ..._PrismaAdapter(p),
  getUser: (id) => p.user.findUnique({ where: { id: +id } }),
  createUser: async (data) => {
    const userId = data?.image.split('/').slice(-1)[0].split('?')[0];
    let githubHandle;
    // @TODO: beware of rate limits
    try {
      let userData = await fetch(`https://api.github.com/user/${userId}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
      userData = await userData.json();
      githubHandle = userData?.login;
    } catch (err) {
      console.log(err);
    }
    return p.user.create({
      data: {
        ...data,
        githubHandle,
      },
    });
  },
});

export default prisma;
