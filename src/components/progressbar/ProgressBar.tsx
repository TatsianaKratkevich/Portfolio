import React from "react";
import styled from "styled-components";
import { font } from "../../styles/Common";
import { Bounce, Fade } from "react-awesome-reveal";
type ProgressBaPropsType={

    title?:string
    width?:string
}

export const ProgressBar =(props:ProgressBaPropsType)=>{
    return(


    <ProgressBa>
        <Bounce>
        <ProgressBarTitle2> {props.title}
            </ProgressBarTitle2>
            <PtogressContainer>
        <ProgressFill width={props.width}/>
        </PtogressContainer>
         
            </Bounce>
       
        
        

    
</ProgressBa>



    )

};

const PtogressContainer=styled.div`
    max-width: 900px;
    min-width: 200px;
    width: 100%;
height: 18px;
    border-radius: 83px;
background: #162950;
    overflow: hiddeen;

    
    
`
const ProgressFill=styled.div<ProgressBaPropsType>`
   height: 100%;
    transition: width 0.3s ease-in-out;
    width:${props=>props.width};
    border-radius: 83px;
background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
background-size: 400% 400%;
	animation: gradients 3s ease infinite;
@keyframes gradients {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`
const ProgressBa=styled.div`
display: flex;
flex-direction: column;





 
`
 const ProgressBarTitle2=styled.div`
color: #FFF;
//font-family: Poppins;
//font-size: 24px;
font-style: normal;
//font-weight: 600;
line-height: normal;
${font({family:'Poppins',weight:600,Fmax:24,Fmin:18})} 
 
 


   
 `
