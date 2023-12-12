import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/baru (20).png';
import imgDescetailNews from '../../assets/images/second_lab.png';

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
                    Expanding Horizons: Indonesia Biru Foundation and Coral Connect Lombok Unveil Plans for a Second Coral Lab
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • Desember 04, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    Exciting news is on the horizon as Indonesia Biru Foundation (IBF) and Coral Connect Lombok announce the development of a second coral lab. This significant expansion will serve as an information center and a hub for advanced reef restoration efforts.
                    In their latest Instagram update, Coral Connect Lombok shares the anticipation for the upcoming second coral lab, unveiling insights into their coral reef project on Gili Asahan. The collaboration extends to include partners such as <a href="https://www.instagram.com/pearlbeachresortgiliasahan/" target="_blank">@pearlbeachresortgiliasahan</a>, <a href="https://www.instagram.com/seachangeindonesia/" target="_blank"> @seachangeindonesia</a>, <a href="https://www.instagram.com/oceanwaydive/" target="_blank">@oceanwaydive</a>,<a href="https://www.instagram.com/coralconnectlombok/?g=5" target="_blank">@coralconnectlombok</a>, <a href="https://www.instagram.com/delftglobalstudentclub/" target="_blank">@delftglobalstudentclub</a>, and <a href="https://www.instagram.com/delftdce/" target="_blank">@delftdce</a>.
                    <br /><br />

                    in our latest Instagram <a href="https://www.instagram.com/p/C0OUd2VP42D/" target="_blank">video</a> in Instagram, we talk about the use of 
                    The upcoming lab will serve as both an information center and a hub for advanced reef restoration. IBF envisions this facility as a focal point for knowledge exchange, research dissemination, and community engagement. The lab will contribute not only to scientific advancements but also to increased public awareness and education about the importance of coral reefs. The second lab is poised to become a pivotal point for information dissemination and innovative reef restoration techniques. This initiative represents a stride towards not only conserving coral reefs but also fostering community engagement and environmental awareness.
                    <br /><br />

                    
                   

                   
                </div>


                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                    <div className="desc-detail-news">
                    IBF expresses gratitude to its partners and collaborators who have played a crucial role in making this second coral lab a reality. The support of <a href="https://www.instagram.com/pearlbeachresortgiliasahan/" target="_blank">@pearlbeachresortgiliasahan</a>, <a href="https://www.instagram.com/seachangeindonesia/" target="_blank"> @seachangeindonesia</a>, <a href="https://www.instagram.com/oceanwaydive/" target="_blank">@oceanwaydive</a>,<a href="https://www.instagram.com/coralconnectlombok/?g=5" target="_blank">@coralconnectlombok</a>, <a href="https://www.instagram.com/delftglobalstudentclub/" target="_blank">@delftglobalstudentclub</a>, and <a href="https://www.instagram.com/delftdce/" target="_blank">@delftdce</a>.
                    Follow the progress of the Gili Asahan coral reef project on IBF's Instagram and the collaborative efforts of their partners. The shared commitment of diverse stakeholders underscores the collective responsibility we all bear in safeguarding the precious marine ecosystems of Indonesia.
                    In conclusion, the unveiling of the second coral lab is a milestone for Indonesia Biru Foundation and its collaborators. As they forge ahead, the vision of a sustainable future for coral reefs is becoming a reality, one lab at a time. Stay tuned for more updates on this transformative journey towards preserving and restoring Indonesia's coral reefs. 
                    <br /><br />
                    </div>

            </div>
        </div>
    )
}

export default DetailNews5;
