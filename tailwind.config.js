/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'slide-down': 'slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
                'slide-up': 'slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)'
            },
            keyframes: {
                'slide-down': {
                    from: { height: '0px' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'slide-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0px' }
                }
            }
        }
    },
    plugins: []
};
