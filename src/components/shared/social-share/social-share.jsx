'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import useCopyToClipboard from 'hooks/use-copy-to-clipboard';
import CopyIcon from 'icons/copy.inline.svg';
import TwitterIcon from 'icons/twitter-icon.inline.svg';

const text = 'Just got my ticket to @neondatabase Developer Days. Claim yours!';

const objectToGetParams = (object) => {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);

  return params.length > 0 ? `?${params.join('&')}` : '';
};

const getBoxPositionOnWindowCenter = (width, height) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2,
});

const windowOpen = (url, { width, height, ...configRest }) => {
  const config = {
    width,
    height,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes',
    ...configRest,
  };

  return window.open(
    url,
    '',
    Object.keys(config)
      .map((key) => `${key}=${config[key]}`)
      .join(', ')
  );
};

const SocialShare = ({ className = null, url }) => {
  const { isCopied, handleCopy } = useCopyToClipboard(3000);

  const handleTwitterShare = (event) => {
    const link = `https://twitter.com/intent/tweet${objectToGetParams({
      url,
      text,
    })}`;

    const windowConfig = {
      width: 550,
      height: 400,
      ...getBoxPositionOnWindowCenter(550, 400),
    };

    event.preventDefault();

    windowOpen(link, windowConfig);
  };

  return (
    <div
      className={clsx(
        'pointer-events-none relative z-50 flex items-center xl:justify-center',
        className
      )}
    >
      <div className="pointer-events-auto flex gap-6 lg:gap-3.5">
        <Button
          className="social-share relative flex items-center gap-4 py-[18px] px-6 pr-7 shadow-social transition duration-200 lg:px-8 xs:py-2 xs:px-3"
          type="button"
          size="sm"
          theme="code-copy"
          onClick={handleTwitterShare}
        >
          <TwitterIcon className="h-[26px] shrink-0" />
          <p className="font-sans text-xl font-semibold leading-none tracking-[-0.02em] text-white">
            Twitter
          </p>
        </Button>
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
          <CopyIcon className="h-[26px] shrink-0" aria-hidden />
          <p className="min-w-[82px] font-sans text-xl font-semibold leading-none tracking-[-0.02em] text-white">
            {isCopied ? 'Copied!' : 'Copy link'}
          </p>
        </Button>
      </div>
      <h2 className="ml-6 shrink-0 font-sans text-sm leading-[1.375] tracking-[0.04em] text-gray-5 2xl:hidden">
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
