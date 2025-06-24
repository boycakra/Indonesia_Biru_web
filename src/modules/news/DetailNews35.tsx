import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS for default styles
import "slick-carousel/slick/slick-theme.css";
import imgMain from '../../assets/images/news_35a.jpg';
import imgSeminar1 from '../../assets/images/news_35a.jpg';
import imgSeminar2 from '../../assets/images/news_35b.jpg';
import imgSeminar3 from '../../assets/images/news_35c.jpg';

const ArticleEnvironmentalSeminar = () => {
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
                <Link to="/" onClick={() => updateValue("")}>
                    Home
                </Link>
                {' / '}
                <span>Coastal Ecosystem Conservation 🌊</span>
            </div>

            {/* Main Image */}
            <div className="container-main-img-detail-news">
                <img src={imgMain} alt="environmental-seminar" className="img-main-detail-news" />
            </div>

            {/* Title and Date */}
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    IBF Attends Environmental Seminar with Mataram University: Coastal Ecosystem Conservation 🌊
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • November 2, 2024
                </div>
            </div>

            {/* Article Content */}
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Hello, Blue Rangers! 🌊 We are excited to share our recent participation in an environmental seminar hosted by the Student Council (BEM) of Mataram University. This seminar, held in collaboration with the NTB Department of Marine and Fisheries, brought together experts and advocates to discuss the current state of coastal ecosystems and the vital need for preservation efforts.
                    </p>
                    <br />
                    
                    <h3>Highlighting Coastal Ecosystem Challenges</h3>
                    <p>
                        The seminar opened with a discussion on the health of coastal ecosystems in NTB, covering pressing issues such as overfishing, pollution, and habitat loss. Together with NTB’s Marine and Fisheries Department, we shared insights into the threats facing these ecosystems and how local communities are impacted.
                    </p>
                    <p>
                        IBF highlighted ongoing efforts to mitigate these impacts, presenting a range of programs designed to protect NTB’s marine life. This included community clean-ups, education campaigns, and sustainable fishing initiatives aimed at reducing harm to the environment while supporting local economies.
                    </p>
                    <br />
                    
                    <h3>IBF’s Conservation Initiatives</h3>
                    <p>
                        During the seminar, we introduced several of our key conservation initiatives:
                    </p>
                    <ul>
                        <li>
                            <strong>Education Programs:</strong> Targeting schools and universities, these programs raise awareness about the importance of marine conservation and sustainable practices.
                        </li>
                        <li>
                            <strong>Community Collaborations:</strong> Partnering with local organizations, we conduct beach clean-ups, support reef restoration, and offer training for sustainable fishing methods.
                        </li>
                        <li>
                            <strong>Marine Health Monitoring:</strong> We regularly monitor water quality and marine biodiversity to provide data that informs NTB’s environmental policies and community practices.
                        </li>
                    </ul>
                    <br />
                    
                    
                </div>

                {/* Image Slider */}
                <Slider {...settings} className="slider-container">
                    <div>
                        <img src={imgSeminar1} alt="seminar-1" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgSeminar2} alt="seminar-2" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgSeminar3} alt="seminar-3" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgMain} alt="environmental-seminar-main" className="img-detail-news" />
                    </div>
                </Slider>
                <div className="desc-detail-news">
                <h3>Why Marine Conservation Matters</h3>
                    <p>
                        Marine conservation is essential for sustaining the biodiversity of NTB’s coastal ecosystems, which play a crucial role in maintaining ocean health. At IBF, we believe that protecting the ocean not only preserves marine species but also supports tourism, fishing industries, and the livelihoods of coastal communities.
                    </p>
                    <p>
                        Through our work with Mataram University and other local partners, we aim to foster a greater appreciation for the ocean’s value and the collective responsibility we share to safeguard it. Together, we can build a sustainable future for NTB’s remarkable marine environment.
                    </p>
                    <br />
                    <p>
                        Thank you to everyone involved in this successful seminar, and we look forward to seeing positive changes in NTB’s conservation efforts. Stay tuned for more updates on our environmental projects!
                        Learn more about the Indonesia Biru Foundation’s conservation efforts on our <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Instagram</a>. Together, we can grow a brighter, greener future.
                    
                    </p>

                    </div>
            </div>
        </div>
    );
};

export default ArticleEnvironmentalSeminar;
