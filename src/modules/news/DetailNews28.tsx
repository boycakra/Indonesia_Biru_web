import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/news_28a.jpeg';
import imgDesc1 from '../../assets/images/news_28a.jpeg';
import imgDesc2 from '../../assets/images/news_28b.jpeg';
import imgDesc3 from '../../assets/images/news_28c.jpeg';

const News28 = () => {
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
                <span>Networking with the World ARC Fleet</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="Networking Event at Medana Bay Marina" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Networking with the World ARC Fleet
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • September 28, 2024
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Hi Blue Ranger 🌊! This past week was filled with excitement as we spent time at @medanabaymarina, connecting with the @world_arc_rally fleet ⛵️. As the sailors prepared for their next adventure, we had the perfect opportunity to build meaningful relationships, exchange ideas, and share our passion for marine conservation. 
                    </p>
                    <br />
                    <p>
                        Our team brought out a selection of Indonesia Biru Foundation’s exclusive merchandise, from eco-friendly water bottles to stylish t-shirts. Each item is thoughtfully designed, not only to support our foundation’s mission but also to spark conversations. By selling merchandise at these gatherings, we had countless chances to engage, discuss, and explain our work to a new audience. It’s always inspiring to see the enthusiasm people show when they learn that every purchase directly funds our environmental initiatives.
                    </p>
                    <br />
                    <p>
                        But our presence was about more than just selling products. We took time to chat with attendees, answering questions and diving into conversations about marine conservation, the impact of coral reef degradation, and why every small effort counts. Many in the crowd were sailors with a deep love for the ocean, which made them especially receptive to understanding the environmental threats faced by Indonesia’s marine ecosystems.
                    </p>
                    <br />
                    <p>
                        One of the highlights of the week was discussing what the Indonesia Biru Foundation (IBF) stands for. We shared our journey and vision, explaining how we focus on marine and coastal conservation, especially in areas like coral restoration, waste reduction, and community education. Through these personal interactions, we were able to convey the true essence of IBF—an organization built on passion, community, and action.
                    </p>
                    <br />
                   
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
                        This campaign shows how impactful and fun it can be to combine outreach with conservation. We invite you to join us in our journey of protecting the oceans and building awareness. Follow our social media for news on upcoming programs and initiatives.
                    </p>
                    <br />
                    <p>
                        Stay updated on future events, educational initiatives, and conservation efforts by following us: <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation Instagram</a>. Together, we can protect and sustain our marine ecosystems for generations to come.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default News28;
