import { DEV_DAYS_AGENDA } from 'constants/dev-days';

const AgendaTable = () => (
  <section className="relative mx-auto mb-28 grid max-w-[1760px] w-full flex-grow grid-cols-12 gap-10 2xl:px-14 xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:px-8 lg:py-9 md:px-4 md:py-4 text-white">
    <table className="col-start-2 col-span-10 w-full">
      <thead className="text-left text-primary-4 text-sm font-medium leading-none border-b border-[#242628]">
        <tr>
          <th className="tracking-[0.02em] pb-5">Event</th>
          <th className="tracking-[0.02em] pb-5">Company</th>
          <th className="tracking-[0.02em] pb-5">Speaker</th>
        </tr>
      </thead>
      <tbody className="text-lg leading-dense divide-y divide-[#242628] border-b border-[#242628]">
        {DEV_DAYS_AGENDA.map(({ event, company, speaker }, index) => (
          <tr key={index}>
            <td className="tracking-[-0.02em] text-xl py-4">{event}</td>
            <td className="tracking-[-0.02em] py-4">{company}</td>
            <td className="tracking-[-0.02em] text-gray-80 py-4">{speaker}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default AgendaTable;
