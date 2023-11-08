import imgDive from "../../../assets/images/dive.png";
import { Link } from "react-router-dom";

const Dive = () => {
    return (
        <div className="container-dive">
            <div className="container-content-dive">
                <div className="title-dive">
                    Interested to Dive?
                </div>
                <div className="desc-dive">
                    Join us on a restoration dive to explore and help restore Lombok’s coral reefs.
                </div>
                <Link to={"/dive-with-us"}>
                    <button className="btn-dive">
                        Dive With Us
                    </button>
                </Link>
            </div>
            <img src={imgDive} alt="dive" className="img-dive" />
        </div>
    )
}

export default Dive;
