import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/global.jpg';

const ArticleHeatwaveWatch = () => {
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
                    The Arrival of the Worst Heatwave: A Call to Action for Reef Conservation
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • February 18, 2024
                </div>
            </div>
            
            <div className="container-desc-detail-news">
                <div className="article-container">
                    <div className="article-section">
                        <h1>Hi Blue Ranger! 🌊</h1>
                        <p>
                            It's time to pay close attention to our reefs as we brace ourselves for the arrival of the worst heatwave expected this March-April. The impending heatwave poses a significant threat to our marine ecosystems, particularly coral reefs, which are highly sensitive to changes in temperature.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Observing Coral Adaptations</h2>
                        <p>
                            While the prospect may seem daunting, there is hope in witnessing how some corals are adapting to these extreme temperature conditions. Despite the challenges, corals demonstrate resilience and the ability to acclimate to changing environmental conditions. By closely monitoring their response, we can gain valuable insights into their adaptive strategies and inform conservation efforts.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Insights from Global Climate Summary</h2>
                        <p>
                            According to the Global Climate Summary for January 2024, it was reported as the warmest January on record, with a global surface temperature of 2.29°F (1.27°C) above the 20th-century average. The presence of El Niño conditions, which emerged in June 2023, continued into January. However, it is anticipated that El Niño will transition to ENSO-neutral by mid-year.
                        </p>
                        <p>
                            Source: <a href="https://www.climate.gov/news-features/understanding-climate/global-climate-summary-january-2024" target="_blank" rel="noopener noreferrer">Global Climate Summary January 2024</a>
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>A Call to Action, Join the Conservation Effort</h2>
                        <p>
                            In light of these developments, it is imperative that we take proactive measures to protect our reefs and mitigate the impacts of climate change. By reducing carbon emissions, promoting sustainable practices, and implementing effective conservation strategies, we can safeguard the health and vitality of our marine ecosystems for future generations.
                        </p>
                        <p>
                            As stewards of the ocean, we all have a role to play in preserving our reefs and combating climate change. Whether it's participating in reef monitoring programs, supporting marine conservation initiatives, or advocating for policy change, every action counts. Together, let's work towards a future where our reefs thrive in a healthy and sustainable environment.
                        </p>
                    </div>
                </div>

                <div className="article-container">
                  

                    <div className="article-section">
                        <h2>Stay Informed and Take Action</h2>
                        <p>
                            Stay informed about the latest developments in reef conservation and climate science. Follow Indonesia Biru Foundation on social media for updates, educational resources, and opportunities to get involved. Together, we can make a difference and ensure a brighter future for our reefs and our planet.
                        </p>
                        <p>
                            The time to act is now. Let's stand together in defense of our reefs and commit to preserving the beauty and diversity of our marine ecosystems. Together, we can overcome the challenges ahead and create a sustainable future where our reefs thrive alongside future generations.
                        </p>
                    </div>

                    
                </div>

            </div>
        </div>
    );
};

export default ArticleHeatwaveWatch;
