import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0;
    scrollbar-width: none;
    font-size: .8em;
  }

  ::-webkit-scrollbar { 
    display: none; 
  }
`