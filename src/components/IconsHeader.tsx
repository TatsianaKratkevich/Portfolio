import * as React from 'react';
import { Icon } from './icon/Icon';
import styled from 'styled-components';
import { FlexWrapper } from './FlexWrapper/FlexWrapper';


export const IconsHeader=()=>{
    return(
        <IconDiv>      
    
       
         <Icon iconId={'git'}/>
             <Icon iconId={'linkedin'} />
             <Icon iconId={'telegram'}/> 
    
            
 
             
            
       </IconDiv>
         
     
         
        

    )
}

   
const IconDiv=styled.div`
    display: flex;
    margin-top:5px;
    
   `
