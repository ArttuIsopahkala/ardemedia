const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    fontSize: {
      '5xl': '6rem',
      '4xl': '3.75rem',
      '3xl': '3rem',
      '2xl': '2rem',
      xl: '1.5rem',
      lg: '1.25rem',
      base: '1rem',
      sm: '0.875rem',
      xs: '0.75rem'
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.45,
      relaxed: 1.75,
      loose: 2
    },
    colors: {
      transparent: 'transparent',
      primary: '#F89B00',
      background: '#fafafa',
      textDark: '#393E46',
      textGray: '#5C636E',
      textLight: '#FFFFFF',
      success: '#4caf50',
      error: '#f44336',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    plugin(function ({ addBase, theme }) {
      addBase({
        'html, body': {
          color: theme('colors.textGray'),
          fontSize: '16px',
          fontFamily: 'Lato',
          margin: 0,
        },
        'p': {
          lineHeight: 1.75,
          [`@media (min-width: ${theme('screens.xl')})`]: {
            fontSize: '16px',
          }
        },
        'h1': {
          fontSize: theme('fontSize.3xl'),
          color: theme('colors.textDark'),
          fontWeight: 'bold',
          [`@media (min-width: ${theme('screens.md')})`]: {
            fontSize: theme('fontSize.4xl'),
          },
          [`@media (min-width: ${theme('screens.xl')})`]: {
            fontSize: theme('fontSize.5xl'),
          }
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
          color: theme('colors.textDark'),
          fontWeight: 'bold',
          [`@media (min-width: ${theme('screens.md')})`]: {
            fontSize: theme('fontSize.2xl'),
          },
          [`@media (min-width: ${theme('screens.xl')})`]: {
            fontSize: theme('fontSize.3xl'),
          }
        },
        'h3': {
          fontSize: theme('fontSize.lg'),
          color: theme('colors.textDark'),
          fontWeight: 'bold',
          [`@media (min-width: ${theme('screens.md')})`]: {
            fontSize: theme('fontSize.xl'),
          },
          [`@media (min-width: ${theme('screens.xl')})`]: {
            fontSize: theme('fontSize.2xl'),
          }
        },
        'h4': {
          fontSize: theme('fontSize.base'),
          color: theme('colors.textDark'),
          fontWeight: 'bold',
          [`@media (min-width: ${theme('screens.md')})`]: {
            fontSize: theme('fontSize.lg'),
          },
          [`@media (min-width: ${theme('screens.xl')})`]: {
            fontSize: theme('fontSize.xl'),
          }
        },
        'h5': {
          fontSize: theme('fontSize.base'),
          color: theme('colors.textDark'),
          fontWeight: 'bold',
        },
        'h6': {
          fontSize: theme('fontSize.sm'),
          color: theme('colors.textDark'),
          fontWeight: 'bold',
        }
      })
    })
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themes: [
      {
        'mytheme': {                        /* your theme name */
          'primary': '#F89B00',           /* Primary color */
          'primary-focus': '#f29700',     /* Primary color - focused */
          'primary-content': '#ffffff',   /* Foreground content color to use on primary color */

          'secondary': '#f6d860',         /* Secondary color */
          'secondary-focus': '#f3cc30',   /* Secondary color - focused */
          'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */

          'accent': '#37cdbe',            /* Accent color */
          'accent-focus': '#2aa79b',      /* Accent color - focused */
          'accent-content': '#ffffff',    /* Foreground content color to use on accent color */

          'neutral': '#3d4451',           /* Neutral color */
          'neutral-focus': '#2a2e37',     /* Neutral color - focused */
          'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */

          'base-100': '#ffffff',          /* Base color of page, used for blank backgrounds */
          'base-200': '#f9fafb',          /* Base color, a little darker */
          'base-300': '#d1d5db',          /* Base color, even more darker */
          'base-content': '#1f2937',      /* Foreground content color to use on base color */

          'info': '#2094f3',              /* Info */
          'success': '#4caf50',           /* Success */
          'warning': '#ff9900',           /* Warning */
          'error': '#f44336',             /* Error */
        },
      },
    ],
  },
}