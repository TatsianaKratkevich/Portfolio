import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { Icon } from '../../../components/icon/Icon';
import {theme} from '../../../styles/Theme'





export const Footer=()=>{
    return(
        <Positions>
            <Container>
                <FFF>   


<Posi>
<a href="#!">
Call me:
123-456-789
</a>
</Posi>  
<Posi1>
    <a href="https://mail.ru/">
Email:
xxx@xyz.com
</a>
</Posi1>
<IconsElements>
<a href='https://github.com/TatsianaKratkevich'>
         <Icon iconId={'git'}/> 
         </a>
         <a href='https://github.com/TatsianaKratkevich'>
        <Icon iconId={'linkedin'} />
        </a>
        <a href='https://t.me/Alice33579'>
        <Icon iconId={'telegram'}/>   
        </a>
       
         </IconsElements>
</FFF>
         </Container>
      </Positions>

    );
}
const Positions=styled.div`
  
    position: relative;
    background-color: #0F1624;
    
`

const Posi=styled.p`
  font-size:22px;
font-family: Poppins;
font-style: normal;
line-height: normal;
a{
    color:white;
}
a:hover{
    box-shadow: 0 0 20px #cecbd8;
    -moz-box-shadow: 0 0 20px #d9d6e0;
    -o-box-shadow: 0 0 20px #e1dfe5;
    -ms-box-shadow: 0 0 20px #dcd9e2;
    -webkit-box-shadow: 0 0 20px #d2cfdb;
    animation: none;
    transition: 1s;
    border-radius: 50px;
}

    
`
const Posi1=styled.p`

font-family: Poppins;
font-style: normal;
line-height: normal;
font-size: 22px;
a{
    color:white;
   
}
a:hover{
    box-shadow: 0 0 20px #cecbd8;
    -moz-box-shadow: 0 0 20px #d9d6e0;
    -o-box-shadow: 0 0 20px #e1dfe5;
    -ms-box-shadow: 0 0 20px #dcd9e2;
    -webkit-box-shadow: 0 0 20px #d2cfdb;
    animation: none;
    transition: 1s;
    border-radius: 50px;
}

  

  
/* a:hover{
   color: #13ADC7;
  -webkit-text-shadow: 2px 2px 2px #e2dada;
  -moz-text-shadow: 2px 2px 2px #e2dada;
      text-shadow: 2px 2px 2px #e2dada;
} */
`
const IconsElements=styled.div`
display: flex;
gap: 35px;
margin-top: 5px;











    
`
const FFF=styled.p`
    
   
  display: flex; 
  justify-content: space-between;
  align-items: center;
  
  @media ${theme.media.tablet}{

  
display: flex;
flex-direction: column;


gap:5px;

}
  
   
   `
 