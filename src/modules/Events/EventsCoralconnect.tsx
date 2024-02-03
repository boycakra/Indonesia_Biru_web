import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import imgDesc1 from '../../assets/corcan/Ccno (1).jpeg';
import imgDesc2 from '../../assets/corcan/Ccno (2).jpeg';
import imgDesc4 from '../../assets/corcan/Ccno (3).jpeg';
import imgDesc5 from '../../assets/corcan/Ccno (4).jpeg';
import imgDesc6 from '../../assets/corcan/Ccno (5).jpeg';


const CoralConnectEvent = () => {
    const { updateValue } = useMyContext();
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);


    const imagesSet2 = [imgDesc5,imgDesc1,imgDesc2, imgDesc4 , imgDesc6];

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
                <Link to={"/"} onClick={() => updateValue("")}>
                    Home
                </Link>{' '}
                / <span>Coral Event Video</span>
            </div>
            <div className="title-detail-news">THE FIRST CORAL CONNECT EVENT IN LOMBOK, INDONESIA</div>
            <div className="container-embed-youtube">
                <iframe
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/5f2QaqW9tFs?si=glQUcfijWEDyCENO`}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
            <div className="container-title-detail-news">
                <div className="date-detail-news">
                    Boy Cakraningrat • February 03, 2024
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Indonesia Biru Foundation's first Coral Connect event was completed. We all had a chat, shared, laughed, swam on a reef restoration site, and had fun. We hope to inspire other social events within this topic to be replicated in the area with more engagement from the general public.
                    </p>
                    <p>
                        The event brought together passionate individuals committed to marine conservation. Participants actively contributed to the restoration efforts, making a tangible impact on the health of our oceans. As we build connections, we envision a future where community-driven initiatives play a vital role in safeguarding our precious coral reefs.
                    </p>
                    <p>
                        Your involvement is crucial in shaping the narrative of marine conservation. Through collective efforts, we can create awareness, foster understanding, and inspire positive change. Join us in making a lasting difference for the underwater ecosystems that are vital to the well-being of our planet.
                    </p>
                    {/* Add other event details here based on the provided information */}
                </div>

                <Slider {...sliderSettings}>
                    {imagesSet2.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img
                                src={img}
                                alt={`detail-news-set2-${index}`}
                                className="img-detail-news"
                                style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="desc-detail-news">
                    <p>
                        This event is not just about crafting coral but fostering a deeper connection with our oceans. Your participation contributes to the ongoing efforts of IBF in marine conservation and restoration. Let's come together, learn, create, and make a positive impact on our precious coral reefs.
                    </p>
                    <p>
                            The organizers extend heartfelt gratitude to the gracious hosts who made the event possible:
                            @seachangeindonesia, @pearlbeachresortgiliasahan, and @oceanwaydive. Their warmth and
                            hospitality set the stage for meaningful interactions among participants.
                     </p>
                    {/* Add other event details here based on the provided information */}
                </div>
            </div>
        </div>
    );
};

export default CoralConnectEvent;
