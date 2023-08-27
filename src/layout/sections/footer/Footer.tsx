import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";





export const Footer=()=>{
    return(
        <Positions>
            <Container>
                <FFF>
                
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
         <Icon iconId={'telegram'} />
         </IconsElements>




</FFF>



         </Container>
        


      </Positions>

    );
}
const Positions=styled.div`
  
    
    background-color: #1c1e1e;
    
`

const Posi=styled.p`
  
    color: white;
    
`
const Posi1=styled.p`
    
    color: white;
`
const IconsElements=styled.div`







    
`
const FFF=styled.p`
    
   
  display: flex;
  justify-content: space-between;
  align-items: center;
   
  
   
   `
 