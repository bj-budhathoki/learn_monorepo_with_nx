import React from 'react';

// export const metadata = {
//   title: 'Detail page',
//   description: 'detail page',
// };

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return {
    title: `detail of car ${params.id}`,
    description: 'car detail page',
    alternates: {
      canonical: `/detail/${params.id}`,
      languages: {
        'en-US': `/en-US/details/${params.id}`,
        'de-DE': `/de-DE/details/${params.id}`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Next.js',
      description: 'The React Framework for the Web',
      siteId: '1467726470533754880',
      creator: '@nextjs',
      creatorId: '1467726470533754880',
      images: ['https://nextjs.org/og.png'],
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
    },
  };
}
const CarDetail = () => {
  return <div className="py-32 padding-x max-width">car detail page</div>;
};

export default CarDetail;
