import React from 'react'
import './JobListHeader.css';
import HeaderImg from '../../assets/Image7.jpg';
//import Search from '../../images/Manifire.png';

export default function JobListHeader() {
  return (
    <div>
      <div className='img-div'>
        <img className='job-list-header-img'src={HeaderImg} alt='Header Image'/>
      </div>
        
      <div className='white-back'>
          <h2 className='job-list-header-title'>Jobs and Jobs Search For Job Seekers</h2>
          <div>
            <input
                className='job-list-search'
                type='text'
                placeholder='Search'
            >
            </input>
            {/* <button className='btn-search'>Search</button> */}
          </div>
      </div>
    </div>
  )
}
