import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import arrowLeft from '../../../assets/icons/Arrow-left.svg';
import arrowRight from '../../../assets/icons/Arrow-right.svg';

import imgbaru from '../../../assets/images/new_eventibf.png';
import img1 from '../../../assets/images/Event_oc.jpeg';
import img2 from '../../../assets/images/Turtle.jpeg';
import img3 from '../../../assets/images/New_event_Oceanday.jpg';
import ultah from '../../../assets/event/new_Event_nov.jpg';
import newevent from '../../../assets/images/New_event.jpeg';

const eventsData = [
  {
    title: 'Cemare Eco Green Mangrove Tour',
    description: (
      <>
        Discover the wonders of nature with the Cemare Eco Green Mangrove Tour! 🌿  
        <br />
        <br />
        Location: Cemare, South Lembar Village, Lombok Regency, West Nusa Tenggara  
        **Contact:**  
        <br />
        Andre: <a href="https://wa.me/6281353788090?text=Registration%20IBF%20turn%204" target="_blank" rel="noopener noreferrer">
            +62 813 5378 8090  
          </a> 
        <br />
        Sabila: <a href="https://wa.me/6281361452980?text=Registration%20IBF%20turn%204" target="_blank" rel="noopener noreferrer">
        +62 813 6145 2980 
          </a>  
        <br />
        <br />
        Choose your adventure: 
        <br /> 
        **Full Day Package (09:00-15:00)** 
        <br /> 
        - Mangrove planting, cleanup, turtle conservation, kayaking, and more!
        <br />  
        - Includes lunch, refreshments, and 60 grams of natural salt.  
        <br />
        **Half Day Package (09:00-12:00)**  
        <br />
        - Low tide or high tide options featuring kayaking, mangrove tours, and planting.  
        <br />
        - Includes guided tours, kayak equipment, and natural salt.  
        <br />
        <br />
        Be part of our mission to preserve Lombok's mangroves and foster a sustainable future. Book your spot now!  
      </>
    ),
    link: 'https://wa.me/6281353788090?text=Registration%20IBF%20turn%204',
    imageUrl: imgbaru,
},
  {
    title: 'IBF is Turning 4!',
    description: (
      <>
        Discover the wonders of nature with the **Cemare Eco Green Mangrove Tour**! 🌿  
        <br />
        <br />
        **Location:** Cemare, South Lembar Village, Lombok Regency, West Nusa Tenggara  
        <br />
        **Contact:**  
        - Andre: +62 813 5378 8090  
        - Sabila: +62 813 6145 2980  
        <br />
        <br />
        **Choose your adventure:**  
        - **Full Day Package (09:00-15:00)**  
          - Mangrove planting, cleanup, turtle conservation, kayaking, and more!  
          - Includes lunch, refreshments, and 60 grams of natural salt.  
        <br />
        - **Half Day Package (09:00-12:00)**  
          - Low tide or high tide options featuring kayaking, mangrove tours, and planting.  
          - Includes guided tours, kayak equipment, and natural salt.  
        <br />
        <br />
        Be part of our mission to preserve Lombok's mangroves and foster a sustainable future. Book your spot now!  
      </>
    ),
    
    link: 'https://wa.me/6285737476658?text=Registration%20IBF%20turn%204',
    imageUrl: ultah,
},
  {
    title: 'Indonesia Independence Day',
    description: (
      <>
          Hey Blue Ranger! Independence Day is just 10 days away!  If you're free, come join our fun-filled event starting at 9 AM at Cemare Mangrove, Lembar Selatan.
          <br />
          <br />
          Bring a water bottle and a hat. We'll have awesome Independence Day games with cool prizes!
          <br />
          <br />
          See you there on the 17th!
          <br />
          <br />
          #17an #IndonesianIndependenceDay
      </>
    ),
    link: 'https://www.instagram.com/p/C-W0c17vvgE/',
    imageUrl: newevent,
},

  {
  title: 'World Ocean Day Celebration',
  description: (
    <>
        Join us at Coral Lab in Kecinan Bay for World Ocean Day! Organized by the Indonesia Biru Foundation, this event offers a unique opportunity to learn about and participate in coral restoration.
        <br />
        <br />
        <strong>Event Highlights:</strong>
        <br />
        <ul>
            <li><strong>Coral Restoration Activity:</strong> Help restore coral reefs.</li>
            <li><strong>Workshop:</strong> Learn coral conservation techniques.</li>
            <li><strong>Lab Tour:</strong> Explore our Coral Lab.</li>
            <li><strong>Restoration Sites:</strong> Visit active restoration areas.</li>
            <li><strong>Snacks and Refreshments:</strong> Water and snacks included.</li>
        </ul>
        <br />
        <strong>Cost:</strong> IDR 150,000 (30% discount for Lombok residents with proof of KTP).
        <br />
        <br />
        <strong>Register and Book Your Spot Now!</strong>
        <br />
        Contact Putri at +6285737476658.
        <br />
        <br />
        Perfect for local communities, tourists, kids, environmental enthusiasts, and families. Don’t miss this chance to contribute to marine conservation!
        <br />
        <br />
        <strong>Link:</strong> <a href="https://www.instagram.com/indonesiabirufoundation/?g=5">Follow us on Instagram for more updates!</a>
        <br />
        <br />
            Join us and make a difference! 🌊🐠🌿
        </>
    ),
      link: 'https://www.instagram.com/indonesiabirufoundation/?g=5',
      imageUrl: img3,

    },
  { 
  title: 'World Turtle Day',
  description: (
      <>
          <strong>🗓 Date:</strong> Thursday, 23 May 2024
          <br />
          <strong>🕒 Time:</strong> 3pm to 5pm
          <br />
          <br />
          Join us for World Turtle Day, organized by the Indonesia Biru Foundation. Learn about sea turtle conservation and the proper procedures for their release. This event aims to:
          <br />
          <br />
          <ul>
              <li>Raise awareness about sea turtle conservation</li>
              <li>Educate participants on the importance of protecting sea turtles and their habitats</li>
              <li>Engage the community in environmental stewardship</li>
              <li>Contribute to the preservation of sea turtle populations</li>
          </ul>
          <br />
          Suitable for local communities, tourists, kids, environmental enthusiasts, and families. Don't miss out on this opportunity to make a difference!
      </>
  ),
  link: '/detail-news-25',
  imageUrl: img2,
},
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
      link2: '/EventsCoralconnect',
      imageUrl: img1,
    },
   
  // Other events...
];

const Event = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const eventSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: ( next: number) => setCurrentSlide(next), // Replaced 'current' with '_'
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      sliderRef.current?.slickGoTo(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide < eventsData.length - 1) {
      sliderRef.current?.slickGoTo(currentSlide + 1);
    }
  };

  return (
    <div className=".container-bigevent" ref={ref}>
      <div className="container-title-news">
        <Slider {...eventSettings} ref={(slider) => (sliderRef.current = slider)}>
          {eventsData.map((event, index) => (
            <div key={index}>
              <div className="container-event">
                <div className="content-our-event">
                  <img src={event.imageUrl} alt="event" className="img-event" />
                </div>
                <div className="detail-event">
                  <div className="title-event">{event.title}</div>
                  <div className="desc-event">{event.description}</div>
                  <div className="button-container">
                    <Link to={event.link}>
                      <button className="btn-event">Event</button>
                    </Link>
                  </div>
                  {event.link2 && (
                    <div className="button-container">
                      <Link to={event.link2}>
                        <button className="btn-event">Coral Connect</button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container-btn-carousel-news">
        <button
          className={`btn-slider ${currentSlide === 0 ? 'disabled-btn' : ''}`}
          onClick={goToPrevSlide}
        >
          <img src={arrowLeft} alt="arrow-left" />
        </button>
        <button
          className={`btn-slider ${currentSlide === eventsData.length - 1 ? 'disabled-btn' : ''}`}
          onClick={goToNextSlide}
        >
          <img src={arrowRight} alt="arrow-right" />
        </button>
      </div>
    </div>
  );
});

export default Event;