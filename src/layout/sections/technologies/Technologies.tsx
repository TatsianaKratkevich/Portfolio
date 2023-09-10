import React from "react";

import { ProgressBar } from "../../../components/progressbar/ProgressBar";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";
import { AttentionSeeker} from "react-awesome-reveal";
import git from '../../../assets/images/git.svg'
import giti from '../../../assets/images/giti.svg'
import figma from '../../../assets/images/figmalight.svg'





export const Technologies =()=>{
    return(
      
<ProgressDiv id={'technologies'}>
  <Container>
  <AttentionSeeker effect="pulse">
<TechnologiTitle>Technologies</TechnologiTitle>
</AttentionSeeker>


<ProgressBar title={'Html'} width={'50%'}></ProgressBar>
<ProgressBar title={'Css, Sass'}width={'90%'} ></ProgressBar>
<ProgressBar title={'React'}width={'20%'}></ProgressBar>
<ProgressBar title={'Styled components'} width={'85%'} ></ProgressBar>




<AttentionSeeker effect="swing">
<TechnologiText>Additional technologies and skills</TechnologiText>  
</AttentionSeeker>
<AttentionSeeker effect='rubberBand'>
<Icons>
    <a href="#!">
    <img src={git} alt='g'></img>
    </a>
    <a href="#!">
    <img src={giti} alt='g'></img>
    </a>
    <a href="#!">
    <img src={figma} alt='g'></img>
    </a>


</Icons>
</AttentionSeeker>
</Container>





</ProgressDiv>


    )

};
const ProgressDiv=styled.section`
    background-color: #0F1624;
    padding-top:100px ;
    padding-bottom: 170px;
    @media ${theme.media.mobile}{
padding-top: 40px;
padding-bottom: 50px;
  
    

}
   
    
`
const Icons=styled.div`
   
   display: flex;
   justify-content: center;
   align-items: center;
    gap:50px; 
   
    @media ${theme.media.mobile}{

  
    gap:20px;

}
 img{
 
    @media ${theme.media.tablet}{
width: 50px;
height: 50px;

    

}


 }

 
 a:hover{
   

    
    box-shadow: 10 0 40px #d7d3e2;
    -moz-box-shadow: 0 0 40px #e8e5f0;
    -o-box-shadow: 0 0 40px #e9e6f0;
    -ms-box-shadow: 0 0 40px #e8e4ef;
    -webkit-box-shadow: 0 0 40px #e8e3f8;
    animation: none;
    transition: 1s;
    border-radius: 50px; 
    
}


`



const TechnologiTitle=styled.h2`


color: #FFF;
//font-family: Poppins;
//font-size: 46px;
font-style: normal;
//font-weight: 600;
line-height: normal;
${font({family:'Poppins',weight:600,Fmax:46,Fmin:23})}  
margin-bottom: 70px;
@media ${theme.media.mobile}{
margin-bottom: 25px;
  
    

}


  
  
`
const TechnologiText=styled.h3`
color: #FFF;
//font-family: Poppins;
font-size: 44px;
font-style: normal;
//font-weight: 600;
line-height: normal;
display: flex;
align-items: center;
justify-content: center;
${font({family:'Poppins',weight:600,Fmax:44,Fmin:23})}  
margin-top: 120px;
margin-bottom: 70px;
@media ${theme.media.mobile}{
margin-bottom: 15px;
margin-top: 50px;
  
    

}

  
  
`



