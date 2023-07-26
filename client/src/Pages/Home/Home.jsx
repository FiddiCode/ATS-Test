import React from 'react'
import './home.css'
import Header  from '../../Components/header/Header'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Container from '../../Components/Container/ContainerSection'

const Home = () => {

  return (
    <div className='home'>
        <AccountCircleIcon className="icon"/>
        <Header/>
        <Container/>
    </div>
  )
}

export default Home