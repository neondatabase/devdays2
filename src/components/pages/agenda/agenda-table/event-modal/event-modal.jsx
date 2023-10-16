import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import CloseIcon from 'icons/close-gradient.inline.svg';
import GithubIcon from 'icons/github.inline.svg';
import LinkedinIcon from 'icons/linkedin-logo.inline.svg';
import XIcon from 'icons/x-logo.inline.svg';

const EventModal = ({
  avatar,
  name,
  role,
  bio = null,
  xUrl = null,
  linkedinUrl = null,
  githubUrl = null,
  event,
  description,
  closeModal,
}) => (
  <div className="relative z-10 bg-black px-6 pt-6 pb-7 rounded-[10px]">
    <button className="absolute top-6 right-6" type="button" onClick={closeModal}>
      <CloseIcon className="w-6 h-6" />
      <span className="sr-only">Close modal</span>
    </button>
    <div className="flex items-center gap-x-2.5">
      {avatar && (
        <Image
          className="rounded-full sm:w-8 sm:h-8"
          src={avatar}
          alt={name}
          width={42}
          height={42}
        />
      )}
      <div className="flex flex-col items-start leading-dense">
        <span className="text-xl tracking-[-0.02em] font-medium sm:text-[15px]">{name}</span>
        {role && (
          <span className="mt-1 text-sm tracking-[-0.02em] text-gray-80 font-light">{role}</span>
        )}
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-15 font-light text-sm leading-[1.25] text-gray-90">
      {bio}
    </div>
    {(xUrl || linkedinUrl || githubUrl) && (
      <div className="text-white mt-4 flex gap-x-5">
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
    {description && (
      <div className="mt-11">
        <span className="block text-xl leading-dense tracking-[-0.02em] max-w-[calc(100%-40px)] sm:text-lg">
          {event}
        </span>
        <p className="mt-4 pt-4 text-gray-90 border-t border-gray-15 text-sm font-light leading-[1.25]">
          {description}
        </p>
      </div>
    )}
  </div>
);

EventModal.propTypes = {
  avatar: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string,
  xUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  event: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default EventModal;
