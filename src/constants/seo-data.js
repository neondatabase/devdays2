export default {
  contactSales: {
    title: 'Contact Sales — Neon',
  },
  careers: {
    title: 'Careers — Neon',
    imagePath: '/images/social-previews/careers.jpg',
  },
  aboutUs: {
    title: 'About Us — Neon',
  },
  earlyAccess: {
    title: 'Get Early Access — Neon',
  },
  blog: {
    title: 'Our Blog — Neon',
  },
  blogPost: ({ title, description }) => ({
    title,
    description,
  }),
  static: ({ title }) => ({
    title,
  }),
  doc: ({ title, description }) => ({
    title: `${title} — Neon Docs`,
    description,
  }),
  releaseNotePost: ({ title }) => ({
    title: `${title} — Neon`,
  }),
  404: {
    title: 'Page Not Found — Neon',
  },
  developerDays1: {
    title: 'Neon Developer Days — Neon',
    description:
      'Join us virtually on December 6th, 7th, and 8th to learn about Neon and how to build better with Serverless Postgres.',
    imagePath: '/images/social-previews/developer-days-1.jpg',
  },
  developerDays2: {
    title: 'Neon Developer Days — Neon',
    description:
      'Join us virtually on March 22nd, 23rd, and 24th to learn about Neon and how to build better with Serverless Postgres.',
    imagePath: '/images/social-previews/developer-days-1.jpg',
    preloadAssets: [
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/432eecef-c63a-4099-88b5-6626549046f5/elephant-defuse.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230223T091134Z&X-Amz-Expires=86400&X-Amz-Signature=d369311f5e53c0a98c1ec8ebc80f52ca20a0a1bcb71a95262d622c52f49a8ae7&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22elephant-defuse.jpg%22&x-id=GetObject',
      'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/af00448b-936c-443e-a5e5-76af0fc9ebb4/elephant-depth.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230223T090723Z&X-Amz-Expires=86400&X-Amz-Signature=9eecff7a6db433c892a177939e0e2d6450627b6934feba0331dfc1624caea9aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22elephant-depth.jpg%22&x-id=GetObject',
    ],
  },
  branching: {
    title: 'Instant branching for Postgres — Neon',
    description:
      'Neon allows you to instantly branch your data the same way that you branch your code.',
    imagePath: '/images/social-previews/branching.jpg',
  },
  ticket({ name }) {
    return {
      title: `Join ${name} on Developer Days - Neon`,
      description: `${name} is about to participate in Developer Days Spring, why not join them?`,
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
