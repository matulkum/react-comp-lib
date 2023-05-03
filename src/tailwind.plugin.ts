import plugin from 'tailwindcss/plugin';

export default plugin(({ config }) => ({
  content: [
    './node_modules/react-component-library-starter/**/*.{js,ts,jsx,tsx,mdx}',
    // config().content,
  ],
}));
