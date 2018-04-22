import React from "react";
import classes from "./ImageField.scss";

const ImageField = (props) =>{
    return(
        <div className={classes.ImageProfile}>
            <img src={props.src} className={classes.ResponsiveImg} alt={props.alt}/>
        </div>
    )
};

export default ImageField;