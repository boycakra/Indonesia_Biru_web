import { useEffect, useState } from 'react'
import imgCollab from '../../../assets/images/collaborators.png'
import imgPartner1 from '../../../assets/images/partner1.png';
import imgPartner2 from '../../../assets/images/partner2.png';
import imgPartner3 from '../../../assets/images/partner3.png';
import imgPartner4 from '../../../assets/images/partner4.png';

const Partner = () => {
    const images = [
        { src: imgPartner1, duration: 3000 },
        { src: imgPartner2, duration: 3000 },
        { src: imgPartner3, duration: 3000 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, images[currentIndex].duration);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    return (
        <div className="container-partner">
            <div className="container-collab">
                <div className="txt-collab">
                    Our Collaborators
                </div>
                <div className="container-collab-img">
                    <img src={imgCollab} alt="collab" className="img-collab" />
                </div>
            </div>
            <div className="partner">
                <div className="partner-item">
                    <div className="title-parnert">
                        Company Partners
                    </div>
                    <div className="container-img-company">
                        <img
                            src={images[currentIndex].src}
                            alt="company"
                            className="img-company"
                        />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="title-parnert">
                        Technology Partner
                    </div>
                    <img src={imgPartner4} alt="partner" className="img-partner" />
                </div>
            </div>
        </div>
    )
}

export default Partner;
