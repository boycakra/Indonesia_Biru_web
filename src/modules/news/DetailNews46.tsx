import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/coralplanting/image10.png'; // training graph
import img2 from '../../assets/coralplanting/image22.png'; // bar graph - square frame
import img3 from '../../assets/coralplanting/image28.png'; // visual detection metal
import img4 from '../../assets/coralplanting/image6.png'; // bar graph - metal frame


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
                <span>Coral Planting at Seven Secrets </span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={img1} alt="Coral planting in Nipah, Lombok" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Coral Planting at Seven Secrets by Hanging Gardens, Nipah, North Lombok
                </div>
                <div className="date-detail-news">
                    By Elsa Dianita Aulia • 05 July 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news space-y-6">
                    <p>
                        Coral reefs are more than just pretty underwater scenery! They’re home to thousands of marine species and act as natural shields that protect our coastlines from strong waves and erosion. Sadly, Indonesia’s coral reefs are being damaged more and more each year 😥. Beneath the calm surface of the sea, corals are actually fighting for survival, battling threats like rising sea temperatures, pollution, destructive fishing practices, and careless human activities. It’s a silent struggle, but one that affects all of us.
                    </p>
                    <br />
                    <p>
                        As a step to improve coral reefs, IBF together with Seven Secrets by Hanging Gardens planted coral reefs on Nipah Beach, North Lombok. Until now, we have deployed 1 table and 12 reefstars. There are also baby corals tied in 7 ropes that function as our nursery area. The good news is, the coral reefs in the nursery area show good growth—even some coral colonies can be harvested and transplanted into spider media, expanding the healthy coral reef ecosystem.
                    </p>
                    <br />
                    <p>
                        The coral nursery at Nipah Beach is starting to work its magic. We’ve seen small fish and other marine life gradually return to the area—proof that a new, healthy ecosystem is starting to take shape. What’s the secret behind all this underwater activity? It's thanks to our superstar corals, Acropora and Pocillopora! ✨ Two coral types we’ve planted the most. These fast-growing species create great hiding spots, and also create a cozy home for marine species.
                    </p>
                    <br />
                    <p>
                        Coral planting isn't just a conservation action—it's a community movement. With every coral planted, we are also nurturing hope: hope that future generations will still be able to swim among colorful reefs, hope that our seas can recover from the damage, and hope that humans and nature can work together for a more sustainable future.
                    </p>
                    <br />

                    <h2 className="text-xl font-semibold">📷 Photogrammetry</h2>
                    <br />
                    <img src={img4} alt="Photogrammetry" className="img-detail-news" />
                    <p>
                        Cool tech meets coral! 🌊💻 As an addition to our conservation efforts, IBF also monitors coral reefs using photogrammetry—a cutting-edge method that allows us to create highly accurate and detailed 3D maps of coral structures. These 3D reconstructions help us analyze the physical structure of coral in high detail, so we can spot damage, track growth, and better understand how the coral is changing over time.
                    </p>
                    <br />
                    <p>
                        These digital reconstructions provide long-term value by creating a virtual archive of the reef’s history. With consistent scans over months or years, scientists can study how reefs respond to restoration efforts and environmental changes. This data is essential to designing smarter strategies in the fight against coral decline.
                    </p>
                    <br />

                    <h2 className="text-xl font-semibold">🐡 Coral Workshop 🐟</h2>
                    <br />
                    <p>
                        We’re not in this alone—and we don’t want to be! That’s why IBF and Seven Secrets have teamed up to run a fun, hands-on coral workshop for hotel guests who are curious about what’s really going on beneath the waves. It’s an effort to involve more people in helping restore coral reefs.
                    </p>
                    <br />
                    <p>
                        In this workshop, participants can learn about the different types of corals, why they matter so much, and what threats they’re facing today. But we don’t stop at just talking. We roll up our sleeves and give guests a chance to plant corals themselves using ceramic or spider frames. It’s a cool way to learn by doing and to get a glimpse into the amazing process of bringing reefs back to life.
                    </p>
                    <br />
                    <p>
                        Through this experience, we’re turning guests into ocean ambassadors. Many participants leave with a deeper appreciation of marine life and often stay connected through our community updates. Some even become repeat volunteers or start advocating for reef protection in their own regions.
                    </p>
                    <br />

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img3} alt="Coral planting with spider media" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img2} alt="Reef monitoring activity" className="img-detail-news" />
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
