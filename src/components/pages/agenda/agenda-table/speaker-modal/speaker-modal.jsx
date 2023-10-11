import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

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
  isOpen,
  closeModal,
}) => (
  <ReactModal
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '30',
      },
    }}
    isOpen={isOpen}
    contentLabel={name}
    ariaHideApp={false}
    bodyOpenClassName="overflow-hidden touch-none"
    className="relative top-1/2 left-1/2 max-h-[95%] w-[95%] max-w-[458px] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-black text-white shadow-[0px_14px_56px_0px_rgba(0,229,153,0.12),0px_6px_10px_0px_rgba(0,0,0,0.25)] border border-gray-15 after:bg-[linear-gradient(245deg,rgba(0,229,153,0.08)0%,rgba(0,229,153,0.5)100%)] after:absolute after:-inset-px after:rounded-[10px] after:p-px focus:outline-none"
    shouldCloseOnOverlayClick
    onRequestClose={closeModal}
  >
    <div className="relative z-10 bg-black px-6 pt-6 pb-7 rounded-[10px]">
      <button className="absolute top-7 right-6" type="button" onClick={closeModal}>
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
  </ReactModal>
);

SpeakerModal.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string,
  xUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SpeakerModal;
