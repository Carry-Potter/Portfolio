import React from 'react'
import {AiOutlineHome} from '@react-icons/all-files/ai/AiOutlineHome'
import {AiOutlineBook} from '@react-icons/all-files/ai/AiOutlineBook'
import {AiOutlineUser} from '@react-icons/all-files/ai/AiOutlineUser'
import {AiOutlineRead} from '@react-icons/all-files/ai/AiOutlineRead'
import {AiTwotonePhone} from '@react-icons/all-files/ai/AiTwotonePhone'
import './nav.css'

import { useState } from 'react'
const Navigation = () => {
  const[activeNav,setActiveNav]=useState("#");
  return (
    <nav>
     <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '*' }><AiOutlineUser/></a>
     <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
     <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineRead/></a>
     <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#con|' ? ' active' : ''}><AiTwotonePhone/></a>
    </nav>
  )
}

export default Navigation