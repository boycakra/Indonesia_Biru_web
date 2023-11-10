import imgReef1 from "../../../assets/images/reef1.png";
import imgReef2 from "../../../assets/images/reef2.png";
import imgReef3 from "../../../assets/images/reef3.png";

const Reef = () => {
    return (
        <div>
            <div className="container-reef">
                <div className="detail-reef">
                    <div className="title-reef">
                        Help Save <br />
                        The Reef
                    </div>
                    <div className="title-reef-mobile">
                        Help Save The Reef
                    </div>
                    <div className="desc-reef">
                        Help us maintain and grow our restoration efforts by adopting a coral. Each coral fragment adopted will help grow and expand our restoration sites bringing biodiversity back to Lombok’s reefs.
                    </div>
                    <div className="container-btn-reef">
                        <a href='https://www.patreon.com/ibf' target="_blank" rel="noopener noreferrer">
                            <button className="btn-dive">
                                Adopt Coral Now
                            </button>
                        </a>
                    </div>
                </div>
                <div className="content-reef">
                    <img src={imgReef1} alt="reef" className="img-reef" />
                    <img src={imgReef2} alt="reef" className="img-reef" />
                    <img src={imgReef3} alt="reef" className="img-reef" />
                </div>
            </div>
            <div className="container-btn-ree-mobile">
                <a href='https://www.patreon.com/ibf' target="_blank" rel="noopener noreferrer">
                    <button className="btn-dive">
                        Adopt Coral Now
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Reef;
