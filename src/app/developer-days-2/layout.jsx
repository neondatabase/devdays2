'use client';

import { SessionProvider } from 'next-auth/react';

// eslint-disable-next-line react/prop-types
const DevDays2Layout = ({ children }) => <SessionProvider>{children}</SessionProvider>;

export default DevDays2Layout;
