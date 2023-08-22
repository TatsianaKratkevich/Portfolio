import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";





export const Footer=()=>{
    return(
        <Positions>
       
        
<Posi>
Call me:
123-456-789


</Posi>


         

<Posi1>
Email:
xxx@xyz.com

</Posi1>


<IconsElements>
<Icon iconId={'git'}/>
         <Icon iconId={'linkedin'}/>
         <Icon iconId={'telegram'}/>
         </IconsElements>
        


      </Positions>

    );
}
const Positions=styled.div`
    display: flex;
    gap: 30px;
    background-color: #1c1e1e;
`

const Posi=styled.h1`
    margin-top: 130px;
    color: white;
    
`
const Posi1=styled.h1`
    margin-top: 130px;
    color: white;
`
const IconsElements=styled.div`
display: flex;
margin-top:150px;
margin-left: 150px;


    
`
