import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { IconsHeader } from "../../components/IconsHeader";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper/FlexWrapper";

export const Header =()=>{
    return(
    
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'}>

                <Logo/>
               <Menu/>

            
                <IconsHeader/>
                    
                </FlexWrapper>

            
            </Container>

           
            
            </StyledHeader>
        

       
    );
}
const StyledHeader=styled.header`
background-color: #0F1624;
position: fixed;
top:0;
left:0;
right: 0;
z-index: 888;





`

