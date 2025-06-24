import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgMain from '../../assets/images/BMIbaru (5).png';
import imgSeminar1 from '../../assets/images/BMIbaru (1).png';
import imgSeminar2 from '../../assets/images/BMIbaru (3).png';
import imgSeminar3 from '../../assets/images/BMIbaru (5).png';
import imgSeminar4 from '../../assets/images/BMIbaru (4).png';
import imgSeminar5 from '../../assets/images/BMIbaru (2).png';

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
                <span>Sustainability at Seven Secrets</span>
            </div>

            {/* Main Image */}
            <div className="container-main-img-detail-news">
                <img src={imgMain} alt="seven-secrets" className="img-main-detail-news" />
            </div>

            {/* Title and Date */}
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Indonesia Biru Foundation: A Successful Step Towards Mangrove Restoration in Lombok
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • January 19, 2025
                </div>
            </div>

            {/* Article Content */}
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        The Indonesia Biru Foundation (IBF), in collaboration with Reef Support, recently concluded a groundbreaking initiative to conserve and revitalize the Cemare Mangrove ecosystem in Lombok. The project, MangroveAI, seamlessly integrated community efforts with advanced technological solutions such as remote sensing and computer vision to enhance ecosystem monitoring and management. The event not only marked a major milestone in environmental restoration but also exemplified how technology and community action can create sustainable change.
                    </p>
                    <br />
                    <p>
                        Mangroves are critical to Indonesia’s marine biodiversity, serving as natural buffers against erosion, carbon sinks, and sanctuaries for marine life. However, the Cemare Mangrove ecosystem, once home to a variety of species, had faced severe degradation due to illegal logging and lack of awareness. IBF’s initiative addressed these challenges head-on, aiming to restore the mangrove’s ecological balance and educate local communities about the importance of biodiversity.
                    </p>
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
                            <img src={imgMain} alt="seven-secrets-main" className="img-detail-news" />
                        </div>
                    </Slider>

                    <h2 className="text-xl font-semibold mb-2">Key Highlights of the Initiative:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Importance of Mangroves:</strong> The project emphasized the ecological roles of mangroves, such as carbon sequestration and erosion prevention, to underline why their conservation is critical.
                        </li>
                        <li>
                            <strong>Technological Impact:</strong> MangroveAI, the standout achievement of the project, empowers users and ensures precise monitoring of mangrove health, making the initiative innovative and effective.
                        </li>
                        <li>
                            <strong>Inclusivity:</strong> The initiative prioritized gender equality by including women in leadership, training, and decision-making roles, fostering social equity and strengthening community engagement.
                        </li>
                        <li>
                            <strong>Collaboration Benefits:</strong> IBF’s partnerships with the Cemare Eco Green Mangrove Society and other local stakeholders promoted sustainable waste management, eco-tourism practices, and greater community involvement.
                        </li>
                        <li>
                            <strong>Replicability:</strong> The project’s comprehensive approach positions it as a model for other regions, encouraging scaling and adoption of similar initiatives worldwide.
                        </li>
                    </ul>
                    <br />

                    <p>
                        The introduction of MangroveAI was the project’s standout achievement. This innovative tool enables precise ecosystem monitoring, allowing both researchers and community members to track mangrove health and identify restoration needs in real-time. During the event, participants were trained to use MangroveAI, equipping them with practical skills and fostering a sense of ownership. This fusion of technology and community engagement ensures long-term sustainability and effectiveness in conservation efforts.
                    </p>
                    <br />
                    <p>
                        Inclusivity was a central theme of the initiative. IBF ensured equal opportunities for women by involving them in training, leadership roles, and decision-making processes. By prioritizing gender inclusivity, the project not only empowered individuals but also strengthened the community’s collective commitment to preserving their natural resources. This approach serves as a model for integrating social equality into environmental action.
                    </p>
                    <br />
                    <p>
                        IBF’s collaboration extended beyond technology and training. Through partnerships with the Cemare Eco Green Mangrove Society and other local stakeholders, the foundation promoted sustainable waste management and eco-tourism practices. Awareness campaigns conducted during the event reached a broader audience, highlighting the ecological and economic benefits of mangrove conservation. These combined efforts strengthened community participation and aligned with broader biodiversity goals.
                    </p>
                    <br />
                    <p>
                        The success of this initiative sets a precedent for other regions facing similar environmental challenges. By blending technological innovation, education, and community involvement, Indonesia Biru Foundation has demonstrated how effective conservation efforts can have a ripple effect, inspiring similar projects across Southeast Asia. This event reaffirmed IBF’s commitment to biodiversity conservation and sustainable development, paving the way for a brighter, greener future.
                    </p>
                </div>

                {/* Additional Image Slider */}
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
    );
};

export default ArticleSevenSecrets;
