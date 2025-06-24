import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS for default styles
import "slick-carousel/slick/slick-theme.css";
import imgMain from '../../assets/images/sd (1).jpg';

import imgSeminar2 from '../../assets/images/sd (2).jpg';
import imgSeminar3 from '../../assets/images/sd (3).jpg';

const ArticleEnvironmentalSeminar = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <div className="container-detail-news">
            {/* Breadcrumb Navigation */}
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>
                    Home
                </Link>
                {' / '}
                <span>Raising Awareness on Elasmobranchs through Education</span>
            </div>

            {/* Main Image */}
            <div className="container-main-img-detail-news">
                <img src={imgMain} alt="elasmobranch-education-event" className="img-main-detail-news" />
            </div>

            {/* Title and Date */}
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Event Indonesia Biru Foundation: Raising Awareness on Elasmobranchs through Education
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • November 2, 2024
                </div>
            </div>

            {/* Article Content */}
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                <p>
                    Sharks and rays (elasmobranchs) are more than just ocean predators—they’re vital to marine ecosystems! 
                    The Indonesia Biru Foundation hosted an educational program to spark curiosity and inspire young minds 
                    to protect these fascinating creatures.
                </p>
                <p>
                    Designed for elementary school students, the event was a mix of storytelling, fun quizzes, and creative 
                    activities like coloring and species ID with flashcards. Each grade dove deeper into the world of sharks and rays:
                </p>
                <ul>
                    <li><strong>Grades 1-2:</strong> Shark tales, flashcards, and coloring fun.</li>
                    <li><strong>Grades 3-4:</strong> Discovering biology through videos and discussions.</li>
                    <li><strong>Grades 5-6:</strong> Exploring their ecological importance and conservation.</li>
                </ul>
                 {/* Image Slider */}
                 <Slider {...settings} className="slider-container">
                  
                  <div>
                      <img src={imgSeminar2} alt="elasmobranch-2" className="img-detail-news" />
                  </div>
                  <div>
                      <img src={imgSeminar3} alt="elasmobranch-3" className="img-detail-news" />
                  </div>
                  <div>
                      <img src={imgMain} alt="elasmobranch-main" className="img-detail-news" />
                  </div>
              </Slider>
                <p>
                    Each session ended with a lively quiz and open discussion, encouraging critical thinking and student interaction. 
                    By connecting with young learners, the foundation ensures that future generations value and protect Indonesia's rich marine life.
                </p>
                <p>Follow the Indonesia Biru Foundation for more initiatives and join the mission to save our seas!</p>
                    
                    <h3>Interactive Approach to Learning</h3>
                    <p>
                        The Indonesia Biru Foundation believes in learning through interaction. Each session concludes with a fun and challenging quiz to reinforce the concepts covered. Students are encouraged to ask questions and share their thoughts, fostering critical thinking and engagement with the subject matter.
                    </p>
                    <br />

                    <h3>Why This Event Matters</h3>
                    <p>
                        Elasmobranchs play a crucial role in maintaining the health of marine ecosystems, yet they are often misunderstood and undervalued. By educating the next generation, the Indonesia Biru Foundation aims to build a community that appreciates the importance of marine conservation. The program also aligns with the foundation's broader mission to protect Indonesia’s rich marine biodiversity.
                    </p>
                    <p>
                        This event is more than just an educational program—it’s a stepping stone towards a sustainable future. By engaging young minds, the Indonesia Biru Foundation is ensuring that the story of sharks and rays continues to inspire awe and action for years to come.
                    </p>
                    <br />
                    <p>
                        For more updates and information on upcoming initiatives, follow the Indonesia Biru Foundation on social media and join the movement to protect our marine world.
                    </p>
                </div>

               
            </div>
        </div>
    );
};

export default ArticleEnvironmentalSeminar;
