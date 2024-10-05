/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Primary colors: Blue Grey
        // Use these as the main colors for your UI elements such as backgrounds, text, and borders
        primary: {
          950: '#102A43',  // Darkest shade - Use for main text or dark backgrounds
          900: '#243B53',
          800: '#334E68',
          700: '#486581',
          600: '#627D98',  // Use for primary buttons or important UI elements
          500: '#829AB1',
          400: '#9FB3C8',
          300: '#BCCCDC',
          200: '#D9E2EC',
          100: '#F0F4F8',  // Lightest shade - Use for backgrounds or light text on dark backgrounds
        },

        // Secondary colors: Light Blue (previously accent blue)
        // Use these for important UI elements that don't need to be as prominent as primary
        secondary: {
          950: '#035388',
          800: '#0B69A3',
          600: '#127FBF', // Use for secondary buttons or important non-primary elements
          400: '#1992D4',
          200: '#2BB0ED', // Use for hover states or secondary accents
        },

        // Tertiary colors: Cyan (previously accent cyan)
        // Use these for less prominent UI elements or subtle accents
        tertiary: {
          950: '#044E54',
          800: '#0A6C74',
          600: '#0E7C86', // Use for tertiary elements or subtle accents
          400: '#14919B',
          200: '#2CB1BC', // Use for hover states on tertiary elements
        },

        // Semantic colors for specific purposes
        alert: {
          950: '#610316',
          800: '#8A041A',
          600: '#AB091E', // Use for error messages or critical alerts
          400: '#CF1124',
          200: '#E12D39', // Use for error highlights or icons
        },
        warn: {
          950: '#8D2B0B',
          800: '#B44D12',
          600: '#CB6E17', // Use for warnings or caution messages
          400: '#DE911D',
          200: '#F0B429', // Use for highlight or hover states in warnings
        },
        success: {
          950: '#014D40',
          800: '#0C6B58',
          600: '#147D64', // Use for success messages or positive trends
          400: '#199473',
          200: '#27AB83', // Use for success highlights or icons
        },

        // Emphasis color
        // Use this color to draw special attention to elements or for strong emphasis
        emphasis: {
          950: '#620042',
          800: '#870557',
          600: '#A30664', // Use for strong emphasis or important UI elements
          400: '#BC0A6F',
          200: '#DA127D', // Use for highlights or hover states on emphasized elements
        },
      },
      spacing: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        36: '36px',
        40: '40px',
        44: '44px',
        48: '48px',
        56: '56px',
        64: '64px',
        80: '80px',
        96: '96px',
        112: '112px',
        128: '128px',
        144: '144px',
        160: '160px',
        176: '176px',
        192: '192px',
        208: '208px',
        224: '224px',
        240: '240px',
        256: '256px',
        288: '288px',
        320: '320px',
        384: '384px',
      }
    },
  },
  plugins: [],
}

