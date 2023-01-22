import React from "react";
/* <option>Choose......</option>
                    <optgroup label="Petrol-CAR" id="p-car"></optgroup>
                    <option>1..maruti suzuki</option>
                    <option>2..maruti brezza</option>
                    <option>3..Mercedes-Benz G</option>
                    <option>4..Mercedes-Benz GLS</option>
                    <option>5..Citroen C3</option>
                    <option>6..Mahindra Scorpio-N</option>
                    <option>7..Mahindra Thar</option>
                    <option>8..Toyota Fortuner</option>
                    <option>9..Honda All New City</option>
                    <option>10..Lexus LX</option>
                    <option>11..Porsche 911</option>
                    <option>12..Mercedes-Benz</option>
                    <option>13..Mercedes-Benz E</option>
                    <option>14..Mercedes-Benz E</option>
                    <option>15..Toyota Innova</option>
                    <optgroup label="Diesel-CAR" id="d-car"></optgroup>
                    <option>1..isuzu d MAX</option>
                    <option>2..mercedes G class</option>
                    <option>3.. mahindra thar</option>
                    <option>4..hyundei creta</option>
                    <option>5..Toyota fortuner</option>
                    <option>6..BMW 5 series</option>
                    <option>7..Mahindra Bolero</option>
                    <option>8..mercedes-benz gls</option>
                    <option>9..mahindra scopio </option>
                    <option>10.. mercedes C class</option>
                    <optgroup label="Petrol-Bike" id="bike"></optgroup>
                    <option>1..yamaha mt 15 v2</option>
                    <option>2..royal enfield classic</option>
                    <option>3.. Kawasaki Ninja H2</option>
                    <option>4..Ducati Panigale V4</option>
                    <option>5..Yamaha YZF R1</option>
                    <option>6..Triumph Rocket 3 </option>
                    <option>7..BMW M 1000 RR</option>
                    <option>8..BMW M 1100 RR</option>
                    <option>9..BMW G 310 GS</option>
                    <option>10..Triumph Tiger 1200</option>
                    <option>11..Suzuki V-Strom SX</option>
                    <option>12..Kawasaki Ninja 1000</option>
                    <option>13..Honda CB500X </option>
                    <option>14.. Ducati Multistrada</option>
                    <option>15..BMW F 850 GS</option>
                    <optgroup label="Scooter" id="scooter"></optgroup>
                    <option>1..honda activa 6g</option>
                    <option>2..TVS ntorq 125 </option>
                    <option>3.. suzuki access</option>
                    <option>4..TVS JUPITER</option>
                    <option>5..Yamaha YZF R1</option>
                    <option>6..honda activa 125  </option>
                    <option>7..honda dio  </option>
                    <option>8..Suzuki Burgman</option>
                    <option>9..hero maestro edge 125</option>
                    <option>10..suzuki avenis 125</option>
                    <option>11..tvs cooty zest 110</option>
                    <option>12.. hero pleasure</option>
                    <option>13..tvs scooty pep plus </option>
                    <option>14.. yamaha rayzr 125 </option>
                    <option>15..hero destini-125 </option>
                    <optgroup label="Electric-Scooter" id="escooter"></optgroup>
                    <option>1..ola s1</option>
                    <option>2..ather 450X </option>
                    <option>3..tvs iqube electric</option>
                    <option>4..hero vida v1</option>
                    <option>5..bajaj chetak</option>
                    <option>6..simple-one </option>
                    <option>7..bounce infinty e1</option>
                    <option>8..hero electric optima</option>
                    <option>9.. ampere maguns ex</option>
                    <option>10..akinawa praise pro</option>
                    <option>11..hero electric nyx</option>
                    <option>12.. hero electric photon</option>
                    <option>13.. kinetic-green zoom </option>
                    <option>14.. ampere reo</option>
                    <option>15..avon e star </option>*/
export default function Contact(){
    const [form,details]=React.useState({
        choice:""
    })
    var val;
    //console.log(form)
    function radio(event){
        details(prevdata=>{
            return{
                ...prevdata,
                [event.target.name]:event.target.value
            }
        })
        val=event.target.value
        //console.log(event.target.value)
        if(val==="PetrolCAR"){
            var petrolcars=["1..maruti suzuki","2..maruti brezza","3..Mercedes-Benz G","4..Mercedes-Benz GLS","5..Citroen C3","6..Mahindra Scorpio-N","7..Mahindra Thar","8..Toyota Fortuner",
            "9..0Honda All New Cit","10..Lexus LX","11..Porsche 911","12..Mercedes-Benz","13..Mercedes-Benz E","14..Mercedes-Benz E","15..Toyota Innova"]
            var selectmenu=document.getElementById("selectmenu")
            for(var opt in petrolcars){
                /*var pnames=petrolcars[opt]
                console.log(pnames)*/
                var newoptions=document.createElement("option")
                newoptions.innerHTML=petrolcars[opt]
                selectmenu.add(newoptions)
            }
        }
        else if(val==="DieselCAR"){
            var dieselcars=["1..isuzu d MAX","2..mercedes G class","3.. mahindra thar","4..hyundei creta","5..Toyota fortuner","6..BMW 5 series","7..Mahindra Bolero","8..mercedes-benz gls",
            "9..mahindra scopio","10.. mercedes C class"]
            var selectmenu=document.getElementById("selectmenu")
            for(var opt in dieselcars){
                selectmenu.remove(newoptions)
                /*var pnames=dieselcars[opt]
                console.log(pnames)*/
                var newoptions=document.createElement("option")
                newoptions.innerHTML=dieselcars[opt]
                selectmenu.add(newoptions)
            }
        }
        else if(val==="Bike"){
            var bikes=["1..yamaha mt 15 v2","2..royal enfield classic","3.. Kawasaki Ninja H2","4..Ducati Panigale V4","5..Yamaha YZF R1","6..Triumph Rocket 3","7..BMW M 1000 RR","8...BMW M 1000 RR",
            "9..BMW G 310 GS","10..Triumph Tiger 1200","11..Suzuki V-Strom SX","12..Kawasaki Ninja 1000","13..Honda CB500X","14.. Ducati Multistrada","15..BMW F 850 GS"]
            var selectmenu=document.getElementById("selectmenu")
            for(var opt in bikes){
                selectmenu.remove(newoptions)
                /*var pnames=bikes[opt]
                console.log(pnames)*/
                var newoptions=document.createElement("option")
                newoptions.innerHTML=bikes[opt]
                selectmenu.add(newoptions)
            }
        }
        else if(val==="Scooter"){
            var Scooter=["1..honda activa 6g","2..TVS ntorq 125","3.. suzuki access","4..TVS JUPITER","5..Yamaha YZF R1","6..honda activa 125 ","7..honda dio  ","8..Suzuki Burgman",
            "9..hero maestro edge 125","10..suzuki avenis 125","11..tvs cooty zest 110","12.. hero pleasure","13..tvs scooty pep plus","14.. yamaha rayzr 125","15..hero destini-125"]
            var selectmenu=document.getElementById("selectmenu")
            for(var opt in Scooter){
                selectmenu.remove(newoptions)
                /*var pnames=Scooter[opt]
                console.log(pnames)*/
                var newoptions=document.createElement("option")
                newoptions.innerHTML=Scooter[opt]
                selectmenu.add(newoptions)
            }
        }
        else if(val==="ElectricScooter"){
            var ElectricScooter=["1..ola s1","2..ather 450X","3..tvs iqube electric","4..hero vida v1","5..bajaj chetak","6..simple-one  ","7..bounce infinty e1 ","8..hero electric optima",
            "9.. ampere maguns ex","10..akinawa praise pro","11..hero electric nyx","12.. hero electric photon","13.. kinetic-green zoom ","14.. ampere reo","15..avon e star"]
            var selectmenu=document.getElementById("selectmenu")
            for(var opt in ElectricScooter){
                selectmenu.remove(newoptions)
                /*var pnames=ElectricScooter[opt]
                console.log(pnames)*/
                var newoptions=document.createElement("option")
                newoptions.innerHTML=ElectricScooter[opt]
                selectmenu.add(newoptions)
            }
        }
    }
    return (
        <div className="contact">
        <form>
            <fieldset>
                <legend>Contact-US</legend>
                <label htmlFor="Name">NAME:- </label>
                <input type="text" id="Name" placeholder="Full Name"></input>
                <br />
                <br />
                <label htmlFor="mno">Mobile-Number:-</label>
                <input type="number" placeholder="+91*********" id="mno"></input>
                <br />
                <hr />
                <label htmlFor="choice">Choice:- </label>
                <br />
                <br />
                <input type="radio" id="choice" name="choice" value="PetrolCAR" onClick={radio}></input>
                <label htmlFor="CAR">PetrolCAR  </label>
                <input type="radio" id="choice" name="choice" value="DieselCAR" onClick={radio}></input>
                <label htmlFor="CAR">DieselCAR  </label>
                <input type="radio" id="choice" name="choice" value="Bike" onClick={radio}></input>
                <label htmlFor="CAR">Bike   </label>
                <input type="radio" id="choice" name="choice" value="Scooter" onClick={radio}></input>
                <label htmlFor="CAR">Scooter    </label>
                <input type="radio" id="choice" name="choice" value="ElectricScooter" onClick={radio}></input>
                <label htmlFor="CAR">ElectricScooter   </label>
                <hr />
                <label htmlFor="select">SELECT YOUR VEHICLE:-</label>
                <br />
                <br />
                <select id="selectmenu">
                    
                </select>
                <br />
                <hr />
                <label htmlFor="call"> When-Should-Contact-you</label>
                <br />
                <br />
                <input type="radio" name="choice" value="Right-NOW" onClick={radio}></input>
                <label htmlFor="instant">Right-NOW  </label>
                
                <input type="radio" name="choice" value="After-15MiN " onClick={radio}></input>
                <label htmlFor="in15min">After-15MiN </label>
                
                <input type="radio" name="choice" value="After-30MIN" onClick={radio}></input>
                <label htmlFor="in30MIN">After-30MIN  </label>
                
                <input type="radio" name="choice" value="After-1HOUR" onClick={radio}></input>
                <label htmlFor="in1hours">After-1HOUR </label>
                <hr />
                <br />
                <button>Submit</button>
            </fieldset>
        </form>
        </div>
    )
}