import Link from 'next/link';

import ElephantWebglAnimation from 'components/shared/elephant-webgl-animation';
import GradientLabel from 'components/shared/gradient-label';
import ArrowLeftIcon from 'icons/arrow-left.inline.svg';

const Hero = () => (
  <section className="relative mx-auto pt-10 grid max-w-[1760px] flex-grow grid-cols-12 gap-10 2xl:px-14 2xl:pb-10 xl:pb-0 xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:px-8 lg:py-9 md:px-4 md:py-4">
    <div className="relative z-10 col-span-4 col-start-2 self-center 2xl:col-start-1 2xl:col-span-5 xl:col-span-full xl:self-end xl:text-center max-w-[472px] xl:max-w-2xl xl:mx-auto">
      <GradientLabel className="inline-block" theme="green">
        November 2nd
      </GradientLabel>
      <h1 className="text-6xl leading-none tracking-tight mt-3 text-white font-medium lg:text-[58px] md:text-[52px] sm:text-5xl">
        Join Neon Live and listen to our speakers
      </h1>
      <p className="mt-7 text-white font-light text-xl leading-snug tracking-[-0.02em] 2xl:text-lg lg:mt-4 lg:text-base">
        Join us at{' '}
        <time className="text-primary-4" dateTime="2023-11-02T10:00">
          10:00 AM PT, November 2nd
        </time>{' '}
        for presentations about Postgres, scalability, AI, and using Neon with modern developer
        tools.
      </p>
      <Link
        className="inline-flex items-end text-primary-4 mt-[18px] text-lg leading-none tracking-[-0.02em] underline decoration-primary-4/40 underline-offset-[8px] hover:decoration-primary-4 transition-colors duration-200 lg:text-base"
        href="/"
      >
        <ArrowLeftIcon className="mr-2.5 w-[19px] h-auto" />
        <span>Back to the registration</span>
      </Link>
    </div>
    <ElephantWebglAnimation />
  </section>
);

export default Hero;
