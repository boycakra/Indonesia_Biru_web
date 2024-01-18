import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/SectionProvider';
import imgDetailNews from '../../assets/images/new13.png';
import imgDescetailNews from '../../assets/images/Head_news13.png';

const DetailNews5 = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        // Scroll to the top on component mount
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <div className="container-detail-news">
            {/* Breadcrumb */}
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>
                    Home
                </Link>{' '}
                / <span>News Detail</span>
            </div>

            {/* Main Image */}
            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="detail-news" className="img-main-detail-news" />
            </div>

            {/* Title and Date */}
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    A Year of Gratitude and Milestones: Insights from IBF Founder and Director, Andre Saputra
                </div>
                <div className="date-detail-news">Boy Cakraningrat • December 30, 2023</div>
            </div>

            {/* Article Content */}
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        As we bid farewell to 2023, IBF Founder and Director, Andre Saputra, has a few words to express
                        his deepest gratitude to each one of you for your unwavering support of our organization.
                        This past year has been a remarkable journey of progress and learning, and it's with immense
                        pride that he shares some key highlights of our collective achievements.
                    </p>
                </div>

                {/* Image in the Article */}
                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />

                {/* Main Article Content */}
                <div className="desc-detail-news">
                    <section>
                    <br/>
                        <h2>Year of Achievements (2023)</h2>
                        <p>
                            In 2023, Indonesia Biru Foundation (IBF) achieved significant milestones, marking a year of growth and impact.
                            The IBF family expanded by welcoming three full-time employees from Lombok, strengthening our roots.
                            Initiatives such as the establishment of the Coral Lab at Kecinan Bay and collaboration with Southern Lombok businesses
                            underscore our commitment to holistic marine conservation.
                        </p>
                        <br/>
                    </section>

                    <section>
                        <h2>Earthshot Prize Nomination</h2>
                        <p>
                            Notably, our Earthshot Prize 2024 nomination stands as a pinnacle achievement, recognizing the collective effort and
                            impact in environmental conservation. The engagement of over 200,000 interactions in education and awareness reflects
                            our dedication. This progress is a testament to the support of passionate individuals and partners, without whom our
                            mission to restore and preserve marine ecosystems would be impossible.
                        </p>
                        <br/>
                    </section>

                    <section>
                        <h2>Gratitude for Support</h2>
                        <p>
                            As we enter 2024, our gratitude extends to everyone involved, acknowledging that your support is the driving force
                            behind our pursuit of a healthier and more sustainable world.
                        </p>
                        <br/>

                    </section>

                    <section>
                        <h2>Collaboration and Hope</h2>
                        <p>
                            In conclusion, the collaboration between Indonesia Biru Foundation and Coral Connect Lombok represents a beacon of
                            hope for the endangered coral reefs. Together, they are striving to create a sustainable future where marine ecosystems
                            thrive, and coastal communities prosper. Your support is not just a donation; it's a crucial step towards preserving
                            the beauty and diversity of Indonesia's coral reefs for generations to come.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DetailNews5;
