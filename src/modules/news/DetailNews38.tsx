import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS for default styles
import "slick-carousel/slick/slick-theme.css";
import imgMain from '../../assets/images/Seven Secrets (4).png';
import imgSeminar1 from '../../assets/images/Seven Secrets (3).png';
import imgSeminar2 from '../../assets/images/Seven Secrets (2).png';
import imgSeminar3 from '../../assets/images/Seven Secrets (6).png';

import imgSeminar4 from '../../assets/images/Seven Secrets (1).png';
import imgSeminar5 from '../../assets/images/Seven Secrets (5).png';
import imgSeminar6 from '../../assets/images/Seven Secrets (7).png';

const ArticleSevenSecrets = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <div className="container-detail-news">
            {/* Breadcrumb Navigation */}
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>Home</Link>
                {' / '}
                <span>Sustainability at Seven Secrets</span>
            </div>

            {/* Main Image */}
            <div className="container-main-img-detail-news">
                <img src={imgMain} alt="seven-secrets" className="img-main-detail-news" />
            </div>

            {/* Title and Date */}
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Discover Sustainability at Seven Secrets Resort: A Journey to Protect and Preserve
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • January 12, 2025
                </div>
            </div>

            {/* Article Content */}
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Seven Secrets Resort in Lombok Island-Indonesia is more than a luxury escape. It's a pledge to safeguard our planet, empower communities, and protect the oceans. Nestled in the serene beauty of Nipah Bay, our resort combines world-class amenities and personalized service with meaningful opportunities to contribute to a sustainable future.
                    </p>
                    <br />

                    <h3>Conservation and Community at the Heart</h3>
                    <p>
                        At Seven Secrets, conservation and community are at the heart of what we do. We proudly offer a range of sustainability initiatives:
                    </p>
                    <ul>
                        <li><strong>Turtle Protection Programs:</strong> Witness nature’s wonders as we work with conservationists to protect sea turtle nests, ensuring their survival and the continuation of this majestic species.</li>
                        <li><strong>Coral Reef Conservation & Initiatives:</strong> In partnership with the Indonesia Biru Foundation (<a href="https://indonesiabiru.id/" target="_blank" rel="noopener noreferrer">IBF</a>), we are working together to create a coral nursery to enhance the coral reef ecosystem at the resort’s doorstep. The corals are secured in rope-based and metal-based structures and will act as “parent colonies” for future transplantation efforts and attract reef life to their adjacent. In addition, we are hosting coral reef ecology workshops and coral restoration dives so the guests can also engage in the conservation. Lastly, a live underwater camera is installed at the coral nursery site to monitor the site in near real-time via video streamed at the resort.</li>
                    </ul>
                    <br />

                     {/* Image Slider */}
                <Slider {...settings} className="slider-container">
                    <div>
                        <img src={imgSeminar4} alt="seven-secrets-1" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgSeminar5} alt="seven-secrets-2" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgSeminar6} alt="seven-secrets-3" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgMain} alt="seven-secrets-main" className="img-detail-news" />
                    </div>
                </Slider>

                    <p>
                        Every guest becomes a part of this impactful mission. By choosing to stay at Seven Secrets, you are directly contributing to ocean conservation and uplifting the local community, ensuring that Lombok’s natural beauty thrives for generations to come.
                    </p>
                    <br />

                    <h3>Unparalleled Experiences</h3>
                    <p>
                        But it’s not just about giving back; it’s also about experiencing the unparalleled. From romantic escapes to family adventures, our resort offers something special for everyone, all while making a positive impact on the environment and local culture.
                    </p>
                    <br />

                    <p>
                        Join us in creating a sustainable legacy. Indulge in the beauty of Lombok, immerse yourself in the luxury of Seven Secrets, and become part of a passionate movement to protect and preserve.
                    </p>
                    <br />
                    <p><strong>“Experience the perfect harmony of indulgence and impact. Stay at Seven Secrets Lombok and be the change.”</strong></p>
                </div>

                {/* Image Slider */}
                <Slider {...settings} className="slider-container">
                    <div>
                        <img src={imgSeminar1} alt="seven-secrets-1" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgSeminar2} alt="seven-secrets-2" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgSeminar3} alt="seven-secrets-3" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgMain} alt="seven-secrets-main" className="img-detail-news" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ArticleSevenSecrets;
