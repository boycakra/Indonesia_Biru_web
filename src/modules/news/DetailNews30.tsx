import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/news_30a (1).jpg';
import imgDesc1 from '../../assets/images/news_30a (2).jpg';
import imgDesc2 from '../../assets/images/news_30c.jpeg';
import imgDesc3 from '../../assets/images/news_30d.jpeg';

const ArticleMangroveProject = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const imagesSet = [imgDesc1, imgDesc2, imgDesc3];

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
                <span>Project Highlights</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="Youth Mangrove Conservation Project" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Empowering Tomorrow: Youth in Mangrove Conservation
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • September 28, 2024
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Hi Blue Ranger 🌊! We are thrilled to announce our latest collaboration with <a href="https://www.instagram.com/coralreefcare/" target="_blank" rel="noopener noreferrer">@coralreefcare</a> and <a href="https://www.instagram.com/cemare_ecogreen/" target="_blank" rel="noopener noreferrer">@cemare_ecogreen</a>, focusing on a crucial part of coastal resilience — mangrove conservation.
                    </p>
                    <br />
                    <p>
                        The roots of tomorrow are planted today. Just as mangroves anchor and protect our shorelines, our youth are the foundation for a sustainable future. 🌱 With their passion and drive, these young conservationists are taking a stand for the environment, nurturing not just the roots of mangroves but the roots of conservation itself.
                    </p>
                    <br />
                    <p>
                        Mangroves are more than coastal defenders; they are nature's frontline guardians. They provide essential shelter for marine life, support biodiversity, and absorb significant amounts of carbon to combat climate change. But beyond admiration, they require action — and the voices of young people are leading the way.
                    </p>
                    <br />
                    <p>
                        Through hands-on initiatives, we aim to inspire and equip these passionate youths to make a lasting impact. Join us in celebrating the future of conservation and the roots of hope that our youth bring to the environment.
                    </p>
                    <br />
                    <p>
                        See the full post and find out more on Instagram <a href="https://www.instagram.com/p/DAdKMBiPddA/?igsh=dDY2cTIzaXR5OGQ0&img_index=1" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                    <br />
                </div>

                <Slider {...sliderSettings}>
                    {imagesSet.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img
                                src={img}
                                alt={`mangrove-project-highlight-${index}`}
                                className="img-detail-news"
                                style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="desc-detail-news">
                    <h2>Support Our Youth-Led Conservation Efforts</h2>
                    <p>
                        Every action today shapes the shoreline of tomorrow. Stand with us in empowering the next generation of conservationists, as they lead initiatives for a resilient, biodiverse planet. Follow our journey, get involved, and stay tuned for more updates on our youth-led mangrove conservation projects.
                    </p>
                    <br />
                    <p>
                        Learn more about the Indonesia Biru Foundation’s conservation efforts on our <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Instagram</a>. Together, we can grow a brighter, greener future.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ArticleMangroveProject;
