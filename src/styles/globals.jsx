import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

const GlobalStyles = createGlobalStyle` 
  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
  }

  body {
    margin: 0px !important;
    padding: 0px !important;
    min-height: 100vh;
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    //font-weight: <weight>;
    font-style: normal;
  }

  /* Estiliza a barra de rolagem */
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent !important;
  }

  ::-webkit-scrollbar-track {
    background: transparent !important;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.light.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.light.primary}EA;
  }

`

export default GlobalStyles