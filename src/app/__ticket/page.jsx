'use client';

import DynamicTicket from 'components/pages/developer-days/dynamic-ticket/dynamic-ticket';

// TODO: remove page before merge
const TestPage = () => (
  <div className="m-auto w-fit py-10">
    <DynamicTicket
      userData={{
        id: 0,
        name: 'Mr. Tester',
        image: 'https://i.pravatar.cc/112',
        githubHandle: 'mr-tester',
        colorSchema: '1',
      }}
    />
  </div>
);

export default TestPage;
