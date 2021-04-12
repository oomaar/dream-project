import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        scroll-behavior: smooth;
        height: 100vh;
        overflow: hidden;
        background: radial-gradient(ellipse at bottom, #1b2735 0%,#090a0f 100%);
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        color: whitesmoke;
    }
`;