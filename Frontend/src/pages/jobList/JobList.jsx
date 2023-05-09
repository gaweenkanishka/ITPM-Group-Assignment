import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function JobList() {
    const [job, setJob] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:port/api/.......') 
        .then((res)=>{
            setJob(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

  return (
    <div>
        <h2>New Job Listing</h2>
        
        <br/>
        {job.map((jobData) => (
            <div key={jobData._id}>
                <h3>{jobData.name}</h3>
                <p>{jobData.department}</p>
                <h3>{jobData.province}</h3>
                <h3>{jobData.type}</h3>
                <button>Apply</button>
            </div>
        ))}
        <hr/>
        <br/>
    </div>
  )
}
