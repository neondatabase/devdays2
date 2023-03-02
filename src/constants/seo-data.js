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
    imagePath: '/images/social-previews.jpg',
    preloadAssets: ['/images/elephant-defuse.jpg', '/images/elephant-depth.jpg'],
  },
  ticket({ name }) {
    return {
      title: `${name}'s ticket for Neon Developer Days - Neon`,
      description: `Join ${name} virtually at Developer Days on March 28th to learn about Neon and how to build better with Serverless Postgres`,
      preloadAssets: [
        '/images/elephant-1.png',
        '/images/elephant-2.png',
        '/images/elephant-3.png',
        '/images/elephant-4.png',
      ],
    };
  },
};
