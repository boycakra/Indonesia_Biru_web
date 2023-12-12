import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/large_acara.png';
import imgDescetailNews from '../../assets/images/large_acra1.png';

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
                    Sailing for a Cause: IBF's Coral Restoration Workshop at World Arc Rally, September 2023
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • September 05, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    In a groundbreaking event at Medana Bay Marina, Indonesia Biru Foundation (IBF) hosted the "Coral Restoration Workshop Sail Indonesia and World Arc Rally" in October 2023, aligning with the mission of World Cruising Club to promote long offshore passages for cruising boats and crews worldwide. This unique collaboration showcased the fusion of sailing adventures with environmental conservation, as IBF took the opportunity to raise awareness and actively engage with the local community.
                    <br /><br />

                    In the spirit of combining adventure with environmental responsibility, IBF seized the opportunity presented by the World Arc Rally to conduct a Coral Restoration Workshop. This innovative event aimed to educate the sailing community about coral restoration techniques while fostering a deeper connection with the marine ecosystems they navigate.
                    <br /><br />

                    
                   

                   
                </div>


                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                    <div className="desc-detail-news">
                    During the workshop, IBF extended its outreach to the local community, introducing a unique approach to coral planting. Participants learned how to create ceramic structures that could serve as anchors for coral fragments, facilitating their attachment to the sea floor. This not only provided an insightful hands-on experience for sailing enthusiasts but also empowered the local community with knowledge about sustainable practices in marine conservation.
                    <br /><br />

                    As the Coral Restoration Workshop concluded, IBF encourages sailors and the local community to stay connected with ongoing conservation efforts. Follow IBF on social media and join the movement to protect and restore coral reefs. For those embarking on ocean voyages, consider the broader impact of your journey and explore opportunities to contribute to marine conservation.

                    In essence, the Coral Restoration Workshop at the World Arc Rally reflects a new era of sailing—one that not only embraces the thrill of the open sea but also recognizes the responsibility to safeguard the marine wonders that captivate sailors worldwide. Together, IBF and the World Cruising Club are steering towards a future where every nautical mile contributes to the preservation of our oceans. ⛵🌊🐠 #IBF #WorldArcRally #CoralRestoration #SailingForConservation
                    <br /><br />
                    </div>

            </div>
        </div>
    )
}

export default DetailNews5;
