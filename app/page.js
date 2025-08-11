import About from '@/components/About'
import BookingForm from '@/components/BookingForm'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FAQ />
      <BookingForm />
      <Contact />
    </>
  )
}

export default Home