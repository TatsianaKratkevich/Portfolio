import React from "react";

import { ProgressBar } from "../../../components/progressbar/ProgressBar";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";





export const Technologies =()=>{
    return(
<ProgressDiv>
<TechnologiTitle>Technologies</TechnologiTitle>
<ProgressDivv>
<ProgressBar title={'Html'} width={'50%'}></ProgressBar>
<ProgressBar title={'Css, Sass'}width={'90%'} ></ProgressBar>
<ProgressBar title={'React'}width={'20%'}></ProgressBar>
<ProgressBar title={'Styled components'} width={'85%'} ></ProgressBar>

</ProgressDivv>


<TechnologiText>Additional technologies and skills</TechnologiText>
<Icons>
<Icon iconId={"github" } height={"100px"}/>
<Icon iconId={"skill-icons:git" } height={"100px"} />
<Icon iconId={"skill-icons:figma-light" } height={"100px"}/>
</Icons>



</ProgressDiv>


    )

};
const ProgressDiv=styled.div`
    background-color: #222426;
    
`
const Icons=styled.div`
  margin-left: auto;
    margin-right: auto;
    width: 20em
    
`
const ProgressDivv=styled.div`

  
  
`

const TechnologiTitle=styled.div`
margin-left: 150px;
color: #FFF;
font-family: Poppins;
font-size: 46px;
font-style: normal;
font-weight: 600;
line-height: normal;
  
  
`
const TechnologiText=styled.div`
margin-left: 1px;
color: #FFF;
font-family: Poppins;
font-size: 44px;
font-style: normal;
font-weight: 600;
line-height: normal;
  margin-left: 343px;
  
`


