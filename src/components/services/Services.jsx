import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>My parcours</h5>
      <h2>What I Did</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>LRDE</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>YAKA</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>SCIA</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem Ispum</p>
            </li>
          </ul>
        </article>
      </div>
    </section>

  )
}

export default Services