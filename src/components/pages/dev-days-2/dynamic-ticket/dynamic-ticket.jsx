'use client';

import clsx from 'clsx';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
// TODO: uncomment
// import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef, useCallback } from 'react';

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
    buttonColorClass: 'before:bg-color-picker-variant-1',
  },
  {
    id: 2,
    title: 'Color variant 2',
    buttonColorClass: 'before:bg-color-picker-variant-2',
  },
  {
    id: 3,
    title: 'Color variant 3',
    buttonColorClass: 'before:bg-color-picker-variant-3',
  },
  {
    id: 4,
    title: 'Color variant 4',
    buttonColorClass: 'before:bg-color-picker-variant-4',
  },
];

const DynamicTicket = ({ userData: { id: number, name, image, githubHandle } }) => {
  // TODO: uncomment
  // const {data, status} = useSession();
  const [currentColorSchema, setCurrentColorSchema] = useState('1');
  const [selectedColorSchema, setSelectedColorSchema] = useState(null);
  const prevColor = usePrevious(currentColorSchema);
  const gradientControls = useAnimationControls();
  const ticketControls = useAnimationControls();

  const status = 'authenticated';

  const data = {
    colorSchema: '1',
  };

  useEffect(() => {
    if (prevColor !== currentColorSchema) {
      ticketControls.start('scaleOut').then(() => {
        ticketControls.start('initial');
      });

      gradientControls.start('move').then(() => {
        gradientControls.start('initial');
      });
    }
  }, [prevColor, currentColorSchema, gradientControls, ticketControls]);

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

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(updateUserDataTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColorSchema]);

  const handleColorClick = async (e) => {
    data.colorSchema = e.target.id;

    setCurrentColorSchema(e.target.id);
    setSelectedColorSchema(e.target.id);
  };

  const ticketRef = useRef(null);
  const measurementRef = useRef({ x: 0, width: 0 });

  // TODO: think about updating values by window resize
  useEffect(() => {
    const gap = getComputedStyle(ticketRef.current).getPropertyValue('--translateGap');

    measurementRef.current = {
      x: ticketRef.current.getBoundingClientRect().left,
      width: ticketRef.current.clientWidth + gap * 2,
    };
  }, []);

  const onMouseMove = useCallback((evt) => {
    const percent = Math.floor(
      Math.abs(evt.clientX - measurementRef.current.x) / (measurementRef.current.width / 100)
    );
    ticketRef.current.style.setProperty('--percent', percent);
  }, []);

  const onMouseLeave = useCallback(() => {
    // Note: movement is measuring by percents from 0 (left side) to 100 (right side).
    // By default value is 50 percent - without move to any sides
    ticketRef.current.style.setProperty('--percent', 50);
  }, []);

  return (
    /* TODO: fix blur in Safari */
    <div
      className={clsx(
        'relative before:absolute before:-left-[10px] before:right-[5px] before:-top-[5px] before:bottom-[65px] before:rounded-[50%] before:opacity-50 before:blur-3xl sm:flex sm:flex-col-reverse',
        {
          'before:bg-ticket-back-variant-1': currentColorSchema === '1',
          'before:bg-ticket-back-variant-2': currentColorSchema === '2',
          'before:bg-ticket-back-variant-3': currentColorSchema === '3',
          'before:bg-ticket-back-variant-4': currentColorSchema === '4',
        }
      )}
    >
      {/* TODO: fix back in Safari */}
      <div
        className={clsx('ticket-hover-aria relative z-0 before:z-20')}
        ref={ticketRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <motion.div
          className="relative z-30"
          initial="initial"
          animate={
            (typeof window !== 'undefined' && window.innerWidth <= '1024') ||
            status !== 'authenticated'
              ? false
              : ticketControls
          }
          variants={
            (typeof window !== 'undefined' && window.innerWidth <= '1024') ||
            status !== 'authenticated'
              ? false
              : scaleAndMoveTicketVariants
          }
        >
          <div className="ticket-wrapper relative z-30 h-[388px] w-[790px] 2xl:h-[330px] 2xl:w-[670px] md:h-[700px] md:w-[334px]">
            <section
              className={clsx(
                'ticket relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-3xl p-7 text-white before:absolute before:-top-[150px] before:left-[120px] before:h-[20px] before:w-[30px] before:scale-[15] before:rounded-[50%] before:bg-white before:opacity-20 before:blur-[4px] md:p-5 md:pt-16 md:pb-20 md:before:hidden sm:justify-start',
                {
                  'variant-1': currentColorSchema === '1',
                  'variant-2': currentColorSchema === '2',
                  'variant-3': currentColorSchema === '3',
                  'variant-4': currentColorSchema === '4',
                }
              )}
            >
              {status === 'authenticated' && (
                <motion.span
                  initial="initial"
                  animate={gradientControls}
                  variants={appearAndExitGradientVariants}
                  style={{
                    position: 'absolute',
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
              <header className="lg:mal-[44px] relative order-2 ml-[44px] xl:ml-[38px] md:mt-5 md:ml-0">
                <h2
                  className={clsx('text-5xl sm:text-4xl', {
                    'color-text-variant-1': currentColorSchema === '1',
                    'color-text-variant-2': currentColorSchema === '2',
                    'color-text-variant-3': currentColorSchema === '3',
                    'color-text-variant-4': currentColorSchema === '4',
                  })}
                >
                  Neon Dev
                  <br />
                  Days 2023
                </h2>
              </header>
              <p className="relative order-1 grid grid-cols-[56px_1fr] grid-rows-2 gap-x-4 gap-y-2 md:grid-cols-[48px_1fr] md:gap-x-3 sm:gap-x-2.5">
                <Image
                  src={image}
                  width={56}
                  height={56}
                  alt={`${name}'s profile picture`}
                  className="row-start-1 row-end-3 h-[56px] w-[56px] rounded-full md:h-[48px] md:w-[48px]"
                />
                <b className="font-sans text-[26px] font-semibold leading-none text-white md:text-xl">
                  {name}
                </b>
                <span className="col-start-2 font-mono text-base leading-none text-white md:text-sm">
                  /{githubHandle}
                </span>
              </p>
              <footer className="relative order-3 flex items-center gap-3 md:mt-auto">
                <p className="trac whitespace-nowrap font-kallisto text-[36px] font-light leading-none text-white md:text-3xl sm:text-[28px] xxs:text-[26px]">
                  #{`${number}`.padStart(6, '0')} /
                </p>
                <time
                  dateTime="2023-03-26T10:30:00-0800"
                  className="whitespace-nowrap font-mono text-sm uppercase leading-dense tracking-wider text-white md:text-[12px] sm:text-[12px]"
                >
                  10:30AM PT,
                  <br />
                  March 26, 2023
                </time>
              </footer>
            </section>
          </div>
        </motion.div>
      </div>

      {status === 'authenticated' && data?.colorSchema && (
        <div className="mt-8 flex items-center gap-3 xl:justify-center sm:mt-0 sm:mb-7">
          <p className="text-sm font-thin text-gray-7">Pick a color:</p>
          <div className="flex gap-5">
            {colorVariants.map((item, i) => {
              const { id, title, buttonColorClass } = item;
              const isActive = currentColorSchema === `${id}`;

              return (
                <motion.button
                  className={clsx(
                    'border-1 relative flex h-9 w-9 items-center justify-center rounded-full border border-gray-4 before:h-4 before:w-4 before:rounded-full',
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
                        className="border-1 absolute left-0 top-0 z-10 h-full w-full rounded-full border border-gray-8"
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
    </div>
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
