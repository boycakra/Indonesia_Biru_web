import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS for default styles
import "slick-carousel/slick/slick-theme.css";
import imgMain from '../../assets/images/news_34b.jpg';
import imgSurvey1 from '../../assets/images/news_34a.jpg';
import imgSurvey2 from '../../assets/images/news_34c.jpg';
import imgSurvey3 from '../../assets/images/news_34d.jpg';

const ArticleSharkRayAwarenessProject = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    // Settings for the Slider
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
                <Link to="/" onClick={() => updateValue("")}>
                    Home
                </Link>
                {' / '}
                <span>New Awareness Project Survey</span>
            </div>

            {/* Main Image */}
            <div className="container-main-img-detail-news">
                <img src={imgMain} alt="main-project" className="img-main-detail-news" />
            </div>

            {/* Title and Date */}
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    New Awareness Project Survey: Conserving Sharks and Rays for Future Generations 🦈
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • October 28, 2024
                </div>
            </div>

            {/* Article Content */}
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Hello, Blue Rangers! 🌊 We are thrilled to announce a new project in collaboration with Coral Reef Care aimed at increasing awareness of the importance of sharks and rays in marine ecosystems. This one-year project, based in Nusa Tenggara Barat (NTB), is designed to educate and inspire sustainable practices that protect marine life for future generations.
                    </p>
                    <br />
                    
                    <h3>Initial Survey Insights</h3>
                    <p>
                        As part of the project’s initial phase, our team conducted an in-depth survey within the NTB region. The survey aimed to understand the community's relationship with marine resources, particularly focusing on sharks and rays. Some noteworthy findings include:
                    </p>
                    <ul>
                        <li>
                            <strong>Marine Resource Utilization:</strong> We explored how local fishing practices impact marine life, highlighting both traditional knowledge and modern techniques that influence shark and ray populations.
                        </li>
                        <li>
                            <strong>Ocean Health in NTB:</strong> Survey results indicate the top environmental concerns affecting NTB's coastal and marine ecosystems, such as overfishing and plastic pollution.
                        </li>
                        <li>
                            <strong>Community Knowledge:</strong> The survey found varied levels of awareness regarding the ecological roles of sharks and rays, underscoring the need for educational outreach.
                        </li>
                    </ul>
                    <br />
                    
                

                {/* Image Slider */}
                <Slider {...settings} className="slider-container">
                    <div>
                        <img src={imgSurvey1} alt="shark-ray-survey-1" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgSurvey2} alt="shark-ray-survey-2" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgSurvey3} alt="shark-ray-survey-3" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgMain} alt="main-project" className="img-detail-news" />
                    </div>
                </Slider>
                <h3>Project Theme: "The Potential of Marine Resources for a Sustainable Future"</h3>
                    <p>
                        This theme emphasizes not only the preservation of biodiversity but also the responsible use of marine resources. Sharks and rays are critical to ocean health, acting as apex predators that help maintain balance within marine ecosystems.
                    </p>
                    <p>
                        The project will involve workshops, school visits, and community events that educate locals on the importance of conservation. We are also introducing interactive activities that encourage sustainable practices, ensuring the theme resonates with participants of all ages.
                    </p>
                    <br />
                    
                    <h3>Project Goals</h3>
                    <p>
                        Our primary objectives are to:
                    </p>
                    <ul>
                        <li>
                            <strong>Educate and Empower:</strong> Through community programs, we aim to inform residents and students about the importance of conservation, focusing on the ecological roles of sharks, rays, and other marine species.
                        </li>
                        <li>
                            <strong>Promote Sustainable Practices:</strong> We are encouraging alternative fishing methods and reducing plastic use, which are essential steps toward protecting marine habitats.
                        </li>
                        <li>
                            <strong>Engage Local Communities:</strong> By involving the community in surveys, beach cleanups, and conservation workshops, we hope to foster a collective sense of responsibility for NTB’s coastal ecosystems.
                        </li>
                    </ul>
                    <br />
                    <p>
                        We believe this project will have a lasting impact on the NTB region by fostering greater awareness and driving positive changes in local practices. Together, we can ensure the sustainability of NTB's stunning marine environment for generations to come. 
                    
                        Learn more about the Indonesia Biru Foundation’s conservation efforts on our <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Instagram</a>. Together, we can grow a brighter, greener future.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleSharkRayAwarenessProject;
