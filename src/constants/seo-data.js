export default {
  404: {
    title: 'Page Not Found — Neon',
  },
  '404-ticket': {
    title: 'Ticket Not Found - Neon',
    imagePath: '/developer-days/images/social-previews/no-name-ticket.jpg',
  },
  developerDays2: {
    title: 'Neon Developer Days — Neon',
    description:
      'Join us at Developer Days virtually on March 28th to learn about Neon and how to build better with Serverless Postgres.',
    imagePath: '/developer-days/images/social-previews/developer-days.jpg',
    preloadAssets: [
      '/developer-days/images/developer-days/elephant-defuse.jpg',
      '/developer-days/images/developer-days/elephant-depth.jpg',
    ],
  },
  ticket({ name }) {
    return {
      title: `${name}'s ticket for Neon Developer Days - Neon`,
      description: `Join ${name} virtually at Developer Days on March 28th to learn about Neon and how to build better with Serverless Postgres`,
      preloadAssets: [
        '/developer-days/images/developer-days/elephant-1.png',
        '/developer-days/images/developer-days/elephant-2.png',
        '/developer-days/images/developer-days/elephant-3.png',
        '/developer-days/images/developer-days/elephant-4.png',
      ],
    };
  },
};
