import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/news_31a (1).jpg';
import imgDesc1 from '../../assets/images/news_31a (1).jpg';
import imgDesc2 from '../../assets/images/news_31a (2).jpg';

const ArticleCoralReefProgress = () => {
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
                <span>Project Updates</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="Coral Reef Conservation Progress" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Steady Growth in Coral Conservation: 2022-2024 Milestones
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • October 28, 2024
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Hi Blue Ranger 🌊! Consistency is our guiding star as we continue working for coral reef restoration and marine health. Over the past two years, our conservation projects have slowly but steadily yielded encouraging signs of progress.
                    </p>
                    <br />
                    <p>
                        These images showcase our journey from 2022 to 2024, and while the visible impact may seem small, the broader effects are profound. Amid the challenges, our team has found something increasingly rare — hope. Each small sign of life on the coral beds is a reminder that dedicated, persistent efforts can bring about meaningful change.
                    </p>
                    <br />
                    <p>
                        Coral reefs are vital ecosystems, and their recovery demands patience and consistency. With every new branch of coral taking hold and each tiny fish finding shelter, we witness the strength of hope and persistence. Our impact may be modest, but it is driven by a belief in a brighter, healthier marine future.
                    </p>
                    <br />
                    <p>
                        Follow our journey on Instagram <a href="https://www.instagram.com/p/DBoW7mgvtjk/?igsh=NDB2M2t2ZG1hem53" target="_blank" rel="noopener noreferrer">here</a> to witness the ongoing progress and the efforts dedicated to safeguarding our coral reefs.
                    </p>
                    <br />
                </div>

                <Slider {...sliderSettings}>
                    {imagesSet.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img
                                src={img}
                                alt={`coral-progress-${index}`}
                                className="img-detail-news"
                                style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="desc-detail-news">
                    <h2>Consistency as a Path to Marine Conservation</h2>
                    <p>
                        True change takes time, especially in fragile ecosystems. Our coral conservation journey reminds us that even small actions, repeated with dedication, can create a ripple effect that leads to large-scale impact. Each coral branch that takes root represents our commitment to hope and renewal in the ocean.
                    </p>
                    <br />
                    <p>
                        Learn more about our conservation efforts and follow us as we work towards a sustainable future for our oceans on our <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Instagram</a>.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ArticleCoralReefProgress;
