export const DEFAULT_IMAGE_PATH = '/images/social-previews/developer-days.jpg';

export default {
  404: {
    title: 'Page Not Found — Neon',
  },
  '404-ticket': {
    title: 'Ticket Not Found - Neon',
    imagePath: '/images/social-previews/no-name-ticket.jpg',
  },
  agenda: {
    title: 'Neon Developer Days Agenda - Neon',
    description:
      'Join us at 10:00 AM PT, November 2nd for presentations about Postgres, scalability, AI, and using Neon with modern developer tools.',
    pathname: '/agenda',
  },
  stage: {
    title: 'Neon Developer Days Stage — Neon',
    description:
      'Join us at 10:00 AM PT, November 2nd for presentations about Postgres, scalability, AI, and using Neon with modern developer tools.',
    pathname: '/stage',
  },
  developerDays2: {
    title: 'Neon Developer Days — Neon',
    description:
      'Join us at 10:00 AM PT, November 2nd for presentations about Postgres, scalability, AI, and using Neon with modern developer tools.',
    pathname: '',
  },
  generateTicket: {
    title: 'Grab the ticket for Neon Developer Days',
    description:
      "Generate a unique ticket image with your GitHub profile and participate in Neon's right after the conference.",
    pathname: '/generate-ticket',
  },
  ticket({ name, login: githubHandle }) {
    const userName = name || githubHandle;

    return {
      title: `${userName}'s ticket for Neon Developer Days - Neon`,
      description: `Join ${userName} virtually at Developer Days on November 2nd to learn about Neon and how to build better with Serverless Postgres`,
    };
  },
};
