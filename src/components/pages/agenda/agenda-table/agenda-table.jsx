import Image from 'next/image';

import { DEV_DAYS_AGENDA } from 'constants/dev-days';
import patternSvg from 'images/agenda/pattern.svg';

const AgendaTable = () => (
  <section className="relative">
    <img
      className="absolute right-0 bottom-[183px] xl:-bottom-72 lg:hidden"
      src={patternSvg}
      width={378}
      height={768}
      alt=""
      loading="lazy"
      aria-hidden
    />
    <div className="relative mx-auto mb-[105px] grid max-w-[1760px] w-full flex-grow grid-cols-12 gap-10 2xl:px-14 xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:px-8 lg:py-9 md:px-4 md:py-4 text-white lg:mb-20 md:mb-16 sm:mb-14">
      <div className="col-start-2 col-span-10 max-w-[1240px] 2xl:col-start-1 2xl:col-span-full lg:overflow-x-auto lg:max-w-none lg:-mx-8 md:-mx-4 lg:px-8 md:px-4">
        <table className="w-full lg:min-w-[800px] sm:min-w-[680px]">
          <thead className="text-left text-primary-4 text-sm font-medium leading-none border-b border-[#242628]">
            <tr>
              <th className="tracking-[0.02em] pb-5 pr-4">Speaker</th>
              <th className="tracking-[0.02em] pb-5 pr-4">Talk</th>
              <th className="tracking-[0.02em] pb-5">Company</th>
            </tr>
          </thead>
          <tbody className="text-lg leading-dense divide-y divide-[#242628] border-b border-[#242628] md:text-base">
            {DEV_DAYS_AGENDA.map(({ event, company, speaker: { name, role, avatar } }, index) => (
              <tr key={index}>
                <td className="flex items-center gap-x-2.5 py-4 pr-4">
                  {avatar && (
                    <Image
                      className="rounded-full sm:w-8 sm:h-8"
                      src={avatar}
                      alt={name}
                      width={40}
                      height={40}
                    />
                  )}
                  <div className="flex flex-col">
                    <span className="text-base tracking-[-0.02em] font-medium sm:text-[15px]">
                      {name}
                    </span>
                    {role && (
                      <span className="mt-0.5 text-[13px] tracking-[-0.02em] text-gray-80 font-light">
                        {role}
                      </span>
                    )}
                  </div>
                </td>
                <td className="tracking-[-0.02em] py-4 text-xl pr-4 lg:text-base">{event}</td>
                <td className="tracking-[-0.02em] py-4 font-semibold text-gray-80">{company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default AgendaTable;
