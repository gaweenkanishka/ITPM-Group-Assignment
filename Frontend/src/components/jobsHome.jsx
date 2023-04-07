
import React from 'react';
//import JobVacancy from './JobVacancy';
import Image from '../assets/img1.jpeg';


function JobsHome() {
  return (
    <div>
      <div>
      <div style={{width: "50%", height: "50px",  display: "inline", float: "right"}}>
        <p>Text</p>
        
      </div>
      <div style={{width: "50%", height: "50px",  display: "inline", float: "left"}}>
        <img src={Image} style={{padding: "50px"}}/>
      </div>
      </div>
      <div>
        {/* <img src={Image}/> */}
      </div>
      
    </div>
  );

};

export default JobsHome;


