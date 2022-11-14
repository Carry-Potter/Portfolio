import React from 'react'


import './header.css'
import CTA from './CTA'
import ME from '../../assets/senka.png'
import Sociall from './Sociall'
import Typed from 'react-typed';

var typed4 = new Typed('#typed4', {
  strings: ['Some strings without', 'Some HTML', 'Chars'],
  typeSpeed: 0,
  backSpeed: 0,
  attr: 'placeholder',
  bindInputFocusEvents: true,
  loop: true
});

const Header = () => {


  return (

    <header className="bg">
      <div className="container header__container">
        <div className="sectionss">

          <img src={ME} alt="me" className='mains' />
          <div className='maring__top'>
          <h5 className="title_first">Zdravo, ja sam</h5>

          <h1 className="title_second">Ivan Jelić</h1>
          <div class="contener centered "></div>
          
          <h5 className="text-light" type="text"><Typed
            strings={[
              'Frontend Developer',
              'Backend Developer',
              'Android Developer']}
            typeSpeed={40}
            backSpeed={50}
            loop >


          </Typed></h5>
          <CTA />
          </div>
          </div>
        
        
        <Sociall />

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header >
  )
}


export default Header