import React from 'react'
import CV from '../../assets/IVANJELIC.pdf'
const CTA = () => {
  return (
    <div className= 'cta'>
        <a href={CV} download className='btn marg'> Preuzmi CV </a>
        <a href="#contact" className='btn btn-primary'> Kontaktiraj me </a>
    </div>
  )
}

export default CTA