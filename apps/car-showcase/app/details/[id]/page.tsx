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
  };
}
const CarDetail = () => {
  return <div className="py-32 padding-x max-width">car detail page</div>;
};

export default CarDetail;
