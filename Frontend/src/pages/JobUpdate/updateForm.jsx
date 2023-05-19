import React, { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from "../../assets/image4.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const updateForm = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [job, setJob] = useState("");
    const [jobTitle, setJobTitle] = useState(job.jobTitle);
    const [type, setType] = useState(job.type);
    const [location, setLocation] = useState(job.location);
    const [receive, setReceive] = useState(job.receive);
    const [jobDescription, setDescription] = useState(job.jobDescription);
    const [openfor, setOpenfor] = useState(job.Openfor);
    const [companyName, setCompanyName] = useState(job.companyName);

    //   clearForm=()=>{
    //     setJobTitle("");
    //     setType("");
    //     setLocation("");
    //     setReceive("");
    //     setDescription("");
    //     setOpenfor("");
    //     setCompanyName("");

    //   }

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            jobTitle,
            type,
            location,
            receive,
            jobDescription,
            openfor,
            companyName
        };

        axios
            .put(`http://localhost:8000/api/jobsApplication/${id}`, data)
            .then((response) => {
                window.alert("Job Updated !")
                navigate("/jobList");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    

   const deleteJob = ()=>{
        const response = window.confirm('Are you sure ?')
        if(response){
            axios
                .delete(`http://localhost:8000/api/jobsApplication/${id}`)
                .then((response) => {
                  //  console.log(res)
                window.alert("Job Deleted !")
               // navigate("/jobList");
            })
                .catch((error) => {
                console.log(error);
            });
        }
        
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/jobsApplication/${id}`)
            .then((response) => {
                setJob(response.data);
            })  
            .catch((error) => {
                console.log(error);
            });
    }, []);



    // clearForm();



    return (
        <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center', 
        height: '120vh',width: '100vw',}}>
       
                    <div
                    style={{
                        position: 'fixed',
                        top: '20px',
                        left: '20px',
                        cursor: 'pointer',
                    }} >
                    <Link to="/jobHome">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/010/329/434/original/left-arrow-arrow-3d-illustration-png.png"
                        alt="Back"
                        style={{
                        width: '50px',
                        height: '50px',
                        }}
                    />
                    <span
                        style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: 'white',
                        }}
                    >
                        Back
                    </span>
                    </Link>
                    </div>
                        
       
            {/* <h1>Job application</h1>
            <p


            >title
            </p> */}
            {/* <label htmlFor="jobtitle" className="block text-lg font-bold dark:text-blue-800 "
            >
                Job Title
                <input
                    defaultValue={job.jobTitle}
                    onChange={(e) => { setJobTitle(e.target.value) }}

                >
                </input> */}
                {/* <span className='ml-8 font-bold text-gray-800  '> {job.jobTitle} </span> */}
            {/* </label> */}


                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', }}>
                    <div style={{backgroundColor:'white', maxWidth: '75%', padding: '40px', border: '2px solid #ccc', borderRadius: '4px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>

                    <h1 style={{ textAlign: 'center', marginBottom: '20px',fontSize:'30px', fontStyle:'extrabold'}}>
                       EDIT JOB DETAILS
                    </h1>
                    <form >
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="jobTitle" style={{ display: 'inline-block', width: '100px' }}>
                                Job Title:
                            </label>
                            <input
                                type="text"
                                id="jobTitle"
                                defaultValue={job.jobTitle}
                                onChange={(event) => setJobTitle(event.target.value)}
                                style={{ marginLeft: '10px', width:'75%', }}
                            />
                        </div>


                        <div style={{ marginBottom: '20px',marginTop:'10px', }}>
                            <label htmlFor="type" style={{ display: 'inline-block', width: '100px' }}>
                                Type:
                            </label>
                            <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                                <input
                                    type="radio"
                                    id="fulltime"
                                    name="type"
                                    value="Full Time"
                                    checked={job.type ==  'FullTime'}
                                    onChange={() => setType('Full Time')}
                                />
                                <label htmlFor="fulltime">Full Time</label>

                                <input
                                    type="radio"
                                    id="parttime"
                                    name="type"
                                    value="Part Time"
                                    checked={job.type ==  'PartTime'}
                                    onChange={() => setType('Part Time')}
                                    style={{ marginLeft: '10px' }}
                                />
                                <label htmlFor="parttime">Part Time</label>

                                <input
                                    type="radio"
                                    id="internship"
                                    name="type"
                                    value="Internship"
                                    checked={job.type ==  'Internship'}
                                    onChange={() => setType('Internship')}
                                    style={{ marginLeft: '10px' }}
                                />
                                <label htmlFor="internship">Internship</label>

                                <input
                                    type="radio"
                                    id="contract"
                                    name="type"
                                    value="Contract"
                                    checked={job.type ==  'Contract'}
                                    onChange={() => setType('Contract')}
                                    style={{ marginLeft: '20px' }}
                                />
                                <label htmlFor="contract">Contract</label>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="location" style={{ display: 'inline-block', width: '100px' }}>
                            Location:
                            </label>
                            <input
                                type="text"
                                id="location"
                                defaultValue={job.location}
                                onChange={(event) => setLocation(event.target.value)}
                                style={{ marginLeft: '10px',width:'75%', }} />

                        </div>

                        <div style={{ marginBottom: '20px', marginTop:'10px', }}>
                            <label htmlFor="receive" style={{ display: 'inline-block', width: '100px' }}>
                                Receive:
                            </label>
                            <input
                                type="text"
                                id="receive"
                                defaultValue={job.receive}
                                onChange={(event) => setReceive(event.target.value)}
                                style={{ marginLeft: '10px', width:'75%', }}/>
                            
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="description" style={{alignContent:'center', display: 'inline-block', width: '100px' }}>
                                Description:
                            </label>
                            <textarea
                                id="description"
                                defaultValue={job.jobDescription}
                                onChange={(event) => setDescription(event.target.value)}
                                style={{ marginLeft: '10px', width: '420px' }}>
                            </textarea>
                            </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="openfor" style={{ display: 'inline-block', width: '100px', }}>
                                Open for:
                            </label>
                            <input
                                type="text"
                                id="openFor"
                                defaultValue={job.openFor}
                                onChange={(event) => setOpenfor(event.target.value)}
                                style={{ marginLeft: '10px',width:'75%' }}/>
                            
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="companyName" style={{marginTop:'5px', display: 'inline-block', width: '100px', }}>
                                Company Name:
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                defaultValue={job.companyName}
                                onChange={(event) => setCompanyName(event.target.value)}
                                style={{ marginLeft: '10px', width:'75%', }}
                            />
                        </div>

                        {/* submit button */}
                        <div style={{display:'inline-block'}}>
                         
                        <button
                            onClick={handleSubmit}
                            type="submit" 
                            style={{marginLeft: '100px', marginRight: 'auto',  marginTop: '10px',  padding: '8px 16px',
                            backgroundColor: '#0c9463',  color: '#fff', border: 'none',  borderRadius: '4px', cursor: 'pointer',}} > 
                             Submit
                        </button>
                        
                           
                            <Link to ="/jobList">
                            <button
                            onClick={deleteJob}
                            type="delete"
                            style={{marginLeft: '200px', marginRight: '100px',  marginTop: '10px',  padding: '8px 16px',
                            backgroundColor: '#0c9463',  color: '#fff', border: 'none',  borderRadius: '4px', cursor: 'pointer',}} > 
                             Delete
                        </button>
                        </Link>
                        </div>
                    </form>
                </div>
            </div >
        </div >
      
                              
                             
                               
                              
                      


    );
}

export default updateForm
