import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/progrescoral/judul.png';
import img2 from '../../assets/progrescoral/image1 (1).png';
import img3 from '../../assets/progrescoral/image1 (2).png';
import img4 from '../../assets/progrescoral/image1 (3).png';
import img5 from '../../assets/progrescoral/image2 (1).png';
import img6 from '../../assets/progrescoral/image2 (2).png';
import img7 from '../../assets/progrescoral/image3 (1).png';
import img8 from '../../assets/progrescoral/image3 (2).png';
import img9 from '../../assets/progrescoral/image3 (3).png';

const ArticleSharkRay = () => {
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
                <span>Progress Report: Coral Reef Restoration Efforts in Asahan</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={img1} alt="Shark and ray awareness program" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                Progress Report: Coral Reef Restoration Efforts in Asahan
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • 09 July 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news space-y-6">
                <br />
                    <p>
                    From November 2024 to June 2025, IX, Indonesia Biru Foundation collaboration with Coral Reef Care and Seachange Indonesia, successfully deployed 50 mesh structures covering a total area of 150 m². These structures were installed just off the shore of Pearl Beach Resort, with a bigger goal in mind: restoring a total of 288 m² of reef habitat using this method. Why mesh? We selected mesh structures based on the substrate conditions in Gili Asahan, which are predominantly composed of coral rubble. The mesh helps stabilize these fragments and keeps them from sliding down the reef slope due to waves and currents. This creates a more secure, stable environment that encourages the natural growth and recovery of corals.</p>
                    <br />
                    <p>Over 20 coral genera are now thriving on the restoration mesh! With a 90% survival rate, these corals are thriving! They’ve even started to grow over the cable ties, building new skeletons and completely covering the attachments. This is an amazing result, but it’s just the beginning of the restoration journey! We carry out regular monitoring to assess coral health, track growth, and ensure that the mesh structures remain stable. During these visits, we clean off algae and re-tie any coral fragments that have become loose due to water movement.</p>
                    <br />
                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img2} alt="School education and outreach" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img3} alt="coral" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img4} alt="coral2" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />

                    <p>
                        <strong> 🐠 Community Gathering & Coral Connect Event Life 🐟 </strong>
                    </p>
                    <br />
                    <p>
                    We also worked closely with Pokdarwis to discuss upcoming project plans and explore ways to deepen community involvement. In addition, we hosted sharing sessions, both online and offline, to spread knowledge about marine conservation. Around 50 participants from various organizations joined us, bringing energy, ideas, and a shared commitment to protecting our oceans.</p>
                    <br />

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img5} alt="School" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img6} alt="coral" className="img-detail-news" />
                        </div>
                       
                    </Slider>
                    <br />

                    <p>
                        <strong> 📖 School Field Trip  </strong>
                    </p>
                    <br />
                    <p>
                    But that’s not all, we’ve been busy with other exciting activities too! 🌱🌊We also love sharing ocean knowledge with local school kids! Through fun lessons and hands-on activities, they learn why it’s important to protect the sea and they even get to plant corals themselves.  And the action doesn’t stop at the beach! We’re planting trees on land too. Because what happens on land flows into the sea, and a thriving earth means a thriving reef.😉🌊</p>
                    <br />

                    <p>
                    We also created handy guides in the form of postcards and brochures about Do’s and Don’ts snorkeling activity. ❌✔️ These guides are being shared with tour operators, and tourists to help everyone enjoy the reef responsibly! So far, our guide has reached over 4,420 viewers on Instagram, and we’ve distributed it to resorts and dive shops all across Lombok. </p>
                    <br />

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img7} alt="School education and outreach" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img8} alt="coral" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img9} alt="coral2" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />
                   

                    <h2>Let’s Keep the Ocean in Balance 🌊</h2>
                    <br />

                    <p className="mt-4">
                        While our oceans seem vast and endless, their health depends on the balance maintained by creatures like sharks and rays. By understanding their role, spreading awareness, and supporting sustainable practices, we can help preserve marine biodiversity for generations to come.
                    </p>

                    <p className="mt-4">
                        Follow <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation</a> for more updates, field reports, and conservation stories. 💙🌏
                    </p>

                    <p className="mt-4">
                        <strong>Contributor:</strong> Indonesia Biru Foundation Field Team
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleSharkRay;
