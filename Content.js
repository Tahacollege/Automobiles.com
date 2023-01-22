import React from "react";
export default function Content(props){
    if(props.system===1 ||props.system==0){
        var display="Tank Capacity= "+props.tank_capacity
    }
    else if(props.system===3){
        var display=" Max Speed= "+props.Max_Speed
    }
    else{
        var display="Transmission= "+props.transmission
    }


    if(props.system===1 ||props.system==0){
        var Mileage="Mileage= "+props.mileage
    }
    else if(props.system===3){
        var Mileage=" Range= "+props.Range
    }
    else{
        var Mileage="Mileage= "+props.mileage
    }


    if(props.system===1 ||props.system==0){
        var Capacity="Capacity= "+props.tank_capacity
    }
    else if(props.system===3){
        var Capacity="Capacity "+props.Battery_capacity
    }
    else{
        var Capacity="Capacity= "+props.capacity
    }
    return (
        <div className="items">
                <img  src={props.img} width="300px" height="180px"></img>
    <h2> Name= {props.name}</h2> 
    <h4>Price= {props.price}</h4>
    <h5>{Mileage}</h5>
    <h4 >{display}</h4>
    <h4>{Capacity}</h4>
   </div>
   
    )
}