import React from 'react';
import Luis from './images/LuisPerez.jpeg'
import Laurel from './images/LaurelGalaty.jpeg'
import Marlon from './images/IMG_9005.jpeg'
// import Luis from './images/LuisPerez.jpeg'

// Have the basic layout of the page. Which includes:
// 1.our values which we would get from Wyncode.
// 2. Four Column pitures with a hover feature which would include our bio. + Pet.

const AboutUs = () => {
  return (
   <div className="about-us">
      <h1>About Us</h1> 
         
         
         <div className="column">
            <div className="card ">
               <img src={Luis}/>
             <div className="container">
               <h2>Luis</h2>
                  <p className="title">Developer</p>
            </div>
         </div>
      </div>
      
      
      <div className="column">
            <div className="card ">
               <img src={Marlon}/>
             <div className="container">
               <h2>Marlon</h2>
                  <p className="title">Developer</p>
            </div>
         </div>
      </div>
      
      <div className="column">
            <div className="card">
               <img/>
             <div className="container">
               <h2>Eugene</h2>
                  <p className="title">Developer</p>
            </div>
         </div>
      </div>
      
      <div className="column">
            <div className="card">
               <img src={Laurel}/>
             <div className="container">
               <h2>Laurel</h2>
                  <p className="title">Developer</p>
            </div>
         </div>
      </div>
   </div>
   );
};
export default AboutUs;
