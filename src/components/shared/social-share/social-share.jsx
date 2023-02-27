'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { LinkedinShareButton, TwitterShareButton } from 'react-share';

import LinkedinIcon from 'icons/linkedin-icon.inline.svg';
import TwitterIcon from 'icons/twitter-icon.inline.svg';

const links = [
  {
    title: 'Twitter',
    icon: TwitterIcon,
    tag: TwitterShareButton,
  },
  {
    title: 'LinkedIn',
    icon: LinkedinIcon,
    tag: LinkedinShareButton,
  },
];

const SocialShare = ({ className = null, url }) => (
  <div className={clsx('flex items-center', className)}>
    <div className="flex gap-4">
      {links.map(({ icon: Icon, tag: Tag, title }, index) => (
        <Tag url={url} key={index}>
          <div className="social-share relative flex gap-3 py-4 px-7 shadow-social transition duration-200 xs:py-2 xs:px-3">
            <Icon className="h-[27px]" />
            <p className="font-sans text-xl font-medium text-white">{title}</p>
          </div>
        </Tag>
      ))}
    </div>
    <h2 className="ml-6 shrink-0 font-sans text-sm font-light text-white xl:hidden">
      Share with <br /> your friends
    </h2>
  </div>
);

SocialShare.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default SocialShare;
