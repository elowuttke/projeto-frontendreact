import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border-sizing: border-box;
    }

    h1{
        font-family: 'Ubuntu Mono', monospace;
    }

    h2, h3{
        font-family: 'Ubuntu', sans-serif;
    }

    body{
        font-family: 'Roboto', sans-serif;
    }
`;
