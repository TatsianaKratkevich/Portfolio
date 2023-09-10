import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";

import { Skill } from "./skills/Skill";
import { Container } from "../../components/Container";

import { theme } from "../../styles/Theme";
import { AttentionSeeker, Fade} from "react-awesome-reveal";
import { font } from "../../styles/Common";
import 'animate.css';


export const Skills =()=>{
    return(
        
        <SectionColor id={'projects'}>
       <Container>
        <AttentionSeeker effect={"pulse"}>
        <SectionTitle>Projects</SectionTitle>
        </AttentionSeeker>
        

           
        
           
         
        <FlexWrapper wrap={"wrap"}  justify={"space-around"}>

        
        
  <Skill title={"PROJECT 1"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
  <Skill title={"PROJECT 2"}text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
  <Skill title={"PROJECT 3"}text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
  <Skill title={"PROJECT 4"}text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
  
  
  


  
  
  
  
  
</FlexWrapper>

</Container>




</SectionColor>



















    )
}
const SectionColor=styled.section`
    background-color: #161D2A;
    position: relative;
    padding-top: 100px;
    padding-bottom: 140px;
    @media ${theme.media.mobile}{
  padding-top: 50px;
  padding-bottom: 40px;
  
    

}
`
 const SectionTitle = styled.h2`
 color:white;
line-height: normal;
margin-bottom: 70px;
${font({family:'Poppins',weight:600,Fmax:46,Fmin:30})}

`
  
