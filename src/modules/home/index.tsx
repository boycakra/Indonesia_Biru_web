import { useEffect, useRef } from 'react';
import { useMyContext } from '../../context/SectionProvider';

import arrow from '../../assets/icons/Arrow-down.svg'
import OurMission from './Section/OurMission';
import Restoration from './Section/Restoration';
import Coral from './Section/Coral';
import Dive from './Section/Dive';
import Team from './Section/Team';
import Gallery from './Section/Gallerty';
import Merchandise from './Section/Merchandise';
import News from './Section/News';
import Reef from './Section/Reef';
import Partner from './Section/Partner';

const Home = () => {
    const missionRef = useRef<HTMLDivElement>(null);
    const coralRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const merchandiseRef = useRef<HTMLDivElement>(null);
    const newsRef = useRef<HTMLDivElement>(null);

    const { value } = useMyContext();

    useEffect(() => {
        if (value === "mission" && missionRef.current) {
            missionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (value === "coral" && coralRef.current) {
            coralRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (value === "team" && teamRef.current) {
            teamRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (value === "gallery" && galleryRef.current) {
            galleryRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (value === "merchandise" && merchandiseRef.current) {
            merchandiseRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (value === "news" && newsRef.current) {
            newsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (!value) {
            window.scrollTo({
                top: 0,
            });
        }
    }, [value])

    const handleClick = () => {
        if (missionRef.current) {
            missionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <div className="container-text">
                <div className="txt-banner">
                    Indonesia Biru <br />
                    Foundation
                </div>
                <span>Ocean matters</span>
                <button className="btn-banner" onClick={handleClick}>
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
            <div className="container-embed-youtube">
                <iframe
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/b6_wsXVRWCA`}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
            <div className="container-card-list">
                <div className="card-item">
                    <div className="container-card-title">
                        <div className="card-title">
                            Coral Fragments <br />
                            Planted
                        </div>
                        <div className="card-detail-title">
                            +100
                        </div>
                    </div>
                    <div className="card-detail">
                        5500+
                    </div>
                </div>
                <div className="card-item">
                    <div className="container-card-title">
                        <div className="card-title">
                            Mangrove <br />
                            Seedlings Planted
                        </div>
                        <div className="card-detail-title">
                            +200
                        </div>
                    </div>
                    <div className="card-detail">
                        3000+
                    </div>
                </div>
                <div className="card-item">
                    <div className="container-card-title">
                        <div className="card-title">
                            Local Communities <br />
                            worked with
                        </div>
                        <div className="card-detail-title">
                            +20
                        </div>
                    </div>
                    <div className="card-detail">
                        12
                    </div>
                </div>
                <div className="card-item">
                    <div className="container-card-title">
                        <div className="card-title">
                            Marine Structures <br />
                            Deployed
                        </div>
                        <div className="card-detail-title">
                            +100
                        </div>
                    </div>
                    <div className="card-detail">
                        1500+
                    </div>
                </div>
            </div>
            <OurMission ref={missionRef} />
            <Restoration />
            <Coral ref={coralRef} />
            <Dive />
            <Team ref={teamRef} />
            <Gallery ref={galleryRef} />
            <Merchandise ref={merchandiseRef} />
            <News ref={newsRef} />
            <Reef />
            <Partner />
            <div className='container-map'>
                <iframe src="https://restor.eco/embed/site/77e8a43f-0798-4347-8c7a-794f1c9211e3/" title="Kecinan Bay" width="100%" height="648"></iframe>
            </div>
        </>
    )
}

export default Home;