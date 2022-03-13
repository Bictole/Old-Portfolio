import React from 'react'
import './testimonials.css'
import ALEXANDRE from '../../assets/alexandre.png'

const data = [
  {
    avatar: ALEXANDRE,
    name: 'Alexandre Lemonnier',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae architecto dicta maxime necessitatibus vero fuga eveniet quod, magnam dolorum illum praesentium obcaecati voluptatum exercitationem debitis facere omnis provident est. Porro.'
  },
  {
    avatar: ALEXANDRE,
    name: 'Alexandre Lemonnier',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae architecto dicta maxime necessitatibus vero fuga eveniet quod, magnam dolorum illum praesentium obcaecati voluptatum exercitationem debitis facere omnis provident est. Porro.'
  },
  {
    avatar: ALEXANDRE,
    name: 'Alexandre Lemonnier',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae architecto dicta maxime necessitatibus vero fuga eveniet quod, magnam dolorum illum praesentium obcaecati voluptatum exercitationem debitis facere omnis provident est. Porro.'
  },
  {
    avatar: ALEXANDRE,
    name: 'Alexandre Lemonnier',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae architecto dicta maxime necessitatibus vero fuga eveniet quod, magnam dolorum illum praesentium obcaecati voluptatum exercitationem debitis facere omnis provident est. Porro.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Some Reviews</h5>
      <h2>Tesimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) =>{
            return(
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </article>)
          })
        }

      </div>
    </section>
  )
}

export default Testimonials