import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            common: {
                black: string;
                white: string;
                gray: string;
            },
            background: string;
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