import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useMyContext } from '../../context/SectionProvider';
import imgDesc1 from '../../assets/images/SeaChange.png';
import imgDesc2 from '../../assets/images/pepsuwpips.png';
import imgDesc3 from '../../assets/images/Share_sesion.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CoralConnectEvent = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const images = [imgDesc1, imgDesc2, imgDesc3];

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
                </Link>{' '}
                / <span>News Detail</span>
            </div>

            <div className="container-main-img-detail-news">
                <Slider {...sliderSettings}>
                    {images.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt={`detail-news-${index}`} className="img-detail-news" />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Coral Connect: Uniting Minds and Reefs for a Sustainable Tomorrow
                </div>
                <div className="date-detail-news">January 18, 2024</div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <section>
                        <br />
                        <p>
                            During the upcoming "Coral Connect: Connecting Minds and Reefs for a Better Future Event," scheduled for January 21st, a special sharing session is set to take place. This session will feature the active participation of esteemed organizations such as @livingseas.foundation, @indonesiabirufoundation, @pepsuwpics, and @seachangeindonesia.
                        </p>
                        <p>
                            If you're eager to be a part of this initiative, there's still an opportunity to secure a presentation slot and share your own ocean-related story! Feel free to reach out to us through DM or WhatsApp at +31682007369. Any questions you may have are more than welcome! 🐠🌏🪸
                        </p>
                        <p>
                            This event is made possible through the collaboration of key partners, namely @pearlbeachresortgiliasahan, @seachangeindonesia, @oceanwaydive, @indonesiabirufoundation, @delftglobalstudentclub, and @delftdce.
                        </p>
                        <p>
                            Join us in fostering a deeper connection with our oceans and contributing to a sustainable and thriving marine ecosystem!
                        </p>
                        <br />
                    </section>

                    <section>
                        <h2>The Importance of Coral Reefs</h2>
                        <p>
                            Coral reefs are crucial to the health of our oceans. They provide a habitat for countless marine species, protect coastlines from erosion, and contribute to the overall biodiversity of our planet. Unfortunately, coral reefs are facing numerous threats, including climate change, overfishing, and pollution.
                        </p>
                        <p>
                            The Coral Connect event aims to raise awareness about the importance of coral reefs and the need for collective efforts to protect and preserve them. By bringing together organizations, experts, and enthusiasts, we hope to spark meaningful discussions and inspire concrete actions for the conservation of these vital ecosystems.
                        </p>
                        <br />
                    </section>

                    <section>
                        <h2>Our Collaborative Approach</h2>
                        <p>
                            Collaboration is at the heart of effective conservation efforts. Coral Connect brings together a diverse group of partners, each contributing unique perspectives and resources. From environmental foundations to local businesses, every participant plays a crucial role in shaping a sustainable future for our oceans.
                        </p>
                        <p>
                            Through joint initiatives, such as coral restoration projects and educational programs, we strive to make a lasting impact on marine ecosystems. By fostering collaboration and sharing knowledge, Coral Connect aims to create a ripple effect of positive change that extends far beyond the event itself.
                        </p>
                        <br />
                    </section>

                    <section>
                        <h2>How You Can Get Involved</h2>
                        <p>
                            Your involvement is key to the success of Coral Connect. Whether you're a passionate individual, a business leader, or a researcher, there are various ways you can contribute to our shared goals. Attend the event to gain insights from experts, participate in interactive sessions, and network with like-minded individuals.
                        </p>
                        <p>
                            Additionally, consider becoming a sponsor or partner to support ongoing conservation projects. Your commitment to the cause will make a meaningful difference in the fight to preserve our oceans for future generations.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CoralConnectEvent;
