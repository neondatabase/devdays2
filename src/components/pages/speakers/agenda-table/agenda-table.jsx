'use client';

import { useState } from 'react';

import CustomModal from 'components/shared/custom-modal';
import { DEV_DAYS_AGENDA } from 'constants/dev-days';
import patternSvg from 'images/agenda/pattern.svg';

import Event from './event';
import EventModal from './event-modal';

const AgendaTable = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  const closeEventModal = (e) => {
    e.stopPropagation();
    setShowEventModal(false);
  };

  return (
    <section className="relative mt-14 mb-[105px] sm:mb-24">
      <img
        className="absolute right-0 bottom-[183px] [@media(max-width:1440px)]:hidden"
        src={patternSvg}
        width={378}
        height={768}
        alt=""
        loading="lazy"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1760px] w-full flex-grow grid-cols-12 gap-10 2xl:px-14 xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:px-8 lg:py-9 md:px-4 md:py-4 text-white sm:py-0">
        <div className="col-start-2 col-span-10 max-w-[1240px] 2xl:col-start-1 2xl:col-span-full lg:overflow-x-auto lg:max-w-none lg:-mx-8 md:-mx-4 lg:px-8 md:px-4 sm:overflow-visible sm:px-0 sm:mx-0">
          <table className="w-full lg:min-w-[680px] sm:min-w-fit">
            <thead className="text-left text-primary-4 text-sm font-medium leading-none border-b border-gray-15 sm:hidden">
              <tr>
                <th className="tracking-[0.02em] pb-5 pr-4">Speaker</th>
                <th className="tracking-[0.02em] pb-5 pr-4">Talk</th>
                <th className="tracking-[0.02em] pb-5">Company</th>
              </tr>
            </thead>
            <tbody className="text-lg leading-dense divide-y divide-gray-15 border-b border-gray-15 md:text-base">
              {DEV_DAYS_AGENDA.map(({ event, company, time, speaker, description }, index) => (
                <Event
                  event={event}
                  speaker={speaker}
                  company={company}
                  time={time}
                  description={description}
                  setShowModal={setShowEventModal}
                  setSelectedSpeaker={setSelectedEvent}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedEvent?.bio && (
        <CustomModal name={selectedEvent.name} isOpen={showEventModal} closeModal={closeEventModal}>
          <EventModal {...selectedEvent} isOpen={showEventModal} closeModal={closeEventModal} />
        </CustomModal>
      )}
    </section>
  );
};

export default AgendaTable;
