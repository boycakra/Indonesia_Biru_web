import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/Restor.png';
import imgDescetailNews from '../../assets/images/ibr_restor.png';

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
                    Revitalizing Indonesia's Coral Reefs: A Collaborative Journey with Indonesia Biru Foundation and Restor Team
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • November 24, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    In pursuing a hands-on approach to biodiversity preservation, the Indonesia Biru Foundation (IBF) focuses on coral reef restoration. This comprehensive initiative involves the responsible harvesting of small fragments from healthy coral, ensuring minimal impact on existing ecosystems. Subsequently, these fragments are meticulously planted on spider constructions, providing a conducive environment for growth and the formation of new colonies. Through regular monitoring during dives, IBF keeps track of the progress and state of the planted coral fragments. The data collected is pivotal for ongoing improvement, enabling IBF to refine its methods and identify resilient coral species.<br />
                    {" "} <br />
                    IBF's commitment to marine conservation has found an ally in the Restor Team, a group of scientists and technologists based in Zurich, Switzerland. Restor connects and supports restoration action globally, fostering a culture where individuals passionate about environmental conservation can thrive. The Restor Team's impact extends across continents, bringing together diverse talents working on projects ranging from software development to bioacoustics monitoring solutions in remote jungles.
                </div>

                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                <div className="desc-detail-news">
                    An Instagram post by Indonesia Biru beckons the attention of the "Blue Rangers," urging collective action for the restoration of nature. The post highlights a recap video by the Restor Team, showcasing the global scale of restoration efforts. The caption prompts followers to spot Indonesia Biru Foundation in the video, creating engagement and curiosity among the audience.<br />
                    {" "} <br />
                    As we navigate the critical mission of restoring our oceans, Indonesia Biru Foundation and the Restor Team stand as beacons of collaborative, impactful action. The harmony between local initiatives and global support exemplifies the power of unified efforts in revitalizing our precious coral reefs, ensuring a sustainable future for coastal communities and the marine ecosystems they depend on.
                </div>
            </div>
        </div>
    )
}

export default DetailNews5;
