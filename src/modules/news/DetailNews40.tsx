import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgMain from '../../assets/images/Events_Fred.png';
import imgSeminar1 from '../../assets/images/P2151911.png';
import imgSeminar2 from '../../assets/images/Seven Secrets (6).png';
import imgSeminar3 from '../../assets/images/P2151941.png';
import imgSeminar4 from '../../assets/images/P2151992.png';

const ArticleSevenSecrets = () => {
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
            {/* Breadcrumb Navigation */}
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>Home</Link>
                {' / '}
                <span>Unforgettable Ocean Adventure!</span>
            </div>

            {/* Main Image */}
            <div className="container-main-img-detail-news">
                <img src={imgMain} alt="seven-secrets" className="img-main-detail-news" />
            </div>

            {/* Title and Date */}
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Fun Freediving Events ✨🤩🥳
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • February  15, 2025
                </div>
            </div>

            {/* Article Content */}
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Huge thanks to <a href="https://www.instagram.com/lombokfreedive/" target="_blank" rel="noopener noreferrer">@lombokfreedive</a>, for sharing valuable knowledge with LFC members! We learned so much today! 🎉
                    </p>
                    <br />
                    <p>
                        Even for me, it was an eye-opener to understand how crucial it is to protect our oceans and the marine life within them. 🌊🐠
                    </p>
                    <br />
                    <p>
                        Remember, guys, corals can get stressed just like humans! They are living beings too. Let's protect our oceans and their inhabitants by avoiding stepping on, touching, or feeding marine life indiscriminately, and always keeping the ocean clean! 🤍😍
                    </p>
                    <br />
                    <p>
                        That way, we can continue freediving in these beautiful waters, my dear ocean-loving friends! 👻
                    </p>
                    <br />
                    <p>
                        📌 <strong>Check out the fun moments from the event here:</strong>
                        <br />
                        👉 <a href="https://www.instagram.com/reel/DGFrfDlyKRj/?igsh=MTdnZHlnaDh0ZjRldw%3D%3D" target="_blank" rel="noopener noreferrer">Watch on Instagram</a>
                    </p>
                    <br />
                    {/* Image Slider */}
                    <Slider {...settings} className="slider-container">
                        <div>
                            <img src={imgSeminar4} alt="event-photo-1" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={imgMain} alt="event-photo-main" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />

                    <h2 className="text-xl font-semibold mb-2">Highlights of the Event:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Excitement Overload:</strong> Everyone had a blast learning about ocean conservation and freediving!</li>
                        <li><strong>Interactive Sessions:</strong> The discussions opened up our minds to the importance of coral reefs and marine ecosystems.</li>
                        <li><strong>Community Spirit:</strong> The enthusiasm and support from everyone made the event even more special. 💙</li>
                        <li><strong>Takeaway Message:</strong> Let’s continue learning and advocating for ocean conservation! 🌊</li>
                    </ul>
                    <br />
                    <p>
                        A big shout-out to everyone who participated! Your energy and passion made this event unforgettable. Let’s do it again soon! 🔥👏
                    </p>
                    <br />

                    {/* Additional Image Slider */}
                    <Slider {...settings} className="slider-container">
                        <div>
                            <img src={imgSeminar1} alt="event-photo-3" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={imgSeminar2} alt="event-photo-4" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={imgSeminar3} alt="event-photo-5" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={imgMain} alt="event-photo-main" className="img-detail-news" />
                        </div>
                    </Slider>

                    <h2>Join Us for Upcoming Events</h2>
                    <p>
                        The success of this campaign shows the importance of creativity and community involvement in environmental conservation. We invite you to join us in upcoming events and continue to support our mission to protect the oceans and marine life. Follow us on our social media channels to get updates on upcoming programs and initiatives.
                    </p>
                    <br />
                    <p>
                        Follow us on social media for the latest information on events, educational programs, and other exciting initiatives: <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Instagram Indonesia Biru Foundation</a>. Together, let's make a difference and create a more sustainable future for all.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ArticleSevenSecrets;