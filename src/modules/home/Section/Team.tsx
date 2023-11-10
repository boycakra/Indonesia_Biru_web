import React from 'react';
import imgFounder from '../../../assets/images/founder.png';
import imgTeam1 from '../../../assets/images/team1.png';
import imgTeam2 from '../../../assets/images/team2.png';
import imgTeam3 from '../../../assets/images/team3.png';

const Team = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    const teams = [
        {
            img: imgTeam1,
            name: "Malikul As’ad",
            title: 'Field Staff & Community Engagement Officer'
        },
        {
            img: imgTeam2,
            name: "Fildzah Hulwani",
            title: 'Field Staff & Science Officer'
        },
        {
            img: imgTeam3,
            name: "Haerun Nizar",
            title: 'Coral Laboratory Technician'
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
        </div>
    )
});

export default Team;
