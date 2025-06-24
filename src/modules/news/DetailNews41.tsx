import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgMain from '../../assets/images/merged_image.jpg';
import imgSeminar1 from '../../assets/images/mgbrofl1.jpg';
import imgSeminar2 from '../../assets/images/mgbrofl2.jpg';
import imgSeminar4 from '../../assets/images/mgbrofl4.jpg';
import imgSeminar5 from '../../assets/images/merged_image.jpg';

const ArticleMangroveBRO = () => {
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
                <span>Mangrove Restoration with BRO Management</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgMain} alt="mangrove-restoration" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Planting Hope: IBF & BRO Management Join Forces for Mangrove Restoration!
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation & BRO Management • January 19, 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        🌱 Satu pohon, seribu harapan untuk Bumi! 🌎💙
                    </p>
                    <p>
                        Mangroves play a crucial role in protecting coastal ecosystems, serving as natural barriers against erosion, storm surges, and even climate change impacts. These incredible trees provide shelter for marine biodiversity and contribute to carbon sequestration, making their restoration more vital than ever. Sadly, mangrove forests are rapidly declining due to deforestation and industrial expansion, leading to severe ecological consequences. Through this initiative, IBF and BRO Management are taking an active step towards reversing the damage and inspiring future generations to do the same. 
                    </p>
                    <p>
                        Indonesia Biru Foundation (IBF) and BRO Management joined hands (and muddy boots!) for an unforgettable mangrove planting event at Pantai Cemara. The mission? Restoring nature while having an absolute blast! 🎉
                    </p>
                    <p>
                        The event brought together an enthusiastic group of BRO influencers and volunteers, all eager to make a real difference. From getting their hands dirty (literally!) to learning about the crucial role of mangroves in protecting coastlines and marine life, every moment was filled with energy, fun, and meaningful action.
                    </p>
                    <p>
                        Participants expressed their joy and gratitude for being part of such a meaningful cause. Many shared how they had never planted a tree before, and this experience made them more aware of their connection to nature. "It was a truly eye-opening experience. I never realized how much of an impact mangroves have on our environment," said one volunteer. Others described the event as a mix of adventure and education, with a sense of fulfillment knowing they contributed to a greener future. 
                    </p>
                    <br />
                    
                    <Slider {...settings} className="slider-container">
                        <div>
                            <img src={imgSeminar4} alt="bro-mangrove-1" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={imgSeminar5} alt="bro-mangrove-2" className="img-detail-news" />
                        </div>
            
                        <div>
                            <img src={imgSeminar1} alt="bro-mangrove-1" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={imgSeminar2} alt="bro-mangrove-2" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={imgMain} alt="bro-mangrove-main" className="img-detail-news" />
                        </div>
                    </Slider>

                    <h2 className="text-xl font-semibold mb-2">Epic Moments from the Event:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>🌿 Hands-on mangrove planting – teamwork makes the dream work! 🌱</li>
                        <li>📸 Stunning snapshots of BRO squad in action – check out the full album <a href="https://www.instagram.com/p/DGK1LUvz9sn/?igsh=Y2x0aGFnNG82OWZj&img_index=1" target="_blank" rel="noopener noreferrer">here</a>! 📷</li>
                        <li>🌊 Eco-talks on marine conservation and why mangroves are the MVPs of coastal protection! 🏝️</li>
                        <li>🔥 Bonding moments and muddy fun – because saving the planet should be exciting! 😆</li>
                    </ul>
                    <br />
                    
                    <p>
                        The best part? This isn’t a one-time thing! We’re in this for the long run. A year from now, we’ll be back to check on our little green warriors and witness the impact of our efforts. Can’t wait? Neither can we! 🤞🌱
                    </p>
                    <br />
                    
                    <br />
                    <h2>Join Us for Upcoming Events</h2>
                    <p>
                        Want to get involved in future adventures? Follow <a href="https://www.instagram.com/bromanagementofc/" target="_blank" rel="noopener noreferrer">BRO Management</a> and <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation</a> for updates and upcoming initiatives! Let's keep the spirit alive and continue making waves for the environment! 🌊🔥
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

export default ArticleMangroveBRO;
