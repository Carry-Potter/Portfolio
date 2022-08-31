import React from 'react'
import { AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";

import { AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";

import { AiFillInstagram} from "@react-icons/all-files/ai/AiFillInstagram";

const Sociall = () => {
  return (
    <div className='header_socials' >
    <a href="https://gitlab.com/mrrobot331" target="_blank"> <AiFillGithub /></a>
    <a href="https://www.linkedin.com/" target="_blank"> <AiFillLinkedin /></a>
    <a href="https://www.instagram.com/jelic_i99/" target="_blank"> <AiFillInstagram /></a>
    </div>
  )
}

export default Sociall