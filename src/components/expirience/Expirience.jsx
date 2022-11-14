import React from 'react'
import './expirience.css'
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
const Expirience = () => {
  
  return (




    
    <section id='experience'>
      
      <h2 className='about__text'>Moje iskustvo</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <AiFillCheckCircle className="experience_details-icon" />
              <div>
                <h4>wordpress</h4>
               {/*<small className=" text-light|" >Experienced</small> */}
              </div>
            </article>
          <article className='experience__details'>
              <AiFillCheckCircle  className="experience_details-icon"/>
              <div>
                <h4>React</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className="experience_details-icon" />
              <div>
                <h4>Angular</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
               
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle  className="experience_details-icon"/>
              <div>
                <h4>CSS</h4>
               
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle  className="experience_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className="experience_details-icon" />
              <div>
                <h4>Botstrap</h4>
               {/*<small className=" text-light|" >Experienced</small> */}
              </div>
            </article>
            
            
          </div>
        </div>





        <div className="experience__backend">

          <h3>Backend Development</h3>
          <div className="experience__content">
          
            <article className='experience__details'>
              <AiFillCheckCircle className="experience_details-icon" />
              <div>
                <h4>Spring boot</h4>
                
              </div>
            </article>
            
            <article className='experience__details'>
              <AiFillCheckCircle className="experience_details-icon" />
              <div>
                <h4>.Net</h4>
                </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className="experience_details-icon" />
              <div>
                <h4>SQL</h4>
                </div>
            </article>
            
          </div>
        </div>
      </div>


    </section>
  )
}

export default Expirience