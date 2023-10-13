import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import CloseIcon from 'icons/close-gradient.inline.svg';
import GithubIcon from 'icons/github.inline.svg';
import LinkedinIcon from 'icons/linkedin-logo.inline.svg';
import XIcon from 'icons/x-logo.inline.svg';

const SpeakerModal = ({
  avatar,
  name,
  role,
  bio = null,
  xUrl = null,
  linkedinUrl = null,
  githubUrl = null,
  closeModal,
}) => (
  <div className="relative z-10 bg-black px-6 pt-6 pb-7 rounded-[10px]">
    <button className="absolute top-6 right-6" type="button" onClick={closeModal}>
      <CloseIcon className="w-6 h-6" />
    </button>
    <div className="flex items-center gap-x-2.5">
      {avatar && (
        <Image
          className="rounded-full sm:w-8 sm:h-8"
          src={avatar}
          alt={name}
          width={40}
          height={40}
        />
      )}
      <div className="flex flex-col items-start leading-dense">
        <span className="text-base tracking-[-0.02em] font-medium sm:text-[15px]">{name}</span>
        {role && (
          <span className="mt-0.5 text-[13px] tracking-[-0.02em] text-gray-80 font-light">
            {role}
          </span>
        )}
      </div>
    </div>
    <div className="mt-[18px] pt-[18px] border-t border-gray-15 font-light text-sm leading-[1.25] text-gray-90">
      {bio}
    </div>
    {(xUrl || linkedinUrl || githubUrl) && (
      <div className="text-white mt-[18px] flex gap-x-5">
        {xUrl && (
          <Link
            className="hover:text-primary-4 transition-colors duration-200"
            href={xUrl}
            rel="noreferrer noopener"
            target="_blank"
          >
            <XIcon className="w-4 h-4" />
          </Link>
        )}
        {linkedinUrl && (
          <Link
            className="hover:text-primary-4 transition-colors duration-200"
            href={linkedinUrl}
            rel="noreferrer noopener"
            target="_blank"
          >
            <LinkedinIcon className="w-4 h-4" />
          </Link>
        )}
        {githubUrl && (
          <Link
            className="hover:text-primary-4 transition-colors duration-200"
            href={githubUrl}
            rel="noreferrer noopener"
            target="_blank"
          >
            <GithubIcon className="w-4 h-4" />
          </Link>
        )}
      </div>
    )}
  </div>
);

SpeakerModal.propTypes = {
  avatar: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string,
  xUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  githubUrl: PropTypes.string,

  closeModal: PropTypes.func.isRequired,
};

export default SpeakerModal;
