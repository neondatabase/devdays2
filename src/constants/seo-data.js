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
    title: 'Developer Days Agenda - Neon',
    description:
      'Join us at Developer Days virtually on November 2nd to learn about Neon and how to build better with Serverless Postgres.',
    pathname: '/agenda',
  },
  stage: {
    title: 'Neon Developer Days Stage — Neon',
    description:
      'Join us at Developer Days virtually on November 2nd to learn about Neon and how to build better with Serverless Postgres.',
    pathname: '/stage',
  },
  developerDays2: {
    title: 'Neon Developer Days — Neon',
    description:
      'Join us at Developer Days virtually on November 2nd to learn about Neon and how to build better with Serverless Postgres.',
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
