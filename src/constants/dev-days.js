import alexBlokh from 'images/agenda/alex-blokh.png';
import alexRuheni from 'images/agenda/alex-ruheni.png';
import anastasiaIubennikova from 'images/agenda/anastasia-iubennikova.png';
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
    company: 'Neon',
    speaker: { name: 'George MacKerron', role: 'Typescript Developer', avatar: georgeMacKerron },
  },
  {
    event: 'Optimizing vector search shouldn’t be this hard',
    company: 'Neon',
    speaker: { name: 'Raouf Chebri', role: 'Developer Advocate', avatar: raoufChebri },
  },
  {
    event: 'Custom extensions support',
    company: 'Neon',
    speaker: {
      name: 'Anastasia Iubennikova',
      role: 'Software Engineer',
      avatar: anastasiaIubennikova,
    },
  },
  {
    event: 'Revolutionizing business intelligence',
    company: 'Appsmith',
    speaker: {
      name: 'Kevin Blanco',
      role: 'Senior DevRel Advocate',
      avatar: kevinBlanco,
      bio: 'Senior DevRel Advocate 🥑 at Appsmith - Google Developer Expert in GCP & Google Cloud Certified Engineer - Tech Director - Certified Davinci Resolve Colorist - Private Pilot - International Speaker',
      xUrl: 'https://twitter.com/kevinblanco',
      linkedinUrl: 'https://www.linkedin.com/in/kevinblanco/',
      githubUrl: 'https://github.com',
    },
  },
  {
    event: 'Development Workflows with Neon and Hasura',
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
    company: 'Grafbase',
    speaker: {
      name: 'Jamie Barton',
      role: 'DevRel Engineer',
      avatar: jamieBarton,
      bio: "Around since the days of dial-up models and Flash websites. Despite my age (in tech years, at least), I'm always working with the latest tools like React and GraphQL to build functional web apps.",
    },
  },
  {
    event: 'Building internal apps with AI and Neon',
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
    speaker: { name: 'Alex Blokh', role: 'Founder', avatar: alexBlokh },
  },
  {
    event: "Prisma & Neon's Serverless driver on the Edge",
    company: 'Prisma',
    speaker: {
      name: 'Alex Ruheni',
      role: 'Developer Advocate',
      avatar: alexRuheni,
      bio: 'Alex is a Developer Advocate at Prisma, working to make databases easy and fun. He loves learning and teaching other developers.',
    },
  },
  {
    event: 'Fullstack Preview Environments w/ Neon and Qovery',
    company: 'Qovery',
    speaker: {
      name: 'Romaric Philogene',
      role: 'CEO and Co-Founder',
      avatar: romaricPhilogene,
      bio: 'Romaric has 10+ years of experience in R&D. From the Ad-Tech to the financial industry, he has deep expertise in highly-reliable and performant systems.',
    },
  },
  {
    event: "Accelerating Neon with PolyScale's DDN",
    company: 'PolyScale.ai',
    speaker: {
      name: 'Sam Aybar',
      role: 'Developer Advocate',
      avatar: samAybar,
      bio: 'Sam leads Developer Advocacy at PolyScale.ai where he helps customers scale and accelerate databases globally. Sam joined PolyScale in 2022. Previously he worked at BlazeMeter, Runscope and DataSift.',
    },
  },
  {
    event: "Don't let bad data block you",
    company: 'Snaplet',
    speaker: {
      name: 'Peter Pistorius',
      role: 'Founder',
      avatar: peterPistorius,
      bio: 'Peter is a lifelong product developer obsessed with improving user-experience. Before building Snaplet he co-created RedwoodJS.',
    },
  },
  {
    event: 'Database protocols weren’t designed for serverless',
    company: 'Cloudflare',
    speaker: {
      name: 'Matt Silverlock',
      role: 'Director of Product',
      avatar: mattSilverlock,
      bio: 'Matt is the product lead for developer databases & messaging at Cloudflare — and is a long-time open-source contributor, including co-maintainer of the Gorilla Toolkit in Go & various HTTP projects.',
    },
  },
  {
    event: 'Using Natural Language to Query Postgres',
    company: 'LangChain.js',
    speaker: {
      name: 'Jacob Lee',
      role: 'Maintainer',
      avatar: jacobLee,
      bio: 'Passionate about bringing the power of LLMs to a wider audience!',
    },
  },
];

export { DEV_DAYS_STAGE_VIDEO, DEV_DAYS_AGENDA };
