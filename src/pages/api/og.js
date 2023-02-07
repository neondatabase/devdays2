import { ImageResponse } from '@vercel/og';

export const config = {
  // runtime: 'edge',
  runtime: 'experimental-edge',
};

export default async function handler(req) {
  // const { searchParams } = new URL(req.url);
  const { searchParams } = req.nextUrl;
  const name = searchParams.get('name');
  const id = searchParams.get('id');
  const email = searchParams.get('email');
  const handle = searchParams.get('handle');
  const image = searchParams.get('image');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="256"
          height="256"
          src={image}
          style={{
            borderRadius: 128,
          }}
        />
        <p>{name}</p>
        <p>{handle}</p>
        <p>{email}</p>
        <p>{`${id}`.padStart(6, '0')}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
