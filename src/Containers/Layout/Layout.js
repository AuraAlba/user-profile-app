import React from "react";
import {Header} from "../../Components/Header/Header";

export class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="container">
                    <h1>Hola</h1>
                </div>
            </div>


        )
    }
}