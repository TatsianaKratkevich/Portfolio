import React from "react";
import styled from "styled-components";
 import photo from '../../../assets/images/image-1-_1_-—-копия.webp'
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import { Fade } from "react-awesome-reveal";

type SkillPropsType={

    title?:string
    text?:string

    
}

export const Skill=(props:SkillPropsType)=>{
    return(
    
        <StyleCard>
        
     
        
               <StyleImg src= {photo}   alt=''/> 
           
 <Fade  cascade={true} damping={0.5}>
  <div>
    <StyleH>{props.title}</StyleH>
    <StyleP>{props.text}</StyleP>
  
  <StyleBtn>
    <a href="https://github.com/TatsianaKratkevich/Portfolio">
    Look It Up  
    </a>
  </StyleBtn>
  </div>
  
  </Fade>
</StyleCard>




    );
}

const StyleCard=styled.div`
display: flex;
flex-direction: column;
   border-radius: 50px 0px;
border: 1px solid #A39D9D;
background: #0F1624;
max-width: 550px;
min-width: 200px;
width: 100%; 

height: 670px;
flex-shrink: 0;
margin-bottom: 60px;




`
const StyleH=styled.h1`
    color: #FFF;
//font-family: Poppins;
//font-size: 30px;
font-style: normal;
//font-weight: 600;
line-height: 88.5%;
text-align: center;
margin-top: 40px;
position: relative;
${font({family:'Poppins',weight:600,Fmax:30,Fmin:25})}
/* &::after{
 content: '';
 max-width: 300px;
 min-width: 100px;
 width: 100%;
height: 4px;
position: absolute;
border-radius: 83px;
margin-top: 50px;
left: 125px;
background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
} */
`
const StyleP=styled.p`
color: #FFF;
//font-family: Poppins;
//font-size: 18px;
font-style: normal;
//font-weight: 500;
line-height: normal;
margin-top: 67px;
margin-left: 25px;
margin-right: 25px;
${font({family:'Poppins',weight:500,Fmax:18,Fmin:18})}  
`




const StyleBtn =styled.button`
    border-radius: 83px;
background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
max-width: 200px;
min-width: 100px;
min-height: 60px;
flex-shrink: 0;
margin-bottom: 40px;
margin-left: 25px;
margin-right: 325px;
margin-top: 50px;

//font-size: 20px;
//min-width: 50px;
animation: animategradient  2s  ease infinite; 

 




 @keyframes animategradient {
	0% {
		 
    box-shadow: 0 0 0 0 rgb((255, 255, 255,0));
    
	}
	50% {
		
   
	}
  70% {
		box-shadow: 0 0 0 15px rgb(225,255,255,0.1);
	}
	100% {
		
    box-shadow: 0 0 0 0 rgb((255, 255, 255,0));
    
	}
 



  
} 


a{
    color:#fff;
    font-family: Poppins;
    
}
${font({family:'Poppins',weight:500,Fmax:20,Fmin:15})}  
width: 100%;
@media ${theme.media.mobile}{
  margin-top: 90px;
  
    

}

`

 const StyleImg=styled.img`
 display: inline-block;
    margin: 25px;
   
    
 `

