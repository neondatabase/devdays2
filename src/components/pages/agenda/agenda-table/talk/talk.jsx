import clsx from 'clsx';
import PropTypes from 'prop-types';

const Talk = ({ event, description, setShowModal, setSelectedTalk }) => {
  const openModal = () => {
    setShowModal(true);
    setSelectedTalk({ event, description });
  };
  return (
    <button
      className={clsx(
        'duration-200 transition-colors text-left',
        description ? 'cursor-pointer hover:text-primary-4' : 'cursor-auto'
      )}
      type="button"
      onClick={openModal}
    >
      {event}
    </button>
  );
};

Talk.propTypes = {
  event: PropTypes.string.isRequired,
  description: PropTypes.string,
  setShowModal: PropTypes.func.isRequired,
  setSelectedTalk: PropTypes.func.isRequired,
};

export default Talk;
