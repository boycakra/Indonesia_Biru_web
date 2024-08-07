import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/biofarma (3).jpeg';
import imgDesc1 from '../../assets/images/biofarma (2).jpeg';
import imgDesc2 from '../../assets/images/biofarma (1).jpeg';
import imgDesc3 from '../../assets/images/biofarma (3).jpeg';


const ArticleBiofarma = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    
    const imagesSet2 = [imgDesc1, imgDesc2, imgDesc3];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>
                    Home
                </Link>
                {' / '}
                <span>Biofarma and Indonesia Biru Foundation Collaboration</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="Reef Restoration Collaboration" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Biofarma and Indonesia Biru Foundation Collaboration: Reef Restoration in Gili Asahan
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • July 31, 2024
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Indonesia Biru Foundation, in collaboration with Biofarma, Seachange Indonesia, and Oceanway Dive, proudly announces a significant reef restoration project in Gili Asahan. This project has reached a major milestone with the planting of over 1000 new coral fragments at depths of 8-13 meters.
                    </p>
                    <br />
                    <p>
                        Hi Blue Ranger 🌊, the collaborative deeper reef restoration at @pearlbeachresortgiliasahan with @biofarmaid, @seachangeindonesia, and @oceanwaydive started to take shape! 🪸 We are now in the process of finishing up the planting and rope installation, then we will take some data for our first ecological assessment 📝.
                        <br />
                        📽 @harleyjamesp
                    </p>
                    <br />
                    <p>
                        This project involves a total of 100 media units used to support the growth of coral fragments. Through this method, coral fragments can grow and thrive, strengthening the marine ecosystem around Gili Asahan.
                    </p>
                    <br />
                    <p>
                        The project is supported by Biofarma as the main sponsor, with Seachange Indonesia and Oceanway Dive as implementing partners. This collaboration demonstrates how various organizations can come together to create a positive impact on the environment.
                    </p>
                    <br />
                    <p>
                        The project location at Gili Asahan, a beautiful small island in the Gili Islands, was chosen for its conducive environment for reef restoration. The teams from Seachange Indonesia and Oceanway Dive work tirelessly to ensure that each coral fragment is carefully planted and monitored regularly to ensure healthy growth.
                    </p>
                    <br />
                    <p>
                        The restoration process begins with the collection of healthy coral fragments, which are then planted on specially designed structures to support coral growth. After planting, ropes are installed to keep the fragments in place and protect them from strong ocean currents.
                    </p>
                    <br />
                    <p>
                        After the planting and rope installation are completed, the team will conduct the first ecological assessment to collect data on the condition of the coral reefs and the impact of these restoration efforts. This data will be used to measure the project's success and make necessary adjustments to ensure optimal results.
                    </p>
                    <br />
                </div>

                

               

                <Slider {...sliderSettings}>
                    {imagesSet2.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img
                                src={img}
                                alt={`event-highlight-${index}`}
                                className="img-detail-news"
                                style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="desc-detail-news">
                    <h2>Join Us for Future Events</h2>
                    <p>
                        The success of this campaign demonstrates the importance of creativity and community engagement in environmental conservation. We invite you to join us for future events and continue supporting our mission to protect the oceans and marine life. Follow us on our social media channels for updates on upcoming programs and initiatives.
                    </p>
                    <br />
                    <p>
                        Follow us on social media for the latest updates on events, educational programs, and other exciting initiatives: <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation Instagram</a>. Together, let's make a difference and create a more sustainable future for all.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ArticleBiofarma;
