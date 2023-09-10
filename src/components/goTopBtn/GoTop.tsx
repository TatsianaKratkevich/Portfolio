import React, { useEffect,useState } from "react";
import styled from "styled-components"; 
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";


 export const GoTop=()=>{
    const [showBtn,setshowBtn]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>200){
                setshowBtn(true)

            } else{
                setshowBtn(false)
            }
        })
    }, [])
    return(
        <>
        {showBtn &&(
            <StyledGoTop onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={"Go"}/>
            </StyledGoTop> 
        )}
       
        </>
    )
}


const StyledGoTop=styled.button`
    background-color: rgba(0,0,0,0.2);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
     /* width: 55px;
    height: 55px;  */
    border: none;


`