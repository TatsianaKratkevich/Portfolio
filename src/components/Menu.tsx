import * as React from 'react';
import styled from 'styled-components';
export const Menu=()=>{
    return(
        <StyledMenu>
        <ul>
            <li>
               <a href='#!'>  Projects</a>
               

             
               
            
            </li>
            <li>
            <a href='#!'> Technologies</a>
        
            </li>
            <li>
            <a href='#!'> About me</a>
           
            </li>

        </ul>
    </StyledMenu>

    )
}
const StyledMenu=styled.nav`

    ul{
      
        display: flex;
        align-items: center;
        height: 100%;
        gap:80px;



    }
  



  


    

   li{
    list-style: none;
      font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

   }

   li:hover{
   
    transform: scale(120%);
    
   }
   a{
    color: white;
  
   }
a:after{
 content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 0;
    height: 2px; 
    background-color: black; 
    transition: width 0.5s;   
}
a:hover:after{
  content: "";
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 2px; 
    background-color: #f4f4f4; 
    transition: width 0ms.5;  
    transition-duration: 0.5s;
}  




 

  
  
    


    
`
