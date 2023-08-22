import * as React from 'react';
import styled from 'styled-components';
export const Menu=()=>{
    return(
        <StyledMenu>
        <ul>
            <li>
               
            Projects
            </li>
            <li>
                
            Technologies
            </li>
            <li>
               
            About me
            </li>

        </ul>
    </StyledMenu>

    )
}
const StyledMenu=styled.nav`
ul{
  display: flex;
    gap: 20px;
    justify-content: center;
    margin-left:200px;
   list-style: none;
   color: #FFF;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

   
    

}





    
`
