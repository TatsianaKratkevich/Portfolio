import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/Rectangle-6-_3_.webp'
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";

export const Main =()=>{
    return(
        <Back>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                <TextH>Lorem ipsum dolor amet</TextH>
                <TextSpan >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </TextSpan >
                </div>
            

            
            <Photo src={photo} alt='photo1'/> 
            
            
            
            </FlexWrapper>
            <StyledButton >
            Let’s Begin
            </StyledButton >
              </Back>
            
           
    );
};
const Photo= styled.img`
margin-right:151px;
margin-left: 89px;
margin-top: 125px;
margin-bottom: 125px;
`
const TextH = styled.h1`
color: #e4e1e1;
font-family: Poppins;
font-size: 54px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 147px;
margin-top: 201px;
margin-bottom: 15px;
margin-right: 89px;
    
`
const TextSpan = styled.span`
    color: #d1c3c3;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 150px;

`
const Back = styled.div`
    background: #202225;
    
    
`
const StyledButton = styled.button`
color: #FFF;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
border-radius: 83px;
background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
margin-bottom: 202px;
margin-left: 153px;
margin-top: 60px;
border:none;
width: 240px;
height: 60px;
flex-shrink: 0;
`