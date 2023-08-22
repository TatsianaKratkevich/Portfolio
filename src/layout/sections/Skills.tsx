import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";
import { SectionTitle } from "../../components/SectionTitle";
import { Skill } from "./skills/Skill";



export const Skills =()=>{
    return(
        <SectionColor>

           
                <SectionTitle>Projects</SectionTitle>
           

        <FlexWrapper wrap="wrap">
  <Skill title={"PROJECT 1"}/>
  <Skill title={"PROJECT 2"}/>
  <Skill title={"PROJECT 3"}/>
  <Skill title={"PROJECT 4"}/>
  
  
  
  
</FlexWrapper>





</SectionColor>


















    )
}
const SectionColor=styled.div`
    background-color: #161D2A;
    min-height: 100vh;
`
