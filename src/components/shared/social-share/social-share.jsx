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
  <div className={clsx('mt-12 flex items-center', className)}>
    <div className="flex space-x-4">
      {links.map(({ icon: Icon, tag: Tag, title }, index) => (
        <Tag url={url} key={index}>
          <div className="relative flex space-x-3 rounded-xl border border-white py-4 px-7 shadow-social transition-transform duration-200 hover:-translate-y-1">
            <Icon className="h-[27px]" />
            <p className="font-sans text-xl font-medium text-white">{title}</p>
          </div>
        </Tag>
      ))}
    </div>
    <h2 className="ml-6 font-sans text-sm font-light text-white">
      Share with <br /> your friends
    </h2>
  </div>
);

SocialShare.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default SocialShare;
