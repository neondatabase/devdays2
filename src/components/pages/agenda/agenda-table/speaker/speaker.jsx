import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Speaker = ({ speaker, company, setShowModal, setSelectedSpeaker }) => {
  const { avatar, name, role, bio } = speaker;
  const openModal = () => {
    setShowModal(true);
    setSelectedSpeaker({ ...speaker, company });
  };

  return (
    <button
      className={clsx(
        'flex items-center gap-x-2.5 group sm:w-full',
        bio ? 'cursor-pointer' : 'cursor-auto'
      )}
      type="button"
      onClick={openModal}
    >
      {avatar && (
        <Image
          className="rounded-full sm:w-8 sm:h-8"
          src={avatar}
          alt={name}
          width={40}
          height={40}
        />
      )}
      <div className="flex flex-col items-start text-left">
        <span
          className={clsx(
            'text-base tracking-[-0.02em] font-medium duration-200 transition-colors sm:text-[15px]',
            { 'group-hover:text-primary-4': bio }
          )}
        >
          {name}
        </span>
        {role && (
          <span className="mt-0.5 text-[13px] text-gray-80 font-light">
            <span className="tracking-[-0.02em]">{role}</span>
            <span className="hidden sm:inline" aria-hidden>
              , {company}
            </span>
          </span>
        )}
      </div>
    </button>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.shape({
    avatar: PropTypes.object,
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  company: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setSelectedSpeaker: PropTypes.func.isRequired,
};

export default Speaker;
