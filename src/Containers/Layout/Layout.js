import React from "react";
import Header from "../Header/Header";
import themeClasses from '../../scss/themeStyles.scss';

export class Layout extends React.Component{
    render(){
        return(
            <div className={themeClasses.MustacheTheme}>
                <Header/>
                <main className="container">
                    {this.props.children}
                </main>
            </div>


        )
    }
}