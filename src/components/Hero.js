import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

class Hero extends React.Component {
  render() {
    return (
      <section id="hero" className="hero">
        <Swiper
          className="hero__slider"
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            el: '.hero__slider-pagination',
            type: 'bullets',
            clickable: true,
            bulletElement: 'button',
            bulletClass: 'hero__slider-pagination-item',
            bulletActiveClass: 'hero__slider-pagination-item--active',
          }}
          a11y={{
            firstSlideMessage: 'To jest pierwszy slajd',
            lastSlideMessage: 'To jest ostatni slajd',
            nextSlideMessage: 'Następny slajd',
            paginationBulletMessage: 'Idź do slajdu {{index}}',
            prevSlideMessage: 'Poprzedni slajd'
          }}
        >
          <SwiperSlide className="hero__slide" tag="article">
            <StaticImage 
              src="./../images/slides/hero-1.jpg" 
              alt="" 
              loading="eager" 
              className="hero__img" 
              layout="fullWidth" 
              placeholder="blurred"
            />
            <div className="hero__content">
              <h2 className="hero__heading">
                Przykładowy tekst na headline w zadaniu testowym_1
              </h2>
              <a href="#" className="hero__button">Zobacz</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hero__slide" tag="article">
            <StaticImage 
              src="./../images/slides/hero-2.jpg" 
              alt="" 
              loading="eager" 
              className="hero__img" 
              layout="fullWidth" 
              placeholder="blurred"
            />
            <div className="hero__content">
              <h2 className="hero__heading">
                Przykładowy tekst na headline
              </h2>
              <a href="#" className="hero__button">Zobacz</a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="hero__slide" tag="article">
            <StaticImage 
              src="./../images/slides/hero-3.jpg" 
              alt="" 
              loading="eager" 
              className="hero__img" 
              layout="fullWidth" 
              placeholder="blurred"
            />
            <div className="hero__content">
              <h2 className="hero__heading">
                Przykładowy tekst na headline w zadaniu testowym_2
              </h2>
              <a href="#" className="hero__button">Zobacz</a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="hero__slider-pagination" role="group" aria-label="Nawiguj po slajdach" />
      </section>
    );
  }
}

export default Hero;
