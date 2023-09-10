import * as React from 'react';
import { Icon } from './icon/Icon';
import styled from 'styled-components';
import { theme } from '../styles/Theme';




export const Logo=()=>{
    return(
        <StyledLogo>
          
           
            <a href='#portfolio'> 
            <Icon iconId={'logo'} width="185" height="48" viewbox="0 0 185 45" />   
             </a> 
            
 
            
            

       
         
         </StyledLogo>
         
        

    );
};

  const StyledLogo=styled.div`
  display: flex;
width: 300px;
@media ${theme.media.tablet}{
    width: 130px;
    height: 48px;
   
   
}



 

    
  `


   
  

   

    
  
