import React from 'react';

export default function Food(props){
    return(
        <p className={props.className}>{props.children}</p>
    );
}