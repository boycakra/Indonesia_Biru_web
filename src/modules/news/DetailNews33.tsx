import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import imgMain from '../../assets/images/news_33a.jpg';
import imgActivity1 from '../../assets/images/news_33b.jpg';
import imgActivity2 from '../../assets/images/news_33c.jpg';

const ArticleBeachCleanupCollab = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const imagesSet = [imgActivity1, imgActivity2];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container-detail-news">
            {/* Breadcrumb Navigation */}
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>
                    Home
                </Link>
                {' / '}
                <span>Community Engagement</span>
            </div>

            {/* Main Image */}
            <div className="container-main-img-detail-news">
                <img src={imgMain} alt="Weekly Collaboration with SD Lombok Insani" className="img-main-detail-news" />
            </div>

            {/* Title and Date */}
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Weekly Environmental Collaboration with SD Lombok Insani 🌱
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • October 23, 2024
                </div>
            </div>

            {/* Article Content */}
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Hello, Blue Rangers! 🌊 Indonesia Biru Foundation (IBF) is proud to announce our ongoing collaboration with SD Lombok Insani, where we join hands to bring environmental awareness to the next generation. Our weekly sessions are designed to educate students about the importance of preserving coastal ecosystems and the vibrant biodiversity of marine life.
                    </p>
                    <br />
                    <p>
                        This week, we took the learning beyond the classroom — right to the beach! Students had the opportunity to participate in a hands-on beach cleanup, learning about the direct impact of human actions on the shoreline. Together, we gathered waste, discussed the threats facing marine habitats, and explored ways each one of us can make a positive change.
                    </p>
                    <br />
                    <p>
                        These beach outings serve as powerful experiences, helping students connect with nature while fostering a sense of responsibility for their local environment. Through activities like these, we aim to instill a lasting respect and passion for conservation in our young participants. 🌍
                    </p>
                    <br />
                    <p>
                        In addition to cleaning the beach, we engaged in interactive discussions with the students about the lifecycle of plastic waste, how it affects marine organisms, and what role individuals can play in reducing plastic usage. Students were particularly captivated by stories of marine animals, and it was inspiring to see their enthusiasm for making changes in their daily habits.
                    </p>
                    <br />
                    <p>
                        The journey to a sustainable future begins with small, meaningful steps. Thank you to SD Lombok Insani for their dedication to environmental education, and to our students, for their inspiring enthusiasm. We look forward to many more enriching sessions!
                    </p>
                    <br />
                    <p>
                        Stay tuned, Blue Rangers, for upcoming activities! If you’re interested in volunteering or supporting our initiatives, please visit our website or contact us to learn how you can get involved. Together, let’s protect and preserve our beautiful planet for generations to come.
                    </p>
                </div>

                {/* Image Slider */}
                <Slider {...sliderSettings}>
                    {imagesSet.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img
                                src={img}
                                alt={`beach-cleanup-${index}`}
                                className="img-detail-news"
                                style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                {/* Call-to-Action */}
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

export default ArticleBeachCleanupCollab;
