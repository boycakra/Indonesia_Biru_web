import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/Cita Buana.jpeg';
import imgDesc1 from '../../assets/images/Studentvis3.jpg';
import imgDesc2 from '../../assets/images/Studentvis2.jpg';
import imgDesc4 from '../../assets/images/Studentvis5.jpg';


const ArticleSchoolVisits = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const imagesSet2 = [imgDesc1,imgDesc2, imgDesc4 ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>
                    Home
                </Link>
                {' / '}
                <span>Exciting Opportunities for Student Learning</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="School visits to Indonesia Biru Foundation" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Explore, Learn, and Protect: Inviting Schools to Indonesia Biru Foundation
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • May 24, 2024
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Calling all educators and young minds! Indonesia Biru Foundation is thrilled to announce that our doors are open for school visits. Embark on an educational journey like no other as we invite students to immerse themselves in the wonders of the environment, coral reefs, and conservation through an engaging hands-on experience.
                    </p>
                    <br />
                    <p>
                        At Indonesia Biru Foundation, we firmly believe that education is the key to fostering a deep-rooted connection to nature and inspiring future generations to become stewards of the environment. By providing students with the opportunity to explore our facility, we aim to ignite their curiosity, instill a sense of responsibility, and empower them to drive positive change in the world.
                    </p>
                    <br />
                    <p>
                        Our carefully crafted school visits offer an array of interactive activities, allowing students to delve into the intricate ecosystems of coral reefs, learn about the importance of biodiversity, and discover practical conservation techniques. From captivating guided tours to hands-on experiments, every moment spent at Indonesia Biru Foundation promises to be enriching, enlightening, and unforgettable.
                    </p>
                    <br />
                    <p>
                        Join us in our mission to nurture the environmental leaders of tomorrow. Together, we can equip students with the knowledge, skills, and passion needed to safeguard our planet for generations to come. Book your school visit today and embark on a transformative learning experience with Indonesia Biru Foundation.
                    </p>
                    <br />
                </div>
                <Slider {...sliderSettings}>
                    {imagesSet2.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img
                                src={img}
                                alt={`detail-news-set2-${index}`}
                                className="img-detail-news"
                                style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="desc-detail-news">
                    <h2>Why Choose Indonesia Biru Foundation for Your School Visit?</h2>
                    <ul>
                        <li>Expert Guidance: Our team of experienced educators and environmentalists will lead your students through an engaging and informative journey, providing valuable insights into conservation practices and environmental sustainability.</li>
                        <li>Hands-On Learning: From interactive exhibits to immersive workshops, students will have the opportunity to participate in a range of hands-on activities designed to deepen their understanding of environmental issues and inspire them to take action.</li>
                        <li>Real-World Impact: By visiting Indonesia Biru Foundation, students will gain firsthand knowledge of our conservation efforts and witness the tangible impact of environmental stewardship, empowering them to make a difference in their own communities.</li>
                        <li>Lasting Memories: A school visit to Indonesia Biru Foundation promises to be an unforgettable experience filled with discovery, wonder, and inspiration, leaving students with lasting memories and a newfound appreciation for the natural world.</li>
                    </ul>
                    <br />
                </div>

                <div className="desc-detail-news">
                    <h2>Book Your School Visit Today!</h2>
                    <p>
                        Don't miss out on this incredible opportunity to inspire and educate your students. Contact us now to schedule your school visit and embark on a transformative journey with Indonesia Biru Foundation. Together, let's empower the next generation to become champions of environmental conservation and create a brighter, more sustainable future for all.
                    </p>
                    <br />
                    <p>
                        Follow us on social media to stay updated on upcoming events, educational programs, and exciting initiatives: <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation Instagram</a>. Join our community of changemakers and be part of the movement towards a greener, healthier planet.
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ArticleSchoolVisits;
