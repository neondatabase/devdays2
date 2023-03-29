'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import Button from 'components/shared/button';
import TwitterShareButton from 'components/shared/social-share/twitter-share-button';
import { DEV_DAYS_AGENDA, DEV_DAYS_STAGE_VIDEO } from 'constants/dev-days';

const Stage = () => {
  const [videoSource, setVideoSource] = useState(DEV_DAYS_STAGE_VIDEO);

  return (
    <>
      <div className="flex flex-col bg-live-video">
        <h1 className="sr-only">Neon Developer Days Live translation</h1>
        <div className="relative flex grow items-center pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 h-full w-full"
            allow="autoplay; picture-in-picture; web-share"
            src={videoSource}
            title="Neon Live"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
        <div className="flex h-20 items-center justify-between bg-black px-8 py-10 lg:h-14 lg:px-11 lg:py-2 md:h-12 md:py-0 md:px-8 sm:h-10 sm:px-4">
          <h2 className="ml-6 text-[28px] font-semibold leading-none tracking-tighter text-white lg:ml-0 md:text-2xl xs:text-lg">
            Neon Live
          </h2>
          <TwitterShareButton
            className="!gap-0 !px-0 !text-sm !font-light tracking-[-0.02em]"
            url={`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/stage`}
            shareText="Watching @neondatabase Developer Days live! 🔥 Join at "
            iconSize="small"
          >
            Share your thoughts on Twitter
          </TwitterShareButton>
        </div>
      </div>
      <div className="relative max-h-[calc(100vh-71px)] overflow-y-auto bg-gray-0 px-4 py-6 xl:max-h-[calc(100vh-91px)] lg:max-h-none lg:px-11 md:px-8 sm:px-4">
        <h2 className="text-2xl font-semibold leading-dense tracking-tighter text-white md:text-xl">
          Schedule
        </h2>
        <ul className="mt-4 flex flex-col gap-5 md:gap-4">
          {DEV_DAYS_AGENDA.map((item, index) => {
            const {
              time,
              title,
              speaker,
              speakerImage,
              speakerBackground,
              blogPostUrl,
              timeStamp,
            } = item;

            return (
              <li key={index}>
                <div className="flex items-center">
                  <time
                    className="text-sm font-light leading-none tracking-[0.04em] text-gray-5"
                    dateTime={`2023-03-29T${time.slice(0, 5)}`}
                  >
                    {time}
                  </time>
                  {blogPostUrl && (
                    <Button
                      className="ml-auto !font-mono !font-medium opacity-80 ![word-spacing:0]"
                      size="sm"
                      theme="text"
                      href={blogPostUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read blog post
                    </Button>
                  )}
                </div>
                <button
                  className={clsx(
                    'mt-2 w-full rounded-[6px] border border-gray-10 py-3 px-4 text-left transition-colors duration-200',
                    timeStamp
                      ? 'hover:cursor-pointer hover:border-[#797D86]'
                      : 'hover:cursor-default'
                  )}
                  type="button"
                  onClick={() =>
                    timeStamp
                      ? setVideoSource(DEV_DAYS_STAGE_VIDEO.replace('&mute=1', '') + timeStamp)
                      : false
                  }
                >
                  <h3 className="text-base font-medium leading-[1.25] tracking-tighter text-white">
                    {title}
                  </h3>
                  <figure className="mt-3 flex items-center">
                    <span
                      className={clsx('h-7 w-7 shrink-0 rounded-full', {
                        'bg-[#F0F075]': speakerBackground === 'yellow',
                        'bg-[#ADE0EB]': speakerBackground === 'blue',
                        'bg-[#FFCCE6]': speakerBackground === 'pink',
                      })}
                    >
                      {speakerImage && (
                        <Image
                          width={28}
                          height={28}
                          quality={100}
                          src={speakerImage}
                          alt="Speaker photo"
                        />
                      )}
                    </span>
                    <figcaption className="ml-2 font-mono text-sm font-light leading-[1.25] tracking-tight text-gray-5">
                      {speaker}
                    </figcaption>
                  </figure>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Stage;
