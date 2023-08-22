import React from "react";
import styled from "styled-components";
import { Circle } from "../../../components/Circle";




export const Experience =()=>{
    return(
    < ExperienceStyle>
     <h1>Experience</h1>
     <DataPosition>
     <Position>2017</Position>
     <Position1>2019</Position1>
     <Position2>2021</Position2>
    
     <Position3>2023</Position3>
     </DataPosition>
     
        

    <TimeLine>
    
    
        < CirclePosition>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
        
       
        </ CirclePosition>

       
        
      
    
    
    


 

    </TimeLine>
   
   

   








     </ExperienceStyle>



       
    );
}
const TimeLine=styled.div`
    border: none;
    border-radius: 83px;
background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
height: 8px;
width: 880px;
margin-left: 250px;
margin-right: 250px;


`

const CirclePosition=styled.div`
   display: flex;
    justify-content: space-between;
`
const DataPosition=styled.div`
    display: flex;
    background-color: #161D2A;;
    color:white;
   
   
    
`
const Position=styled.h3`
    margin-left: 260px;
`
    
   const Position1=styled.h3`
margin-left: 160px;
`

const Position2=styled.h3`
margin-left: 160px;
`
const Position3=styled.h3`
margin-left: 160px;
`
 const ExperienceStyle=styled.div`
    background-color:#161D2A;;
 `
