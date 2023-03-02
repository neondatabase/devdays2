'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { LinkedinShareButton, TwitterShareButton } from 'react-share';

import LinkedinIcon from 'icons/linkedin-icon.inline.svg';
import TwitterIcon from 'icons/twitter-icon.inline.svg';

const message = 'Just got my ticket to Developer Days. Claim yours!';

const SocialShare = ({ className = null, url }) => (
  <div className={clsx('pointer-events-none relative z-50 flex items-center', className)}>
    <div className="pointer-events-auto flex gap-6">
      <TwitterShareButton url={url} title={message}>
        <div className="social-share relative flex items-center gap-4 py-[18px] px-6 pr-7 shadow-social transition duration-200 xs:py-2 xs:px-3">
          <TwitterIcon className="h-[26px]" />
          <p className="font-sans text-xl font-medium leading-none tracking-[-0.02em] text-white">
            Twitter
          </p>
        </div>
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <div className="social-share relative flex items-center gap-4 py-[18px] px-6 pr-7 shadow-social transition duration-200 xs:py-2 xs:px-3">
          <LinkedinIcon className="h-[26px]" />
          <p className="font-sans text-xl font-medium leading-none tracking-[-0.02em] text-white">
            LinkedIn
          </p>
        </div>
      </LinkedinShareButton>
    </div>
    <h2 className="ml-6 shrink-0 font-sans text-sm font-light leading-[1.375] tracking-[0.04em] text-gray-5 xl:hidden">
      Share with <br /> your friends
    </h2>
  </div>
);

SocialShare.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default SocialShare;
