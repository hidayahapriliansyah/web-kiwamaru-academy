import { BiayaSection } from './components/biaya'
import Hero from './components/hero'
import React from 'react'
import { PersyaratanAdmin } from './components/persyaratan-admin'
import { PersyaratanLain } from './components/persyaratan-lain'
import { LayananSection } from './components/layanan'
import BenefitSection from './components/benefit'
import ProgramClosing from './components/closing'

export default function ProgramMagangPage() {
  return (
    <>
      <Hero />
      <BiayaSection />
      <PersyaratanAdmin />
      <PersyaratanLain />
      <LayananSection />
      <BenefitSection />
      <ProgramClosing />
    </>
  )
}
