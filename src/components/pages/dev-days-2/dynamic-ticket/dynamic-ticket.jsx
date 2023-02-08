import Image from 'next/image';
import PropTypes from 'prop-types';

import ellipse from 'images/green-ellipse.png';

import TicketPlaceholder from './images/ticket.inline.svg';

const DynamicTicket = ({ data: { id: number, name, image, githubHandle } }) => (
  <div className="relative min-w-[720px] max-w-full">
    <Image
      className="absolute left-1/2 top-1/2 z-0 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
      src={ellipse}
      width={790}
      height={388}
      loading="eager"
      alt="background light."
    />

    <TicketPlaceholder className="relative z-10" />

    <div className="absolute top-8 left-8 z-10 flex">
      <div className="h-[56px] w-[56px] overflow-hidden rounded-full">
        <img className="rounded-full" src={image} alt={`${name}'s profile picture`} />
      </div>
      <div className="ml-4 flex-col">
        <p className="font-sans text-[26px] font-semibold leading-none text-white">{name}</p>
        <p className="font-mono text-base text-white">/{githubHandle}</p>
      </div>
    </div>

    <div className="absolute bottom-8 left-8 z-10 flex items-center">
      <p className="text-4xl font-light text-white">#{`${number}`.padStart(5, '0')} /</p>
      <div className="ml-4 flex flex-col font-mono text-sm uppercase text-white">
        <span className="">10:30AM PT,</span>
        <span className="">March 26, 2023</span>
      </div>
    </div>
  </div>
);

DynamicTicket.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    githubHandle: PropTypes.string,
  }).isRequired,
};

export default DynamicTicket;
