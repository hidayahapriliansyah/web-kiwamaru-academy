import React from 'react'
import Hero from './components/hero'
import ProgramList from './components/program-list'
import BenefitSection from './components/benefit'
import ProgramCTA from './components/cta-closing'

export default function ProgramPage() {
  return (
    <>
     <Hero /> 
     <ProgramList />
     <BenefitSection />
     <ProgramCTA />
    </>
  )
}
