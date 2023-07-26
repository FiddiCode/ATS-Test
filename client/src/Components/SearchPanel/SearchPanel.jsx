import React,{useState} from 'react'
import './searchPanel.css'

const SearchPanel = () => {
    const [searchData,setSearchData]=useState({
      campId:"",
      callDateFrom:"",
      callDateTo:"",
      phoneNumber:"",
      volunteerNumber:"",
      agentId:"",
      responseCode:""
    })

    const handleSearchData=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setSearchData({
          ...searchData,
          [name]:value
        })
    }
    

  return (
    <div className='searchPanel'>
      <form action="">
        <div className='data'>
        <div className='fields'>
        <label htmlFor='CampId'>Campaign Id</label>
        <select>
          <option value="" disabled selected hidden>Select ...</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
        </select>
        </div>
        <div className='fields'>
        <label htmlFor='callDateFrom'>Call Date From</label>
        <input type='date' id='callDateFrom' name='callDateFrom' value={searchData.callDateFrom} onChange={handleSearchData}></input>
        </div>
        <div className='fields'>
        <label htmlFor='callDateTo'>Call Date To</label>
        <input type='date' id='callDateTo' name='callDateTo' value={searchData.callDateTo} onChange={handleSearchData}></input>
        </div>
        <div className='fields'>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <input type='number' id='phoneNumber' name='phoneNumber' placeholder='NA' value={searchData.phoneNumber} onChange={handleSearchData}></input>
        </div>
        <div className='fields'>
        <label htmlFor='VolunteerNumber'>Volunteer Number</label>
        <input type='number' id='volunteerNumber' name='volunteerNumber' placeholder='NA' value={searchData.volunteerNumber} onChange={handleSearchData}></input>
        </div>
        <div className='fields'>
        <label htmlFor='agentId'>Agent Id</label>
        <input type='number' id='agentId' name='agentId' placeholder='NA' value={searchData.agentId} onChange={handleSearchData}></input>
        </div>
        <div className='fields'>
        <label htmlFor='responseCode'>Response Code</label>
        <input type='number' id='responseCode' name='responseCode' placeholder='NA' value={searchData.responseCode} onChange={handleSearchData}></input>
        </div> 
        </div>
        <div className="buttons">
          <button type='submit'>Search</button>
          <button type='reset'>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default SearchPanel;