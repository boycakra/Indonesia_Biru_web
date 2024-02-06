import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';

const Mangrovenews17 = () => {
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
                / <span>IBF Plants Mangroves</span>
            </div>
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    IBF PLANTS MANGROVES IN COLLABORATION WITH @CEMARE_ECOGREEN
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • February 03, 2024
                </div>
            </div>
            <div className="container-embed-youtube">
                <iframe
                    title="YouTube Video"
                    src={`https://youtube.com/embed/8x5QRKt-kpk?si=cTr-rPMd9XvcZk6V`}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
            <div className="container-desc-detail-news">
            <div className="article-container">
                    <div className="article-section">
                        <h1>Greetings, Blue Rangers! 🌊</h1>
                        <p>
                            As we kick off the new week, Indonesia Biru Foundation (IBF) embarked on a meaningful mangrove planting initiative in collaboration with @cemare_ecogreen. It was a day filled with purpose, teamwork, and a commitment to our precious marine ecosystems. 👌
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>The Early Risers and Their Mangrove Mission</h2>
                        <p>
                            A heartfelt thanks to our dedicated team who woke up early, ready to contribute their time and efforts towards the cause. Their enthusiasm set the tone for a day of environmental stewardship and community engagement. Together, we made our way to the mangrove planting site, fueled by the collective passion for marine conservation.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Why Mangroves Matter</h2>
                        <p>
                            Mangroves play a crucial role in maintaining the health of coastal ecosystems. These resilient trees act as a buffer, protecting shorelines from erosion and providing a habitat for diverse marine life. The intricate root systems of mangroves act as nurseries for fish and other marine species, contributing to the overall biodiversity of our oceans. Moreover, mangroves act as carbon sinks, helping mitigate the impacts of climate change.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Our Mangrove Planting Journey</h2>
                        <p>
                            With shovels in hand and a shared vision for a greener, healthier coastline, we planted mangrove saplings with care and precision. Each tree symbolizes our commitment to preserving and restoring the delicate balance of coastal ecosystems. It was a hands-on experience that fostered a deeper connection with nature and highlighted the tangible impact individuals can make when working together for a common goal.
                        </p>
                    </div>
                </div>

                <div className="article-container">
                    <div className="article-section">
                        <h2>A Grateful Shoutout to @cemare_ecogreen</h2>
                        <p>
                            We extend our heartfelt gratitude to @cemare_ecogreen for their invaluable collaboration. Their expertise and dedication to environmental education and mangrove conservation have been instrumental in making this initiative a success. Through shared knowledge and hands-on learning, we aim to raise awareness about the importance of mangroves and inspire others to join us in safeguarding our coastal treasures.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Join Us on This Green Journey</h2>
                        <p>
                            As we reflect on the day's activities, we invite each one of you to join us on this green journey. Follow @indonesiabirufoundation for updates, behind-the-scenes moments, and upcoming opportunities to get involved. Together, let's continue making a positive impact on our environment and preserving the beauty of our oceans for future generations.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Thank You for Being Part of the IBF Community! 💙🌿</h2>
                        <p>
                            #IBF #MangrovePlanting #MarineConservation #CemareEcoGreen #GreenJourney #OceanGuardians
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Mangrovenews17;
