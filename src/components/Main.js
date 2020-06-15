import React from "react";
import "./Main.css";

export default function Main(props){
    return(
        <main className={"Main"}>
            {props.children}
        </main>
    );
}