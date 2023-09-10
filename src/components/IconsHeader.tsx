import * as React from 'react';
import { Icon } from './icon/Icon';
import styled from 'styled-components';



export const IconsHeader=()=>{
    return(
        <IconDiv>      
    
         <a href='https://github.com/TatsianaKratkevich'>
         <Icon iconId={'git'}/> 
         </a>
         <a href='https://github.com/TatsianaKratkevich'>
        <Icon iconId={'linkedin'} />
        </a>
        <a href='https://t.me/Alice33579'>
        <Icon iconId={'telegram'}/>   
        </a>
        </IconDiv>

         
     
         
        

    )
}

   
const IconDiv=styled.div`
    display: flex;
    margin-top:5px;
    gap:25px;
@media screen and (max-width:984px) {
    display: none;
} 

    
   
    
    
   `
