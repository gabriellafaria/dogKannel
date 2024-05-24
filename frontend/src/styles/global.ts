import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["green-100"]};
  }

  body {
    background-color: ${props => props.theme['background-color']};
    color: ${props => props.theme["gray-100"]};
  }

  body, input, textarea, button {
    font: 400 1rem Poppins, sans-serif;
  }
`
