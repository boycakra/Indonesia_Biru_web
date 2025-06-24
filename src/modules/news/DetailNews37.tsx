import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS for default styles
import "slick-carousel/slick/slick-theme.css";
import imgMain from '../../assets/cnewgalry/cnewgalary (23).jpg';
import imgSeminar1 from '../../assets/cnewgalry/cnewgalary (11).jpg';
import imgSeminar2 from '../../assets/cnewgalry/cnewgalary (28).jpg';
import imgSeminar3 from '../../assets/cnewgalry/cnewgalary (9).jpg';

const ArticleCoralConnect2025 = () => {
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
                <span>Coral Connect 2025 Restoration 🌊</span>
            </div>

            {/* Main Image */}
            <div className="container-main-img-detail-news">
                <img src={imgMain} alt="coral-connect" className="img-main-detail-news" />
            </div>

            {/* Title and Date */}
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Coral Connect 2025: A Successful Collaboration for Coral Reef Restoration
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • January 12, 2025
                </div>
            </div>

            {/* Article Content */}
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        The "Coral Connect" event held at Pearl Beach Resort, Gili Asahan, from January 10th to 12th, 2025, was a resounding success, bringing together passionate individuals from the Indonesia Biru Foundation, TU Delft, Seachange Indonesia, and environmental experts worldwide. With a shared commitment to coral reef restoration, the event provided a platform for meaningful discussions on cutting-edge techniques, eco-tourism, and environmental protection. Attendees were inspired by the latest innovations and scientific approaches to preserve coral ecosystems for future generations.
                    </p>
                    <br />

                    <h3>Hands-on Coral Restoration and Eco-Tourism Activities</h3>
                    <p>
                        One of the highlights of the event was the hands-on coral restoration workshop, where participants actively contributed to reef restoration efforts. The excursion to Cemare Mangrove was another exciting opportunity, showcasing eco-tourism programs like guided tours, seedling planting, and wildlife spotting. These activities offered a unique blend of education and entertainment, giving participants a deeper understanding of the importance of mangroves in coastal protection and their connection to coral ecosystems.
                    </p>
                    <br />

                    <h3>Knowledge Sharing and Presentations</h3>
                    <p>
                        The event also featured presentations from various stakeholders, including local and international experts, as well as project and company showcases from NGOs, researchers, and entrepreneurs. The sharing sessions allowed participants to learn about diverse initiatives and products that aim to protect and restore coral reefs. The event’s inclusive and interactive approach made it accessible to everyone, whether they were attending online or offline, or participating in person.
                    </p>
                    <br />

                    <h3>Fun Side Activities</h3>
                    <p>
                        Overall, Coral Connect 2025 was an enriching experience for everyone involved. With fun side activities like an underwater photo contest and pub quiz, participants enjoyed both the learning and leisure aspects of the event. This successful collaboration not only fostered valuable connections but also set the stage for future projects that will continue to make a lasting impact on coral reef conservation and eco-tourism.
                    </p>
                    <br />
                </div>

                {/* Image Slider */}
                <Slider {...settings} className="slider-container">
                    <div>
                        <img src={imgSeminar1} alt="coral-connect-1" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgSeminar2} alt="coral-connect-2" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgSeminar3} alt="coral-connect-3" className="img-detail-news" />
                    </div>
                    <div>
                        <img src={imgMain} alt="coral-connect-main" className="img-detail-news" />
                    </div>
                </Slider>
                <div className="desc-detail-news">
                    <h3>Why Coral Reef Restoration Matters</h3>
                    <p>
                        Coral reef restoration is vital for sustaining marine biodiversity and protecting coastal communities from the impacts of climate change. At IBF, we believe that coral reefs play an essential role in maintaining ocean health and supporting local economies through eco-tourism and sustainable fishing practices.
                    </p>
                    <p>
                        Through our work with international partners, we aim to raise awareness of the importance of coral reef conservation and inspire collaborative efforts to protect these vital ecosystems for generations to come.
                    </p>
                    <br />
                    <p>
                        Thank you to everyone who participated in Coral Connect 2025, and we look forward to more successful collaborations in the future. Stay updated on our coral reef restoration projects by following the Indonesia Biru Foundation on our <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Instagram</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleCoralConnect2025;
