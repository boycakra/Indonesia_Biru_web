import React, { useState, useEffect } from 'react';
import imgFounder from '../../../assets/teamadd/bangandrebaru.png';
import imgTeam1 from '../../../assets/images/putri_new.jpeg';
import imgTeam2 from '../../../assets/images/sabila_new.jpeg';
import imgTeam3 from '../../../assets/images/Nizar_new.jpeg';
import imgTeam4 from '../../../assets/images/zaenal.png';
import imgTeam5 from '../../../assets/images/agus.png';
import imgTeam6 from '../../../assets/teamadd/Agus_Diving Team Gili Asahan Project.jpg';

import imgTeam8 from '../../../assets/teamadd/dianita.png';
import imgTeam9 from '../../../assets/teamadd/dina.png';
import imgTeam10 from '../../../assets/teamadd/dwi auliya.png';
import imgTeam11 from '../../../assets/teamadd/fildzah.png';
import imgTeam12 from '../../../assets/teamadd/fradyan.png';
import imgTeam13 from '../../../assets/teamadd/muchsin.png';
import imgTeam14 from '../../../assets/teamadd/Eka Diving team.png';
import imgTeam15 from '../../../assets/teamadd/Ainun Teachers Coordinator Tanjung Luar Project.png';

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
            name: "Agus",
            title: 'Diving Team Gili Asahan Project'
        },
    ];

    const teams1 = [
        {
            img: imgTeam12,
            name: "Fradyan",
            title: 'Fishermen co-Coordinator Elasmobranch Project'
        },
        {
            img: imgTeam13,
            name: "Muchsin",
            title: 'Fishermen co-Coordinator Elasmobranch Project'
        },
        {
            img: imgTeam15,
            name: "Ainun",
            title: 'Teachers Coordinator Tanjung Luar Project'
        },
        {
            img: imgTeam11,
            name: "Fildzah Z. Hulwani",
            title: 'Senior Marine Biologist'
        },
        {
            img: imgTeam8,
            name: "Dianita",
            title: 'Marine Biologist and Illustrator'
        },
        {
            img: imgTeam9,
            name: "Dina",
            title: 'Intern for Coral Reef Conservation'
        },
        {
            img: imgTeam10,
            name: "Dwi Auliya",
            title: 'Intern for Coral Reef Conservation'
        },
        {
            img: imgTeam14,
            name: "Eka",
            title: 'Diving Team Gili Asahan Project'
        },
    ];

    // State to hold the current set of teams to display
    const [currentTeams, setCurrentTeams] = useState(teams);

    useEffect(() => {
        // Change the teams every 5 seconds in mobile mode
        const interval = setInterval(() => {
            setCurrentTeams(prevTeams => prevTeams === teams ? teams1 : teams);
        }, 5000);

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    // State to hold the current set of teams to display
    const [currentTeamsa, setCurrentTeamsa] = useState(teams1);

    useEffect(() => {
        // Change the teams every 5 seconds in mobile mode
        const interval = setInterval(() => {
            setCurrentTeamsa(prevTeams => prevTeams === teams1 ? teams : teams1);
        }, 5000);

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);


    return (
        <div className="container-team" ref={ref}>
            <div className="title-team">
                Meet Our Team
            </div>

            <div className="container-content-team">
                <div className="content-founder-team">
                    <img src={imgFounder} alt="founder" className="img-founder" />
                    <div className="desc-founder">
                        “Andre Saputra is a marine scientist, ocean advocate, and educator who founded IBF in 2020. He envision IBF to be one of the powerhouse of marine conservation movement in Indonesia ”
                    </div>
                    <div className="founder-name">
                        Andrean Saputra
                    </div>
                    <div className="founder-position">
                        Founder of Indonesia Biru Foundation
                    </div>

                    <div className="container-squad">
                        {currentTeamsa.map((e, index) => (
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
                        “Andre Saputra is a marine scientist, ocean advocate, and educator who founded IBF in 2020. He envision IBF to be one of the powerhouse of marine conservation movement in Indonesia”
                    </div>
                </div>

                <div className="container-squad">
                    {currentTeams.map((e, index) => (
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
                    src={`https://www.youtube.com/embed/YjYAajJOFOQ?si=-m8Ck6DEAKaM34lV`}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </div>
    );
});

export default Team;
