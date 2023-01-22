import React from "react";
export default function CAR(props){
    return (
            <div className="items">
                    <img  src={props.img} width="300px" height="180px"></img>
        <h2> Name= {props.name}</h2> 
        <h4>Price= {props.price}</h4>
        <h5>{props.mileage}</h5>
        <h4 >{props.transmission}</h4>
        <h4>{props.capacity}</h4>
       </div>
    )
}