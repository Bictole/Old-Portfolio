import React from 'react'
import './portfolio.css'
import ODYH from '../../assets/odyh.png'

const data = [
  {
    id: 1,
    image: ODYH,
    title: 'The Odyh Project',
    github: 'https://github.com/Bictole',
    demo : 'https://github.com/Bictole'
  },
  {
    id: 2,
    image: ODYH,
    title: 'The Odyh Project',
    github: 'https://github.com/Bictole',
    demo : 'https://github.com/Bictole'
  },
  {
    id: 3,
    image: ODYH,
    title: 'The Odyh Project',
    github: 'https://github.com/Bictole',
    demo : 'https://github.com/Bictole'
  },
  {
    id: 4,
    image: ODYH,
    title: 'The Odyh Project',
    github: 'https://github.com/Bictole',
    demo : 'https://github.com/Bictole'
  },
  {
    id: 5,
    image: ODYH,
    title: 'The Odyh Project',
    github: 'https://github.com/Bictole',
    demo : 'https://github.com/Bictole'
  },
  {
    id: 6,
    image: ODYH,
    title: 'The Odyh Project',
    github: 'https://github.com/Bictole',
    demo : 'https://github.com/Bictole'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <container className="portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
  
              <h3>{title}</h3> 
  
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
              </div>
            </article>)
          })
        }        
      </container>
    </section>
  )
}

export default Portfolio