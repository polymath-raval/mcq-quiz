import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: { value: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"` },
                body: { value: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"` },
            },
            colors: {
                // Custom brand colors
                brand: {
                    50: { value: '#e3f2fd' },
                    100: { value: '#bbdefb' },
                    200: { value: '#90caf9' },
                    300: { value: '#64b5f6' },
                    400: { value: '#42a5f5' },
                    500: { value: '#2196f3' },
                    600: { value: '#1e88e5' },
                    700: { value: '#1976d2' },
                    800: { value: '#1565c0' },
                    900: { value: '#0d47a1' },
                },
                // Success colors
                success: {
                    50: { value: '#e8f5e8' },
                    100: { value: '#c8e6c9' },
                    200: { value: '#a5d6a7' },
                    300: { value: '#81c784' },
                    400: { value: '#66bb6a' },
                    500: { value: '#4caf50' },
                    600: { value: '#43a047' },
                    700: { value: '#388e3c' },
                    800: { value: '#2e7d32' },
                    900: { value: '#1b5e20' },
                },
                // Warning colors
                warning: {
                    50: { value: '#fff3e0' },
                    100: { value: '#ffe0b2' },
                    200: { value: '#ffcc80' },
                    300: { value: '#ffb74d' },
                    400: { value: '#ffa726' },
                    500: { value: '#ff9800' },
                    600: { value: '#fb8c00' },
                    700: { value: '#f57c00' },
                    800: { value: '#ef6c00' },
                    900: { value: '#e65100' },
                }
            },
            shadows: {
                card: { value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
                cardHover: { value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
                button: { value: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)' },
            }
        },
        breakpoints: {
            sm: '30em',
            md: '48em',
            lg: '62em',
            xl: '80em',
            '2xl': '96em',
        },
        textStyles: {
            h1: {
                value: {
                    fontSize: { base: '32px', md: '48px' },
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    letterSpacing: '-0.025em',
                }
            },
            h2: {
                value: {
                    fontSize: { base: '24px', md: '36px' },
                    fontWeight: 'bold',
                    lineHeight: '1.3',
                    letterSpacing: '-0.025em',
                }
            },
            h3: {
                value: {
                    fontSize: { base: '20px', md: '28px' },
                    fontWeight: 'semibold',
                    lineHeight: '1.4',
                }
            },
            body: {
                value: {
                    fontSize: { base: '16px', md: '18px' },
                    lineHeight: '1.6',
                    fontWeight: 'normal',
                }
            },
            bodyLarge: {
                value: {
                    fontSize: { base: '18px', md: '20px' },
                    lineHeight: '1.6',
                    fontWeight: 'normal',
                }
            }
        }
    }
})

export const theme = createSystem(defaultConfig, config) 