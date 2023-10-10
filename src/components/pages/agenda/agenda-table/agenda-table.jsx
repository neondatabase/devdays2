import { DEV_DAYS_AGENDA } from 'constants/dev-days';
import patternSvg from 'images/agenda/pattern.svg';

import Speaker from './speaker';

const AgendaTable = () => (
  <section className="relative">
    <img
      className="absolute right-0 bottom-[183px] [@media(max-width:1440px)]:hidden"
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
          <thead className="text-left text-primary-4 text-sm font-medium leading-none border-b border-gray-15">
            <tr>
              <th className="tracking-[0.02em] pb-5 pr-4">Speaker</th>
              <th className="tracking-[0.02em] pb-5 pr-4">Talk</th>
              <th className="tracking-[0.02em] pb-5">Company</th>
            </tr>
          </thead>
          <tbody className="text-lg leading-dense divide-y divide-gray-15 border-b border-gray-15 md:text-base">
            {DEV_DAYS_AGENDA.map(({ event, company, speaker }, index) => (
              <tr key={index}>
                <td className="py-4 pr-4">
                  <Speaker {...speaker} />
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
