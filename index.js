import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from "./Content.js"
import Home_data from './Home_data';
import Diesel_car_data from './Diesel_car_data';
import Petrol_car_details from './Petrol_car_details';
import Petrol_bike_data from './Petrol_bike_data';
import Scooter_details from './Scooter_details';
import Electric_scooter from './Electric_scooter';
import Contact from './Contact';
import Car_details from './CAR_DETAILS';
import Car from './Car';
import BIke_Scooter_data from './BIke_Scooter_data';
import Bike_Scooter from './BIke_Scooter';
import About from './About_us';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
function Write(){
  const [click,change]=React.useState(false)
  const [twoWheller,swap]=React.useState(1)
  var homecars=Home_data.map(item=>{
    return <Content {...item} />
  })
  const [details,changedetails]=React.useState(homecars)
  function btn(){
    change(prev=>!prev)
  }
  
  function pcar(){
    var petrol=Petrol_car_details.map(item=>{
      return <Content {...item} />
    })
    changedetails(petrol)
  }
  function home(){
    var homecars=Home_data.map(item=>{
      return <Content {...item} />
    })
    changedetails(homecars)
  }
  function dcar(){
    var diesel=Diesel_car_data.map(item=>{
      return <Content {...item} />
    })
    changedetails(diesel)
  }
  function bikes(){
    var p_bike=Petrol_bike_data.map(item=>{
      return <Content {...item} system={twoWheller}/>
    })
    changedetails(p_bike)
    swap(prev=>0)
  }
  function scooter(){
    var scotty=Scooter_details.map(item=>{
       return <Content {...item} system={twoWheller} />
    })
    changedetails(scotty)
    swap(prev=>0)
  }
  function e_scooter(){
    swap(prev=>3)
    var e_scooty=Electric_scooter.map(item=>{
      return <Content {...item} system={twoWheller}/>
    })
    changedetails(e_scooty)
  }
  function contact(){
     var contact_us=<Contact />
     changedetails(contact_us)
  }
  function car(){
    var carrr=Car_details.map(item=>{
      return <Car {...item} />
    })
    changedetails(carrr)
  }
  function bike_scooter(){
    var bs=BIke_Scooter_data.map(item=>{
      return <Bike_Scooter {...item} />
    })
    changedetails(bs)
    change(prev=>!prev)
  }
  function about(){
    var Abt=<About/ >
    changedetails(Abt)
  }
  return (
  <div className="container" style={{gridTemplateColumns:click?"1fr 1fr 1fr 1fr ":"1fr 1fr 1fr 1fr 1fr"}} >
  <div className='header'>
    <img src="./images/images (1).jpg" className='headerimg'></img>
    <button className='sidebarbtn'><img src='./images/download (1).jpg' className='sidebarlogo' onClick={btn}></img></button>
    <h4 className='headermenus' onClick={contact}>ContactUs</h4>
    <h4 className='headermenus' onClick={about}>AboutUs</h4>
    <h4 className='headermenus' onClick={car}>CAR</h4>
    <h4 className='headermenus' onClick={bike_scooter}>BIKE/SCOOTER</h4>
    
  </div>
  <div className='sidebar' style={{display: click?"none":""}}>
  <h1 className='homebtn' onClick={home}>Home <img className='homeimg' src="./images/download (5).png"></img></h1>
  <h1 className='homebtn' onClick={bikes}>Bikes <img className='homeimg' src="./images/download (6).png"></img></h1>
  <h1 className='homebtn' onClick={scooter}>Scooter<img className='homeimg' src="./images/download (2).jpg"></img></h1>
  <h1 className='homebtn' onClick={e_scooter}>EV <img className='homeimg' src="./images/images (1).png"></img></h1>
  <h1 className='homebtn' onClick={pcar}>P-Car <img className='homeimg' src="./images/download (7).png"></img></h1>
  <h1 className='homebtn' onClick={dcar}>D-Car <img className='homeimg' src="./images/download (3).jpg"></img></h1>
  </div>
    {details}
    <div className='fotter'>
    <p>Credits:- Taha </p>
              <br />
              <p>Email: tcollegewala30@gmail.com</p>
              <br />
              <p> Full Stack Web Developer</p>
              <a href="https://www.instagram.com/mr_taha30/?next=%2F"><img src='./images/download (8).png' className='fotterimagesinsta'></img></a>
              <a href='https://github.com/Tahacollege'><img src='./images/images (2).png' className='fotterimagesgithub'></img></a>
             <a href='https://www.linkedin.com/in/taha-collegewala-9669b3250/'><img src='./images/download (9).png' className='fotterimageslinkdin'></img></a>
              
    </div>
  </div>
  )
}
ReactDOM.render(<Write />, document.getElementById("root"))
