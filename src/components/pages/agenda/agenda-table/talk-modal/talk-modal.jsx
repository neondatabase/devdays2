import PropTypes from 'prop-types';

import CloseIcon from 'icons/close-gradient.inline.svg';

const TalkModal = ({ event, description, closeModal }) => (
  <div className="relative z-10 bg-black px-6 pt-6 pb-7 rounded-[10px]">
    <button className="absolute top-6 right-6" type="button" onClick={closeModal}>
      <CloseIcon className="w-6 h-6" />
    </button>
    <span className="block text-xl leading-dense tracking-[-0.02em] max-w-[calc(100%-40px)] sm:text-lg">
      {event}
    </span>
    <p className="mt-[18px] pt-[18px] text-gray-90 border-t border-gray-15 text-sm font-light leading-[1.25]">
      {description}
    </p>
  </div>
);

TalkModal.propTypes = {
  event: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default TalkModal;
