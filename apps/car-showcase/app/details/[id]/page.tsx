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
  console.log('id', params.id);
  return {
    title: `detail of car ${params.id}`,
    description: 'car detail page',
  };
}
const CarDetail = () => {
  return <div className="py-32 padding-x max-width">car detail page</div>;
};

export default CarDetail;
