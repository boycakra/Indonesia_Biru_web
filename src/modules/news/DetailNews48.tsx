import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/coastel/judul.png'; // training graph
import img2 from '../../assets/coastel/g1.png'; // bar graph - square frame
import img3 from '../../assets/coastel/g2.png'; // visual detection metal
import img4 from '../../assets/coastel/g3.png'; // bar graph - metal frame
import img5 from '../../assets/coastel/g4.png'; // visual detection metal
import img6 from '../../assets/coastel/g5 (1).png';
import img7 from '../../assets/coastel/g5 (2).png'; // bar graph - metal frame

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
                <span>Coastal exploration workshop</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={img1} alt="Coral planting in Nipah, Lombok" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Coastal exploration workshop
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • 07 July 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news space-y-6">
                    <br />
                    <p>
                    The Earth’s been through a lot, but every little step counts, and those small actions can grow into something big. That’s why IBF and sekolah anak alam held a “Coastal Exploration Workshop” for a beach day with a twist! While exploring the shoreline, the kids discovered how coastal ecosystems work and why it’s so important to protect them. </p>
                    <br />
                    <p>
                    🏖️ The excitement was contagious as children arrived with sunhats and curiosity. It wasn’t just a beach trip—it was an adventure filled with purpose. Mentors guided them through the coastline, pointing out everything from the shape of the tides to the role of sand dunes. By using storytelling and interactive games, the children quickly learned how human actions can harm or help our coastal friends. These simple yet powerful lessons set the tone for the rest of the day. 📚🌊
                    </p>

                    <br />

                    <h2 className="text-xl font-semibold">What did we learn? 🤔❓</h2>
                    <p>
                    From spotting marine creatures to discovering how turtle conservation works, the kids got hands-on experience with just how important our ocean really is. 🌊🐢Did you know that many marine animals, including turtles, are harmed by plastic? Some accidentally swallow it, thinking it’s food or get trapped and tangled😥 Plastic also blocks adult turtles from nesting and makes it harder for hatchlings to reach the sea.  
                    </p>
                    
                    <br />
                    <p>
                    🔍 As they turned over rocks and peeked into tide pools, the children were amazed by the small but mighty life forms that thrive at the edge of land and sea. Educators explained how even the tiniest creature plays a part in the food chain. The story of sea turtles particularly struck a chord—many kids gasped when they learned about hatchlings struggling against plastic barriers. This emotional moment sparked thoughtful conversations about the importance of reducing plastic waste. 🧃🚫🐢
                    </p>
                    <br />
                   <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img2} alt="Reef monitoring activity" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img3} alt="Reef monitoring activity" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />

                   <p>🦀Seashore exploration bingo: We kicked off the day with Seashore Exploration Bingo! The kids turned into little explorers, hunting for beach critters like crabs, shells, snails, and small fish while learning all about their coastal homes.</p>
                   <br />   
                   <p>
                    🧭 With laminated bingo cards and colored markers in hand, the beach turned into a living treasure hunt. Every discovery brought cheers and high-fives as teams raced to find all the listed creatures. Along the way, the mentors explained how each animal adapts to tides, salinity, and predators. The activity combined fun with facts—making science feel like a game. For many, it was their first time seeing a live crab or touching a sea snail! 🐚📸
                    </p>

                  
                    <p>
                    🌱Mangrove Planting & Clean-Up: The children learned how to plant mangroves and why these coastal trees are so important. And guess what? They absolutely loved it! With bright smiles and muddy hands, they dove into the activity with so much enthusiasm. Future eco-heroes in the making!</p>
                    <br />
                    <p>
                    🌳 The facilitators explained how mangroves act as the “guardians of the coast,” preventing erosion and sheltering marine life. As the kids planted young mangrove seedlings, they also learned that one tree could mean a home for hundreds of tiny creatures. Laughs echoed across the muddy banks as shoes got stuck, hands got dirty, and hearts grew fuller. The energy was pure, and the commitment was real—many even asked if they could come back and water their little trees! 💚🌍
                    </p>

                    <br />

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img4} alt="Reef monitoring activity" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img5} alt="Reef monitoring activity" className="img-detail-news" />
                        </div>
                    </Slider>
                    <p>
                    🐢Turtle conservation exploration: To wrap up the day, we dived into the world of turtles. The kids listened to stories about a turtle’s life journey—from egg to ocean and the many threats they face, especially from plastic waste. They even got to act out how turtles lay eggs and how hatchlings make their way to the sea. 
                    </p>
                    <br />
                    <p>
                    🎭 Through fun dramatizations, the kids imagined being mother turtles crawling ashore and hatchlings scrambling toward the waves. Laughter turned into awe as they understood the real-life challenges turtles face—from predators to pollution. The facilitators shared real success stories from local conservation groups that protect nesting grounds. Some children even made a pledge to never litter again and promised to tell their friends about turtle-safe beaches. 🐢🤲💙
                    </p>
                    <br />
                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img6} alt="Reef monitoring activity" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img7} alt="Reef monitoring activity" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />
                    <p>
                    As the sun began to set, the smiles stayed bright, and the lessons learned echoed in every heart. The Coastal Exploration Workshop wasn’t just an event—it became a memory, a spark, and for some, the beginning of a lifelong love for the ocean. 🌅🧒🌊
                    </p>

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
