import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/run/judul.png';
import img2 from '../../assets/run/img1 (1).png';
import img3 from '../../assets/run/img1 (2).png';
import img4 from '../../assets/run/img2 (1).png';
import img5 from '../../assets/run/img2 (2).png';


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
                <span>Trail Run with Purpose</span>
            </div>
            <div className="container-main-img-detail-news">
                <img src={img1} alt="run" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Trail Run Relay for the Earth 🌍
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • 10 July 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news space-y-6">
                <br />
                    <p>
                        Last May 29, IBF successfully held its first-ever trail run relay event—and what an extraordinary experience it was! 🏃‍♀️🌿 The event was joined by 6 enthusiastic teams and 1 brave solo runner, all coming together with one goal: to take action for the earth. Held at the stunning Cemare Beach, the race offered more than just a challenge—it kicked off the day with stunning views and fresh coastal energy. IBF seeks to show that sports can be more than a competition—they can be a powerful tool for awareness and change.👟
                    </p>
                    <br />
                    <p>
                        The participants didn’t just compete—they connected with nature in a unique way. The sound of waves, the breeze from the sea, and the crunch of sand beneath their shoes reminded everyone of what’s truly at stake. This event brought people from various backgrounds together, uniting them with a shared mission of environmental consciousness through physical activity.
                    </p>
                    <br />

                    <h2 className="text-xl font-semibold">You Don't Just Run. You Run with Purpose</h2>
                    <br />
                    <p>This wasn’t an ordinary run! Each team had three members, and everyone had a special role to play:</p>
                    <ul className="list-disc pl-6">
                        <li>🏃‍♂️ The first runner kicked things off by picking up trash along the trail.</li>
                        <li>🧤 The second runner took on the task of sorting the collected waste—an important step to ensure that recyclable and organic materials don’t go to waste.</li>
                        <ul className="list-disc pl-8">
                            <li>♻️ Anorganic waste? Recycled!</li>
                            <li>🍃 Organics? Turned into compost!</li>
                        </ul>
                        <li>🌱 Finally, the third runner ended the relay in a meaningful way by planting mangrove seedlings. This helps protect the coast and supports ecological restoration.</li>
                    </ul>
                    <br />

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img2} alt="School education and outreach" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img3} alt="Student activity on shark conservation" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />

                    <p>
                        By integrating environmental action into every leg of the relay, the event showed that sustainability can be active, fun, and practical. These symbolic gestures weren’t just for the cameras—they were real, intentional acts of care. It sent a powerful message: everyone has a role in creating change, no matter how small the action.
                    </p>
                    <br />

                    <p>🤝 Thank You! 
                    <br /> 
                    We extend our sincere gratitude to all participants, volunteers, local communities, and sponsors who made this event possible. Your support, energy, and enthusiasm were the heart of this experience. This memorable event would not have been the same without you!
                    </p>
                    <br />
                    <p>
                        The connections made during this event extended beyond the track. New friendships were formed, community bonds were strengthened, and hope was planted—just like the mangrove seedlings. Events like this remind us that collective action, when done with heart, can create ripples far beyond the shoreline.
                    </p>
                    <br />

                    <p>
                        By combining sport with sustainability, we hope to inspire even more people to move with purpose—proving that every step, every action, and every effort can shape a better world.🌍💚
                    </p>
                    <br />
                    <p>
                        As we look ahead, this trail run serves as a foundation for even more creative environmental activities. IBF plans to continue combining movement, education, and conservation to ignite a lasting impact. Together, we run not only for ourselves, but for the Earth.
                    </p>
                    <br />
                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img5} alt="School education and outreach" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img4} alt="Student activity on shark conservation" className="img-detail-news" />
                        </div>
                    </Slider>
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
