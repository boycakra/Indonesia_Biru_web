import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/detailNews5.png';


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
                    October Adventures with Blue Ranger 🌊: A Month of Ocean Conservation
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • November 8, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    
                    <p>In the month of October, our journey with the Blue Ranger was filled with remarkable adventures, meaningful conversations, and exciting coral restoration efforts. Let's dive into the highlights of this month's activities, all aimed at raising awareness about the importance of protecting our oceans.</p>
                    
                    <p><strong>October 3: Coral Deployment at Medana Bay Marina</strong></p>
                    <p>Our month kicked off with a hands-on coral deployment activity at Medana Bay Marina. We joined forces with passionate individuals to contribute to coral conservation and the preservation of marine life.</p>
                    
                    <p><strong>October 7: Nature and Human Responsibility</strong></p>
                    <p>During the Sail Indonesia event, we took a moment to reflect on the crucial role of human responsibility in environmental issues. Our aim is to inspire more people to engage in discussions about preserving our planet.</p>
                    
                    <p><strong>October 8: The Enigmatic Electric Clam</strong></p>
                    <p>We introduced you to the intriguing world of the Electric Clam, with its mesmerizing light display along the edge of its mantle. This unique feature has nothing to do with electricity but rather results from the reflection of ambient light. It's a natural wonder worth exploring.</p>
                    {" "} <br />
                    <p><strong>October 12: A Morning at IBFs' Coral Lab</strong></p>
                    <p>We extended a warm invitation to the Blue Ranger to visit IBFs' coral lab, offering guided tours to witness the fascinating world of coral research and restoration.</p>
                    
                    <p><strong>October 19: Reflecting on Three Years of Ocean Conservation</strong></p>
                    <p>In a heartfelt message, we looked back on three years of ocean conservation efforts. It's been a journey filled with growth and unexpected success, thanks to the support of countless individuals and organizations.</p>
                    
                    <p><strong>October 27: Assessing Coral Restoration in Ghost Bay, Bali</strong></p>
                    <p>We shared our latest coral restoration assessment in Ghost Bay, Bali, initiated by @biofarmaid and @nakwdunud. The photos provided a glimpse into the health of the reef and the progress being made.</p>
                   
                    <p><strong>October 28: Unveiling the Mysteries of Ghost Bay</strong></p>
                    <p>We explored the mysteries of Ghost Bay with captivating underwater photographs, showcasing coral-covered areas, sponge-dominated regions, and areas showing signs of damage. What could have caused these changes?</p>
                    {" "} <br />
                    <p>As we wrap up this month's adventures, we're more committed than ever to our mission of ocean conservation. Join us in our journey to protect and preserve the marine wonders that surround us. Together, we can make a difference.</p>
                
                </div>
            </div>

        </div>
    )
}

export default DetailNews5;
