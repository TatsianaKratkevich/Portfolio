import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/image-1-_1_-—-копия.webp'

type SkillPropsType={

    title:string
    
}

export const Skill=(props:SkillPropsType)=>{
    return(
    
        <StyleCard>
       <StyleImg src= {photo}   alt=''/>
  <div>
    <StyleH>{props.title}</StyleH>
    <StyleP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</StyleP>
  </div>
  <StyleBtn>
  Look It Up
  </StyleBtn>
</StyleCard>

    );
}

const StyleCard=styled.div`
   border-radius: 50px 0px;
border: 1px solid #A39D9D;
background: #0F1624;
width: 550px;
height: 670px;
flex-shrink: 0;
margin-bottom: 85px;


`
const StyleH=styled.h1`
    color: #FFF;
font-family: Poppins;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 88.5%;
text-align: center;
margin-top: 40px;
`
const StyleP=styled.p`
color: #FFF;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 67px;
margin-left: 25px;
margin-right: 25px;
    
`

const StyleImg=styled.img`
    margin: 25px;
`


const StyleBtn =styled.button`
    border-radius: 83px;
background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
min-width: 200px;
min-height: 60px;
flex-shrink: 0;
margin-bottom: 40px;
margin-left: 25px;
margin-right: 325px;
margin-top: 50px;


`