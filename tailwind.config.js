/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '3xl': { max: '1920px' },
      '2xl': { max: '1800px' },
      '1xl': { max: '1439px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '413px' },
      xxs: { max: '374px' },
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      primary: {
        1: '#00e699',
        2: '#00cc88',
        3: '#33FFBB',
        4: '#00E599',
      },
      secondary: {
        1: '#ff4c79',
        2: '#f0f075',
        3: '#ffa64c',
        4: '#fbd0d7',
        5: '#aa99ff',
        6: '#d9eef2',
        7: '#259df4',
        8: '#0055FF',
      },
      gray: {
        0: '#131415',
        1: '#262626',
        2: '#404040',
        3: '#595959',
        4: '#808080',
        5: '#b3b3b3',
        6: '#cccccc',
        7: '#e5e5e5',
        8: '#f2f2f2',
        9: '#FAFAFA',
        10: '#303236',
      },
    },
    extend: {
      letterSpacing: {
        tight: '-0.04em',
        tighter: '-0.06em',
      },
      fontFamily: {
        kallisto: ['Kallisto', 'Kallisto Fallback', ...defaultTheme.fontFamily.sans],
        sans: ['IBM Plex Sans', 'IBM Plex Sans Fallback', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', 'IBM Plex Mono Fallback', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        sm: [defaultTheme.fontSize.sm[0]],
        base: [defaultTheme.fontSize.base[0]],
        lg: [defaultTheme.fontSize.lg[0]],
        xl: [defaultTheme.fontSize.xl[0]],
        '2xl': [defaultTheme.fontSize['2xl'][0]],
        '3xl': [defaultTheme.fontSize['3xl'][0]],
        '4xl': ['2.5rem'],
        '5xl': [defaultTheme.fontSize['5xl'][0]],
        '6xl': ['4rem'],
        '7xl': ['5rem'],
        '8xl': ['6.5rem'],
      },
      lineHeight: {
        dense: '1.125',
        tight: '1.35',
      },
      boxShadow: {
        social: 'inset 0px -2px 10px rgba(255, 255, 255, 0.15);',
      },
      backgroundImage: ({ theme }) => ({
        'color-picker-variant-1': 'linear-gradient(225deg, #4CFFFF 31.6%, #00E660 74.65%);',
        'color-picker-variant-2': 'linear-gradient(225deg, #BDF471 35.94%, #00CC33 100%);',
        'color-picker-variant-3': 'linear-gradient(225deg, #FF66FF 13.02%, #421CFF 92.19%);',
        'color-picker-variant-4': 'linear-gradient(226.74deg, #E8EFFC 28.6%, #99B3E6 80.81%);',
        'ticket-text-variant-0':
          'linear-gradient(215.67deg, #FFFFFF 41.51%, rgba(255, 255, 255, 0.5) 79.11%);',
        'ticket-text-variant-1': 'linear-gradient(215.67deg, #ffffff 41.51%, #66ffcc 79.11%)',
        'ticket-text-variant-2': 'linear-gradient(215.67deg, #ffffff 41.51%, #e6ff66 79.11%)',
        'ticket-text-variant-3': 'linear-gradient(215.67deg, #ffffff 41.51%, #ff99dd 79.11%)',
        'ticket-text-variant-4': 'linear-gradient(215.67deg, #ffffff 41.51%, #ccccff 79.11%)',
        'ticket-back-variant-1': `radial-gradient(transparent 0%, ${theme(
          'colors.black'
        )} 72%), linear-gradient(225deg, #00d1ff 0%, rgba(51, 255, 187, 0.2) 100%)`,
        'ticket-back-variant-2': `radial-gradient(transparent 0%, ${theme(
          'colors.black'
        )} 72%), linear-gradient(225deg, rgba(51, 255, 187, 0.6) 0%, rgba(230, 255, 102, 0.4) 100%)`,
        'ticket-back-variant-3': `radial-gradient(transparent 0%, ${theme(
          'colors.black'
        )} 72%), linear-gradient(225deg, #7266ff 28.65%, #ff99dd 100%)`,
        'ticket-back-variant-4': `radial-gradient(transparent 0%, ${theme(
          'colors.black'
        )} 72%), linear-gradient(225deg, #ccccff 28.65%, rgba(204, 204, 255, 0.4) 100%)`,
        'ticket-middle-variant-1': 'url("/images/developer-days/ticket-pattern-1.svg")',
        'ticket-middle-variant-2': 'url("/images/developer-days/ticket-pattern-2.svg")',
        'ticket-middle-variant-3': 'url("/images/developer-days/ticket-pattern-3.svg")',
        'ticket-middle-variant-4': 'url("/images/developer-days/ticket-pattern-4.svg")',
        'ticket-middle-variant-1-vertical':
          'url("/images/developer-days/ticket-pattern-1-vertical.svg")',
        'ticket-middle-variant-2-vertical':
          'url("/images/developer-days/ticket-pattern-2-vertical.svg")',
        'ticket-middle-variant-3-vertical':
          'url("/images/developer-days/ticket-pattern-3-vertical.svg")',
        'ticket-middle-variant-4-vertical':
          'url("/images/developer-days/ticket-pattern-4-vertical.svg")',
        'ticket-border-variant-0': `linear-gradient(0deg, transparent 10%, rgba(255, 255, 255, 0.2) 48%, rgba(255, 255, 255, 0.2) 52%, transparent 90%), linear-gradient(90deg, ${theme(
          'colors.black'
        )} 0%, rgba(255, 255, 255, 0.2) 35%, rgba(255, 255, 255, 0.2) 65%, ${theme(
          'colors.black'
        )} 100%)`,
        'ticket-border-variant-1': `linear-gradient(0deg, transparent 10%, #00d1ff 48%, #00d1ff 52%, transparent 90%), linear-gradient(90deg, ${theme(
          'colors.black'
        )} 0%, #00d1ff 35%, #00d1ff 65%, ${theme('colors.black')} 100%)`,
        'ticket-border-variant-2': `linear-gradient(0deg, transparent 10%, #33ffbb 48%, #33ffbb 52%, transparent 90%), linear-gradient(90deg, ${theme(
          'colors.black'
        )} 0%, #33ffbb 35%, #33ffbb 65%, ${theme('colors.black')} 100%)`,
        'ticket-border-variant-3': `linear-gradient(0deg, transparent 10%, #7266ff 48%, #7266ff 52%, transparent 90%), linear-gradient(90deg, ${theme(
          'colors.black'
        )} 0%, #7266ff 35%, #7266ff 65%, ${theme('colors.black')} 100%)`,
        'ticket-border-variant-4': `linear-gradient(0deg, transparent 10%, #ccccff 48%, #ccccff 52%, transparent 90%), linear-gradient(90deg, ${theme(
          'colors.black'
        )} 0%, #ccccff 35%, #ccccff 65%, ${theme('colors.black')} 100%)`,
        'ticket-flare-variant-1':
          'linear-gradient(106deg, transparent 30%, rgba(51, 255, 187, 0.8) 60%, transparent 60%)',
        'ticket-flare-variant-2':
          'linear-gradient(106deg, transparent 30%, rgba(189, 244, 113, 0.8) 60%, transparent 60%)',
        'ticket-flare-variant-3':
          'linear-gradient(106deg, transparent 30%, rgba(255, 153, 221, 0.8) 60%, transparent 60%)',
        'ticket-flare-variant-4':
          'linear-gradient(106deg, transparent 30%, rgba(204, 204, 255, 0.8) 60%, transparent 60%)',
        'agenda-top-dots': 'url("/images/developer-days/agenda-top-dots.svg")',
        'agenda-top-dots-medium': 'url("/images/developer-days/agenda-top-dots-medium.svg")',
        'agenda-top-dots-small': 'url("/images/developer-days/agenda-top-dots-small.svg")',
        'agenda-bottom-dots': 'url("/images/developer-days/agenda-bottom-dots.svg")',
        'live-video':
          'linear-gradient(103.37deg, rgba(255, 255, 255, 0.05) 12.69%, rgba(255, 255, 255, 0.11) 43.45%, rgba(255, 255, 255, 0) 93.31%)',
      }),
      keyframes: (theme) => ({
        'text-blink': {
          '0%': {
            opacity: 0,
            color: theme('colors.black'),
            textShadow: `-1px -1px 0 ${theme('colors.primary.1')}, 1px -1px 0 ${theme(
              'colors.primary.1'
            )}, -1px 1px 0 ${theme('colors.primary.1')}, 1px 1px 0 ${theme('colors.primary.1')}`,
          },
          '25%': {
            opacity: 0.25,
            color: 'currentColor',
            textShadow:
              '-1px -1px 0 transparent, 1px -1px 0 transparent, -1px 1px 0 transparent, 1px 1px 0 transparent',
          },
          '50%': {
            opacity: 0.5,
            color: theme('colors.black'),
            textShadow: `-1px -1px 0 ${theme('colors.primary.1')}, 1px -1px 0 ${theme(
              'colors.primary.1'
            )}, -1px 1px 0 ${theme('colors.primary.1')}, 1px 1px 0 ${theme('colors.primary.1')}`,
          },
          '100%': {
            opacity: 1,
            color: 'currentColor',
            textShadow:
              '-1px -1px 0 transparent, 1px -1px 0 transparent, -1px 1px 0 transparent, 1px 1px 0 transparent',
          },
        },
        'webgl-brightness': {
          '0%': {
            filter: 'brightness(0.3) saturate(0)',
          },
          '33%': {
            filter: 'brightness(1.3) saturate(0.3)',
          },
          '100%': {
            filter: 'brightness(1) saturate(1)',
          },
        },
        logos: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }),
      animation: {
        'text-blink': 'text-blink 1.5s cubic-bezier(0, 0.35, 0.35, 1)',
        'webgl-brightness': 'webgl-brightness 3s cubic-bezier(0, 0.35, 0.35, 1)',
        logos: 'logos 30s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
