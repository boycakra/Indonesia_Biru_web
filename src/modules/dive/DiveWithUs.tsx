import { useEffect, useRef } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';

import arrow from '../../assets/icons/Arrow-down.svg'
import wavesBlack from '../../assets/icons/Waves-black.svg'
import check from "../../assets/icons/CheckSquare.svg"
import imgDiveWithUs from "../../assets/images/diveWithUs.png"
import imgTable from '../../assets/images/Table.png'
import imgWhyDive1 from '../../assets/images/whyDive1.png'
import imgWhyDive2 from '../../assets/images/whyDive2.png'
import imgWhyDive3 from '../../assets/images/whyDive3.png'
import imgWhyDive4 from '../../assets/images/whyDive4.png'

const DiveWithUs = () => {
    const paketRef = useRef<HTMLDivElement>(null);
    const { updateValue } = useMyContext();
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const handleClick = () => {
        if (paketRef.current) {
            paketRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="container-dive-with-us">
            <div className="container-breadcrumb">
                <Link to={"/"} onClick={() => updateValue("")}>Home</Link> / <span>Dive With Us</span>
            </div>
            <div className="container-text">
                <div className="txt-banner">
                    Dive <br />
                    With Us
                </div>
                <button className="btn-banner" onClick={handleClick}>
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
            <div className="container-img-dive-with-us">
                <img src={imgDiveWithUs} alt="dive-with-us" className="img-dive-with-us" />
            </div>
            <div className="container-paket-dive" ref={paketRef}>
                <div className="paket-dive">
                    <div className="paket-dive-section-title">
                        <img src={wavesBlack} alt="waves" />
                        <div className="title-paket-dive">
                            Restorative Dive
                        </div>
                        <div className="desc-pake-dive">
                            Join our restorative dive to plant coral and learn about marine life. Explore our coral lab and discover IBF's activities.
                        </div>
                        <button className="btn-paket-book">
                            Book Now
                        </button>
                    </div>
                    <div className="paket-dive-section-benefit">
                        <div className="dive-benefit-title">
                            Benefit List
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Give back to nature</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Possible for 1, 2 or 3 dives</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Pickup at your hotel</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Lunch included</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Gear included</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Coral lab tour</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Underwater pictures taken</div>
                        </div>
                    </div>
                </div>
                <div className="paket-dive">
                    <div className="paket-dive-section-title">
                        <img src={wavesBlack} alt="waves" />
                        <div className="title-paket-dive">
                            Combined Dive
                        </div>
                        <div className="desc-pake-dive">
                            Contribute to coral reef restoration and explore Gili dive with combined dives. Plant corals and dive in the Gili islands.
                        </div>
                        <button className="btn-paket-book">
                            Book Now
                        </button>
                    </div>
                    <div className="paket-dive-section-benefit">
                        <div className="dive-benefit-title">
                            Benefit List
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Give back to nature</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Discover beauty of Gili’s coral reef</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Boat transport to the Gili’s</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Possible for 1-3 dives</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Pickup at your hotel</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Lunch included</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Gear included</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Coral lab tour</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Underwater pictures taken</div>
                        </div>
                    </div>
                </div>
                <div className="paket-dive">
                    <div className="paket-dive-section-title">
                        <img src={wavesBlack} alt="waves" />
                        <div className="title-paket-dive">
                            Snorkeling
                        </div>
                        <div className="desc-pake-dive">
                            Non-divers can enjoy snorkeling at Kecinan Bay, known for its diverse coral and fish species. Explore coral garden, restoration site, and visit our coral lab.
                        </div>
                        <button className="btn-paket-book">
                            Book Now
                        </button>
                    </div>
                    <div className="paket-dive-section-benefit">
                        <div className="dive-benefit-title">
                            Benefit List
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">See the coral structures from above</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">No need for PADI certificate</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Snorkel gear included</div>
                        </div>
                        <div className="dive-benefit-item">
                            <img src={check} alt="check" className="check-icon" />
                            <div className="dive-benefit-item-txt">Coral lab tour</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-price-list">
                <div className="title-price-list">
                    Price List
                </div>
                <img src={imgTable} alt="table" className="imgTable" />
            </div>
            <div className="container-why-dive-with-us">
                <div className="container-title-why-dive-with-us">
                    <div className="title-why-dive-with-us">
                        Why Dive<br />
                        With Us
                    </div>
                    <div className="desc-why-dove-with-us">
                        Our expert will dive alongside with you, to restore Indonesian<br />
                        coral reef together
                    </div>
                </div>
                <div className="container-content-why-dive">
                    <div className='content-why-dive'>
                        <img src={imgWhyDive1} alt="why-dive" className="img-why-dive" />
                        <div className="decs-content-why-dive">
                            Next to exploring aquatic life you will also contribute to this by harvesting corals.
                        </div>
                    </div>
                    <div className='content-why-dive'>
                        <img src={imgWhyDive2} alt="why-dive" className="img-why-dive" />
                        <div className="decs-content-why-dive">
                            We support the local community by using their services.
                        </div>
                    </div>
                    <div className='content-why-dive'>
                        <img src={imgWhyDive3} alt="why-dive" className="img-why-dive" />
                        <div className="decs-content-why-dive">
                            All the revenues will go to further research and restoration of the coral.
                        </div>
                    </div>
                    <div className='content-why-dive'>
                        <img src={imgWhyDive4} alt="why-dive" className="img-why-dive" />
                        <div className="decs-content-why-dive">
                            Diving with the best guides and gear from Blue Coral Diving.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-diving-day">
                <div className="container-title-why-dive-with-us">
                    <div className="title-why-dive-with-us">
                        A Diving Day<br />
                        With Us
                    </div>
                    <div className="desc-why-dove-with-us">
                        Here's a snapshot of your diving day with us. Choose 1, 2, or 3 <br />
                        dives and feel free to request any timeline changes!
                    </div>
                </div>
            </div>
            <div className='container-map'>
                <iframe src="https://restor.eco/embed/site/77e8a43f-0798-4347-8c7a-794f1c9211e3/" title="Kecinan Bay" width="100%" height="648"></iframe>
            </div>
        </div>
    )
}

export default DiveWithUs;
