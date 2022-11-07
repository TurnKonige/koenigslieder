import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F6F6F6',
          }}
        >
          <div
            style={{
              display: 'flex',
              position: 'absolute',
            }}
          >
            <CrownIcon />
          </div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '128px',
              marginBottom: '48px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '24px',
            }}
          >
            www.königslieder.de
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: 'twemoji',
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

const CrownIcon = () => {
  return (
    <svg
      width='534'
      height='500'
      viewBox='0 0 484 453'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M478 86L458 387H350H242H134H26L6 86L134 178L242 10L350 178L478 86Z'
        fill='#F2F2F2'
      />
      <path d='M26 448V412H458V448H26Z' fill='#F2F2F2' />
      <path
        d='M478 86L458 387H350H242H134H26L6 86L134 178L242 10L350 178L478 86Z'
        stroke='#EEE'
        stroke-width='10'
      />
      <path d='M26 448V412H458V448H26Z' stroke='#EEE' stroke-width='10' />
    </svg>
  );
};
