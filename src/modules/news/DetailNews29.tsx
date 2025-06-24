import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/News_29a.jpeg';
import imgDesc1 from '../../assets/images/News_29b.jpg';
import imgDesc2 from '../../assets/images/News_29c.jpeg';
import imgDesc3 from '../../assets/images/News_29d.jpg';

const ArticleClayProject = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const imagesSet = [imgDesc1, imgDesc2, imgDesc3];

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
                <span>Coral Restoration with Waste Clay</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="Clay Project for Coral Restoration" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Collaboration in Action: Coral Restoration with Waste Clay
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • September 30, 2024
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Hi Blue Ranger 🌊! We're thrilled to share the progress of a meaningful collaboration that is now showing tangible results. Not long ago, alongside <a href="https://www.instagram.com/sara__howard/" target="_blank" rel="noopener noreferrer">@sara__howard</a> and <a href="https://www.instagram.com/kevalastudio/" target="_blank" rel="noopener noreferrer">@kevalastudio</a>, we embarked on a small project with a big vision: turning waste clay into a valuable tool for coral restoration. The project’s goal is to help corals attach to barren rock surfaces, which has huge potential for reviving coral ecosystems.
                    </p>
                    <br />
                    <p>
                        Through this initiative, we also wanted to inspire public involvement, as community support is essential to sustain conservation conversations and action. Fast forward 1.5 years, and it’s rewarding to see that despite setbacks and challenges, we’re making headway 🙌. This journey, sprinkled with learning moments, has strengthened our commitment to continue. We truly believe that these clay devices could be transformative for marine conservation.
                    </p>
                    <br />
                    <p>
                        The initial phase took place at <a href="https://www.instagram.com/craftingcoral/" target="_blank" rel="noopener noreferrer">@craftingcoral</a> at Kevala Studio, where we began experimenting with the concept. Images in slides 1 capture this creative phase, with our team working to refine the devices and envision their impact.
                    </p>
                    <br />
                    <p>
                        During the Sail2Indonesia event at <a href="https://www.instagram.com/medanabaymarina/" target="_blank" rel="noopener noreferrer">@medanabaymarina</a> (slides 2), we showcased these innovative tools and gathered feedback from the community, which has been invaluable in shaping our approach.
                    </p>
                    <br />
                    <p>
                        Finally, image 3 were taken at Kecinan Bay, where the majority of these clay devices have now been deployed. This phase of the project marks a significant milestone as we monitor how well these devices support coral growth over time. We’re excited to see these first steps evolve into a sustainable solution for coral regeneration.
                    </p>
                    <br />
                    <p>
                        Follow along for more updates as we continue to innovate, experiment, and work toward a more resilient future for our oceans. Learn more and join the conversation by visiting the full post on Instagram <a href="https://www.instagram.com/p/DAhd0kPym70/?igsh=MWJsbjQ5b2lwczdjYg%3D%3D&img_index=10" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                    <br />
                </div>

                <Slider {...sliderSettings}>
                    {imagesSet.map((img, index) => (
                        <div key={index} className="slider-image-container">
                            <img
                                src={img}
                                alt={`clay-project-highlight-${index}`}
                                className="img-detail-news"
                                style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                <div className="desc-detail-news">
                    <h2>Join the Movement</h2>
                    <p>
                        This project highlights the power of collaboration in conservation, from small creative beginnings to tangible impacts on marine life. Stay tuned for more updates on our clay device initiative and other projects. Follow our journey as we work toward a sustainable and vibrant ocean ecosystem.
                    </p>
                    <br />
                    <p>
                        Find out more about the Indonesia Biru Foundation’s efforts: <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Instagram</a>. Let’s make a difference together!
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ArticleClayProject;
