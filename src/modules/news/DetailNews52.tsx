import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/learningbythesea/judul.png';
import img2 from '../../assets/learningbythesea/img2.png';
import img3 from '../../assets/learningbythesea/img3 (1).png';
import img4 from '../../assets/learningbythesea/img3 (2).png';
import img5 from '../../assets/learningbythesea/img4 (1).png';
import img6 from '../../assets/learningbythesea/img4 (2).png';


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
                <span>Learning by the See</span>
            </div>
            <div className="container-main-img-detail-news">
                <img src={img1} alt="run" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                Learning by the Sea: Cita Buana Students Dive into Coral Conservation
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • 11 July 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news space-y-6">
                <br />
                    <p>
                    Pantai Kecinan had another special visit! This time, students from Cita Buana School came to explore our Coral Lab. The excitement and energy during this session were truly amazing. The students were full of energy and curiosity, ready to learn more about coral reefs and the efforts we are making to protect them.
                    </p>
                    <br />
                    <p>
                    At Indonesia Biru Foundation (IBF), we believe that education is one of the key pillars in conservation efforts. By helping young people understand the value of our oceans and the challenges they face, we hope to inspire a new generation of ocean protectors. That’s why we’re always happy to be part of fun and meaningful educational activities that raise awareness about the ocean and its ecosystems.
                    </p>
                    <img src={img2} alt="School education and outreach" className="img-detail-news" />
                        
                    <br />

                  
                    
                    <p> During this visit, the students joined a Coral Restoration Workshop, where they learned about what coral reefs are, the different types of corals, their importance, and the threats they face. The session was very interactive, with lots of great questions from curious students.</p>
                    <br />
                    <p>After the theory session, the students got hands-on experience by planting coral fragments on our spider structures.  The students carefully cut coral fragments and tied them onto the spider frames with great care and enthusiasm. For many of them, it was their first time working with live coral, and the experience left a strong impression.</p>
                    <br />
                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img3} alt="School education and outreach" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img4} alt="Student activity on shark conservation" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />
                    
                   <p>
                   The visit also included a Coral Lab Tour, where we showed the students how we care for corals in the lab. They also had the chance to do a water quality test, learning about key parameters that corals need to survive, such as temperature, pH, salinity, and nutrients. Through this process, the students learned how delicate coral ecosystems are and how important it is to maintain balance in their habitat.
                
                   </p>
                   <br />
                   <p>
                   We believe that conservation doesn’t start in the ocean; it starts in the classroom, in conversations, and in experiences like these. We hope this visit not only gave the students new knowledge, but also inspired them to become part of the solution in protecting our marine ecosystems.
                   </p>
                   <br />
                   <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img5} alt="School education and outreach" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img6} alt="Student activity on shark conservation" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />

                    <br />

                   
                    <br />

                    <p>
                    Big thanks to Cita Buana School for visiting our Coral Lab at Pantai Kecinan! We had a great time sharing stories, learning together, and getting hands-on with coral restoration. At Indonesia Biru Foundation, we believe that education is one of the best ways to build awareness and inspire real action. We’re excited to keep working together in the future, because small steps can lead to big changes for our oceans. 🌊</p>
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
