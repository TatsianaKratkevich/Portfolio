import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";




export const GlobalStyled = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    
html,body{
     scroll-behavior: smooth;
    margin:0;
    font-family: 'Poppins',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  overflow-x: hidden;  
   min-width: 360px;

}

a{
    text-decoration: none;
}

section:ntx-of-type(odd){
    background-color: ${theme.colors.primaryBg};
}


section:ntx-of-type(even){
    background-color: ${theme.colors.secondaryBg};
}
@media screen and(max-width:536px){
  html,body{
    
      overflow-x: hidden;  

  }  
}

`