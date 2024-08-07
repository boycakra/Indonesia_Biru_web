import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/mafff1 (1).jpeg';
import imgDesc1 from '../../assets/images/maff.jfif';
import imgDesc2 from '../../assets/images/maaf.jfif';
import imgDesc3 from '../../assets/images/new_staff.png';
import imgDesc4 from '../../assets/images/mafff1 (1).jpeg';
import imgDesc5 from '../../assets/images/mafff1 (3).jpeg';

const ArticleEventSuccess = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const imagesSet1 = [imgDesc4, imgDesc5];
    const imagesSet2 = [imgDesc1, imgDesc2, imgDesc3];

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
                <span>Collaboration with @maap.rides and @bikesystem.id</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="Marine Conservation Collaboration" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Using Cycling for Marine Conservation Campaigns
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • July 28, 2024
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        In an effort to spread marine conservation awareness, the Indonesia Biru Foundation collaborated with @maap.rides and @bikesystem.id through the "Help Wanted" campaign. This campaign demonstrates how cycling can be an effective medium for raising awareness about marine conservation.
                    </p>
                    <br />
                    <p>
                        "Who would've thought cyclist and marine conservation is a match? We proved it right in Bandung! 🌊"
                    </p>
                    <br />
                    <p>
                        This collaboration took place in Bandung, where cyclists from the @maap.rides and @bikesystem.id communities participated in the campaign aimed at raising public awareness about the importance of protecting marine ecosystems. This activity not only combined cycling with environmental missions but also showed that every individual plays a vital role in nature conservation.
                    </p>
                    <br />
                    <p>
                        During the event, participants cycled through predetermined routes while stopping at several key points to receive information about marine conservation. Each stop featured educational stations filled with visual materials, interactive displays, and short videos about human impacts on the sea and steps that can be taken to protect it.
                    </p>
                    <br />
                    <p>
                        Additionally, we held Q&A sessions with environmental experts and provided opportunities for participants to contribute directly through beach cleanup activities and donations for marine conservation projects. This event was warmly received by the local community, demonstrating that combining sports activities with conservation efforts can create a positive and sustainable impact.
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
                    <h2>Why This Collaboration Was Successful</h2>
                    <ul>
                        <li>Innovative Approach: Using cycling as a tool for marine conservation campaigns proves that creativity in approach can attract wider attention.</li>
                        <li>Public Education: The campaign successfully delivered important messages about the need to protect marine ecosystems in a fun and interactive way.</li>
                        <li>Community Engagement: Participants felt more connected to the goal of marine conservation as they engaged in relevant and enjoyable activities.</li>
                        <li>Awareness and Impact: By combining sports and conservation, this campaign inspired more people to participate in environmental conservation.</li>
                        <li>Positive Experience: Participants left the event with a sense of accomplishment and new knowledge about their role in protecting the ocean.</li>
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
        </div>
    );
};

export default ArticleEventSuccess;
