import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/Rectangle-6-_3_.webp'
import { FlexWrapper } from "../../../components/FlexWrapper/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import 'animate.css';
import { Fade } from "react-awesome-reveal";

export const Main =()=>{
    return(
        <StyledMain id={'portfolio'}>
            



          <Container id={'h'}>
            <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                <HHH>

                <TextH>
                  <p>Lorem ipsum dolor amet</p>
                <Typewriter
  options={{
    strings: ['Lorem ipsum dolor amet'],
    autoStart: true,
    loop: true,
  }}
/>
                </TextH>
                
                <TextSpan >
                Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit



                     </TextSpan >
                  
                     <Btn>
                    
              <StyledButton >
                <a href='#projects' >
                Let’s Begin
                </a>
            
            </StyledButton > 
          
                     </Btn>
                   

             
                 
                </HHH>
              
               
                
            

                <Fade cascade={true} damping={0.2}>
                <Tilt
                 className="tilt-img"
                 tiltMaxAngleX={35}
                 tiltMaxAngleY={35}
                 perspective={900}
                 scale={1.1}
                 transitionSpeed={2000}
                 gyroscope={true}
                >
                <Photo src={photo} alt='photo1'/> 
                </Tilt>
                </Fade>
           
            
            
            </FlexWrapper>

           
            
            
            </Container>
            
           

            
            
              </StyledMain>
            
           
    );
};
const Photo= styled.img`
margin-top: 30px;
width: 380px;
height: 450px;
object-fit: cover;


@media ${theme.media.mobile}{
    width: 300px;
    height: 380px;
    
    

}

`
const TextH = styled.h1`
${font({family:'Poppins',weight:600,Fmax:56,Fmin:26})}
p{
  display: none;
}
color: #e4e1e1;
animation: backInLeft;
animation-duration: 2s;
//font-family: Poppins;
//font-size: 56px;
//font-style: normal;
//font-weight: 600;
//line-height: normal;
margin-bottom: 15px;
margin-top: 60px;
@media ${theme.media.mobile}{
  margin-top: 80px;
  
    

}

    
`
const TextSpan = styled.span`
${font({weight:400,Fmax:18,Fmin:14})}
    color: #d1c3c3;
font-family: Poppins;
//font-size: 18px;
font-style: normal;
//font-weight: 400;
line-height: normal;











`
const StyledMain= styled.section`
    background: #0F1624;
    display: flex;
   min-height: 100vh;
  
    
    
`
const StyledButton = styled.button`
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
border-radius: 83px;
background: linear-gradient(-45deg, #13ADC7 , #6978D1 , #945DD6 );
border:none;
min-width: 240px;
min-height: 60px;
flex-shrink: 0;
animation: animategradient  2s  ease infinite; 

 




 @keyframes animategradient {
	0% {
		 
    box-shadow: 0 0 0 0 rgb((255, 255, 255,0));
    
	}
	50% {
		
   
	}
  70% {
		box-shadow: 0 0 0 10px rgb(225,255,255,0.1);
	}
	100% {
		
    box-shadow: 0 0 0 0 rgb((255, 255, 255,0));
    
	}
 



  
} 



&:hover{
  box-shadow: 0 0 12px #cecbd8;
    -moz-box-shadow: 0 0 12px #6633FF;
    -o-box-shadow: 0 0 12px #6633FF;
    -ms-box-shadow: 0 0 12px #6633FF;
    -webkit-box-shadow: 0 0 12px #6633FF;
    animation: none;
   
} 




a{
  color:white;
}



`
const Btn=styled.div`
    margin-top: 60px;
    animation: fadeInDown;
    animation-duration: 2s;
    


    @media ${theme.media.mobile}{
  margin-top: 30px;

  a{
    cursor: pointer;
  }
  
  
}

 



  


`
const HHH=styled.div`
    
`