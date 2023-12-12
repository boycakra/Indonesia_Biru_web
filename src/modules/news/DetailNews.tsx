import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/dive site.png';
import imgDescetailNews from '../../assets/images/site_cor.png';

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
                    Coral Reef Restoration In North Lombok Regency
                </div>
                <div className="date-detail-news">
                    Indonesia Biru • January 1, 2021
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    Coral Reefs in Crisis <br />
                    The successful execution of the coral reef restoration project in North Lombok Regency marks a crucial milestone in the ongoing efforts to protect and rejuvenate these vital marine ecosystems. With the combined expertise of the diverse team, ranging from marine biologists and environmental scientists to skilled divers and community leaders, this project showcases the power of collaborative action in addressing environmental challenges <br />
                    {" "} <br />
                    By restoring the health of the coral reefs, we are not only preserving the natural beauty and biodiversity of these underwater landscapes but also securing sustainable livelihoods for the local communities that depend on them. This project's achievements serve as an inspiring example of how science, technology, and community-driven initiatives can work hand in hand to make a positive impact on our environment.The coral reef restoration activities in ten locations in North Lombok Regency have been successfully completed. A total of 1,000 spider structures and over 10,000 coral fragments were planted. <br />
                    {" "} <br />
                    <   strong>The team involved in the coral reef restoration in North Lombok Regency including:</strong>
                            <ul>
                                <li>Two teams of Master's degree experts.</li>
                                <li>Four scuba diving teams.</li>
                                <li>Ten site supervisors.</li>
                            </ul></div>
                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                <div className="desc-detail-news">
                    Both on land and underwater, consisted of more than 150 individuals, Over 15 members from POKDARWIS/POKWASMAS/NGOs at each restoration site
                    In addition to the successful restoration activities, the initiative has received positive feedback and support from local communities and authorities. This project is a significant step towards preserving the coral ecosystems in the region.
                    {" "} <br />
                    Furthermore, the coral restoration project in North Lombok Regency has not only contributed to the recovery of coral ecosystems but has also fostered community engagement and awareness. Local residents and organizations actively participated in the restoration efforts, demonstrating their commitment to the protection of their natural environment. This collaboration not only benefits the marine environment but also empowers and educates the community about the importance of coral conservation, sustainable practices, and the overall health of their coastal ecosystem. It is a testament to the shared responsibility of safeguarding these precious natural resources for current and future generations.
                    {" "} <br />
                </div>
            </div>
        </div>
    )
}

export default DetailNews;
