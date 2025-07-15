import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/camerasea/image15.png'; // training graph
import img2 from '../../assets/camerasea/image23.png'; // bar graph - square frame
import img3 from '../../assets/camerasea/image27.png'; // visual detection metal
import img4 from '../../assets/camerasea/image34.png'; // bar graph - metal frame
import img5 from '../../assets/camerasea/image29.png'; // visual detection square
import img6 from '../../assets/camerasea/image8.png'; // visual detection square

const ArticleCamerainsea = () => {
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
                <span>Peek into the daily lives of marine creatures</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={img1} alt="YOLOv8 segmented coral with square frame" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    CVM Underwater Camera: Two-Month Performance Evaluation
                </div>
                <div className="date-detail-news">
                    By Elsa Dianita Aulia • 03 July 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news space-y-6">
                    <p>
                        Ever wondered what the fish are up to today? 🐡 Our camera’s got you covered! Now you can peek into the daily lives of marine creatures, live and in HD! 🎬🐠
                    </p>
                    <br />
                    <p>
                        On May 1st, 2025, Indonesia Biru Foundation, in collaboration with Seven Secrets by Hanging Gardens and LPPM Universitas Jenderal Soedirman, installed an Underwater Camera as part of an initiative to preserve and monitor marine ecosystems. Now, it has been two months since the installation, and the camera is functioning effectively and showing stable performance. This little gadget shoots in stunning HD and spins a full 360 degrees like a pro. All the footage is saved and ready to be rewatched, allowing for future review, ecological assessment, and awareness campaigns 🌊✨.
                    </p>
                    <br />
                    <p>
                        The underwater camera project is more than just a technical installation—it's a window into the hidden world beneath the waves. By using passive observation, the camera enables scientists and conservationists to study animal behavior without interference, opening the door for long-term ecological research and documentary work. The real-time monitoring is also an excellent tool for public engagement, inspiring more people to understand and protect marine biodiversity.
                    </p>
                    <br />

                    <h2 className="text-xl font-semibold">⚙️ Maintenance</h2>
                    <br />
                    <p>
                        Although the camera wiper does its job, our IBF Team treats it to a weekly cleanup session, cleaning off the greenish algae that likes to show up and can slightly affect image clarity. It’s a quick task, but essential to keep the footage clear and enjoyable. Another challenge? Sometimes the strong tidal current makes the camera lose position or even get knocked off completely! 😫 This can happen because Nipah's sandy floor makes it difficult for the camera to stay put when the tides get wild.
                    </p>
                    <br />
                    <p>
                        The team has also explored ways to improve the anchoring method using weights and securing the base with reef-safe materials. This adaptation is essential to ensuring the longevity of the equipment in harsher seasonal conditions. Additionally, a protocol has been developed to check battery health and memory card capacity every two weeks, ensuring the device continues recording without disruption.
                    </p>
                    <br />

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img2} alt="Bar chart comparing manual and YOLOv8 predictions in square frames" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img3} alt="YOLOv8 segmented coral with square frame" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img4} alt="YOLOv8 segmented coral with square frame" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />

                    <h2 className="text-xl font-semibold">🐡 Fish Biodiversity 🐟</h2>
                    <br />
                    <p>
                        Over the past two months, our underwater camera at Nipah Beach has captured a lively underwater scene—packed with marine visitors, from colorful fish to curious turtles! 🐠🐢 We’ve spotted Indo-Pacific Sergeant, Unicornfish, Grass Emperor, Thumbprint Emperor, Blacklip Butterflyfish, Longfin Batfish, and Golden Spots Rabbitfish swimming in and out of frame like they’re doing a daily check-in. Sometimes, a Hawksbill turtle floats by like it’s waving hello to the camera 🤿.
                    </p>
                    <br />
                    <p>
                        These sightings don’t just make for great footage—they highlight the resilience and richness of Nipah’s marine environment. Consistent appearances of these species over multiple days suggest the presence of microhabitats within the camera’s viewing range, offering clues into how marine fauna interact with their environment.
                    </p>
                    <br />
                    <p>
                        With the footage collected, the team is working with marine biologists and AI developers to build a database of species appearances, durations, and behaviors. This data will help create behavior maps, study migration and feeding cycles, and potentially help detect early signs of coral bleaching or environmental stress.
                    </p>
                    <br />

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img5} alt="Bar chart comparing manual and YOLOv8 predictions in square frames" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img6} alt="YOLOv8 segmented coral with square frame" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />

                    <h2>Join the Movement! 🌊</h2>
                    <br />
                    <p className="mt-4">
                        The CVM underwater camera is just the beginning. Our goal is to establish a network of similar monitoring tools across Indonesia’s reefs, enabling open-access data, collaborative research, and community-based marine protection. We believe technology should work for conservation—not just for science, but for storytelling, education, and inspiring change.
                    </p>
                    <br />
                    <p className="mt-4">
                        Follow <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation</a> for more updates, upcoming clean-up events, and ways you can support marine conservation efforts. 🌊💙
                    </p>

                    <p className="mt-4">
                        <strong>Contributor:</strong> Elsa Dianita Aulia
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleCamerainsea;
