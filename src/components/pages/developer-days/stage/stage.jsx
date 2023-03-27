'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import Button from 'components/shared/button';
import TwitterShareButton from 'components/shared/social-share/twitter-share-button';
import { DEV_DAYS_AGENDA, DEV_DAYS_STAGE_VIDEO } from 'constants/dev-days';
import ArrowIcon from 'icons/arrow-left.inline.svg';

const Stage = () => {
  const [videoSource, setVideoSource] = useState(DEV_DAYS_STAGE_VIDEO);

  return (
    <>
      <div className="flex flex-col bg-live-video">
        <h1 className="sr-only">Neon Developer Days Live translation</h1>
        <iframe
          className="grow"
          allow="autoplay; picture-in-picture"
          allowFullScreen=""
          src={videoSource}
          title="Neon Live"
          width="100%"
        />
        <div className="flex h-20 items-center justify-between bg-black px-8 py-10 lg:h-14 lg:px-11 lg:py-2 md:h-12 md:py-0 md:px-8 sm:h-10 sm:px-4">
          <h2 className="ml-6 text-[28px] font-semibold leading-none tracking-tighter text-white lg:ml-0 md:text-2xl">
            Neon Live
          </h2>
          <TwitterShareButton
            className="!gap-0 !px-0 !text-sm !font-light tracking-[-0.02em]"
            url={`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/stage`}
            shareText="Go to @neondatabase Developer Days!"
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
            const { time, title, speaker, speakerImage, speakerBackground, blogPostUrl, url } =
              item;

            return (
              <li key={index}>
                <span className="text-sm font-light leading-snug tracking-[0.04em] text-gray-5">
                  {time}
                </span>
                <div
                  className={clsx(
                    'mt-2 rounded-[6px] border border-gray-10 py-3 px-4 transition-colors duration-200',
                    url ? 'hover:cursor-pointer hover:border-[#797D86]' : 'hover:cursor-default'
                  )}
                  role="button"
                  tabIndex={0}
                  onClick={() => (url ? setVideoSource(url) : false)}
                  onKeyDown={() => (url ? setVideoSource(url) : false)}
                >
                  <h3 className="text-base font-medium leading-[1.25] tracking-tighter text-white">
                    {title}
                  </h3>
                  {blogPostUrl && (
                    <Button
                      className="!font-mono !font-medium opacity-80 ![word-spacing:0]"
                      size="sm"
                      theme="text"
                      href={blogPostUrl}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={0}
                    >
                      Read the post
                      <ArrowIcon className="ml-1 h-[8px] rotate-180" aria-hidden />
                    </Button>
                  )}
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
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Stage;
