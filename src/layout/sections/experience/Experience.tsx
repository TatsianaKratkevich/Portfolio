import React from "react";
import styled from "styled-components";
import { Circle } from "../../../components/Circle";
import { Container } from "../../../components/Container";




export const Experience =()=>{
    return(
    < ExperienceStyle>
    <Container>
     <h1>Experience</h1>
     <DataPosition>
     <Position>2017</Position>
     <Position1>2019</Position1>
     <Position2>2021</Position2>
    
     <Position3>2023</Position3>
     </DataPosition>
     
   

     
<FFF>
    <TimeLine>
   
    
   
      
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        
    
        
        
      

        

       
        
      
    
    
    


 

    </TimeLine>
    </FFF>
    
    <JJJ>

<h3>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</h3>
<h3>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</h3>
<h3>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</h3>
<h3>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</h3>
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






`
 

const DataPosition=styled.div`
    display: flex;
    justify-content: space-around;
    
    background-color: #161D2A;;
    color:white;
    font-size: 26px;
    
   
   
    
`
const Position=styled.h3`
   
`
    
   const Position1=styled.h3`

`

const Position2=styled.h3`

`
const Position3=styled.h3`

`
 const ExperienceStyle=styled.div`
    background-color:#161D2A;
    padding-top: 100px;
    padding-bottom: 140px;
    
 `
 const JJJ=styled.div`
display: flex;
margin-top: 20px;
font-size: 18px;
color: #FFF;

`




 const FFF=styled.div`
    display: flex;

    justify-content: center;
 `














 


