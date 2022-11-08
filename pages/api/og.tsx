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
            backgroundColor: '#FDFDBD',
            color: '#1A1423',
          }}
        >
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
