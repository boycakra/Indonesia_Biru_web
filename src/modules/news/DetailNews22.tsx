import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/price.png';

const ArticleSeaLevelRise = () => {
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
                    Sea Level Rise: Understanding the Impacts and Solutions
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • February 18, 2024
                </div>
            </div>
            
            <div className="container-desc-detail-news">
                <div className="article-container">
                    <div className="article-section">
                        <h1>Sea level rise is a pressing global issue</h1>
                        <p>
                            The accelerating pace of sea level rise poses a significant threat to coastal communities and ecosystems worldwide. A comprehensive <a href="https://www.theguardian.com/environment/climate-consensus-97-per-cent/2016/mar/11/sea-level-rise-is-accelerating-how-much-it-costs-is-up-to-us" target="_blank" rel="noopener noreferrer">article from The Guardian</a> explores the latest research on sea level rise, its causes, and the potential consequences if left unchecked.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Understanding the drivers of sea level rise</h2>
                        <p>
                            Studies cited in the article attribute sea level rise to various factors, including melting ice sheets, thermal expansion of seawater, and changes in ocean circulation patterns. These processes contribute to the increasing frequency and severity of flooding, erosion, and storm surges along coastlines worldwide.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Assessing the impacts</h2>
                        <p>
                            The economic and social costs of sea level rise are substantial, ranging from infrastructure damage and loss of property to displacement of communities and loss of biodiversity. Vulnerable regions, such as low-lying coastal areas and small island nations, are particularly at risk and face the prospect of irreversible damage if action is not taken.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Exploring solutions</h2>
                        <p>
                            The article emphasizes the importance of adaptation, mitigation, and innovation in addressing sea level rise. Solutions include implementing coastal defense measures, promoting sustainable land-use planning, reducing greenhouse gas emissions, and investing in renewable energy technologies. Additionally, fostering international cooperation and community resilience are essential aspects of a comprehensive response to this global challenge.
                        </p>
                    </div>
                </div>

                <div className="article-container">
                    <div className="article-section">
                        <h2>Call to action</h2>
                        <p>
                            The urgency of addressing sea level rise cannot be overstated. As stewards of the environment, it is our responsibility to take meaningful action to protect coastal communities, preserve ecosystems, and secure a sustainable future for generations to come. By raising awareness, advocating for policy change, and supporting adaptation and mitigation efforts, we can make a difference in the fight against sea level rise.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Join the movement</h2>
                        <p>
                            Join Indonesia Biru Foundation and organizations worldwide in the fight against sea level rise. Together, we can work towards innovative solutions, foster resilience, and build a more sustainable future for coastal communities and ecosystems.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Together, we can make a difference</h2>
                        <p>
                            Let's heed the call to action and take decisive steps to address sea level rise. By working together, we can mitigate its impacts, protect vulnerable communities, and preserve the beauty and integrity of our planet's coastlines for generations to come.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ArticleSeaLevelRise;
