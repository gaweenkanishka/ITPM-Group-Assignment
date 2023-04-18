import React, { useState } from 'react';
import './Inform.css'; // import the CSS file for styling
// import hedding from "../assets/hedding.png";
import Image4 from "../assets/img4.png";
function JobsForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [option, setOption] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  }

  return (
    <div>
      {/* <img src={hedding} style={{position: "cover"}} /> */}
      <img src ={ Image4}style={{width: "100%",height:"280px"}} />
      <div className="form-container">
        <h2 className="form-heading">Enter your information below as the first step, and we'll go on to the next.</h2>
        <form className="form" onSubmit={handleSubmit} style={{ marginLeft: '10px' }}>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="rounded-input" />
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="rounded-input" />
          </label>
          <label>
            Date of Birth:
            <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="rounded-input" />
          </label>
          <label>
            Option:
            <select value={option} onChange={e => setOption(e.target.value)} className="rounded-input">
              <option value=""></option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
          <label>
            Email Address:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="rounded-input" />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={e => setDescription(e.target.value)} className="rounded-input"></textarea>
          </label>
          <button type="submit" className="submit-button" style={{ backgroundColor: "#009900" }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default JobsForm;