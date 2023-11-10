import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/detailNews.png';
import imgDescetailNews from '../../assets/images/descDetailNews.png';

const DetailNews = () => {
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
                    Planting Hope: How Indonesia Biru Foundation Restores Coral Reefs
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • November 6, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    Coral Reefs in Crisis <br />
                    In the heart of paradise, on the beautiful island of Lombok, the Indonesia Biru Foundation (IBF) is silently scripting a tale of hope for the oceans. Established in 2020, this independent organization has been on a remarkable journey of coral reef research, restoration, and fostering the development of coastal communities. At its core, IBF carries the noble vision of increasing marine literacy among Indonesian citizens, and their approach is both scientific and deeply community-oriented. <br />
                    {" "} <br />
                    Through relentless research and method development, IBF strives to magnify its impact. Their commitment to finding the most effective ways to restore coral reefs is unwavering. It's a mission fueled by a deep love for the ocean and a profound sense of responsibility. <br />
                    {" "} <br />
                    IBF firmly believes that the local community plays a pivotal role in the restoration process. Their approach includes comprehensive community involvement, from education to participation in diving operations. It's not just about saving the reefs; it's about empowering the people who depend on these precious ecosystems. <br />
                    {" "} <br />
                    IBF recognizes that the scale of their work needs to expand for a more significant impact. Public awareness is the linchpin of their strategy. By shedding light on the urgency of coral reef preservation, they aim to rally support and action from the wider public. <br />
                    {" "} <br />
                    The process begins with the careful harvest of small fragments from healthy corals. IBF is meticulous to ensure they take just enough to create new life without weakening the existing coral colonies. It's a delicate balance they've mastered. <br />
                </div>
                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                <div className="desc-detail-news">
                    Once harvested, the fragments find their new home on specially crafted spider constructions. Here, the corals are given a chance to flourish, gradually forming new colonies. The act of planting hope for the reefs is akin to being a guardian of the sea. <br />
                    {" "} <br />
                    The dedication doesn't stop at planting. During their dives, the IBF team monitors the condition and progress of the planted coral fragments. It's a nurturing process that requires constant attention and care. <br />
                    {" "} <br />
                    IBF doesn't rest on its laurels. They continuously learn from the data they collect and use it to refine their methods. This includes identifying which coral species show resilience in the face of adversity, a testament to their commitment to the environment. <br />
                    {" "} <br />
                    In the midst of breathtaking natural beauty, Indonesia Biru Foundation is working tirelessly to ensure that the underwater wonders of Lombok and beyond remain a source of awe and inspiration for generations to come. It's a story of hope, science, community, and an unwavering commitment to preserving our oceans. <br />
                </div>
            </div>
        </div>
    )
}

export default DetailNews;
