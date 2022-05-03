import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        dark: boolean;
        colors: {
            common: {
                black: string;
                white: string;
                gray: string;
                darkGray: string;
            },
            background: string;
            surface: string;
            text: string;
            primary: string;
            error: string;
        },
        fontSizes: {
            small: string;
            medium: string;
            large: string;
            title: string;
        }
    }
}