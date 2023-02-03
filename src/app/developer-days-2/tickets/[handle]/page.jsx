// import { useRouter } from 'next/navigation';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import prisma from 'utils/prisma';

const TicketPage = async ({ params }) => {
  const data = await getTicketData(params.handle);
  // const router = useRouter();
  // if (!Object.length(data)) router?.push('/developer-days-2');
  const { id: number, name, email, image, handle } = data;
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <Container
        className="spacing-x-8 relative z-10 flex min-h-[100vh] items-center justify-around space-x-16"
        size="sm"
      >
        <div className="max-w-[500px] space-y-4">
          <Heading className="text-center leading-snug" tag="h2" size="sm">
            {name === 'Your Name' ? 'It could be your' : `${name}'s`} ticket to Neon Develop Days
          </Heading>
          <div className="mt-8 flex border border-white p-4">
            <img
              src={image}
              className="h-[80px] w-[80px] rounded-sm"
              alt={`${name}'s profile picture`}
            />
            <div className="ml-4 flex-col">
              <p className="text-lg">{`${number}`.padStart(5, '0')}</p>
              <p>{name}</p>
              <p>{email}</p>
              <p>{handle}</p>
              <p>NEON DEV DAYS SPRING PERSONAL TICKET</p>
            </div>
          </div>
          {name !== 'Your Name' ? (
            <div className="flex space-x-2">
              <Link theme="black" to="/">
                Share Twiter
              </Link>
              <Link theme="black" to="/">
                Share LinkedIn
              </Link>
              <Link theme="black" to="/">
                Copy link
              </Link>
            </div>
          ) : (
            <Button size="md" theme="primary" to="/developer-days-2">
              Register Now
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TicketPage;

async function getTicketData(handle) {
  let userData;
  if (handle) {
    try {
      userData = await prisma.user.findFirstOrThrow({
        where: {
          githubHandle: handle,
        },
        select: {
          name: true,
          email: true,
          githubHandle: true,
          image: true,
          id: true,
        },
      });
    } catch (err) {
      console.log('err', err);
      userData = null;
    }
  }

  const anonymValues = {
    name: 'Your Name',
    email: 'your@email.com',
    githubHandle: 'gitprofile',
    image:
      'https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2013/8/30/1377862460433/Kick-Ass-2-010.jpg?width=465&quality=85&dpr=1&s=none',
    id: 0,
  };
  return userData || anonymValues;
}
