import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { olive: '#3D402F', pearl: '#FCF9D8', lilac: '#C99FCD' } } },
  plugins: [],
};
export default config;
