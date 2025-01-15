const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
    './node_modules/@getpingback/ui/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    colors: {
      gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b'
      },
      coolGray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      },
      red: {
        50: '#fdf2f2',
        100: '#fde8e8',
        200: '#fbd5d5',
        300: '#f8b4b4',
        400: '#f98080',
        500: '#f05252',
        600: '#e02424',
        700: '#c81e1e',
        800: '#9b1c1c',
        900: '#771d1d'
      },
      blue: {
        50: '#ebf5ff',
        100: '#e1effe',
        200: '#c3ddfd',
        300: '#a4cafe',
        400: '#76a9fa',
        500: '#3f83f8',
        600: '#1c64f2',
        700: '#1a56db',
        800: '#1e429f',
        900: '#233876'
      },
      green: {
        50: '#f3faf7',
        100: '#def7ec',
        200: '#bcf0da',
        300: '#84e1bc',
        400: '#31c48d',
        500: '#0e9f6e',
        600: '#057a55',
        700: '#046c4e',
        800: '#03543f',
        900: '#014737'
      },
      yellow: {
        50: '#fdfdea',
        100: '#fdf6b2',
        200: '#fce96a',
        300: '#faca15',
        400: '#e3a008',
        500: '#c27803',
        600: '#9f580a',
        700: '#8e4b10',
        800: '#723b13',
        900: '#633112'
      },
      orange: {
        50: '#fff8f1',
        100: '#feecdc',
        200: '#fcd9bd',
        300: '#fdba8c',
        400: '#ff8a4c',
        500: '#ff5a1f',
        600: '#d03801',
        700: '#b43403',
        800: '#8a2c0d',
        900: '#771d1d'
      },
      teal: {
        50: '#edfafa',
        100: '#d5f5f6',
        200: '#afecef',
        300: '#7edce2',
        400: '#16bdca',
        500: '#0694a2',
        600: '#047481',
        700: '#036672',
        800: '#05505c',
        900: '#014451'
      },
      purple: {
        50: '#f6f5ff',
        100: '#edebfe',
        200: '#dcd7fe',
        300: '#cabffd',
        400: '#ac94fa',
        500: '#9061f9',
        600: '#7e3af2',
        700: '#6c2bd9',
        800: '#5521b5',
        900: '#4a1d96'
      },
      pink: {
        50: '#fdf2f8',
        100: '#fce8f3',
        200: '#fad1e8',
        300: '#f8b4d9',
        400: '#f17eb8',
        500: '#e74694',
        600: '#d61f69',
        700: '#bf125d',
        800: '#99154b',
        900: '#751a3d'
      }
    },
    extend: {
      boxShadow: {
        'bottom_sheet-2': 'var(--bottom_sheet-2)',
        modal: 'var(--modals-shadow)',
        'modal-large': 'var(--modals-shadow-large)',
        drawer: 'var(--drawer-shadow)',
        custom: '0px 0px 0px 1px rgba(0,0,0,0.15)',
        solid: 'var(--button-solid-shadow)',
        outlined: 'var(--button-outlined-shadow)',
        ghost: 'var(--button-ghost-shadow)',
        dropdown: 'var(--dropdown-shadow)',
        switch: 'var(--switch-shadow)'
      },
      backgroundImage: {
        'active-menu': 'var(--palette-gradiente-active_menu)'
      },
      keyframes: {
        accordionSlideUp: {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        accordionSlideDown: {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 }
        },
        slideLeft: {
          from: {
            transform: 'translateX(10%)',
            opacity: 0
          },
          to: { transform: 'translateX(0%)', opacity: 1 }
        },
        slideRight: {
          from: {
            transform: 'translateX(-10%)',
            opacity: 0
          },
          to: { transform: 'translateX(0%)', opacity: 1 }
        },
        drawerSlideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0%)' }
        },
        drawerSlideOut: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(100%)' }
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        'modal-slide-up': {
          '0%': { transform: 'translateX(-50%) translateY(100%)' },
          '100%': { transform: 'translateX(-50%) translateY(0)' }
        },
        'modal-slide-down': {
          '0%': { transform: 'translateX(-50%) translateY(0)' },
          '100%': { transform: 'translateX(-50%) translateY(100%)' }
        },
        'modal-fade-in': {
          '0%': { opacity: '0', transform: 'translate(-50%, -50%) scale(0)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
        },
        'modal-fade-out': {
          '0%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -50%) scale(0)' }
        }
      },
      animation: {
        'slide-up': 'accordionSlideUp 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'slide-down': 'accordionSlideDown 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards',
        'slide-left': 'slideLeft 300ms cubic-bezier(0.83, 0, 0.17, 1)',
        'slide-right': 'slideRight 300ms cubic-bezier(0.83, 0, 0.17, 1)',
        'drawer-slide-in': 'drawerSlideIn 300ms cubic-bezier(0.83, 0, 0.17, 1)',
        'drawer-slide-out': 'drawerSlideOut 300ms cubic-bezier(0.83, 0, 0.17, 1)',
        'fade-in': 'fadeIn 300ms cubic-bezier(0.83, 0, 0.17, 1)',
        'modal-slide-up': 'modal-slide-up 250ms ease-out',
        'modal-slide-down': 'modal-slide-down 250ms ease-in',
        'modal-fade-in': 'modal-fade-in 250ms ease-out',
        'modal-fade-out': 'modal-fade-out 250ms ease-in'
      },
      colors: {
        success: {
          foreground: 'var(--text-success)'
        },
        tertiary: {
          foreground: 'var(--text-tertiary)'
        },
        secondary: {
          foreground: 'rgb(from var(--text-secondary) r g b / <alpha-value>)'
        },
        primary: {
          foreground: 'var(--text-primary)'
        },
        active: {
          foreground: 'var(--text-active)'
        },
        informative: {
          foreground: 'var(--text-informative_accent)'
        },
        highlighted: {
          foreground: 'var(--text-informative)'
        },
        inverse: {
          foreground: 'var(--text-inverse)'
        },
        icons: {
          foreground: 'var(--icons-default)'
        },
        'border-card': 'var(--border-cards-color)',
        list: {
          highlighted: {
            DEFAULT: 'var(--list-hightlight)'
          },
          actived: {
            DEFAULT: 'var(--list-actived)'
          },
          hover: {
            DEFAULT: 'var(--list-hover)'
          },
          label: {
            DEFAULT: 'var(--list-label_default)'
          }
        },
        divider: {
          DEFAULT: 'var(--border-divider-color)'
        },
        input: {
          selected: {
            DEFAULT: 'var(--border-input_filled-color)',
            label: 'var(--buttons-label_color)',
            hover: 'var(--background-informative)'
          },
          outline: {
            DEFAULT: 'rgb(from var(--text-tertiary) r g b / <alpha-value>)',
            hover: 'var(--list-hover)'
          }
        },
        badge: {
          gray: {
            DEFAULT: 'var(--badge-gray-bg)',
            foreground: 'var(--badge-gray-text)'
          },
          green: {
            DEFAULT: 'var(--badge-green-bg)',
            foreground: 'var(--badge-green-text)'
          },
          teal: {
            DEFAULT: 'var(--badge-teal-bg)',
            foreground: 'var(--badge-teal-text)'
          },
          red: {
            DEFAULT: 'var(--badge-red-bg)',
            foreground: 'var(--badge-red-text)'
          },
          yellow: {
            DEFAULT: 'var(--badge-yellow-bg)',
            foreground: 'var(--badge-yellow-text)'
          },
          purple: {
            DEFAULT: 'var(--badge-purple-bg)',
            foreground: 'var(--badge-purple-text)'
          },
          orange: {
            DEFAULT: 'var(--badge-orange-bg)',
            foreground: 'var(--badge-orange-text)'
          }
        },
        switch: {
          bg: {
            DEFAULT: 'var(--switch-bg-default)',
            hover: 'var(--switch-bg-hover)'
          },
          thumb: {
            DEFAULT: 'var(--switch-thumb-bg)',
            disabled: 'var(--switch-thumb-disabled)'
          },
          checked: {
            DEFAULT: 'var(--switch-checked-bg)',
            hover: 'var(--switch-checked-hover)',
            ring: 'var(--switch-checked-ring)'
          },
          highlight: {
            DEFAULT: 'var(--switch-highlight-bg)',
            hover: 'var(--switch-highlight-hover)',
            ring: 'var(--switch-highlight-ring)'
          }
        },
        button: {
          solid: {
            DEFAULT: 'var(--button-solid-bg)',
            foreground: 'var(--button-solid-text)',
            hover: 'var(--button-solid-hover)'
          },
          ghost: {
            DEFAULT: 'var(--button-ghost-bg)',
            foreground: 'var(--button-ghost-text)',
            gray: 'var(--button-ghost-gray)',
            hover: 'var(--button-ghost-gray-hover)'
          },
          outlined: {
            border: 'var(--button-outlined-border)',
            hover: 'var(--button-outlined-hover)'
          },
          done: {
            DEFAULT: 'var(--badge-done-bg)',
            foreground: 'var(--badge-done-text)'
          },
          'page-solid': {
            DEFAULT: 'var(--buttons-solid_default)'
          },
          'page-ghost': {
            DEFAULT: 'var(--buttons-ghost_bg-color)'
          },
          'page-color-solid': {
            DEFAULT: 'var(--buttons-label_inverse)'
          },
          'page-color-clear': {
            DEFAULT: 'var(--buttons-label)'
          }
        },
        background: {
          accent: 'var(--background-accent)'
        },
        border: {
          accent: 'rgba(0, 0, 0, 0.04)'
        }
      }
    },
    fontFamily: {
      primary: ['Inter', 'sans-serif']
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
export default config;
