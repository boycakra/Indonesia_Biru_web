import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/laut-plastik.png';

const ArticlePlasticPollution = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to={"/"} onClick={() => updateValue("")}>
                    Home
                </Link>{' '}
                / <span>Indonesia Biru Foundation</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="detail-news" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                Study Finds, Plastic Pollution Worsens Ocean Acidification
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • February 18, 2024
                </div>
            </div>
            
            <div className="container-desc-detail-news">
                <div className="article-container">
                    <div className="article-section">
                        <h1>Plastic pollution has a detrimental impact on our oceans</h1>
                        <p>
                            Plastic pollution continues to pose a significant threat to marine ecosystems, with far-reaching consequences for ocean health. A recent study highlighted in a <a href="https://phys.org/news/2022-09-plastic-degradation-ocean-contributes-acidification.html" target="_blank" rel="noopener noreferrer">Phys.org article</a> reveals that plastic degradation in the ocean exacerbates ocean acidification, compounding the challenges faced by marine life.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>The findings of the study</h2>
                        <p>
                            The study demonstrates how plastic degradation releases organic acids and carbon dioxide into seawater, resulting in a decrease in pH levels and increased acidity. Surprisingly, the research indicates that aged and degraded plastics are even more harmful than new plastics in contributing to ocean acidification. Additionally, sunlight plays a pivotal role in accelerating the degradation process, exacerbating the issue.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Implications for marine life and ecosystems</h2>
                        <p>
                            Ocean acidification poses a serious threat to marine life, particularly to calcifying organisms such as corals, shellfish, and certain types of plankton. As seawater becomes more acidic, it becomes increasingly challenging for these organisms to build and maintain their calcium carbonate structures, leading to widespread declines in population and biodiversity.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>The call for action</h2>
                        <p>
                            This study underscores the urgent need for concerted efforts to address plastic pollution and its detrimental effects on ocean acidification. Mitigating plastic waste, promoting recycling, and implementing sustainable alternatives are crucial steps in reducing the influx of plastic into our oceans. Furthermore, continued research and monitoring are essential to better understand the complex interactions between plastic pollution, ocean acidification, and marine ecosystems.
                        </p>
                    </div>
                </div>

                <div className="article-container">
                    <div className="article-section">
                        <h2>Join the fight against plastic pollution</h2>
                        <p>
                            As advocates for ocean conservation, it is our collective responsibility to take action against plastic pollution. By reducing our plastic consumption, properly disposing of waste, and supporting initiatives that promote plastic-free alternatives, we can make a positive impact on marine ecosystems and safeguard the health of our oceans for future generations.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Stay informed and spread awareness</h2>
                        <p>
                            Stay informed about the latest research and developments related to plastic pollution and ocean acidification. Share information with your community, engage in discussions, and advocate for policies that prioritize environmental protection and sustainability. Together, we can work towards a cleaner, healthier future for our oceans and planet.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Take action today</h2>
                        <p>
                            The time to act is now. Join Indonesia Biru Foundation and countless other organizations in the fight against plastic pollution. Together, we can make a difference and ensure a brighter, more sustainable future for our oceans and marine life.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ArticlePlasticPollution;
