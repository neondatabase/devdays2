'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import variant1 from 'images/developer-days-2/ticket-variant-1.png';
import variant2 from 'images/developer-days-2/ticket-variant-2.png';
import variant3 from 'images/developer-days-2/ticket-variant-3.png';
import variant4 from 'images/developer-days-2/ticket-variant-4.png';

import ellipse1 from './images/variant-1-light.svg';
import ellipse2 from './images/variant-2-light.svg';
import ellipse3 from './images/variant-3-light.svg';
import ellipse4 from './images/variant-4-light.svg';

const colorVariants = [
  {
    id: 1,
    tabTitle: 'Color variant 1',
    image: variant1,
    ellipse: ellipse1,
    bgVariant: 'before:bg-ticket-variant-1',
  },
  {
    id: 2,
    tabTitle: 'Color variant 2',
    image: variant2,
    ellipse: ellipse2,
    bgVariant: 'before:bg-ticket-variant-2',
  },
  {
    id: 3,
    tabTitle: 'Color variant 3',
    image: variant3,
    ellipse: ellipse3,
    bgVariant: 'before:bg-ticket-variant-3',
  },
  {
    id: 4,
    tabTitle: 'Color variant 4',
    image: variant4,
    ellipse: ellipse4,
    bgVariant: 'before:bg-ticket-variant-4',
  },
];

const DynamicTicket = ({ data: { id: number, name, image, githubHandle } }) => {
  const { data } = useSession();
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

    const fetchDataTimer = setTimeout(async () => {
      await fetch(`/api/update/user?id=${userId}&colorSchema=${colorSchema}`);
      await fetch(`/api/auth/session?colorSchema=${selectedColorSchema}`);
    }, 1000);

    return () => clearTimeout(fetchDataTimer);
    // eslint-disable-next-line
  }, [selectedColorSchema]);

  const handleTabClick = async (e) => {
    data.colorSchema = e.target.id;

    setCurrentColorSchema(e.target.id);
    setSelectedColorSchema(e.target.id);
  };

  return (
    <>
      <div className="relative max-w-full">
        {colorVariants.map((item, i) => {
          const { id, image, ellipse } = item;

          return (
            currentColorSchema === `${id}` && (
              <div key={i}>
                <Image
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[160%] w-[130%] max-w-[130%] -translate-x-1/2 -translate-y-1/2"
                  src={ellipse}
                  width={790}
                  height={388}
                  loading="eager"
                  alt="color variant background image"
                />

                <Image
                  className="pointer-events-none relative z-10 min-h-[380px] max-w-full"
                  src={image}
                  width={790}
                  height={388}
                  loading="eager"
                  alt="color variant image"
                />
              </div>
            )
          );
        })}

        <div className="absolute top-8 left-8 z-10 flex 2xl:top-12">
          <div className="h-[56px] w-[56px] overflow-hidden rounded-full">
            <img className="rounded-full" src={image} alt={`${name}'s profile picture`} />
          </div>
          <div className="ml-4 flex-col">
            <p className="font-sans text-[26px] font-semibold leading-none text-white 2xl:text-xl">
              {name}
            </p>
            <p className="font-mono text-base text-white">/{githubHandle}</p>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 z-10 flex items-center 2xl:bottom-12">
          <p className="text-4xl font-light text-white 2xl:text-3xl">
            #{`${number}`.padStart(5, '0')} /
          </p>
          <div className="ml-4 flex flex-col font-mono text-sm uppercase text-white">
            <span className="">10:30AM PT,</span>
            <span className="">March 26, 2023</span>
          </div>
        </div>
      </div>
      {data?.colorSchema && (
        <div className="mt-8 flex items-center gap-3">
          <p className="text-sm font-thin text-gray-7">Pick a color:</p>
          <div className="flex gap-5">
            {colorVariants.map((item, i) => {
              const { id, tabTitle, bgVariant } = item;
              const isActive = currentColorSchema === `${id}`;

              return (
                <button
                  className={clsx(
                    'relative flex h-9 w-9 items-center justify-center rounded-full border before:h-4 before:w-4 before:rounded-full',
                    isActive ? 'border-gray-8' : 'border-gray-4',
                    bgVariant
                  )}
                  key={i}
                  id={id}
                  disabled={isActive}
                  onClick={handleTabClick}
                >
                  <span className="sr-only">{tabTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

DynamicTicket.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.number,
    email: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    githubHandle: PropTypes.string,
  }).isRequired,
};

export default DynamicTicket;
