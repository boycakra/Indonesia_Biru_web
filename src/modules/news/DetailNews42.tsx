import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgMain from '../../assets/images/kerang.png';
import imgAwareness1 from '../../assets/images/keranggg.jpeg';

const ArticleSnorkelingAwareness = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>Home</Link>
                {' / '}
                <span>Snorkeling Awareness & Ocean Conservation</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgMain} alt="snorkeling-awareness" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    ❌ DON'T While Snorkeling: Protect Our Oceans! 🌊🐠
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • August 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        🌊 Exploring the ocean is a privilege, but with that comes responsibility. As Blue Rangers, let’s ensure we protect marine ecosystems and leave nothing but bubbles behind!
                    </p>
                    <p>
                        Coral reefs are the rainforests of the sea, providing habitat for countless marine species. Sadly, reckless snorkeling habits can cause irreversible damage. Here’s how YOU can make a difference:
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Common Snorkeling Mistakes to Avoid:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>🚫 Standing on corals – It crushes delicate marine life! Stay afloat at all times.</li>
                        <li>🚫 Feeding fish – This disrupts their natural diet and ecosystem balance.</li>
                        <li>🚫 Touching or collecting marine life – Observe, don’t disturb!</li>
                        <li>🚫 Wearing non-reef-safe sunscreen – Use eco-friendly alternatives to avoid harming corals.</li>
                        <li>🚫 Littering – Take only memories, leave only bubbles.</li>
                    </ul>
                    
                    <h2 className="text-xl font-semibold mb-2">Poster Underwater Guides:</h2>
                    <Slider {...settings} className="slider-container">
                        <div>
                            <img src={imgAwareness1} alt="snorkeling-tip-1" className="img-detail-news" />
                            </div>
                    </Slider>

                    <p>
                        📢 Awareness is key! By sharing this message with your friends and fellow travelers, you can help protect marine life and ensure future generations can enjoy the wonders of the ocean.
                    </p>
                    
                    <h2>Join the Movement! 🌊</h2>
                    <p>
                        Want to be part of our conservation efforts? Follow <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation</a> for updates on upcoming clean-ups, conservation programs, and educational initiatives! Together, let’s make our oceans a safer place. 💙🐠
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleSnorkelingAwareness;
