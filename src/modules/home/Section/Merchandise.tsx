import React from "react";
import imgMerchandise1 from "../../../assets/images/merchandise1.png";
import imgMerchandise2 from "../../../assets/images/merchandise2.png";
import imgMerchandise3 from "../../../assets/images/merchandise3.png";

const Merchandise = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    const handleClick = () => {
        const url = `https://wa.me/6281353788090?text=`;
        window.open(url, '_blank');
    };
    return (
        <div className="container-merchandise" ref={ref}>
            <div className="detail-merchandise">
                <div className="title-merchandise">
                    Merchandise
                </div>
                <div className="desc-merchandise">
                    Support and represent IBF’s mission by shopping our sustainable merch.<br />
                    {" "}<br />
                    Every piece sold spreads awareness and directly supports our work. 100% of the proceeds go towards directly funding our mission to protect Indonesia’s waters.
                </div>
                <button className="btn-merchandaise" onClick={handleClick}>
                    Visit Our Online Store
                </button>
            </div>
            <div className="content-merchandise">
                <img src={imgMerchandise1} alt="merchandise" className="img-merchandise" />
                <img src={imgMerchandise2} alt="merchandise" className="img-merchandise" />
                <img src={imgMerchandise3} alt="merchandise" className="img-merchandise" />
            </div>
        </div>
    )
});

export default Merchandise;
