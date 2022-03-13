import React from 'react'
import './portfolio.css'
import ODYH from '../../assets/odyh.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <container className="portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ODYH} alt="Odyh project" />
          </div>

          <h3>Portfolio Title</h3> 

          <div className="portfolio__item-cta">
            <a href="https://github.com/Bictole" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Bictole" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>        
      </container>
    </section>
  )
}

export default Portfolio