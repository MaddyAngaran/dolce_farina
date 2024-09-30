import React from 'react';
import '../App.css';
import twins from '../photos/twins_with_cake.jpg';

function AboutUs() {
  return (
    <div>
      <h1 className='title'>About Us</h1>
      <div className='row About-the-twins'>
        <img src={twins} alt='twins' className='twins col-6'></img>
        <p className='about col-6'>Dolce Farina was started in 2019 by Rosa Donatelli and Rita Ammendolia; <br></br>
          Twin sisters who enjoy making people happy. <br></br>
          We are home bakers offering delicious desserts made with wholesome ingredients. <br></br>
          We love baking our Homemade Desserts,  Specialty cookies, and Delicious Cakes. <br></br>
          Crave some homemade goodness? Contact us today.<br></br>
          “Everyone’s day is better with something sweet”</p>
          </div>
    </div>
  );
}

export default AboutUs;