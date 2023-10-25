import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '1.5rem',
    //   xl: '1.75rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },
      extend: {
        colors: {
          my_color: '#4dcb7a',
      },
      gradientColorStopPositions: {
        42: '42%',
        69: '69%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  safelist: [
    'text-purple-200',
    'text-cyan-500',
    'text-slate-300',
    'bg-gray-950',
    'rounded-3xl',
    'p-1',
    'px-3',
  ],
  plugins: [],
}
export default config
