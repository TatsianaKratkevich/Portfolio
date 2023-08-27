import React from "react";

import { ProgressBar } from "../../../components/progressbar/ProgressBar";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";
import { Container } from "../../../components/Container";





export const Technologies =()=>{
    return(
      
<ProgressDiv>
  <Container>
<TechnologiTitle>Technologies</TechnologiTitle>

<ProgressBar title={'Html'} width={'50%'}></ProgressBar>
<ProgressBar title={'Css, Sass'}width={'90%'} ></ProgressBar>
<ProgressBar title={'React'}width={'20%'}></ProgressBar>
<ProgressBar title={'Styled components'} width={'85%'} ></ProgressBar>




<TechnologiText>Additional technologies and skills</TechnologiText>
<Icons>
<Icon iconId={"github" } height={"100px"}/>
<Icon iconId={"skill-icons:git" } height={"100px"} />
<Icon iconId={"skill-icons:figma-light" } height={"100px"}/>
</Icons>
</Container>




</ProgressDiv>


    )

};
const ProgressDiv=styled.section`
    background-color: #222426;
    
`
const Icons=styled.div`
   
   display: flex;
   justify-content: center;
`



const TechnologiTitle=styled.h2`

color: #FFF;
font-family: Poppins;
font-size: 46px;
font-style: normal;
font-weight: 600;
line-height: normal;


  
  
`
const TechnologiText=styled.h3`
color: #FFF;
font-family: Poppins;
font-size: 44px;
font-style: normal;
font-weight: 600;
line-height: normal;
display: flex;
align-items: center;
justify-content: center;

  
  
`



