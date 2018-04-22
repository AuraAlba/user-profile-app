import React from "react";
import classes from "./ImageField.scss";

const ImageField = (props) =>{
    return(
        <div>
            <img src={props.src} className={classes.ResponsiveImg} alt={props.alt}/>
        </div>
    )
};

export default ImageField;