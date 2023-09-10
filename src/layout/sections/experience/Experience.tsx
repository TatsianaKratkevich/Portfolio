import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { theme} from '../../../styles/Theme'
import { font } from "../../../styles/Common";
import { Bounce, Fade } from "react-awesome-reveal";
export const Experience =()=>{
    return(
    < ExperienceStyle id={'aboutme'}>
    <Container>
     <Title3>Experience</Title3>
    
     
<FFF>
    
    <TimeLine>
        <Bounce cascade={true} damping={0.5}>
      
    <CicleExperience></CicleExperience>
    <CicleExperienc></CicleExperienc>
    <CicleExperien></CicleExperien>
    <CicleExperie></CicleExperie>
    </Bounce>
        

    </TimeLine>
    </FFF>
   
    <JJJ>
    <Fade cascade={true} damping={0.5}>  

<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</h3>

<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua. </h3>

<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</h3>

<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.</h3>
</Fade>
</JJJ>  

   
    </Container>

     </ExperienceStyle>
      
    );
}
const TimeLine=styled.div`
    border: none;
    border-radius: 83px;
background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
height: 8px;




max-width:880px ;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background-size: 400% 400%;
	animation: gradient 3s ease infinite;
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`
 
 const ExperienceStyle=styled.div`
 position: relative;
    background-color:#161D2A;
    padding-top: 100px;
    padding-bottom: 140px;
    @media ${theme.media.mobile}{
padding-bottom: 50px;
padding-top: 50px;
    
}
   
 `
 const JJJ=styled.div`
display: flex;
margin-top: 20px;
gap: 34px;
@media ${theme.media.mobile}{
gap:7px;

}

//font-size: 18px;
color: #ffeded;
${font({family:'Poppins',weight:600,Fmax:18,Fmin:8})}  

`
 const FFF=styled.div`
    display: flex;

    justify-content: center;
 `

const Title3=styled.h1`
  color: #FFF;
font-style: normal;
line-height: normal;  
margin-bottom: 70px;
@media ${theme.media.mobile}{
margin-bottom: 40px;

}
${font({family:'Poppins',weight:600,Fmax:46,Fmin:25})}  
`
const CicleExperience=styled.div`
    width: 25px;
    height: 25px;
    position: relative;
    background: #ede8e8;
    -moz-border-radius:20px;
    -webkit-border-radius:40px;
    border-radius: 50px;
    @media ${theme.media.mobile}{
width:15px;
height: 15px;
    
}
    &::before{
        content:'2023';
        position: absolute;
        bottom: 20px;
        color: #FFF;
font-style: normal;

line-height: normal;

${font({family:'Poppins',weight:600,Fmax:26,Fmin:15})}  
    }
   
`
const CicleExperienc=styled.div`
    width: 25px;
    height: 25px;
    position: relative;
    


    background: #ede8e8;
    -moz-border-radius:20px;
    -webkit-border-radius:40px;
    border-radius: 50px;
    @media ${theme.media.mobile}{
width:15px;
height: 15px;
    
}
    &::before{
        content:'2021';
       
        position: absolute;
        bottom: 20px;
        color: #FFF;
font-style: normal;
line-height: normal
${font({family:'Poppins',weight:600,Fmax:26,Fmin:15})} 
    }
   
    
    
   


`

const CicleExperien=styled.div`
    width: 25px;
    height: 25px;
    position: relative;
  

   

    background: #ede8e8;
    -moz-border-radius:20px;
    -webkit-border-radius:40px;
    border-radius: 50px;
    @media ${theme.media.mobile}{
width:15px;
height: 15px;
    
}


    &::before{
        content:'2020';
       
        position: absolute;
        bottom: 20px;
        color: #FFF;
font-style: normal;
line-height: normal
${font({family:'Poppins',weight:600,Fmax:26,Fmin:15})} 
    }
   
    
    
   


`
const CicleExperie=styled.div`
    width: 25px;
    height: 25px;
    position: relative;
  

   

    background: #ede8e8;
    -moz-border-radius:20px;
    -webkit-border-radius:40px;
    border-radius: 50px;
    @media ${theme.media.mobile}{
width:15px;
height: 15px;
    
}
  

    &::before{
        content:'2019';
    
       
        position: absolute;
       bottom: 20px;
    right: 1px;
        color: #FFF;
font-style: normal;
line-height: normal

${font({family:'Poppins',weight:600,Fmax:26,Fmin:15})} 
    }
   


`