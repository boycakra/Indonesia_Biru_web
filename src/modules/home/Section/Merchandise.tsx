import React from "react";
import imgMerchandise1 from "../../../assets/images/Mercandise (1).jpeg";
import imgMerchandise2 from "../../../assets/images/Mercandise (2).jpeg";
import imgMerchandise3 from "../../../assets/images/Mercandise (3).jpeg";



const Merchandise = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    const handleClick = () => {
        const url = `https://wa.me/6281353788090?text=`;
        window.open(url, '_blank');
    };
    return (
        <div>
            <div className="container-merchandise" ref={ref}>
                <div className="detail-merchandise">
                    <div className="title-merchandise">
                        Merchandise
                    </div>
                    <div className="desc-merchandise">
                    Shop our sustainable merch to support IBF's mission. Every purchase spreads awareness and funds our work to protect Indonesia's waters.
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
            <div className="container-btn-merchandise-mobile">
                <button className="btn-merchandaise-mobile" onClick={handleClick}>
                    Visit Our Online Store
                </button>
            </div>
        </div>
    )
});

export default Merchandise;
