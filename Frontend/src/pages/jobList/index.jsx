import React from 'react'
import JobListHeader from './JobListHeader';
import JobList from './JobList'
import JobListFooter from './JobListFooter'

const index = () => {
  return (
    <div>
    <JobListHeader/>
    <JobList/>
    <JobListFooter/>
</div>
  )
}

export default index
