import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/postman.jpg'
import IMG3 from '../../assets/vega.png'
import IMG4 from '../../assets/project3.jpg'
import IMG5 from '../../assets/project2.png'
import IMG6 from '../../assets/cregaatine.png'

const Portfolio = () => {
  // DO NOT USE THE IMAGES IN PRODUCTION
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'web development',
      github: 'https://github.com/Carry-Potter/WebProjekat/tree/master/prodavnica',
      
    }, {
      id: 2,
      image: IMG2,
      title: 'internet software architecture',
      github: 'https://gitlab.com/mrrobot331/web-frontend-and-backend/-/tree/master/isa-project',
      demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    }, {
      id: 3,
      image: IMG3,
      title: 'vega time-sheet',
      github: 'https://gitlab.com/mrrobot331/vega-it',
      demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    }, {
      id: 4,
      image: IMG5,
      title: 'AI',
      github: 'https://gitlab.com/mrrobot331/hackaton2021',
      demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
    },
    {
      id: 5,
      image: IMG4,
      title: 'android aplication',
      github: 'https://gitlab.com/mrrobot331/projekatandroid',
      demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    }, {
      id: 6,
      image: IMG6,
      title: 'Cregaatine wordpress',
      github: 'https://rs.cregaatine.com/',
      demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>Moji radovi</h5>
      <h2 className='about__text'>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'> Github </a>
                  
                </div>
              </article>
            )
          })
        }
      </div>


    </section>
  )
}

export default Portfolio