import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/cc (1).png';
import imgDescetailNews from '../../assets/images/small_cc (2).png';

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
                    Restoring Life: Indonesia Biru Foundation's Mission to Save Coral Reefs
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • November 26, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    In a world where coral reefs are vanishing at an alarming rate, a group of passionate students from TU Delft, namely Cas, Maurits, Vince, and Sara, has joined forces with the Indonesia Biru Foundation (IBF) to embark on a three-month journey to Lombok, Indonesia. Their mission: to save and restore the diminishing coral reefs surrounding Lombok and the enchanting Gili Islands.
                    <br /><br />

                    <strong>The Urgency:</strong><br />
                    Since the 1950s, more than half of the world's coral reefs have disappeared. If this trend persists, projections indicate that over 90% of the reefs will be extinct or severely damaged by 2050. Beyond the underwater ecosystems, the impact extends to nearly a billion people who rely on coral reefs for income, food, medicines, tourism, and protection against powerful waves.
                    <br /><br />

                    <strong>Indonesia Biru Foundation's Expertise:</strong><br />
                    Established in 2020, the Indonesia Biru Foundation (IBF) is an independent organization committed to coral reef research, restoration, and the sustainable development of coastal communities. The TU Delft team is collaborating closely with IBF to address the urgent issue of coral reef degradation.
                    <br /><br />

                    
                    While IBF possesses the expertise to restore coral reefs, they need support to acquire specialized equipment. These crucial aquariums provide controlled climates, allowing young coral to flourish before being reintroduced to the sea. The team plans to establish a new research lab in the south of Lombok, expanding their efforts to restore the entire island. To make this ambitious plan a reality, they require a total of €3,000. €2,000 is allocated for the new research lab, while the remaining €1,000 will fund campaigns and workshops to raise awareness among the local population about the significance of coral reefs.
                    <br /><br />

                   
                </div>


                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                    <div className="desc-detail-news">
                        In a joint effort, Indonesia Biru Foundation (IBF) and Coral Connect Lombok are leading a holistic approach to coral reef conservation. This collaboration, extending globally with partners like TU Delft, emphasizes the urgency of preserving coral reefs.
                        <br /><br />

                        <strong>Mission and Methods:</strong><br />
                        IBF's expertise in coral reef restoration combines with Coral Connect Lombok's innovative methods. Harvesting, cleaning, and monitoring healthy coral fragments are integral to their sustainable approach, ensuring effective reef restoration.
                        <br /><br />

                        <strong>Fundraising for Sustainability:</strong><br />
                        To support their mission, a €3,000 fundraising campaign has been initiated. €2,000 will establish a research lab in south Lombok, aiding reef restoration and expanding expertise. The remaining €1,000 will fund local awareness campaigns and workshops.
                        <br /><br />

                        Individuals play a crucial role in this collaborative effort. Contributions to the campaign directly aid in acquiring essential equipment, facilitating optimal coral growth. Additionally, funds support campaigns and workshops to raise awareness among local communities.
                        <br /><br />

                        <strong>Positive Impact:</strong><br />
                        IBF and Coral Connect Lombok, alongside global partners, aim to positively impact Indonesia's coral reefs. Beyond restoration, their focus includes community development, economic improvement, and public awareness. Follow their mission on Instagram @CoralConnectLombok to be part of the journey.
                        <br /><br />
                        The collaboration signifies hope for endangered coral reefs. Together, IBF and Coral Connect Lombok strive for a sustainable future where marine ecosystems flourish, and coastal communities thrive. Your support is pivotal, contributing to the preservation of Indonesia's coral reefs for generations to come.
                    </div>

            </div>
        </div>
    )
}

export default DetailNews5;
