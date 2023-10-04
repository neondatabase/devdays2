import { ImageResponse } from '@vercel/og';

import { image1, image2, image3, image4 } from 'constants/og-images';

export const config = {
  runtime: 'edge',
};

const colorSchemeMap = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
};

export default async function handler(req) {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get('id');
  const handle = searchParams.get('login');
  const image = searchParams.get('image');
  const name = searchParams.get('name') !== 'null' ? searchParams.get('name') : handle;
  const color = searchParams.get('colorSchema') || '1';

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: '60px',
          backgroundColor: '#080808',
        }}
      >
        <img width="100%" height="100%" src={colorSchemeMap[color]} alt="Ticket layout" />
        <div
          style={{
            position: 'absolute',
            top: '120px',
            left: '100px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              borderRadius: '100%',
              overflow: 'hidden',
              display: 'flex',
            }}
          >
            <img
              width="90"
              height="90"
              src={image}
              style={{
                borderRadius: '100%',
              }}
              alt="User avatar"
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '25px',
            }}
          >
            <p
              style={{
                margin: '0',
                color: '#fff',
                fontSize: '34px',
                fontWeight: 600,
              }}
            >
              {name}
            </p>
            <p
              style={{
                margin: '0',
                color: '#fff',
                fontSize: '22px',
                lineHeight: '22px',
                letterSpacing: '0.06em',
                fontFamily: 'monospace',
              }}
            >
              @{handle}
            </p>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '100px',
            left: '100px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                margin: '0',
                color: '#fff',
                fontSize: '44px',
                fontWeight: 300,
              }}
            >
              #{`${id}`.padStart(6, '0')} /
            </p>
            <p
              style={{
                margin: '0 0 0 14px',
                color: '#fff',
                fontSize: '16px',
                display: 'flex',
                gap: '4px',
                flexDirection: 'column',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontFamily: 'monospace',
              }}
            >
              <span>10AM PT,</span>
              <span>November 2, 2023</span>
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
