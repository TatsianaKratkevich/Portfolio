import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";

import { Skill } from "./skills/Skill";
import { Container } from "../../components/Container";
import { SectionTitle } from "../../components/SectionTitle";



export const Skills =()=>{
    return(
        
        <SectionColor>
       <Container>
        <SectionTitle>Projects</SectionTitle>

           
        
           

        <FlexWrapper wrap={"wrap"}  justify={"space-between"}>

      

  <Skill title={"PROJECT 1"}/>
  <Skill title={"PROJECT 2"}/>
  <Skill title={"PROJECT 3"}/>
  <Skill title={"PROJECT 4"}/>
  
  


  
  
  
  
  
</FlexWrapper>
</Container>




</SectionColor>



















    )
}
const SectionColor=styled.section`
    background-color: #1e2022;
    
    padding-top: 100px;
    padding-bottom: 55px;
    
`

    
   
    

