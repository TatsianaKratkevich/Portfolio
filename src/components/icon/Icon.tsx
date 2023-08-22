import React from "react";
import iconSprite from '../../assets/images/icons-sprite.svg'
type IconPropsType={
    iconId:string
    width?:string
    height?:string
    viewbox?:string
}
export const Icon=(props:IconPropsType)=>{
    return(
<svg width={props.width || '100'} height={props.height || "50"} viewBox="0 0 185 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
</svg>
    );
};