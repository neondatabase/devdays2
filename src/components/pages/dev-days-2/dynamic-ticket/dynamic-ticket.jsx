'use client';

import clsx from 'clsx';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';
import usePrevious from 'hooks/use-previous';

const appearAndExitGradientVariants = {
  initial: {
    opacity: 0,
    translateX: '-100%',
  },
  move: {
    opacity: 1,
    translateX: '100%',
    transition: {
      duration: 0.5,
      ease: 'linear',
      opacity: {
        duration: 0,
      },
    },
    transitionEnd: {
      opacity: 0,
    },
  },
};

const scaleAndMoveTicketVariants = {
  initial: {
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0, 0.35, 0.35, 1],
    },
  },
  scaleOut: {
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: [0, 0.35, 0.35, 1],
    },
  },
};

const colorVariants = [
  {
    id: 1,
    title: 'Color variant 1',
    image: '/_next/image?url=/images/developer-days-2/ticket-variant-1.png&w=1920&q=75',
    mobileImage:
      '/_next/image?url=/images/developer-days-2/ticket-variant-1-mobile.png&w=1920&q=75',
    buttonColorClass: 'before:bg-color-picker-variant-1',
  },
  {
    id: 2,
    title: 'Color variant 2',
    image: '/_next/image?url=/images/developer-days-2/ticket-variant-2.png&w=1920&q=75',
    mobileImage:
      '/_next/image?url=/images/developer-days-2/ticket-variant-2-mobile.png&w=1920&q=75',
    buttonColorClass: 'before:bg-color-picker-variant-2',
  },
  {
    id: 3,
    title: 'Color variant 3',
    image: '/_next/image?url=/images/developer-days-2/ticket-variant-3.png&w=1920&q=75',
    mobileImage:
      '/_next/image?url=/images/developer-days-2/ticket-variant-3-mobile.png&w=1920&q=75',
    buttonColorClass: 'before:bg-color-picker-variant-3',
  },
  {
    id: 4,
    title: 'Color variant 4',
    image: '/_next/image?url=/images/developer-days-2/ticket-variant-4.png&w=1920&q=75',
    mobileImage:
      '/_next/image?url=/images/developer-days-2/ticket-variant-4-mobile.png&w=1920&q=75',
    buttonColorClass: 'before:bg-color-picker-variant-4',
  },
];

const DynamicTicket = ({ userData: { id: number, name, image, githubHandle, colorSchema } }) => {
  const { data, status } = useSession();
  const [selectedColorSchema, setSelectedColorSchema] = useState(null);
  const prevColor = usePrevious(selectedColorSchema);
  const currentColorSchema = selectedColorSchema || colorSchema;
  const gradientControls = useAnimationControls();
  const ticketControls = useAnimationControls();

  useEffect(() => {
    if (prevColor !== selectedColorSchema) {
      ticketControls.start('scaleOut').then(() => {
        ticketControls.start('initial');
      });

      gradientControls.start('move').then(() => {
        gradientControls.start('initial');
      });
    }
  }, [prevColor, selectedColorSchema, gradientControls, ticketControls]);

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

    // setCurrentColorSchema(e.target.id);
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
        <motion.div
          initial="initial"
          animate={
            (typeof window !== 'undefined' && window.innerWidth <= '1024') ||
            status !== 'authenticated'
              ? false
              : ticketControls
          }
          variants={scaleAndMoveTicketVariants}
        >
          <CursorTrackingWrapper>
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
                    <img
                      className="pointer-events-none relative z-10 min-h-[380px] max-w-full sm:hidden"
                      src={image}
                      width={790}
                      height={388}
                      loading="eager"
                      alt="Ticket desktop variant illustration"
                    />
                    <img
                      className="remove-image-loading-visual pointer-events-none relative z-10 hidden min-h-[736px] max-w-[370px] sm:block xs:max-w-full"
                      src={mobileImage}
                      width={481}
                      height={976}
                      loading="eager"
                      alt="Ticket mobile variant illustration"
                    />
                  </div>
                )
              );
            })}
            {status === 'authenticated' && (
              <motion.span
                className="lg:hidden"
                initial="initial"
                animate={gradientControls}
                variants={appearAndExitGradientVariants}
                style={{
                  position: 'absolute',
                  zIndex: '22',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  backgroundImage: `linear-gradient(106deg, transparent 30%, ${
                    currentColorSchema === '1'
                      ? 'rgba(51, 255, 187, 0.8)'
                      : currentColorSchema === '2'
                      ? 'rgba(189, 244, 113, 0.8)'
                      : currentColorSchema === '3'
                      ? 'rgba(255, 153, 221, 0.8)'
                      : 'rgba(204, 204, 255, 0.8)'
                  } 60%, transparent 60%)`,
                }}
              />
            )}
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
                <p className="font-sans text-[26px] font-semibold leading-none text-white">
                  {name}
                </p>
                <p className="font-mono text-base text-white">/{githubHandle}</p>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 z-10 flex items-center 2xl:bottom-12 lg:bottom-6 sm:left-6 sm:bottom-14 xxs:left-2">
              <p className="font-kallisto text-[36px] font-light tracking-wider text-white sm:text-[28px] xxs:text-[24px]">
                #{`${number}`.padStart(6, '0')} /
              </p>
              <div className="ml-4 flex flex-col font-mono text-sm uppercase leading-tight text-white sm:text-[12px] xxs:ml-2">
                <span className="">10:30AM PT,</span>
                <span className="">March 26, 2023</span>
              </div>
            </div>
          </CursorTrackingWrapper>
        </motion.div>
      </div>

      {status === 'authenticated' && data?.colorSchema && (
        <motion.div
          className="mt-8 flex items-center gap-3 xl:justify-center sm:mt-0"
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: 'linear' }}
        >
          <p className="text-sm font-thin text-gray-7">Pick a color:</p>
          <div className="flex gap-5">
            {colorVariants.map((item, i) => {
              const { id, title, buttonColorClass } = item;
              const isActive = currentColorSchema === `${id}`;

              return (
                <motion.button
                  className={clsx(
                    'relative flex h-9 w-9 items-center justify-center rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.1)] before:h-4 before:w-4 before:rounded-full',
                    buttonColorClass
                  )}
                  key={i}
                  id={id}
                  disabled={isActive}
                  onClick={handleColorClick}
                >
                  <span className="sr-only">{title}</span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        className="absolute left-0 top-0 z-10 h-full w-full rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.5)]"
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
        </motion.div>
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
    colorSchema: PropTypes.string,
  }).isRequired,
};

export default DynamicTicket;
