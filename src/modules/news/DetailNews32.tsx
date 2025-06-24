import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/bluewater.png';
import imgDesc1 from '../../assets/images/finalsit.jpg';
import imgDesc2 from '../../assets/images/news_32.jpeg';

const ArticleBlueWaterHeroesFinalist = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const imagesSet = [imgDesc1, imgDesc2];

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
                <span>Event Highlights</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="Indonesia Biru Foundation Blue Water Heroes Finalist" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Indonesia Biru Foundation Named Finalist in Blue Water Heroes 2024!
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • October 11, 2024
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Hi Blue Ranger 🌊! We are thrilled to announce that Indonesia Biru Foundation has been selected as a finalist in the <a href="https://bluewateredufest.com/blue-water-heroes/" target="_blank" rel="noopener noreferrer">Blue Water Heroes 2024</a> awards! This remarkable recognition, presented by Blue Water Edufest in collaboration with Tatler Gen.T, celebrates our unwavering commitment to marine conservation.
                    </p>
                    <br />
                    <p>
                        As finalists, we had the privilege of presenting our conservation efforts and ideas to an inspiring panel of judges and a community of like-minded eco-champions. The event was a profound experience, filled with powerful presentations and heartfelt stories from conservationists across Southeast Asia, each committed to preserving our ocean for future generations. 💙
                    </p>
                    <br />
                    <p>
                        The Blue Water Heroes platform offers a unique space for passionate eco-champions to pitch innovative ideas and seek essential funding and resources. This opportunity amplifies our conservation work and strengthens our resolve to push the boundaries of what’s possible in marine preservation.
                    </p>
                    <br />
                    <p>
                        Join us in celebrating this journey on November 8, where the Blue Water Heroes Awards ceremony will honor eco-champions dedicated to protecting our oceans. Stay tuned and support the blue movement — together, we can make waves of change!
                    </p>
                    <br />
                    <p>
                        For more event details, visit <a href="https://bluewateredufest.com/" target="_blank" rel="noopener noreferrer">bluewateredufest.com</a>, and don’t miss the chance to support our heroes!
                    </p>
                    <br />
                </div>

                <Slider {...sliderSettings}>
                    {imagesSet.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img
                                src={img}
                                alt={`blue-water-heroes-${index}`}
                                className="img-detail-news"
                                style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="desc-detail-news">
                    <h2>About Blue Water Heroes</h2>
                    <p>
                        In collaboration with Tatler Gen.T, Blue Water Heroes is dedicated to empowering fearless and passionate eco-champions to drive marine conservation efforts. This event encourages eco-leaders to pitch their ideas for a chance to receive funding and resources essential to realizing impactful conservation projects.
                    </p>
                    <br />
                    <p>
                        We are honored to be part of this inspiring initiative, and we look forward to connecting with fellow conservationists and supporters who believe in the power of protecting our oceans.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ArticleBlueWaterHeroesFinalist;
