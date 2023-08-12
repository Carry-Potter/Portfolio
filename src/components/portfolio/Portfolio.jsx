import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/Screenshot_6.png'
import IMG2 from '../../assets/Screenshot_5.png'
import IMG3 from '../../assets/Screenshot_4.png'
import IMG4 from '../../assets/vega.png'
import IMG5 from '../../assets/project3.jpg'
import IMG6 from '../../assets/cregaatine.png'


const Portfolio = () => {
  // DO NOT USE THE IMAGES IN PRODUCTION
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'tesla clone',
      github: 'https://github.com/Carry-Potter/tesla',
      live:'https://carry-potter.github.io/tesla/'
    }, {
      id: 2,
      image: IMG2,
      title: 'Brabus-clone',
      github: 'https://github.com/Carry-Potter/brabus.io',
      live:'https://carry-potter.github.io/brabus.io/'
    }, {
      id: 3,
      image: IMG3,
      title: 'netflix-clone',
      github: 'https://github.com/Carry-Potter/netflix-clone',
      live:'https://carry-potter.github.io/netflix-clone'
    }, {
      id: 4,
      image: IMG4,
      title: 'vega time-sheet',
      github: 'https://gitlab.com/mrrobot331/vega-it',
      
    },
    {
      id: 5,
      image: IMG5,
      title: 'android aplication',
      github: 'https://gitlab.com/mrrobot331/projekatandroid',
      
    }, {
      id: 6,
      image: IMG6,
      title: 'Cregaatine wordpress',
      github: 'https://rs.cregaatine.com/',
      
    }
  ]
  return (
    <section id='portfolio'>
      
      <h2 className='about__text'>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, live }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'> Github </a>
                  <a href={live} className='btn btn-primary' target='_blank'> live </a>
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