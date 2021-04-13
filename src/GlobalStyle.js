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

    @font-face {
        font-family: "Agustina Regular";
        font-style: normal;
        font-weight: normal;
        src: local("Agustina Regular"),
        url("/fonts/Agustina.woff") format("woff");
        font-display: swap;
    }
`;

