'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider as PreferredProvider } from 'next-themes';

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => (
  <PreferredProvider attribute="class" storageKey="neon-theme" disableTransitionOnChange>
    {children}
  </PreferredProvider>
);
export default ThemeProvider;
