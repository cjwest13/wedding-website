import { render } from 'react-dom'
import React from 'react'
import './Home.css'


const Home = () => {
    return (
      <div>
        <div id="leftBar">

        </div>
        <div id="middle">
          <p className="barcode">123456790</p>
        </div>
        {/* Dotted Line */}
        <hr className="vertical"></hr>
        <div id="sideBar">
          <hr className="edge" ></hr>
          <p className="wedding">
            The Wedding Of
          </p>
          <p className="name">
            Amy & Clifton
          </p>
          <p className="day">
            1
          </p>
          <p className="date">
            August<br/>2019
          </p>
          <hr className="hor"></hr>
          <p className="phrase">
          It doesn’t matter where you are going, it’s who you have beside you.
            {/* <br /> GLAD YOU CAN JOIN US! */}
          </p>
        </div>
      </div>
    )
  }
  
  export default Home;
  