import alexBlokh from 'images/agenda/alex-blokh.png';
import alexRuheni from 'images/agenda/alex-ruheni.png';
import anastasiaIubennikova from 'images/agenda/anastasia-iubennikova.png';
import edouardBonlieu from 'images/agenda/edouard-bonlieu.png';
import georgeDu from 'images/agenda/george-du.png';
import georgeMacKerron from 'images/agenda/george-mackerron.png';
import jacobLee from 'images/agenda/jacob-lee.png';
import jamieBarton from 'images/agenda/jamie-barton.png';
import kevinBlanco from 'images/agenda/kevin-blanco.png';
import mattSilverlock from 'images/agenda/matt-silverlock.png';
import ojas from 'images/agenda/ojas.png';
import peterPistorius from 'images/agenda/peter-pistorius.png';
import raoufChebri from 'images/agenda/raouf-chebri.png';
import romaricPhilogene from 'images/agenda/romaric-philogene.png';
import samAybar from 'images/agenda/sam-aybar.png';
import stanGirard from 'images/agenda/stan-girard.png';
import zachZaro from 'images/agenda/zach-zaro.png';

// TODO: before merge change video id to actual
const DEV_DAYS_STAGE_VIDEO =
  'https://www.youtube.com/embed/A74KeYh19jE?autoplay=1&mute=1&rel=0&start=';

// TODO: change timestamps to actual
const DEV_DAYS_AGENDA = [
  {
    event: 'Learn about the latest new features and improvements we released',
    company: 'Neon',
    speaker: { name: 'Keynote' },
  },
  {
    event: 'How to use NPM packages outside of Node',
    description:
      'NPM is bursting with useful libraries. But many of them assume they’re running in Node.js, and throw errors elsewhere. Based on his experience developing Neon’s serverless driver, George shows how you can run NPM packages in other places — such as Vercel Edge Functions, or even web browsers — using a couple of simple techniques.',
    company: 'Neon',
    speaker: {
      name: 'George MacKerron',
      role: 'Typescript Developer',
      avatar: georgeMacKerron,
      bio: "George is (amongst other things) a full-stack developer and technical writer specialising in TypeScript and Postgres. He maintains the Zapatos library and Neon's serverless driver. Recent side projects include a proof-of-concept TypeScript TLS client.",
      xUrl: 'https://twitter.com/jawj',
      linkedinUrl: 'https://www.linkedin.com/in/georgemackerron/',
      githubUrl: 'https://github.com/jawj/',
    },
  },
  {
    event: 'Scenario analysis with database branching',
    description:
      'Database branching allows you to create instant copy-on-write clones of your database that could be modified without compromising your data. One challenge in scenario analysis exploring multiple states of your database in parallel. In this talk, we will explore how to leverage Neon’s API and database branching to parallelize scenario analysis.',
    company: 'Neon',
    speaker: {
      name: 'Raouf Chebri',
      role: 'Developer Advocate',
      avatar: raoufChebri,
      bio: 'Raouf Chebri is a Software Developer Engineer and an MBA with experience in backend and frontend development and a growing interest for Machine Learning, Deep Learning and Computer Vision.',
      xUrl: 'https://twitter.com/raoufdevrel',
      linkedinUrl: 'https://www.linkedin.com/in/raoufchebri/',
      githubUrl: 'https://github.com/raoufchebri',
    },
  },
  {
    event: 'Custom extensions support',
    description: `Supporting extensions into a cloud-based PostgreSQL service is a non-trivial task and poses a series of challenges.
    In this talk we explain how we tackled these challenges with our latest Neon feature, “custom extensions support”.`,
    company: 'Neon',
    speaker: {
      name: 'Anastasia Lubennikova',
      role: 'Software Engineer',
      avatar: anastasiaIubennikova,
      bio: 'Anastasia is a software engineer at Neon, PostgreSQL Major Contributor, and educator.',
      githubUrl: 'https://github.com/lubennikovaav',
      linkedinUrl: 'https://www.linkedin.com/in/anastasia-lubennikova-8a2295a0/',
    },
  },
  {
    event: 'Revolutionizing business intelligence using Appsmith and Neon',
    description:
      "In this comprehensive talk, we will delve into how Appsmith, in collaboration with Neon's serverless PostgreSQL modern platform, can transform the way businesses harness the power of data and AI-driven insights.",
    company: 'Appsmith',
    speaker: {
      name: 'Kevin Blanco',
      role: 'Senior DevRel Advocate',
      avatar: kevinBlanco,
      bio: 'Senior DevRel Advocate 🥑 at Appsmith - Google Developer Expert in GCP & Google Cloud Certified Engineer - Tech Director - Certified Davinci Resolve Colorist - Private Pilot - International Speaker',
      xUrl: 'https://twitter.com/KevinBlancoZ',
      linkedinUrl: 'https://www.linkedin.com/in/kevinblanco',
      githubUrl: 'https://github.com/kevinblanco',
    },
  },
  {
    event: 'Development Workflows with Neon and Hasura',
    description:
      "What if you could get a new database and API on every feature branch, radically redefining the state of stateless development? Dive into the realm of dynamic database provisioning with Neon and GraphQL API creation with Hasura's Data Delivery Network",
    company: 'Hasura',
    speaker: {
      name: 'Ojas',
      role: 'Software Engineer',
      avatar: ojas,
      bio: "I'm Ojas, a skilled polyglot software engineer working at Hasura who has a strong passion for building innovative solutions and tinkering with various technologies in software development.",
    },
  },
  {
    event: 'Cache anything, everywhere',
    description:
      'Discover how companies utilize edge computing to cache and extend data from any API using GraphQL, enhancing app performance and reliability.',
    company: 'Grafbase',
    speaker: {
      name: 'Jamie Barton',
      role: 'DevRel Engineer',
      avatar: jamieBarton,
      bio: "Around since the days of dial-up models and Flash websites. Despite my age (in tech years, at least), I'm always working with the latest tools like React and GraphQL to build functional web apps.",
      xUrl: 'https://x.com/notrab',
    },
  },
  {
    event: 'Building internal apps with AI and Neon',
    description:
      'We build a Neon-powered app on Airplane that leverages pgvector, and discuss how AI is used to accelerate the building process.',
    company: 'Airplane',
    speaker: {
      name: 'George Du',
      role: 'Software Engineer',
      avatar: georgeDu,
      bio: 'Engineering lead for Airplane Postgres',
    },
  },
  {
    event: 'State of Drizzle 2023',
    company: 'Drizzle',
    description:
      "I will talk a bit about what Drizzle is, where it's at right now and plans for the future.",
    speaker: {
      name: 'Alex Blokh',
      role: 'Founder',
      avatar: alexBlokh,
      bio: 'I’ve been a software engineer for the past 12 years.',
      xUrl: ' https://x.com/_alexblokh',
    },
  },
  {
    event: "Prisma & Neon's Serverless driver on the Edge",
    description:
      "Edge serverless runtimes provide great power and introduce new challenges working with databases. In this talk, you'll learn how to use Prisma & Neon's serverless database driver on the edge to make your apps edge-compatible without breaking a sweat.",
    company: 'Prisma',
    speaker: {
      name: 'Alex Ruheni',
      role: 'Developer Advocate',
      avatar: alexRuheni,
      bio: 'Alex is a Developer Advocate at Prisma, working to make databases easy and fun. He loves learning and teaching other developers.',
      xUrl: 'https://x.com/ruheni_alex',
      githubUrl: 'https://github.com/ruheni',
    },
  },
  {
    event: 'Fullstack Preview Environments with Neon and Qovery',
    description: 'Learn how to create a Neon branch for every preview deployment on Qovery.',
    company: 'Qovery',
    speaker: {
      name: 'Romaric Philogene',
      role: 'CEO and Co-Founder',
      avatar: romaricPhilogene,
      bio: 'Romaric has 10+ years of experience in R&D. From the Ad-Tech to the financial industry, he has deep expertise in highly-reliable and performant systems.',
      linkedinUrl: 'https://www.linkedin.com/in/romaricphilogene/',
    },
  },
  {
    event: "Accelerating Neon with PolyScale's DDN",
    description:
      'Learn how PolyScale’s high performance Data Delivery Network (DDN) can accelerate your Neon databases. See how smart caching can be implemented in minutes to improve query performance, lower latency and make cached data available at the edge.',
    company: 'PolyScale',
    speaker: {
      name: 'Sam Aybar',
      role: 'Developer Advocate',
      avatar: samAybar,
      bio: 'Sam leads Developer Advocacy at PolyScale.ai where he helps customers scale and accelerate databases globally. Sam joined PolyScale in 2022. Previously he worked at BlazeMeter, Runscope and DataSift.',
      xUrl: 'https://twitter.com/saybar',
      linkedinUrl: 'https://www.linkedin.com/in/samaybar/',
    },
  },
  {
    event: "Don't let bad data block you",
    description:
      "In this talk I'll explain how bad data can make you build inaccurate features and make bug fixing terribly slow, and then I'll show you the alternatives!",
    company: 'Snaplet',
    speaker: {
      name: 'Peter Pistorius',
      role: 'Founder',
      avatar: peterPistorius,
      bio: 'Peter is a lifelong product developer obsessed with improving user-experience. Before building Snaplet he co-created RedwoodJS.',
      xUrl: 'https://x.com/appfactory',
    },
  },
  {
    event: 'Database protocols weren’t designed for serverless',
    description:
      'A dive into how database connection protocols & threading models work, why they don’t gel with serverless envs, and how we can work around their constraints (HTTP, WS, new pooling approaches)',
    company: 'Cloudflare',
    speaker: {
      name: 'Matt Silverlock',
      role: 'Director of Product',
      avatar: mattSilverlock,
      bio: 'Matt is the product lead for developer databases & messaging at Cloudflare — and is a long-time open-source contributor, including co-maintainer of the Gorilla Toolkit in Go & various HTTP projects.',
      xUrl: 'https://twitter.com/elithrar',
    },
  },
  {
    event: 'Using Natural Language to Query Postgres',
    description:
      "LLMs are good at translation, and this applies to English to SQL too! In this talk, I'll show off some ways you can analyze data in your existing analytics databases using natural language.",
    company: 'LangChain',
    speaker: {
      name: 'Jacob Lee',
      role: 'Maintainer',
      avatar: jacobLee,
      bio: 'Passionate about bringing the power of LLMs to a wider audience!',
      xUrl: 'https://x.com/hacubu',
    },
  },
  {
    event: 'Deploy FullStack Apps Globally with Koyeb and Neon',
    description:
      'During this lightning talk, we will walk through the different steps required to deploy a full stack app at the edge using Koyeb’s high-performance serverless platform and Neon.',
    company: 'Koyeb',
    speaker: {
      name: 'Edouard Bonlieu',
      role: 'Co-Founder',
      avatar: edouardBonlieu,
      bio: 'Edouard has been building cloud products for the last 10 years. Today focused on the serverless space, Edouard’s mission is to allow every developer to push code to production, everywhere, in minutes.',
      xUrl: 'https://twitter.com/edouardb_',
      linkedinUrl: 'https://www.linkedin.com/in/ebonlieu',
    },
  },
  {
    event: 'The Future of Development Environments',
    description:
      'An overview of environments across the development lifecycle and how the development environment is evolving moving forward.',
    company: 'Coherence',
    speaker: {
      name: 'Zach Zaro',
      role: 'CEO and Cofounder',
      avatar: zachZaro,
      bio: 'Zach is the CEO and cofounder of Coherence. Previously Zach was the CTO at Quip and the founding CTO at Maven clinic. Coherence is the tool he wished he could have bought.',
      xUrl: 'https://twitter.com/ZacharyZaro',
    },
  },
  {
    event: 'How to wrongly store 2M vectors in pgvector',
    description: 'Lets dive into the errors that were made on Quivr that cost us money and time.',
    company: 'Quivr',
    speaker: {
      name: 'Stan Girard',
      role: 'Creator',
      avatar: stanGirard,
      bio: 'Stan Girard is the creator of Quivr, an open-source Generative AI personal assistant, which gained remarkable traction in the tech community (20k+ stars on Github in 4 months).',
      xUrl: 'https://twitter.com/_StanGirard',
      linkedinUrl: 'https://www.linkedin.com/in/stanislas-girard/',
      githubUrl: 'https://github.com/StanGirard',
    },
  },
];

export { DEV_DAYS_STAGE_VIDEO, DEV_DAYS_AGENDA };
