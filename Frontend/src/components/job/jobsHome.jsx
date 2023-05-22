
import React from 'react';
// import JobVacancy from './JobVacancy';
import Image2 from '../assets/img2.jpg';
import Image from '../assets/img1.jpeg';
import hedding from '../assets/hedding.png';
import Image3 from '../assets/img3.jpg';

function JobsHome() {
  const mystyle = {
    float: 'left',
    width: '33.33%',
    padding: '5px',
    display: 'inline',
    marginTop: '400px',
    marginBottom: '150px',

  };

  const buttonStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'green',
    border: 'none',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '16px'
  };


  return (
    <div>
      <img src={hedding} style={{width: "100%"}} />
      <div>
        <div style={{ width: "50%", height: "50px", display: "inline", float: "right" }}>
          <div> <br></br>
            <h2 style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto", textAlign: "center", fontSize: "35px", marginTop: "20px" }}>
              GIVING CHANCES TO SUSTAIN YOUR LIFE</h2><br></br>
            <p style={{ backgroundColor: "#8c8c8c", padding: "50px",  height: "100%", width: "100%",  fontSize: "25px" }}>
              We get that one size does not fit all and have built a
              platform that gives you what you need new skills,<br></br>
              new confidence, or new resources to help you on a<br></br>
              path to gainful employment.</p>
          </div>


        </div>
        <div style={{ width: "50%", height: "50px", display: "inline", float: "left" }}>

          <img src={Image} style={{ padding: "50px" }} />

        </div>
      </div>

      {/* <button style={{position: "relative", margineRight: "70%"}} >Click Me</button> */}
        <div>
        
        </div>
      <div style={{ position: "relative", marginTop: "450px" }}>
      <hr style ={{border:"2px solidblack"}}></hr>
          <h2 style={{fontSize:"40px",fontWeight: 'bold'}}>FIND YOUR PATH</h2>
        <div style={{ width: "30%", display: "inline-block" }}>
          <img src={Image} style={{ padding: "20px" }} />
          <button style={{ position: "relative", top: "-80px", backgroundColor: "#0b8457", color: "Black", padding: "8px", borderRadius: "10px" }}>Self Employer</button>
        </div>
        <div style={{ width: "30%", display: "inline-block" }}>
          <img src={Image2} style={{ padding: "20px", height:"250px", width:"100%"}} />
          <button style={{ position: "relative", top: "-80px", backgroundColor: "#0b8457", color: "Black", padding: "8px", borderRadius: "10px" }}>Job Seeker</button>
        </div>
        <div style={{ width: "30%", display: "inline-block" }}>
          <img src={Image3} style={{ padding: "20px" }} />
          <button style={{ position: "relative", top: "-80px", backgroundColor: "#0b8457", color: "Black", padding: "8px", borderRadius: "10px" }}>Employee</button>
        </div>
      </div>
      {/* <div>
      <div >
      
        <div>
        <img src={Image} style={mystyle}/>
       
      </div>
      <div>
        <img src={Image} style={mystyle}/>
      </div>
      </div>
     
      </div> */}


    </div>
  );

};


// <JobVacancy />

export default JobsHome;


