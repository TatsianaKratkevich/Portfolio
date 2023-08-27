import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/Rectangle-6-_3_.webp'
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Container } from "../../../components/Container";

export const Main =()=>{
    return(
        <StyledMain>
            



          <Container>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <div>

                <TextH>Lorem ipsum dolor amet</TextH>
                
                <TextSpan >
                Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit, sed do eiusmod tempor 
                 incididunt ut labore et dolore magna aliqua. 



                     </TextSpan >
                     <Btn>
                       
              <StyledButton >
            Let’s Begin
            </StyledButton > 
                     </Btn>

             
                 
                </div>
              
               
                
            

            
            <Photo src={photo} alt='photo1'/> 
            
            
            </FlexWrapper>

           
            
            
            </Container>
            
           

            
            
              </StyledMain>
            
           
    );
};
const Photo= styled.img`

width: 380px;
height: 450px;



`
const TextH = styled.h1`
color: #e4e1e1;
font-family: Poppins;
font-size: 54px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 15px;


    
`
const TextSpan = styled.span`
    color: #d1c3c3;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;








`
const StyledMain= styled.section`
    background: #0F1624;
   display: flex;
    min-height: 100vh;
    
    
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





border:none;
min-width: 240px;
min-height: 60px;
flex-shrink: 0;




`
const Btn=styled.div`
    margin-top: 60px;
`