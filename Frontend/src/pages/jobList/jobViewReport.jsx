import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

const jobViewReport = () => {

    const [jobs, setJobs] = useState([]);
    let count = 0;

    useEffect(()=>{
        axios.get('http://localhost:8000/api/jobsApplication/')
        .then((res)=>{
            setJobs(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    let info = [];
      
    const pdfGen = () =>{
      {
        const doc = new jsPDF();
        doc.text("View Details", 20,10);
        autoTable(doc, {
          head : [["JobTitle","Company Name", "No.of views"]],
          body: info,
        });
        doc.save("viewDetails.pdf");
      }
    }

    return (
        <div>
            <div style={{
                width: '40%', height: '500px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                 backgroundColor: 'gray', borderRadius:'20px',
                padding: '20px', position: 'relative', flexDirection: 'column',
                alignItems: 'center', marginLeft: '500px', marginTop: '150px' }}>
           

                <button style={{
                    position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'green', color: 'white',
                    border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={pdfGen}>
                    Generate Report
                </button>
                
                
                   <div> 
                   
                    <table style={{width:'100%'}}>
                        <tr >
                            <th style={{padding:'15px',textAlign:'left'}}>JobTitle</th>
                            <th  style={{padding:'15px',textAlign:'left'}} >Company Name</th>
                            <th style={{padding:'15px',textAlign:'left'}}>No.of views</th>
                           
                        </tr>
                        {jobs.map((jobsData)=>(
                        <tr>
                            {info.push([jobsData.jobTitle,jobsData.companyName ,jobsData.views ])}
                            <td style={{alignItems:'left', padding:'15px',marginLeft:'8px'}} >{jobsData.jobTitle}</td>
                            <td style={{padding:'15px',textAlign:'left'}}>{jobsData.companyName}</td>
                            <td style={{padding:'15px',textAlign:'left'}}>{jobsData.views}</td>
                           
                        </tr>
                        
                        ))}
                          </table>
                        </div>  

                
            </div>
                 <Link to="/">
                 <span style={{  fontSize: '14px', fontWeight: 'bold', color: '#000',
                     marginLeft:'50px',marginBottom:'50px',marginBottom:'30px' }} >
                    Back
                 </span>
                 <img src="https://freesvg.org/img/kuba_arrow_button_set_1.png" alt="Back"
                     style={{  width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%', 
                     cursor:'pointer',marginLeft:'50px', marginBottom:'50px',}} />
                     
                 </Link>         
        </div>
    )
}

export default jobViewReport
