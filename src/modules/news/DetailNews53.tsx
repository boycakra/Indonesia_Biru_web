import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/seminar/judul.png';
import img2 from '../../assets/seminar/img2.png';
import img3 from '../../assets/seminar/img3 (1).png';
import img4 from '../../assets/seminar/img3 (2).png';

const ArticleRunWithPurpose = () => {
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
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>Home</Link>
                {' / '}
                <span>Empowering Cemare</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={img1} alt="run" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Empowering Cemare: Amore Pacific Supports Salt and Waste Management
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • 12 July 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news space-y-6">
                    <br />
                    <p>
                        19 June marked a meaningful moment for our team as we received generous support through a donation handover ceremony, followed by an inspiring village tour alongside community leaders and local residents. IBF was entrusted with two important contributions: funding support to improve local salt production facilities, and a waste shredding machine to strengthen community-based waste management efforts. Both donations reflect a shared commitment to empowering coastal communities to care for both their environment and their livelihoods.
                    </p>
                    <br />
                    <p>
                        This support goes beyond infrastructure—it breathes life into the local spirit. Through collaboration and mutual trust, we are fostering a movement that not only uplifts the community but also nurtures environmental resilience for future generations.
                    </p>

                    <br />
                    <p>
                        The salt-making area in the village has been managed with very limited tools and resources for many years. Despite the challenges, the local community has continued to produce salt through traditional methods, showing great dedication and hard work. These upgrades will help make salt production safer, cleaner, and more efficient. At the same time, the new shredding machine will support the village’s waste-sorting efforts by reducing plastic pollution and turning waste into reusable material. This not only helps protect the environment but also empowers the community to manage their waste in a more sustainable and impactful way.
                    </p>
                    <br />
                    <p>
                        By bridging traditional practices with modern tools, the initiative showcases how innovation and culture can go hand in hand. This balance of heritage and progress creates a sustainable path forward that respects the roots of the community while enhancing their future.
                    </p>
                    <br />
                    <img src={img2} alt="School education and outreach" className="img-detail-news" />
                    <br />

                    <p>
                        After the ceremony, participants joined a village tour guided by the IBF team. The tour featured hands-on activities, including mangrove planting, a visit to the salt-making site, and a stop at the village’s waste sorting area, where guests helped sort plastic waste alongside local workers. Despite the heat of the day, our spirits stayed high throughout the tour. We were happy to introduce our site and share our work with the Amore Pacific team.
                    </p>
                    <br />
                    <p>
                        Each activity was more than symbolic—it was a real opportunity for visitors to walk in the shoes of the community, to touch the soil they protect, and to see the challenges and victories of local environmental efforts up close. This experience deepened mutual understanding and appreciation.
                    </p>
                    <br />

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img3} alt="School education and outreach" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img4} alt="Student activity on shark conservation" className="img-detail-news" />
                        </div>
                    </Slider>

                    <p>
                        We are truly grateful for the support from Amore Pacific and proud to showcase the efforts of the community. Moments like this remind us that real change happens through shared responsibility and strong partnerships. We hope the positive impact from this visit continues to grow, spreading awareness, inspiring action, and strengthening our collective commitment to a healthier, more sustainable future.
                    </p>
                    <br />
                    <p>
                        The story of Cemare is just one example of how global companies and local communities can work hand in hand. With each small victory, we take a step closer to a future where sustainability isn’t just a goal—it’s a way of life.
                    </p>
                    <br />

                    <p>
                        🙏 We sincerely thank Amore Pacific for their unwavering support and belief in the power of community. Your contribution has sparked a chain reaction of empowerment and inspiration. To the people of Cemare, thank you for your warm welcome and relentless spirit. And to our dedicated IBF team, your heart-driven work continues to inspire hope in every corner we reach.
                    </p>
                    <br />

                    <h2>Join the Movement! 🌊</h2>
                    <br />
                    <p>
                        Want to be part of our conservation efforts? Follow <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation</a> for updates on upcoming clean-ups, conservation programs, and educational initiatives! Together, let’s make our oceans a safer place. 💙🐠
                    </p>

                    <br />
                    <p className="mt-4">
                        <strong>Contributor:</strong> Indonesia Biru Foundation Team
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleRunWithPurpose;
