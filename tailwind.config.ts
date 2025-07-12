
import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
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
		fontFamily: {
			tan: ['TAN PEARL', 'serif'],
			sans: ['Inter', 'sans-serif'],
			serif: ['TAN PEARL', 'serif'],
			mono: ['RM Mono', 'monospace'],
			'tan-pearl': ['TAN PEARL', 'serif'],
			'rm-mono': ['RM Mono', 'monospace']
		},
		extend: {
			colors: {
			  // Base colors
			  dark: '#001514',
			  gold: '#F9C704',
			  light: '#FBFFFE',
			  
			  // Theme colors
			  background: {
			    DEFAULT: '#001514',
			    dark: '#000D0D',
			    light: '#FBFFFE',
			  },
			  
			  // Text colors
			  foreground: '#FBFFFE',
			  muted: 'rgba(251, 255, 254, 0.7)',
			  
			  // Primary colors (Gold)
			  primary: {
			    DEFAULT: '#F9C704',
			    foreground: '#001514',
			    hover: '#E6B800',
			  },
			  
			  // Secondary colors (Light)
			  secondary: {
			    DEFAULT: '#FBFFFE',
			    foreground: '#001514',
			    hover: '#E6E8E8',
			  },
			  
			  // Accent colors (Dark)
			  accent: {
			    DEFAULT: '#001514',
			    foreground: '#FBFFFE',
			    light: '#0D2A2A',
			  },
			  
			  // Border colors
			  border: 'rgba(249, 199, 4, 0.2)',
			  input: 'rgba(249, 199, 4, 0.3)',
			  ring: '#F9C704',
			  
			  // Cards
			  card: {
			    DEFAULT: 'rgba(0, 21, 20, 0.7)',
			    foreground: '#FBFFFE',
			    highlight: 'rgba(0, 21, 20, 0.9)',
			  },
			  
			  // Status colors
			  destructive: {
			    DEFAULT: '#FF4D4D',
			    foreground: '#FBFFFE'
			  },
			  success: {
			    DEFAULT: '#4CAF50',
			    foreground: '#FBFFFE'
			  },
			},
			fontFamily: {
				'tan-pearl': ['TAN PEARL', 'serif'],
				'inter': ['Inter', 'sans-serif'],
				'rm-mono': ['RM MONO', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
