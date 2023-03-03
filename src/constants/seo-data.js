export default {
  404: {
    title: 'Page Not Found — Neon',
  },
  '404-ticket': {
    title: 'Ticket Not Found - Neon',
    imagePath: '/images/social-previews/no-name-ticket.jpg',
  },
  developerDays2: {
    title: 'Neon Developer Days — Neon',
    description:
      'Join us at Developer Days virtually on March 28th to learn about Neon and how to build better with Serverless Postgres.',
    imagePath: '/images/social-previews/developer-days.jpg',
    preloadAssets: [
      '/images/developer-days/elephant-defuse.jpg',
      '/images/developer-days/elephant-depth.jpg',
    ],
  },
  ticket({ name }) {
    return {
      title: `${name}'s ticket for Neon Developer Days - Neon`,
      description: `Join ${name} virtually at Developer Days on March 28th to learn about Neon and how to build better with Serverless Postgres`,
      preloadAssets: [
        '/images/developer-days/elephant-1-large.png',
        '/images/developer-days/elephant-1-medium.png',
        '/images/developer-days/elephant-1-small.png',
        '/images/developer-days/elephant-2-large.png',
        '/images/developer-days/elephant-2-medium.png',
        '/images/developer-days/elephant-2-small.png',
        '/images/developer-days/elephant-3-large.png',
        '/images/developer-days/elephant-3-medium.png',
        '/images/developer-days/elephant-3-small.png',
        '/images/developer-days/elephant-4-large.png',
        '/images/developer-days/elephant-4-medium.png',
        '/images/developer-days/elephant-4-small.png',
      ],
    };
  },
};
