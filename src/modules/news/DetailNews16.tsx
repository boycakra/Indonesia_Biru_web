import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useMyContext } from '../../context/SectionProvider';
import imgDesc1 from '../../assets/gillasahan/gill.jpg';
import imgDesc2 from '../../assets/gillasahan/gill1.png';
import imgDesc3 from '../../assets/gillasahan/gill (2).png';
import imgDesc4 from '../../assets/gillasahan/gill (3).png';
import imgDesc5 from '../../assets/gillasahan/gill (5).png';
import imgDesc6 from '../../assets/gillasahan/gill (6).png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ... (import statements)

const CoralConnectEvent = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const imagesSet1 = [imgDesc1, imgDesc2, imgDesc3];
    const imagesSet2 = [imgDesc4, imgDesc5, imgDesc6];

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
                {/* First Slider */}
                <Slider {...sliderSettings}>
                    {imagesSet1.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt={`detail-news-set1-${index}`} className="img-detail-news" />
                        </div>
                    ))}
                </Slider>

                <div className="container-title-detail-news">
                    <div className="title-detail-news">
                        Coral Connect: Uniting Minds and Reefs for a Sustainable Tomorrow
                    </div>
                    <div className="date-detail-news">January 23, 2024</div>
                </div>

                <div className="desc-detail-news">
                    <section>
                        <p>
                            In the vibrant spirit of the ocean, Coral Connect Lombok 2024 concluded with a splash! 🌊 The
                            event kicked off the new year by inviting passionate individuals to the enchanting
                            @coralconnectlombok for two memorable days of connection and collaboration.
                        </p>
                    </section>
                    <br />
                    <section>
                        <p>
                            Beyond the digital realm of social channels, this gathering provided a unique opportunity for
                            like-minded people to come together and engage in face-to-face conversations. It marked the
                            beginning of potential collaborations that could shape the future of ocean-related initiatives.
                        </p>
                    </section>
                    <br />
                    <section>
                        <p>
                            The organizers extend heartfelt gratitude to the gracious hosts who made the event possible:
                            @seachangeindonesia, @pearlbeachresortgiliasahan, and @oceanwaydive. Their warmth and
                            hospitality set the stage for meaningful interactions among participants.
                        </p>
                    </section>
                </div>

                {/* Second Slider */}
                <Slider {...sliderSettings}>
                    {imagesSet2.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt={`detail-news-set2-${index}`} className="img-detail-news" />
                        </div>
                    ))}
                </Slider>

                <div className="desc-detail-news">
                    <section>
                        <p>
                            Special appreciation goes to @craftingcoral by @kevalastudio for orchestrating engaging
                            workshops, involving a diverse group of participants. 🙌 To every individual who contributed,
                            your presence made Coral Connect Lombok 2024 an unforgettable experience.
                        </p>
                    </section>
                    <br />
                    <section>
                        <p>
                            As the event concludes, the anticipation for a second edition lingers in the air. Here's to
                            hoping we'll reconvene once again, sharing insights, forging connections, and fostering a
                            deeper appreciation for our oceans. 🌊 Until next time! 😉
                        </p>
                    </section>
                </div>
            </div>

            <div className="container-desc-detail-news">{/* ... (rest of the components) ... */}</div>
        </div>
    );
};

export default CoralConnectEvent;
