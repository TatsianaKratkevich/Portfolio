import React from "react";
import styled from "styled-components";
type ProgressBaPropsType={

    title?:string
    width?:string
}

export const ProgressBar =(props:ProgressBaPropsType)=>{
    return(


    <ProgressBa>
        <ProgressBarTitle2> {props.title}
            </ProgressBarTitle2>
        <PtogressContainer>
        <ProgressFill width={props.width}/>
        </PtogressContainer>
        

    
</ProgressBa>



    )

};

const PtogressContainer=styled.div`
    width: 50%;
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
`
const ProgressBa=styled.div`
 margin-left:400px;
`
 const ProgressBarTitle2=styled.p`
   color:white;
 `