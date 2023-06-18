import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = 'http://localhost:4200/';

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    // {
    //  ..others
    // },
  ];
}
