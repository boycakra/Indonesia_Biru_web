import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/large_nomenie.png';
import imgDescetailNews from '../../assets/images/large_restor.png';

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
                    IBF Proudly Nominated for The Earthshot Prize 2024: A Journey Towards Planet Repair
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • Desember 08, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                    In a significant stride towards global environmental recognition, Indonesia Biru Foundation (IBF) is elated to announce its nomination for The Earthshot Prize 2024, a prestigious global environmental award dedicated to identifying and amplifying solutions that will contribute to repairing our planet within this decade. As an Official Nominator, Restor has recognized IBF as a key contributor to the vital mission of fostering sustainability and environmental rejuvenation.</p>
                    <br />
                    <p>
                    The Earthshot Prize is not just an award; it's a platform designed to celebrate and support individuals, communities, businesses, and organizations that are driving extraordinary change. The simplicity yet ambition of the Earthshots - Protect and Restore Nature, Clean our Air, Revive our Oceans, Build a Waste-Free World, and Fix our Climate - resonates deeply with IBF's commitment to environmental conservation and restoration.</p>
                    <br />
                    <p>
                    IBF's nomination is a testament to its impactful work in the field, transcending the idea stage to achieve tangible progress. With tested solutions and a commitment to scalability within the next five years, IBF stands at the tipping point for making a transformational impact on the environment.</p>
                    <br />
                
                    <br />
                </div>

                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />

                <div className="desc-detail-news">
                    <p>
                    IBF expresses deep gratitude to Restor for recognizing its efforts and nominating the organization for The Earthshot Prize. This nomination not only serves as acknowledgment for IBF's ongoing initiatives but also fuels hope for a future where the collective efforts of organizations, communities, and individuals lead to meaningful planetary repair.</p>
                    <br />
                    <p>
                    As the nomination process unfolds, IBF remains committed to its mission of preserving marine ecosystems, fostering community development, and promoting marine literacy. The prospect of being considered for The Earthshot Prize inspires the organization to continue its journey towards creating a sustainable and thriving planet for future generations.</p>
                    <br />
                    <p>
                    In the spirit of optimism, dedication, and global collaboration, IBF looks forward to contributing to The Earthshot Prize 2024, and we invite all those with transformative solutions to join us on this remarkable journey. Let's nurture ideas that will shape a regenerated and thriving planet for generations to come. 🌍🌱 #IBF #EarthshotPrize2024 #EnvironmentalSolutions #RegenerationJourney #GlobalImpact</p>
                    <br />
                </div>
            </div>

        </div>
    )
}

export default DetailNews5;
