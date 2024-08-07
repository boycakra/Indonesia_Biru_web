import React from 'react';
import imgFounder from '../../../assets/images/founder.png';
import imgTeam1 from '../../../assets/images/putri_new.jpeg';
import imgTeam2 from '../../../assets/images/sabila_new.jpeg';
import imgTeam3 from '../../../assets/images/Nizar_new.jpeg';
import imgTeam4 from '../../../assets/images/zaenal.png';
import imgTeam5 from '../../../assets/images/agus.png';
import imgTeam6 from '../../../assets/images/new_staff.png';



const Team = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    const teams = [
        {
            img: imgTeam1,
            name: "Ayu Rustiana Putri",
            title: 'Community Engagement Officer'
        },
        {
            img: imgTeam2,
            name: "Sabilah Fi Ramadhani",
            title: 'Mangrove Lead'
        },
        {
            img: imgTeam3,
            name: "Haerun Nizar",
            title: 'Coral Laboratory Technician'
        },
        {
            img: imgTeam4,
            name: "Zaenal Abidin",
            title: 'Mangrove Waste Coordinator'
        },
        {
            img: imgTeam5,
            name: "Agus Kurniawan ",
            title: 'Mangrove Education Coordinator'
        },
        {
            img: imgTeam6,
            name: "Harley",
            title: 'Marine Biologist'
        },
        
    ]
    return (
        
        <div className="container-team" ref={ref}>
            <div className="title-team">
                Meet Our Team
            </div>
            
            <div className="container-content-team">
                <div className="content-founder-team">
                    <img src={imgFounder} alt="founder" className="img-founder" />
                    <div className="desc-founder">
                        “Andrean Saputra is a marine scientist and founder of Indonesia Biru Foundation (IBF), established in 2020. IBF champions marine conservation through research, restoration, and coastal community development centres in Lombok and the Gilis.”
                    </div>
                    <div className="founder-name">
                        Andrean Saputra
                    </div>
                    <div className="founder-position">
                        Founder of Indonesia Biru Foundation
                    </div>
                </div>
                <div className="content-founder-team-mobile">
                    <div className='container-founder-name-mobile'>
                        <img src={imgFounder} alt="founder" className="img-founder" />
                        <div className="container-detail-founder-mobile">
                            <div className="founder-name">
                                Andrean Saputra
                            </div>
                            <div className="founder-position">
                                Founder of Indonesia Biru Foundation
                            </div>
                        </div>
                    </div>
                    <div className="desc-founder">
                        “Andrean Saputra is a marine scientist and founder of Indonesia Biru Foundation (IBF), established in 2020. IBF champions marine conservation through research, restoration, and coastal community development centres in Lombok and the Gilis.”
                    </div>
                </div>
                <div className="container-squad">
                    {teams.map((e, index) => (
                        <div className="container-teams" key={`teams_${e.name}_${index}`}>
                            <img src={e.img} alt="team" className="img-team" />
                            <div className="profile-team">
                                <div className="team-name">
                                    {e.name}
                                </div>
                                <div className="team-position">
                                    {e.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="container-embed-youtube">
                <iframe
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/ZVuOt5_ISHk?si=5BtZYsxRiY2HQ7wu`}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </div>
    )
});

export default Team;
