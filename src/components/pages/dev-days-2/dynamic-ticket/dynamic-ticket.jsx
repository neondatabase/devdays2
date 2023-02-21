'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';
import mobileVariant1 from 'images/developer-days-2/ticket-variant-1-mobile.png';
import variant1 from 'images/developer-days-2/ticket-variant-1.png';
import mobileVariant2 from 'images/developer-days-2/ticket-variant-2-mobile.png';
import variant2 from 'images/developer-days-2/ticket-variant-2.png';
import mobileVariant3 from 'images/developer-days-2/ticket-variant-3-mobile.png';
import variant3 from 'images/developer-days-2/ticket-variant-3.png';
import mobileVariant4 from 'images/developer-days-2/ticket-variant-4-mobile.png';
import variant4 from 'images/developer-days-2/ticket-variant-4.png';

const colorVariants = [
  {
    id: 1,
    title: 'Color variant 1',
    image: variant1,
    mobileImage: mobileVariant1,
    buttonColorClass: 'before:bg-color-picker-variant-1',
  },
  {
    id: 2,
    title: 'Color variant 2',
    image: variant2,
    mobileImage: mobileVariant2,
    buttonColorClass: 'before:bg-color-picker-variant-2',
  },
  {
    id: 3,
    title: 'Color variant 3',
    image: variant3,
    mobileImage: mobileVariant3,
    buttonColorClass: 'before:bg-color-picker-variant-3',
  },
  {
    id: 4,
    title: 'Color variant 4',
    image: variant4,
    mobileImage: mobileVariant4,
    buttonColorClass: 'before:bg-color-picker-variant-4',
  },
];

const DynamicTicket = ({ userData: { id: number, name, image, githubHandle } }) => {
  const { data, status } = useSession();
  const [currentColorSchema, setCurrentColorSchema] = useState('1');
  const [selectedColorSchema, setSelectedColorSchema] = useState(null);

  useEffect(() => {
    setCurrentColorSchema((prevTab) =>
      data?.colorSchema && data?.colorSchema !== prevTab ? data?.colorSchema : prevTab
    );
  }, [data?.colorSchema]);

  useEffect(() => {
    if (!selectedColorSchema) return;
    const { userId, colorSchema } = data;

    const updateUserDataTimer = setTimeout(async () => {
      await fetch(`/api/update/user?id=${userId}&colorSchema=${colorSchema}`);
      await fetch(`/api/auth/session?colorSchema=${selectedColorSchema}`);
    }, 1000);

    return () => clearTimeout(updateUserDataTimer);
    // eslint-disable-next-line
  }, [selectedColorSchema]);

  const handleColorClick = async (e) => {
    data.colorSchema = e.target.id;

    setCurrentColorSchema(e.target.id);
    setSelectedColorSchema(e.target.id);
  };

  return (
    <>
      <div
        className={clsx(
          'relative max-w-full before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:z-0 before:h-[90%] before:w-[90%] before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-80 before:blur-[72px] sm:my-4 before:xs:w-full before:xs:max-w-full',
          {
            'before:bg-ticket-variant-1-back': currentColorSchema === '1',
            'before:bg-ticket-variant-2-back': currentColorSchema === '2',
            'before:bg-ticket-variant-3-back': currentColorSchema === '3',
            'before:bg-ticket-variant-4-back': currentColorSchema === '4',
          }
        )}
      >
        <CursorTrackingWrapper color={currentColorSchema} withAnimations>
          {colorVariants.map((item) => {
            const { id, image, mobileImage } = item;

            return (
              currentColorSchema === `${id}` && (
                <div key={id}>
                  <h2
                    className={clsx(
                      'absolute left-16 top-36 z-20 text-5xl sm:left-6 sm:top-32 sm:text-4xl xxs:left-2 ',
                      `color-text-variant-${id}`
                    )}
                  >
                    Neon Dev <br /> Days 2023
                  </h2>
                  <Image
                    className="pointer-events-none relative z-10 min-h-[380px] max-w-full sm:hidden"
                    src={image}
                    width={790}
                    height={388}
                    loading="eager"
                    alt="Ticket desktop variant illustration"
                  />
                  <Image
                    className="pointer-events-none relative z-10 hidden max-w-[370px] sm:block xs:max-w-full"
                    src={mobileImage}
                    width={700}
                    height={344}
                    loading="eager"
                    alt="Ticket mobile variant illustration"
                  />
                </div>
              )
            );
          })}
          <div className="absolute top-8 left-8 z-10 flex 2xl:top-12 lg:top-8 sm:top-16 sm:left-6 xxs:left-2">
            <div className="h-[56px] w-[56px] overflow-hidden rounded-full sm:h-12 sm:w-12">
              <Image
                className="rounded-full"
                width={62}
                height={62}
                src={image}
                alt={`${name}'s profile picture`}
              />
            </div>
            <div className="ml-4 flex-col">
              <p className="font-sans text-[26px] font-semibold leading-none text-white">{name}</p>
              <p className="font-mono text-base text-white">/{githubHandle}</p>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 z-10 flex items-center 2xl:bottom-12 lg:bottom-6 sm:left-6 sm:bottom-14 xxs:left-2">
            <p className="font-kallisto text-[36px] font-light tracking-wider text-white sm:text-[28px] xxs:text-[26px]">
              #{`${number}`.padStart(6, '0')} /
            </p>
            <div className="ml-4 flex flex-col font-mono text-sm uppercase leading-tight text-white sm:text-[12px] xxs:ml-2">
              <span className="">10:30AM PT,</span>
              <span className="">March 26, 2023</span>
            </div>
          </div>
        </CursorTrackingWrapper>
      </div>

      {status === 'authenticated' && data?.colorSchema && (
        <div className="mt-8 flex items-center gap-3 xl:justify-center sm:mt-0">
          <p className="text-sm font-thin text-gray-7">Pick a color:</p>
          <div className="flex gap-5">
            {colorVariants.map((item, i) => {
              const { id, title, buttonColorClass } = item;
              const isActive = currentColorSchema === `${id}`;

              return (
                <motion.button
                  className={clsx(
                    'relative flex h-9 w-9 items-center justify-center rounded-full outline outline-1 outline-gray-4 before:h-4 before:w-4 before:rounded-full',
                    buttonColorClass
                  )}
                  key={i}
                  id={id}
                  disabled={isActive}
                  // whileTap={{ scale: 0.9 }}
                  onClick={handleColorClick}
                >
                  <span className="sr-only">{title}</span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        className="absolute left-0 top-0 z-10 h-full w-full rounded-full outline outline-1 outline-gray-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        aria-hidden
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

DynamicTicket.propTypes = {
  userData: PropTypes.exact({
    id: PropTypes.number,
    email: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    githubHandle: PropTypes.string,
  }).isRequired,
};

export default DynamicTicket;
