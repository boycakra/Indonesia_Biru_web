import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import arrowLeft from '../../../assets/icons/Arrow-left.svg';
import arrowRight from '../../../assets/icons/Arrow-right.svg';

import img1 from '../../../assets/images/Event_oc.jpeg';
import img2 from '../../../assets/images/Event_Rescedule.jpeg';

const eventsData = [
    {
      title: 'IBF Event',
      description: (
        <>
          Get yourself down to Gili Asahan on 20th & 21st January to take part in Crafting Coral for the Coral Connect event - Organized by{' '}
          <a href="https://www.instagram.com/indonesiabirufoundation/?g=5/" target="_blank" rel="noopener noreferrer">
            @indonesiabirufoundation
          </a>
          ,{' '}
          <a href="https://www.instagram.com/pearlbeachresortgiliasahan/" target="_blank" rel="noopener noreferrer">
            @pearlbeachresortgiliasahan
          </a>
          ,{' '}
          <a href="https://www.instagram.com/oceanwaydive/" target="_blank" rel="noopener noreferrer">
            @oceanwaydive
          </a>
          . Registration will take place on-site during the event; 150k to take part in the ceramic workshop & 200k for both the ceramic and plantation dive.
        </>
      ),
      link: '/Events-Details',
      imageUrl: img1,
    },
    {
      title: 'FERG Weekly Discussion Forum #27',
      description: (
        <>
          FERG Geosains Indonesia and Ikatan Ahli Geologi Indonesia (IAGI) Jawa Barat & Banten invite you to join the discussion with:
  
          <br />
          <strong>Title : Marine Scientist and Founder of Indonesia Biru Foundation</strong>
  
          <br />
          <br />
          <strong>Topic:</strong> CORAL RESTORATION: Science and Best Practice
  
          <br />
          <br />
          <strong>🗓 Date:</strong> Wednesday, 18 January 2024
          <br />
          <strong>🕣 Time:</strong> 19.30 - 21.00 WIB
  
          <br />
          <br />
          <strong>🔗 Google Meet Link:</strong> bit.ly/FWD_FORUM
  
          <br />
          <br />
          <strong>Supported by:</strong> Ikatan Ahli Geologi Indonesia (IAGI) and Dongeng Geologi
        </>
      ),
      link: 'bit.ly/FWD_FORUM',
      imageUrl: img2,
    },
  // Add more events as needed
];

const Event = React.forwardRef<HTMLDivElement>((props, ref) => {
  console.log(props);
  const [isLastEventSlide, setIsLastEventSlide] = useState(false);
  const [isFirstEventSlide, setIsFirstEventSlide] = useState(false);

  const eventSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      console.log(currentSlide, nextSlide)
      if (nextSlide === 0) {
        setIsFirstEventSlide(true);
      } else {
        setIsFirstEventSlide(false);
      }

      if (nextSlide === eventsData.length - 1) {
        setIsLastEventSlide(true);
      } else {
        setIsLastEventSlide(false);
      }
    },
  };

  const sliderRef = useRef<Slider | null>(null);

  const goToEventSlide = (index: number) => {
    if (index >= 0 && index < eventsData.length) {
      sliderRef.current?.slickGoTo(index);
    }
  };

  return (
    <div className="container-news" ref={ref}>
      <div className="container-title-news">
        
        <Slider {...eventSettings} ref={(slider) => (sliderRef.current = slider)}>
          {eventsData.map((event, index) => (
            <div key={index}>
              <div className="container-event" ref={ref}>
                <div className="content-our-event">
                  <img src={event.imageUrl} alt="event" className="img-event" />
                </div>
                <div className="detail-event">
                  <div className="title-event">{event.title} <br /></div>
                  <div className="title-event-mobile">{event.title}</div>
                  <div className="desc-event">{event.description}</div>
                  <Link to={event.link}>
                    <button className="btn-event">Event</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container-btn-carousel-news">
          <button
            className={`btn-slider ${isFirstEventSlide ? 'disabled-btn' : ''}`}
            onClick={() => goToEventSlide(eventSettings.slidesToShow - 1)}
          >
            <img src={arrowLeft} alt="arrow-left" />
          </button>
          <button
            className={`btn-slider ${isLastEventSlide ? 'disabled-btn' : ''}`}
            onClick={() => goToEventSlide(eventSettings.slidesToShow + 1)}
          >
            <img src={arrowRight} alt="arrow-right" />
          </button>
        </div>
    </div>
  );
});

export default Event;