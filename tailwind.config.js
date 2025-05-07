/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'crystal-bg': 'url("/images/about/section2_bg-1.png")',
        'custom-gradient':
          'linear-gradient(to right bottom, #afeeff, #c4f0ff, #d8f2ff, #e8f4ff, #f5f8ff, #f5f8ff, #f6f7ff, #f6f7ff, #ecf2ff, #e0edff, #d2e9ff, #c2e5ff);',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          light: '#ffa733',
          DEFAULT: '#FF4E00',
          dark: '#cc7200',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          light: '#E5F2F9',
          DEFAULT: '#E5F2F9',
          dark: '#E5F2F9',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          light: '#3347c3',
          DEFAULT: '#062d97',
          dark: '#041f6c',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        navy: {
          100: '#130870',
          200: '#2B35AF',
          300: '#0450C1',
          400: '#4895EF',
          500: '#AACEF8',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },

        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 120s linear infinite',
        marquee2: 'marquee2 120s linear infinite',
      },
      textShadow: {
        custom: '4px 2px 0 rgba(142, 232, 227, 0.4)',
      },
      keyframes: {
        fadeInSlideInRight: {
          '0%': { opacity: '0', transform: 'translateX(75px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInSlideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-75px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInSlideInRight: 'fadeInSlideInRight 1.5s ease-in-out',
        fadeInSlideInLeft: 'fadeInSlideInLeft 1.5s ease-in-out',
      },
    },
    boxShadow: {
      'custom-inset':
        '10px 10px 10px -1px rgba(10, 99, 169, 0.16), -10px -10px 10px -1px rgba(255, 255, 255, 0.70)',
      'custom-inset-hover':
        'inset 10px 10px 10px -1px rgba(10, 99, 169, 0.16), inset -10px -10px 10px -1px rgba(255, 255, 255, 0.70)',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
