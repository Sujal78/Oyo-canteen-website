import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Corousal from '../components/Corousal'

export default function Home() {
  return (
    <div>
      <div><Navbar/></div>
      <div><Corousal/></div>
      <div className='m-3'><Card/></div>
      <div className='m-3'><Card/></div>
      <div className='m-3'><Card/></div>
      <div className='m-3'><Card/></div>
      <div><Footer/></div>
    </div>
  )
}
