import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'teal':'#28d1b4',
        'hoverteal':'rgb(64, 163, 166)'
      }
    },
    variants: {
      extend: {},
    },
    // colors:{
    //   'teal': '#28d1b4',
    // }
  },
  plugins: [
    require('postcss-nesting'),
    require('tailwindcss'),
  ],
}
export default config
