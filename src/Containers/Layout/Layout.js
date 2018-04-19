import React from "react";
import Header from "../Header/Header";

export class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <main className="container">
                    {this.props.children}
                </main>
            </div>


        )
    }
}