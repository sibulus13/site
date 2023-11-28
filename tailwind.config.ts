import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
    'text-violet-300',
    'text-slate-300',
    'bg-gray-950',
    'rounded-3xl',
    'p-1',
    'px-3',
    'pt-6',
    'pb-1',
    'border-2',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-white',
    'h-screen',
    'flex',
    'flex-col',
  ],
  plugins: [],
}
export default config
