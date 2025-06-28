import React from 'react'
import Hero from '../components/Hero'
import NewArrival from '../components/NewArrival'
import TopSelling from '../components/TopSelling'
import DressStyle from '../components/DressStyle'
import HappyCustomers from '../components/HappyCustomers'

const Home = () => {
  return (
    <main>
        <Hero/>
        <NewArrival/>
        <TopSelling/>
        <DressStyle/>
        <HappyCustomers/>
    </main>
  )
}

export default Home
