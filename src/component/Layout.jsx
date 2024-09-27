import React from 'react';
import img from '../assets/bg.png';
import './Layout.css'
import anime from '../assets/anime.gif'

const Layout = () => {
    return (
       <div className="layout-container">
          <div className="background-image">
            <img src={img} alt="Delicious food background" />
          </div>
          <div className="content">
            <h1>Cook Something Special Today</h1>
            <p>Explore a wide range of recipes to prepare delicious meals for your loved ones. Whether it's breakfast, lunch, or dinner, find the perfect recipe to bring joy to the table.</p>
          </div>
       </div>
    );
}

export default Layout;
