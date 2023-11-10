import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/detailNews2.png';
import imgDescetailNews from '../../assets/images/descDetailNews2.png';

const DetailNews2 = () => {
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
                    Project Reef Support
                </div>
                <div className="date-detail-news">
                    Indonesia Biru • January 17, 2022
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    Since the 1950’s more than half of the coral reefs worldwide have decayed. If this trend continues, we will have lost or severely damaged over 90% of all coral reefs by 2050. The main causes: global warming, destructive fishing and pollution of our oceans and seas. <br />
                    {" "} <br />
                    The coral reefs are a home and nurturing ground for over 25% of marine species. Furthermore, hundreds of millions of people worldwide are dependent on the coral reefs through food security, income, and tourism. It protects people against the violent waves from the seas, acting as natural breakers of water. Moreover, coral reefs have great potential for medicine, with already promising research on the fight against cancer and Alzheimer’s. <br />
                    {" "} <br />
                    In short, we cannot afford to lose the coral reefs. <br />
                    {" "} <br />
                    The non-profit organizations Indonesia Biru Foundation and Reef Support want to make an impact on this issue. Their goal is to daily restore reefs in Central Indonesia. Indonesia possesses a quarter of all coral reefs still existing today. <br />
                </div>
                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                <div className="desc-detail-news">
                    We are Tadé, Joppe, Xavier and Alexandru. Through the TU Delft minor International Entrepreneurship & Development we started a collaboration with Indonesia Biru Foundation and Reef Support. Together with them we are building a sustainable coral-reef lab on Lombok. This lab will give the local community and IBF the required tools and space to restore corals on a frequent basis. We will accomplish this using two innovative techniques. The first one of these is micro-fragmentation, where corals are cut into small polyps, stimulating their growth rate up to 50 times the natural rate. Furthermore, we will use a technique called ‘assisted evolution’ to make the corals more resilient against rising sea temperatures due to global warming and acidifying oceans due to pollution. <br />
                    {" "} <br />
                    This lab will also be an educational lab where the local community will be trained to grow, restore, and protect coral reefs themselves. With this we will guarantee the continuation of the project and the restoration of the coral reefs. <br />
                </div>
            </div>
        </div>
    )
}

export default DetailNews2;
