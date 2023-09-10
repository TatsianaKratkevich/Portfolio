import * as React from 'react';
import { useState} from 'react';
import styled,{css} from 'styled-components';
import { theme } from '../styles/Theme';
export const MobileMenu=()=>{
    const [menuItem,setmenuItem]=useState(false)
    const onBurgerBtnClick=()=>{setmenuItem(!menuItem)}
    return(
        <StyledMobileMenu>
            <BurgerButton isOpen={menuItem} onClick={onBurgerBtnClick}>
                <span></span>

            </BurgerButton>
            <MobileMenuWrapper isOpen={menuItem} onClick={()=>{setmenuItem(false)}}>
            <ul>
            <li>
               <a href='#projects'>  Projects</a>
               

             
               
            
            </li>
            <li>
            <a href='#technologies'> Technologies</a>
        
            </li>
            <li>
            <a href='#aboutme'> About me</a>
           
            </li>

        </ul>
            </MobileMenuWrapper>
        
    </StyledMobileMenu>

    )
}
const StyledMobileMenu=styled.nav`
display: none;

   
@media ${theme.media.tablet}{
    display: block;
}

   

  


    

   li{
    list-style: none;
      font-family: Poppins;
font-size: 30px;
font-style: normal;
font-weight: 500;
line-height: normal;

   }

  
   a{
    color: white;
  
   }
   a:hover{
    box-shadow: 0 0 40px #cecbd8;
    -moz-box-shadow: 0 0 40px #d9d6e0;
    -o-box-shadow: 0 0 40px #e1dfe5;
    -ms-box-shadow: 0 0 40px #dcd9e2;
    -webkit-box-shadow: 0 0 40px #d2cfdb;
    animation: none;
    transition: 2s;
    border-radius: 50px;
  
}



`
const BurgerButton=styled.button<{isOpen:boolean}>`
    position: fixed;
    top:-150px;
    right: -115px;
    width: 200px;
    height: 200px;
    z-index: 99999999999;
    border-radius: 10%;
    background: #0F1624;;
    border: #0F1624;
   

 
 ${props=>props.isOpen && css<{isOpen:boolean}>`
background-color:rgba(255,255,255,0);
`}


    span{
        display: block;
        width: 36px;
        height: 2px;
        background-color:white;
        position: absolute;
        left: 40px;
        bottom:25px;
       
        
       // right:40px;

     


        ${props=>props.isOpen && css<{isOpen:boolean}>`
background-color:rgba(255,255,255,0);


        `}

        &::before{
            content:'';
            display:block;
        width: 38px;
        height: 2px;
        background-color:${theme.colors.font};
        position: absolute;
        transform: translateY(-10px);

        ${props=>props.isOpen && css<{isOpen:boolean}>`
transform:rotate(-45deg) translateY(0);


        `}



        }


        &::after{
            content:'';
            display: block;
        width: 24px;
        height: 2px;
        background-color:${theme.colors.font};
        position: absolute;
        transform: translateY(10px);
        ${props=>props.isOpen && css<{isOpen:boolean}>`
transform:rotate(45deg) translateY(0);
width: 36px;


        `}



        }
    }

`
const MobileMenuWrapper=styled.div<{isOpen:boolean}>`


      
      position: fixed;
      background-color: rgba(15,22,36,0.9);
      top:0;
      right: 0;
      left: 0px;
      bottom: 0px;
      z-index: 999999;
      display: none;
      display: flex;
justify-content: center;
align-items: center;
transform:translateX(-100%) ;
transition: 1s;
      
      ${props=>props.isOpen && css<{isOpen:boolean}>`
      transform: translateY(0);
        
      `}




     ul{
      
      display: flex;
     justify-content:center;
      height: 100%;
      gap:80px;
      flex-direction:column;
      
     
    


  }

`