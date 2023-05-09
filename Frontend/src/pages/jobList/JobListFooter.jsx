import React from 'react'
import './JobListFooter.css';

export default function JobListFooter() {
  return (
    <div>
        <button className='btn-explore'>Explore More Jobs</button>
        <br/>
        <h2 className='most-demand'>Most Demanding Categories</h2>
        <br/>

        <div className='job-categories'>
            <div className='left-list'>
                <ul>
                    <li>Sales/ Marketing/ Merchandisng</li>
                    <li>Appearel/ Garment/ Clothing</li>
                    <li>Driver/ Chauffer/ Transport</li>
                    <li>Medical/ Health/ Pharmeceutical</li>
                </ul>
            </div>

            <div className='right-list'>
                <ul>
                    <li>Maintenance/ Repair</li>
                    <li>Customer Relations</li>
                    <li>Hotels/ Restaurants</li>
                    <li>Constructions</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
