import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/bocil.1.png';
import imgDescetailNews from '../../assets/images/bocil2.png';

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
                    Inspiring Young Minds: Lombok Insani School's P1 Field Trip to IBF's Coral Lab, Desember 2023
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • Desember 01, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        In a transformative event, Indonesia Biru Foundation (IBF) recently hosted the "Lombok Insani School P1 Field Trip to Coral Lab," immersing elementary school students in a captivating experience of marine conservation. Taking place at Kecinan Beach, the event aimed to enlighten and inspire the next generation about the crucial aspects of reef restoration and sustainable practices within marine ecosystems.
                    </p>
                    <br />
                    <p>
                        The collaboration between IBF and Lombok Insani School exemplifies a dedicated effort to instill environmental responsibility from an early age. P1 students had a unique opportunity to witness coral restoration firsthand, guided by IBF experts. Actively participating in placing restored corals into tanks at the Coral Lab, these young ocean enthusiasts developed a profound connection with the marine environment.
                    </p>
                    <br />
                    <p>
                        With great care and dedication, students delved into the intricate process of crafting ceramic structures, serving as anchors for coral fragments. This hands-on experience not only enriched their understanding of coral restoration techniques but also empowered them to contribute actively to the preservation of marine ecosystems. The event served as a catalyst for fostering a sense of responsibility and stewardship for the oceans.
                    </p>
                    <br />
                    <p>
                        Lombok Insani School's social media account emphasized the significance of the field trip, highlighting P1 students' enthusiastic and dedicated participation in coral restoration activities. The careful placement of restored corals into tanks at the Coral Lab showcased their commitment to marine conservation. The call to "continue to protect and preserve our precious marine ecosystems" resonates as a collective mission.
                    </p>
                    <br />
                </div>

                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />

                <div className="desc-detail-news">
                    <p>
                        During the workshop, IBF extended its outreach to the local community, introducing a unique approach to coral planting. Participants learned how to create ceramic structures that could serve as anchors for coral fragments, facilitating their attachment to the sea floor. This not only provided an insightful hands-on experience for sailing enthusiasts but also empowered the local community with knowledge about sustainable practices in marine conservation.
                    </p>
                    <br />
                    <p>
                        As the Coral Restoration Workshop concluded, IBF encourages sailors and the local community to stay connected with ongoing conservation efforts. Follow IBF on social media and join the movement to protect and restore coral reefs. For those embarking on ocean voyages, consider the broader impact of your journey and explore opportunities to contribute to marine conservation.
                    </p>
                    <br />
                    <p>
                        In essence, the Coral Restoration Workshop at the World Arc Rally reflects a new era of sailing—one that not only embraces the thrill of the open sea but also recognizes the responsibility to safeguard the marine wonders that captivate sailors worldwide. Together, IBF and the World Cruising Club are steering towards a future where every nautical mile contributes to the preservation of our oceans. ⛵🌊🐠 #IBF #WorldArcRally #CoralRestoration #SailingForConservation
                    </p>
                    <br />
                </div>
            </div>

        </div>
    )
}

export default DetailNews5;
