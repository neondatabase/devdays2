'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { TwitterShareButton } from 'react-share';

import Button from 'components/shared/button';
import useCopyToClipboard from 'hooks/use-copy-to-clipboard';
import CopyIcon from 'icons/copy.inline.svg';
import TwitterIcon from 'icons/twitter-icon.inline.svg';

const message = 'Just got my ticket to @neondatabase Developer Days. Claim yours!';

const SocialShare = ({ className = null, url }) => {
  const { isCopied, handleCopy } = useCopyToClipboard(3000);

  return (
    <div
      className={clsx(
        'pointer-events-none relative z-50 flex items-center xl:justify-center',
        className
      )}
    >
      <div className="pointer-events-auto flex gap-6 lg:gap-3.5">
        <TwitterShareButton url={url} title={message}>
          <div className="social-share relative flex items-center gap-4 py-[18px] px-6 pr-7 shadow-social transition duration-200 lg:px-8 xs:py-2 xs:px-3">
            <TwitterIcon className="h-[26px]" />
            <p className="font-sans text-xl font-medium leading-none tracking-[-0.02em] text-white">
              Twitter
            </p>
          </div>
        </TwitterShareButton>
        <Button
          className={clsx(
            'social-share relative flex items-center gap-4 py-[18px] px-6 pr-7 shadow-social transition duration-200 lg:px-8 xs:py-2 xs:px-3',
            isCopied && 'pointer-events-none'
          )}
          type="button"
          disabled={isCopied}
          size="sm"
          theme="code-copy"
          onClick={() => handleCopy(url)}
        >
          <CopyIcon className="h-[26px]" aria-hidden />
          <p className="font-sans text-xl font-medium leading-none tracking-[-0.02em] text-white">
            {isCopied ? 'Copied!' : 'Copy link'}
          </p>
        </Button>
      </div>
      <h2 className="ml-6 shrink-0 font-sans text-sm font-light leading-[1.375] tracking-[0.04em] text-gray-5 2xl:hidden">
        Share with <br /> your friends
      </h2>
    </div>
  );
};

SocialShare.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default SocialShare;
