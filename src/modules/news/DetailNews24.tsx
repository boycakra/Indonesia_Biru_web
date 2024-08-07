import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/Mangrove.jpeg';

const ArticleArtProject = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>
                    Home
                </Link>
                {' / '}
                <span>Successful Mangrove Restoration Event</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="Successful mangrove restoration event" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Successful Collaborative Efforts in Cemare: Mangrove Restoration and Environmental Education
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • April 28, 2023
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        We are thrilled to announce the successful completion of our collaborative event with @coralreefcare and @cemare_ecogreen in Cemare, South Lembar. Our mission focused on mangrove restoration, waste management, and environmental education was a resounding success, thanks to the enthusiastic participation of our community and volunteers.
                    </p>
                    <br />
                    <p>
                        The event not only achieved its primary objectives but also exceeded expectations in several key areas. Here are some of the notable successes:
                    </p>
                    <br />
                    <ul>
                        <li>
                            <strong>Significant Community Engagement:</strong> Many volunteers come, including local residents, students, and environmental enthusiasts, joined the clean-up day. This impressive turnout demonstrated the strong community spirit and commitment to preserving the local environment.
                        </li>
                        <br />
                        <li>
                            <strong>Effective Waste Management:</strong> The team collected and sorted of waste from the coastline. Items such as plastic bottles, fishing nets, and other debris were properly disposed of or recycled, significantly reducing the pollution levels in the area.
                        </li>
                        <br />
                        <li>
                            <strong>Mangrove Restoration:</strong> Mangrove seedlings were planted, contributing to the stabilization of the coastline, providing crucial habitat for marine life, and enhancing the natural beauty of the area. These efforts are vital in combating coastal erosion and supporting biodiversity.
                        </li>
                        <br />
                        <li>
                            <strong>Educational Impact:</strong> The event included workshops on environmental awareness and waste management, reaching over 100 local students. These educational activities helped raise awareness about the importance of mangroves and other coastal ecosystems, fostering a new generation of environmental stewards.
                        </li>
                        <br />
                        <li>
                            <strong>Collaborative Effort:</strong> The event strengthened partnerships with local organizations and stakeholders, fostering a collaborative approach to ongoing and future environmental initiatives. The support from @coralreefcare and @cemare_ecogreen was instrumental in the event's success.
                        </li>
                    </ul>
                    <br />
                </div>

                <div className="container-embed-youtube">
                    <div className="rotate-container">
                        <iframe
                            title="YouTube Video"
                            src={`https://www.youtube.com/embed/66EFj-2YkfU?si=2K6tK8AFyrTS4Oax`}
                            frameBorder="0"
                            allowFullScreen
                        />
                    </div>
                </div>

                <div className="desc-detail-news">
                    <p>
                        Participants shared their experiences and reflections on the event, highlighting the sense of accomplishment and the impact of their contributions:
                    </p>
                    <br />
                    <p>
                        "Being part of this event was incredibly rewarding. It's amazing to see how much we can achieve when we work together. The mangrove planting was a highlight for me, knowing that these seedlings will grow and support the ecosystem for years to come." - <em>Ayu, Volunteer</em>
                    </p>
                    <br />
                    <p>
                        "The educational workshops were very informative. I learned so much about waste management and the importance of mangroves. I'm excited to share this knowledge with my friends and family." - <em>Budi, Local Student</em>
                    </p>
                    <br />
                </div>

                <div className="desc-detail-news">
                    <h2>Join the Movement</h2>
                    <p>
                        If you're passionate about environmental conservation and want to contribute to future initiatives, follow Indonesia Biru Foundation on Instagram and stay updated on our upcoming projects. By joining our efforts, you can make a tangible difference in protecting and restoring our precious coastal ecosystems.
                    </p>
                    <br />
                    <p>
                        We invite everyone to get involved, whether by participating in events, spreading awareness, or supporting our initiatives through donations. Every action counts and together, we can create a sustainable and thriving environment for future generations.
                    </p>
                    <br />
                    <h2>For More Information</h2>
                    <p>
                        Learn more about our events and initiatives by following us on Instagram and checking out our latest posts: <a href="https://www.instagram.com/p/C3ZOnw4Bx8Q/?g=5&img_index=1" target="_blank" rel="noopener noreferrer">IBF Mangrove Project</a>. Join us in our mission to protect our coastlines, promote sustainability, and inspire positive change.
                    </p>
                    <br />
                    <p>
                        Stay connected with us on social media to see behind-the-scenes footage, progress updates, and more inspiring stories from our community. Together, we can make a lasting impact on our environment and ensure a brighter future for our planet.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ArticleArtProject;
