/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./node_modules/flowbite/**/*.js',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		extend: {
			colors: {
				green: '#0C231E'
			},
			backgroundImage: {
				// 'close-menu': "url('/icons/close.svg')",
				// 'open-menu': "url('/icons/menu.svg')",
				'home-page': "url('/img/fondo.webp')"
			}
		}
	},
	plugins: [require('flowbite/plugin')]
}
