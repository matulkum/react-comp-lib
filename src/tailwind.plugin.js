const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(null, {
      theme: {
        colors: {
          primary: '#ff00ff',
        },
      },
    }),
  ],
};
