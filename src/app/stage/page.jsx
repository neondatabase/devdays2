import clsx from 'clsx';
import Image from 'next/image';

import Layout from 'components/shared/layout';
import TwitterShareButton from 'components/shared/social-share/twitter-share-button';
import { DEV_DAYS_AGENDA, DEV_DAYS_STAGE_SRC } from 'constants/dev-days';

const StagePage = () => (
  <Layout isFooterShow={false} isHeaderWithBorder>
    <div className="relative grid flex-grow grid-cols-[1fr_320px]">
      <div className="flex flex-col bg-live-video">
        <h1 className="sr-only">Neon Developer Days Live translation</h1>
        <iframe
          className="grow"
          allow="autoplay; picture-in-picture"
          allowFullScreen=""
          src={DEV_DAYS_STAGE_SRC}
          title="Neon Live"
          width="100%"
          height="100%"
        />
        <div className="flex h-20 items-center justify-between bg-black px-8 py-10">
          <h2 className="ml-6 text-[28px] font-semibold leading-none tracking-tighter text-white">
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
      <div className="relative max-h-[calc(100vh-71px)] overflow-y-auto bg-gray-0 px-4 py-5">
        <h2 className="text-2xl font-medium leading-dense tracking-tighter text-white lg:text-xl">
          Schedule
        </h2>
        <ul className="mt-5 flex flex-col gap-5">
          {DEV_DAYS_AGENDA.map((item, index) => {
            const { title, author, authorImageSrc, authorColor, time } = item;

            return (
              <li key={index} className="">
                <span className="text-sm font-light leading-snug tracking-[0.04em] text-gray-5">
                  {time}
                </span>
                <div className="mt-2 rounded-[6px] border border-gray-10 py-3 px-4 transition-colors duration-200 hover:cursor-pointer hover:border-[#797D86]">
                  <h3 className="text-base font-medium leading-[1.25] tracking-tighter text-white">
                    {title}
                  </h3>
                  <div className="mt-3 flex items-center">
                    <div
                      className={clsx('h-7 w-7 shrink-0 rounded-full', {
                        'bg-[#F0F075]': authorColor === 'yellow',
                        'bg-[#ADE0EB]': authorColor === 'blue',
                        'bg-[#FFCCE6]': authorColor === 'pink',
                      })}
                    >
                      {authorImageSrc && (
                        <Image
                          width={28}
                          height={28}
                          quality={100}
                          src={authorImageSrc}
                          alt="Speaker photo"
                        />
                      )}
                    </div>
                    <p className="ml-2 font-mono text-sm font-light leading-[1.25] tracking-tight text-gray-5">
                      {author}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </Layout>
);

export default StagePage;
