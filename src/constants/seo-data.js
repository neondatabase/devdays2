export default {
  404: {
    title: 'Page Not Found — Neon',
  },
  developerDays2: {
    title: 'Neon Developer Days — Neon',
    description:
      'Join us at Developer Days virtually on March 28th to learn about Neon and how to build better with Serverless Postgres.',
    imagePath: '/images/social-previews/developer-days-2.jpg',
    preloadAssets: [
      '/images/developer-days-2/elephant-defuse.jpg',
      '/images/developer-days-2/elephant-depth.jpg',
    ],
  },
  ticket({ name }) {
    return {
      title: `${name}'s ticket for Neon Developer Days - Neon`,
      description: `Join ${name} virtually at Developer Days on March 28th to learn about Neon and how to build better with Serverless Postgres`,
      preloadAssets: [
        '/_next/image?url=/images/developer-days-2/ticket-variant-1.png&w=1920&q=75',
        '/_next/image?url=/images/developer-days-2/ticket-variant-2.png&w=1920&q=75',
        '/_next/image?url=/images/developer-days-2/ticket-variant-3.png&w=1920&q=75',
        '/_next/image?url=/images/developer-days-2/ticket-variant-4.png&w=1920&q=75',
        '/_next/image?url=/images/developer-days-2/ticket-variant-1-mobile.png&w=1920&q=75',
        '/_next/image?url=/images/developer-days-2/ticket-variant-2-mobile.png&w=1920&q=75',
        '/_next/image?url=/images/developer-days-2/ticket-variant-3-mobile.png&w=1920&q=75',
        '/_next/image?url=/images/developer-days-2/ticket-variant-4-mobile.png&w=1920&q=75',
      ],
    };
  },
};
