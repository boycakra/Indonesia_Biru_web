import React from 'react';
import { Link } from 'react-router-dom';

const Volunteering = {
  title: 'Volunteer',
  description: (
    <>
      <br />
      Do you want to be part of the Blue Ranger network ? <br /> 
      Send us an email!<br /> 
  
      We've hosted people from various disciplines and nationalities because everyone's participation is crucial.
  
      It's perfect for those seeking fieldwork experience, a gap year activity, or a service project in Indonesia.
      <br />
    </>
  ),
  link: 'https://www.instagram.com/indonesiabirufoundation/?g=5',
};

const Volunteer = React.forwardRef<HTMLDivElement>((props, ref) => {
  console.log(props);
  return (
    <div className="container-bigVolunteer" ref={ref}>
      <div className="container-title-news">
        <div className="container-Volunteer">
          <div className="content-our-Volunteer">
             <div className="title-Volunteer-mobile">{Volunteering.title}</div>
            <iframe
              className="youtube-dive"
              title="YouTube Video"
              src="https://www.youtube.com/embed/N1ksA63LKrs?si=cFML7BStjRMznWlb"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="detail-Volunteer">
            <div className="title-Volunteer">{Volunteering.title}</div>
            <div className="desc-Volunteer">{Volunteering.description}</div>
           
            <div className="button-container">
              <Link to={Volunteering.link}>
                <button className="btn-Volunteer">Volunteer</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Volunteer;
