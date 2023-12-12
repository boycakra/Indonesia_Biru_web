import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/news6.png';
import imgDescetailNews from '../../assets/images/descDetailNews6.png';

const DetailNews5 = () => {
    const { updateValue } = useMyContext();
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });

    }, [])

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to={"/"} onClick={() => updateValue("")}>Home</Link> / <span>News Detail</span>
            </div>
            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="detail-news" className="img-main-detail-news" />
            </div>
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Reevaluating Coral Rehabilitation: Lessons from Ghost Bay, Amed, Bali
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • November 8, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    In the pursuit of biodiversity preservation, Srikandi Bio Farma, along with the University of Udayana's Nature Enthusiast Students and Amed Dive Center, embarked on a coral conservation mission in Amed Ghost Bay in 2022. Despite employing coral transplantation, a common method for reef restoration, recent evaluations unearthed challenges that prompt a reconsideration of future initiatives. <br /><br />

                    Amed Ghost Bay, nestled in Karangasem, Bali, posed distinctive challenges. The sandy substrate dominated the transplant area, creating obstacles for coral larvae settlement. Algal overgrowth signaled a lack of regular cleaning, impacting coral growth on the structures. <br /><br />

                    To assess the success of coral transplantation after a year, October 2023 saw the team conducting a comprehensive evaluation. Data on coral coverage, fish biodiversity, and invertebrate biodiversity were collected. Quadrant transects and visual censuses provided insights into the reef's condition. What did we see? Hardly any coral cover (just 2%), with sand taking up a whopping 85%. Fish were there, 17 types to be exact, including cool names like Sunburst Butterflyfish. But where were the invertebrates, the unsung heroes of a healthy coral hangout? <br /><br />

                    Reconsidering Future Initiatives: 
                    The dominance of sandy substrate, algal overgrowth, and human activities emphasize the need for thorough pre-rehabilitation surveys. To ensure sustainable conservation efforts, future initiatives must consider the physical and chemical conditions of the chosen site, human activities, and stakeholder capacity for monitoring and maintenance.<br /><br />
                </div>
                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                <div className="desc-detail-news">
                <   strong>Key Findings:</strong>
                            <ul>
                                <li>Sandy Showdown: Sand dominated the coral playground, making it tricky for coral babies to find a comfy spot.</li>
                                <li>Algae Takeover: Algae gate-crashed the coral space, competing for elbow room on the structures.</li>
                                <li>Boats and Bumps: Busy boat traffic played a part in flipping structures and, unfortunately, breaking some coral hearts.</li>
                            </ul>
                             {" "} <br />
                             The dominance of sandy substrate, algal overgrowth, and human activities underscore the necessity of thorough pre-rehabilitation surveys. Sustainable coral conservation demands a meticulous understanding of site conditions, human activities, and stakeholder capacity for monitoring and maintenance. While the Amed Ghost Bay project faced challenges, it offers invaluable insights. Sustainable coral conservation requires meticulous site selection, regular maintenance, and a nuanced understanding of the balance between natural and anthropogenic factors. As we recalibrate our approach, let the journey in Amed Ghost Bay guide us toward more effective and sustainable coral restoration practices. <br />
                </div>
            </div>
        </div>
    )
}

export default DetailNews5;
