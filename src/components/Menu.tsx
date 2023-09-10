import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { Link } from 'react-scroll';



const items=[
    {
      title:'Projects',
      href:'projects'
    },

    {
        title:'Technologies',
        href:'technologies'
      },

      {
        title:'About me',
        href:'aboutme'
      },


]


export const Menu=()=>{
    return(
        <StyledMenu>
        <ul>
            {items.map((item)=>{
                return <ListItem>
                    <NavLink to={item.href}
                    smooth={true}
                    >{item.title}

                    </NavLink>
                </ListItem>
            

            })}
             </ul> 
            {/* /* <li>
               <a href='#projects'>  Projects</a>
               

             
               
            
            </li>
            <li>
            <a href='#technologies'> Technologies</a>
        
            </li>
            <li>
            <a href='#aboutme'> About me</a>
           
            </li>

        </ul> */} 
    </StyledMenu>

    )
}
const StyledMenu=styled.nav`

    ul{
      
        display: flex;
        align-items: center;
        height: 100%;
        gap:80px;
    }
  
@media ${theme.media.tablet}{
    display: none;
}
  
`
const ListItem=styled.li`
    list-style: none;
      font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

&:hover{
    transform: scale(120%);  
}
`
const NavLink=styled(Link)`
    color: white; 


    &:after{
        content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 0;
    height: 2px; 
    background-color: black; 
    transition: width 0.5s; 
    }

    &:hover:after{
        content: "";
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 2px; 
    background-color: #f4f4f4; 
    transition: width 0ms.5;  
    transition-duration: 0.5s;  
    }
`