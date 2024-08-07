import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/Lombok Insani School (1).jpeg';
import imgDesc1 from '../../assets/images/Lombok Insani School (2).jpeg';
import imgDesc2 from '../../assets/images/Lombok Insani School (3).jpeg';
import imgDesc3 from '../../assets/images/Lombok Insani School (4).jpeg';
import imgDesc4 from '../../assets/images/Sanur kolab Hyatt (1).jpeg';
import imgDesc5 from '../../assets/images/Sanur kolab Hyatt (2).jpeg';
import imgDesc6 from '../../assets/images/Sanur kolab Hyatt.jpeg';


const ArticleEventSuccess = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const imagesSet2 = [imgDesc1, imgDesc2, imgDesc3];
    const imagesSet1 = [imgDesc4, imgDesc5, imgDesc6];

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
                <span>World Turtle Day: A Successful Event for Conservation Awareness</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="World Turtle Day Event" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Celebrating World Turtle Day with Indonesia Biru Foundation
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • May 24, 2024
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        On Thursday, May 23, 2024, the Indonesia Biru Foundation proudly hosted World Turtle Day, a highly successful event dedicated to raising awareness about sea turtle conservation. The event took place from 3pm to 5pm, drawing an enthusiastic crowd of local communities, tourists, children, environmental enthusiasts, and families.
                    </p>
                    <br />
                    <p>
                        The event's main goal was to educate participants on the importance of protecting sea turtles and their habitats. Through engaging activities and informative sessions, attendees learned about the critical role sea turtles play in marine ecosystems and the urgent need to conserve their populations.
                    </p>
                    <br />
                    <p>
                        Highlights of the event included guided tours, interactive workshops, and a live demonstration of the proper procedures for releasing sea turtles back into the ocean. Volunteers and children actively participated, making it a memorable and impactful experience for all involved.
                    </p>
                    <br />
                </div>
                <Slider {...sliderSettings}>
                    {imagesSet1.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img
                                src={img}
                                alt={`event-highlight-${index}`}
                                className="img-detail-news"
                                style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="desc-detail-news">
                    <h2>Why World Turtle Day Was a Success</h2>
                    <ul>
                        <li>Increased Awareness: The event successfully raised awareness about the plight of sea turtles and the importance of conservation efforts.</li>
                        <li>Educational Impact: Participants gained valuable knowledge about sea turtle biology, threats they face, and conservation strategies.</li>
                        <li>Community Engagement: The event fostered a sense of community and collective responsibility towards environmental stewardship.</li>
                        <li>Positive Contributions: Attendees had the chance to contribute directly to conservation efforts through hands-on activities and volunteer opportunities.</li>
                        <li>Memorable Experience: The interactive and engaging nature of the event left participants with lasting memories and a deeper appreciation for sea turtles.</li>
                    </ul>
                    <br />
                </div>

                <Slider {...sliderSettings}>
                    {imagesSet2.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img
                                src={img}
                                alt={`event-highlight-${index}`}
                                className="img-detail-news"
                                style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="desc-detail-news">
                    <h2>Join Us for Future Events</h2>
                    <p>
                        The success of World Turtle Day is a testament to the power of community and education in driving environmental conservation. We invite you to join us for future events and continue supporting our mission to protect sea turtles and other marine life. Stay connected with us through our social media channels for updates on upcoming programs and initiatives.
                    </p>
                    <br />
                    <p>
                        Follow us on social media to stay updated on upcoming events, educational programs, and exciting initiatives: <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation Instagram</a>. Together, let's make a difference and create a brighter, more sustainable future for all.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};
export default ArticleEventSuccess;