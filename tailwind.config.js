/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '3xl': { max: '1920px' },
      '2xl': { max: '1600px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '639px' },
      xs: { max: '414px' },
      xxs: { max: '374px' },
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#080808',
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
        1: '#262626',
        2: '#404040',
        3: '#595959',
        4: '#808080',
        5: '#b3b3b3',
        6: '#cccccc',
        7: '#e5e5e5',
        8: '#f2f2f2',
        9: '#FAFAFA',
      },
      code: {
        'green-1': '#078345',
        'green-2': '#47D18C',
        'blue-1': '#206CDF',
        'blue-2': '#66A3FF',
        'red-1': '#DA0B51',
        'red-2': '#F6558C',
        'orange-1': '#FF9500',
        'orange-2': '#FFBF66',
        'gray-1': '#B3B3B3',
        'gray-2': '#808080',
        'brown-1': '#A86624',
        'brown-2': '#BA8C5E',
      },
    },
    extend: {
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
      },
      boxShadow: {
        social: 'inset 0px -2px 10px rgba(255, 255, 255, 0.15);',
      },
      backgroundImage: {
        'color-picker-variant-1': 'linear-gradient(225deg, #4CFFFF 31.6%, #00E660 74.65%);',
        'color-picker-variant-2': 'linear-gradient(225deg, #BDF471 35.94%, #00CC33 100%);',
        'color-picker-variant-3': 'linear-gradient(225deg, #FF66FF 13.02%, #421CFF 92.19%);',
        'color-picker-variant-4': 'linear-gradient(226.74deg, #E8EFFC 28.6%, #99B3E6 80.81%);',
        'ticket-variant-1-back':
          'linear-gradient(225deg, #00D1FF 0%, rgba(51, 255, 187, 0.2) 100%);',
        'ticket-variant-2-back':
          'linear-gradient(225deg, rgba(51, 255, 187, 0.6) 0%, rgba(230, 255, 102, 0.4) 100%);',
        'ticket-variant-3-back': 'linear-gradient(225deg, #7266FF 28.65%, #FF99DD 100%);',
        'ticket-variant-4-back':
          'linear-gradient(225deg, #CCCCFF 28.65%, rgba(204, 204, 255, 0.4) 100%);',
      },
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
            filter: 'saturate(0)',
          },
          '100%': {
            filter: 'saturate(1)',
          },
        },
      }),
      animation: {
        'text-blink': 'text-blink 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'webgl-brightness': 'webgl-brightness 3s linear',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            h2: {
              fontWeight: 600,
            },
            a: {
              fontWeight: 600,
            },
          },
        },
      }),
    },
  },
  plugins: [require('tailwindcss-safe-area'), require('@tailwindcss/typography')],
};
