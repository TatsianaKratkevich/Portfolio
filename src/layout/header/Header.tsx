import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { IconsHeader } from "../../components/IconsHeader";

export const Header =()=>{
    return(
    
        <StyledHeader>
            <Logo/>
            <Menu/>

            
            <IconsHeader/>
            
            </StyledHeader>
        

       
    );
}
const StyledHeader=styled.header`
background-color: #17181a;
height: 80px;
display: flex;
justify-content: space-between;



`

