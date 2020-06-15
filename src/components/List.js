import React from 'react';
import ListItem from "./ListItem";




export default function List(props){
    return (
        <ul>
            {props.items.map(beer => (
                    <ListItem key={beer} itemName ={beer}/>
                ))}
        </ul>
    );
}
