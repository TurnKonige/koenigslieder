import Head from 'next/head';

export interface MetaTagsProps {
  title: string;
  description: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  const url = 'https://koenigslieder.de/';
  const imageUrl = 'https://koenigslieder.de/crown.svg';

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='title' content={title} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrl} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={imageUrl} />
    </Head>
  );
};
