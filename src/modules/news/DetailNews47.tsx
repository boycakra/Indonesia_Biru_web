import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/Earth day/Judul.png'; // training graph
import img2 from '../../assets/Earth day/yoga.png'; // bar graph - square frame
import img3 from '../../assets/Earth day/bersih1.png'; // visual detection metal
import img4 from '../../assets/Earth day/bersih2 (1).png'; // bar graph - metal frame
import img5 from '../../assets/Earth day/bersih2 (2).png'; // visual detection metal
import img6 from '../../assets/Earth day/bersih2 (3).png'; // bar graph - metal frame

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
                <span>Flow The Coast - Earth day 2025 </span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={img1} alt="Coral planting in Nipah, Lombok" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Flow The Coast - Earth day 2025
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • 06 July 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news space-y-6">
                    <p>
                    To commemorate Earth Day, IBF joined in the celebration of the Flow the Coast event organized by PNMID (Palm is Not My ID) on April 20, 2025, at Impos Beach, North Lombok. In line with this year’s Earth Day theme, “Our Power, Our Planet,” the event aimed to encourage the community to take an active role in protecting and restoring our planet. From yoga by the sea to hands-on environmental action, the event created a meaningful space where people could reconnect with nature and be part of something impactful.</p>
                    <br />
                    <p>
                    Our morning began with a calming yoga session led by Mantra Yoga, featuring special guest Sierly Wijaya. Afterward, everyone was invited to take part in a free health check-up provided by Bhakti Medika Clinic—A gentle reminder that caring for ourselves is one step toward caring for the Earth.</p>
                    <br />
                   
                    <img src={img2} alt="calming yoga" className="img-detail-news" />
                    <p>
                    🧘‍♂️ As the sun rose over Impos Beach, the sound of waves blended harmoniously with gentle breathing and stretching. The yoga session wasn't just about flexibility or poses—it served as a collective meditation, a moment for everyone to ground themselves in gratitude for nature. Many participants, both young and old, expressed how this serene experience reminded them of the deep connection between mental clarity and a healthy environment. The atmosphere was peaceful, yet powerful—setting a perfect tone for the day ahead. 🌞🕊️
                    </p>
                    <br />
                    <p>
                    The day continued with a beach cleanup, joined by all participants and members of the local community. Together, we took action to keep the coastline clean—an important step in showing our shared responsibility for the environment. To support ongoing efforts, PNMID, Mantra Yoga, and Impos Dive Center also donated 10 brand-new trash bins to help maintain cleanliness at Impos Beach.🌊🤝🗑️</p>
                    <br />
                    <img src={img3} alt="beach cleanup" className="img-detail-news" />
                    <br />
                    <p>
                    💪 Armed with reusable gloves, sacks, and a sense of unity, volunteers combed the beach to collect litter ranging from plastic bottles to discarded fishing nets. Children giggled as they found odd-shaped debris, while elders shared stories about how the coastline had changed over the years. It wasn't just a cleanup—it was a moment of learning and reflection. Environmental educators were present to explain the impact of marine litter on coral reefs and marine species, turning trash collection into a hands-on classroom experience. 🐢📚
                    </p>
                    <br />
                    <p>
                    🌱 During the seminar, our leader emphasized the importance of grassroots action in tackling climate challenges. He shared inspiring stories from various coastal communities across Indonesia that have successfully implemented sustainable practices—proving that local wisdom, when empowered, can create massive ripple effects. 💡🌏
                    </p>
                    <br />
                    
                    <img src={img4} alt="Coral planting with spider media" className="img-detail-news" />
                    <br />
                    <p>
                    🎤 The leader’s talk also touched on the role of youth in the climate movement. With energy and innovation on their side, young people were encouraged to lead eco-projects in their schools and neighborhoods. The audience was especially moved when a local student shared how joining last year’s coral planting event sparked her ambition to study marine biology. 🧑‍🔬🐚
                    </p>
                    <br />
                    <p>
                    Topping off the day was the Coral Workshop and Coral Planting with the amazing crew from IBF. Participants got to learn all about coral reefs—what they are, why they matter, what kinds exist, and the threats they’re facing today. 🐠🪸The best part? Everyone got the chance to plant their own coral using spider frames. We hope this experience didn’t just stay with the participants, but also spreads to the wider community around Impos Beach. Because when more people care, more coral reefs can be saved.</p>
                    <br />
                    <br /> 
                   
                    
                    
                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img5} alt="Reef monitoring activity" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img6} alt="Reef monitoring activity" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />

                    <h2>Join the Movement! 🌊</h2>
                    <br />
                    <p className="mt-4">
                        Coral planting is more than just diving and placing fragments. It’s about reconnecting with nature, learning patience, and building hope—one coral at a time. The Seven Secrets site at Nipah is just one of many we hope to establish across Indonesia’s coastlines. With your support, we can scale our efforts, train more local stewards, and restore more reef zones that desperately need help.
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
