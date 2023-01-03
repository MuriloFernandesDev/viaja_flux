/** @type {import('tailwindcss').Config} */
module.exports = {
   important: true,
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
   ],

   theme: {
      extend: {},
   },
   daisyui: {
      themes: [
         {
            light: {
               ...require('daisyui/src/colors/themes')['[data-theme=light]'],
               primary: '#000036',
               'primary-content': '#2B2B2B',
               'base-200': '#F3F3F3',
               '--rounded-btn': '0',
            },
         },
      ],
   },
   plugins: [require('daisyui')],
}
