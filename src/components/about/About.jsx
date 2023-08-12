import React ,{useState}from 'react'
import './about.css'
import ME from '../../assets/rrr1.png'

import Lottie from "lottie-react";

import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { AiOutlineSecurityScan } from "@react-icons/all-files/ai/AiOutlineSecurityScan";
import animationData from "../../assets/praksa.json";
import animationData1 from "../../assets/obrazovanje.json";
import animationData2 from "../../assets/nagrada.json";
const About = () => {
  const [show,setShow]=useState(false)
  
  return (
    <section id="about">
      <div className="App">

</div>

      {/*<h5>Get To Know</h5>*/}
      <h2 className='about__text'>O meni</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" className=' about__me'  />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <Lottie className='about__icon animate' animationData={animationData2}  />
              <h5>Priznanja</h5>
              <small>2. mesto singidunum hakaton
                2021 na temu Veštačka
                inteligencija, Web.
              </small>
            </article>
            <article className="about__card">
            <Lottie className='about__icon animate' animationData={animationData1}  />
              <h5>Obrazovanje</h5>
              <small>Univerzitet Singidunum,
                Novi Sad | Oct 2018 - trenutno
                Softversko i informaciono
                inženjerstvo
              </small>
            </article>
            <article className='about__card'>
            <Lottie className='about__icon animate' animationData={animationData}  />
              <h5>prakse</h5>
              <small>vega it - 2021  ( full stack ) <br />
                marble it - 2019 ( frontend Vue.js)<br />
                eipix 2017 ( Unity )<br />
                eipix 2016 ( Unity )<br />
              </small>
            </article>
          </div>
          {
show?<p className='color'>
vega it - 2021  ( full stack ) - Na praksi sam imao zadatak da napravim sajt za raspored rada na projektima. Dodavanje projekta u kalendar, dodavanje klijenta, dodavanje potrebnog vremena za rad na datom zadatku i još mnogo toga. <br /><br />
marble it - 2019 ( frontend Vue.js) - U marble kompaniji bavio sam se frontendom i pravljenje aplikacije za chat.<br /><br />
eipix 2017 ( Unity ) - zbog drugog dolaska i većeg znanja dobijao sam razne zadatke u vidu pravljenja igara, najobimniji je bio 'temple run 360'.
Igrac koji treba da trči po stazi sakuplja poene i izbegava prepreke dok staza ima mogućnost da ide u svim pravcima. <br /><br />
eipix 2016 ( Unity ) - Prva praksa bila je u epixu. Na praksu sam dosao sa znanjem C# ali ne i sa znanjem Unity-a.
Tako da je praksa bila namenjena učenju osnove Unity-a.<br />
</p> :null
}
<button onClick={()=>setShow(!show)}className='btn btn-primary btn_about'><h1>Više o praksi </h1></button>
      

              
        </div>
      </div>
    </section>
  )
}

export default About