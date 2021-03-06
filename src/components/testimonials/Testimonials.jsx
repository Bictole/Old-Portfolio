import React from 'react'
import './testimonials.css'
import ALEXANDRE from '../../assets/alexandre.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>)
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials