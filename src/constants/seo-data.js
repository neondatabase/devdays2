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
    preload: [
      { href: '/animations/input-lines.riv', as: 'fetch' },
      { href: '/images/developer-days/elephant-defuse.jpg', as: 'image' },
      { href: '/images/developer-days/elephant-depth.jpg', as: 'image' },
    ],
  },
  generateTicket: {
    title: 'Grab the ticket for Neon Developer Days',
    description:
      "Generate a unique ticket image with your GitHub profile and participate in Neon's right after the conference.",
    preload: [
      { href: '/animations/input-lines.riv', as: 'fetch' },
      { href: '/images/developer-days/elephant-1-large.png', as: 'image' },
      { href: '/images/developer-days/elephant-1-medium.png', as: 'image' },
      { href: '/images/developer-days/elephant-1-small.png', as: 'image' },
      { href: '/images/developer-days/elephant-2-large.png', as: 'image' },
      { href: '/images/developer-days/elephant-2-medium.png', as: 'image' },
      { href: '/images/developer-days/elephant-2-small.png', as: 'image' },
      { href: '/images/developer-days/elephant-3-large.png', as: 'image' },
      { href: '/images/developer-days/elephant-3-medium.png', as: 'image' },
      { href: '/images/developer-days/elephant-3-small.png', as: 'image' },
      { href: '/images/developer-days/elephant-4-large.png', as: 'image' },
      { href: '/images/developer-days/elephant-4-medium.png', as: 'image' },
      { href: '/images/developer-days/elephant-4-small.png', as: 'image' },
    ],
  },
  ticket({ name }) {
    return {
      title: `${name}'s ticket for Neon Developer Days - Neon`,
      description: `Join ${name} virtually at Developer Days on March 28th to learn about Neon and how to build better with Serverless Postgres`,
    };
  },
};
