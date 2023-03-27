// TODO change video url before merge
const DEV_DAYS_STAGE_VIDEO =
  'https://www.youtube.com/embed/TvnIeE-SBl4?autoplay=1&amp;mute=1&amp;start=';

const DEV_DAYS_AGENDA = [
  {
    time: '6:00pm - 6:30pm',
    title: 'Keynote',
    speaker: 'Nikita Shamgunov',
    speakerBackground: 'yellow',
    speakerImage: '/images/developer-days/speakers/nikita-shamgunov-photo.png',
    blogPostUrl: '',
    timeStamp: '160',
  },
  {
    time: '6:35pm - 7:15pm',
    title: 'Deep dive into the Neon storage engine GetPage@LSN',
    speaker: 'Heikki Linnakangas',
    speakerBackground: 'blue',
    speakerImage: '/images/developer-days/speakers/heikki-linnakangas-photo.png',
    blogPostUrl: '',
    timeStamp: '190',
  },
  {
    time: '7:30pm - 8:00pm',
    title: 'Building an AI-powered ChatBot using Vercel, OpenAI, and Postgres',
    speaker: 'Raouf Chebri',
    speakerBackground: 'pink',
    speakerImage: '/images/developer-days/speakers/raouf-chebri-photo.png',
    blogPostUrl:
      'https://neon.tech/blog/building-an-ai-powered-chatbot-using-vercel-openai-and-postgres',
    timeStamp: '220',
  },
  {
    time: '8:05pm - 8:45pm',
    title: 'Scaling Serverless Postgre: How we implement Autoscaling',
    speaker: 'Em Sharnoff',
    speakerBackground: 'yellow',
    speakerImage: '/images/developer-days/speakers/em-sharnoff-photo.png',
    blogPostUrl: '',
    timeStamp: '260',
  },
  {
    time: '9:00pm - 9:30pm',
    title: 'Optimizing Performance in a Serverless PostgreSQL Database',
    speaker: 'Konstantin Knizhnik & Matthias Van De Meent',
    speakerBackground: 'blue',
    speakerImage: '/images/developer-days/speakers/konstantin-knizhnik-photo.png',
    blogPostUrl: '',
    timeStamp: '320',
  },
  {
    time: '9:35pm - 10:15pm',
    title: 'Understand your storage cost',
    speaker: 'Anastasia Lubennikova',
    speakerBackground: 'pink',
    speakerImage: '/images/developer-days/speakers/anastasia-lubennikova-photo.png',
    blogPostUrl: '',
    timeStamp: '380',
  },
  {
    time: '10:20pm - 11:00pm',
    title: 'Quicker serverless Postgres connections',
    speaker: 'George MacKerron',
    speakerBackground: 'yellow',
    speakerImage: '/images/developer-days/speakers/george-macKerron-photo.png',
    blogPostUrl: '',
    timeStamp: '510',
  },
  {
    time: '11:15pm - 12:00pm',
    title: 'Developer workflows with Vercel and GitHub Actions',
    speaker: 'Mahmoud Abdelwahab',
    speakerBackground: 'blue',
    speakerImage: '/images/developer-days/speakers/mahmoud-abdelwahab-photo.png',
    blogPostUrl: '',
    timeStamp: '660',
  },
];

export { DEV_DAYS_STAGE_VIDEO, DEV_DAYS_AGENDA };
