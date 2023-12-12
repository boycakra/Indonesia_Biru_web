import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/detailNews4.png';
import imgDescetailNews from '../../assets/images/descDetailNews4.png';

const DetailNews4 = () => {
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
                    Nurturing Coral Life: The Stages of Coral Restoration
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • November 4, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    Coral restoration is a delicate and crucial endeavor undertaken by organizations like the Indonesia Biru Foundation (IBF). The process involves several stages, each of which contributes to the revival of our coral reefs and the preservation of marine ecosystems. <br />
                    {" "} <br />
                    Harvesting <br />
                    The initial stage in coral restoration begins with the careful harvesting of small fragments from healthy coral colonies. It's a meticulous process that demands precision and a deep understanding of the coral's ecology. IBF's team ensures that only small fragments are collected, leaving the majority of the healthy coral intact. This approach safeguards the health and resilience of the existing coral colonies, ensuring they remain vibrant and robust. <br />
                    {" "} <br />
                    Planting <br />
                    After the harvesting process, the collected coral fragments find a new home on specially designed structures often referred to as "spider constructions." These structures provide a stable platform for the fragments to attach themselves. Here, the corals are given the opportunity to grow and develop, gradually forming new colonies. It's akin to giving nature a helping hand, a chance to rejuvenate itself. <br />
                </div>
                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                <div className="desc-detail-news">
                    Monitoring <br />
                    The dedication to the restoration process doesn't conclude with planting. Regular monitoring is a fundamental aspect of ensuring the success of coral restoration. During dives, the IBF team closely observes the state and progress of the planted coral fragments. By doing so, they can detect any signs of stress, disease, or any other issues that might hinder the growth of the corals. This hands-on approach allows for prompt intervention when necessary, providing the best conditions for these newly planted corals to thrive. <br />
                    {" "} <br />
                    Improvement <br />
                    Coral restoration is a continuous learning process. IBF constantly refines its methods based on the data collected during monitoring. This data-driven approach allows them to make informed decisions about which coral species are more resilient and better suited to thrive in specific environments. By leveraging their collected knowledge, IBF adapts and improves its methods, making each restoration effort more effective than the last. <br />
                    {" "} <br />
                    Coral restoration is not just about replanting coral fragments; it's a comprehensive and thoughtful process that takes into account the health of the existing reef, the growth of new coral colonies, and the long-term sustainability of these ecosystems. Through the stages of harvesting, planting, monitoring, and improvement, organizations like IBF are making a substantial difference in the ongoing battle to preserve and protect our coral reefs. <br />
                </div>
            </div>
        </div>
    )
}

export default DetailNews4;
