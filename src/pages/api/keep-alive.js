import prisma from 'utils/prisma';

// simplest query to keep db instance out of suspended mode
export default async function handle(req, res) {
  try {
    const userCount = await prisma.user.count();

    res.status(200).json(userCount);
  } catch (e) {
    res.status(403).json({ err: 'Error occurred while updating user data' });
  }
}
