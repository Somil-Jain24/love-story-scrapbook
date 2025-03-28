
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom romantic color palette
				romance: {
					pink: '#FFDEE2',
					beige: '#F5F0E5',
					gold: '#D4AF37',
					parchment: '#FDF5E6',
					dustyRose: '#D8A9A9',
					softBrown: '#A67C52',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'gentle-zoom': {
					'0%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' }
				},
				'heartbeat': {
					'0%': { transform: 'scale(1)' },
					'14%': { transform: 'scale(1.1)' },
					'28%': { transform: 'scale(1)' },
					'42%': { transform: 'scale(1.1)' },
					'70%': { transform: 'scale(1)' }
				},
				'typewriter': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'candle-glow': {
					'0%': { 
						boxShadow: '0 0 10px 2px rgba(255, 223, 170, 0.5)',
						filter: 'brightness(1)'
					},
					'50%': { 
						boxShadow: '0 0 15px 5px rgba(255, 223, 170, 0.7)',
						filter: 'brightness(1.1)'
					},
					'100%': { 
						boxShadow: '0 0 10px 2px rgba(255, 223, 170, 0.5)',
						filter: 'brightness(1)'
					}
				},
				'twinkle': {
					'0%': { opacity: '0.2' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0.2' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1s ease-out forwards',
				'fade-in-delay-1': 'fade-in 1s ease-out 0.3s forwards',
				'fade-in-delay-2': 'fade-in 1s ease-out 0.6s forwards',
				'fade-in-delay-3': 'fade-in 1s ease-out 0.9s forwards',
				'gentle-zoom': 'gentle-zoom 1.5s ease-out forwards',
				'heartbeat': 'heartbeat 2s ease-in-out infinite',
				'typewriter': 'typewriter 3.5s steps(40, end) forwards',
				'candle-glow': 'candle-glow 3s ease-in-out infinite',
				'twinkle': 'twinkle 2s ease-in-out infinite'
			},
			backgroundImage: {
				'parchment-texture': "url('https://www.transparenttextures.com/patterns/parchment.png')",
				'romance-gradient': 'linear-gradient(to right, #ee9ca7, #ffdde1)'
			},
			fontFamily: {
				'handwriting': ['"Dancing Script"', 'cursive'],
				'romantic': ['"Playfair Display"', 'serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
