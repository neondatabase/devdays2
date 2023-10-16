import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Event = ({ speaker, company, event, description, setShowModal, setSelectedSpeaker }) => {
  const { avatar, name, role, bio } = speaker;
  const openModal = () => {
    setShowModal(true);
    setSelectedSpeaker({ ...speaker, company, event, description });
  };

  return (
    <tr
      className="group sm:flex sm:flex-col-reverse sm:pt-[18px] sm:pb-5 sm:first:pt-0"
      role="button"
      onClick={openModal}
    >
      <td className="py-4 pr-4 sm:pr-0 sm:py-0 sm:mt-3.5">
        <div
          className={clsx(
            'flex items-center gap-x-2.5 group sm:w-full',
            bio ? 'cursor-pointer' : 'cursor-auto'
          )}
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
            <span className="text-base tracking-[-0.02em] font-medium sm:text-[15px]">{name}</span>
            {role && (
              <span className="mt-0.5 text-[13px] text-gray-80 font-light">
                <span className="tracking-[-0.02em]">{role}</span>
                <span className="hidden sm:inline" aria-hidden>
                  , {company}
                </span>
              </span>
            )}
          </div>
        </div>
      </td>
      <td
        className={clsx(
          'tracking-[-0.02em] py-4 text-xl pr-4 lg:text-base sm:text-xl sm:pr-0 sm:py-0 sm:leading-[1.25] xs:text-lg transition-colors duration-200',
          { 'group-hover:text-primary-4': bio || description }
        )}
      >
        {event}
      </td>
      <td className="tracking-[-0.02em] py-4 font-semibold text-gray-80 sm:hidden">{company}</td>
    </tr>
  );
};

Event.propTypes = {
  speaker: PropTypes.shape({
    avatar: PropTypes.object,
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  event: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setSelectedSpeaker: PropTypes.func.isRequired,
};

export default Event;
