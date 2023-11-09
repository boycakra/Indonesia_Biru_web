import Logo from '../assets/images/Logo.svg'

import { useMyContext } from '../context/SectionProvider';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { updateValue } = useMyContext();

    const handleClickGmail = () => {
        const url = `https://mail.google.com/mail/?view=cm&to=andre@indonesiabiru.id&su=Hallo&body=Hallo`;
        window.open(url, '_blank');
    };

    const handleClickWa = () => {
        const url = `https://wa.me/6281353788090?text=`;
        window.open(url, '_blank');
    };

    const handleClickIg = () => {
        const url = `https://instagram.com/indonesiabirufoundation?igshid=MWRoYzl6dHJucXp3bA==`;
        window.open(url, '_blank');
    };

    const handleClickIFb = () => {
        const url = `https://www.facebook.com/indonesiabirufoundation?mibextid=LQQJ4d`;
        window.open(url, '_blank');
    };
    return (
        <>
            <div className="container-footer">
                <div className="detail-footer">
                    <img src={Logo} alt="logo" className="logo-footer" />
                    <div className="txt-detail-footer">
                        Kecinan Bay, Malaka, Kec. Pemenang,<br />
                        Kabupaten Lombok Utara, NTB. 83352
                    </div>
                </div>
                <div className="content-footer">
                    <div className="section-content-footer">
                        <div className="title-content-footer">
                            Get in touch
                        </div>
                        <div className="txt-content-footer" onClick={handleClickGmail}>
                            andre@indonesiabiru.id
                        </div>
                        <div className="txt-content-footer" onClick={handleClickWa}>
                            +62 813-5378-8090
                        </div>
                    </div>
                    <div className="section-content-footer">
                        <div className="title-content-footer">
                            Who We Are
                        </div>
                        <div className="txt-content-footer">
                            <Link to={"/"} onClick={() => updateValue("mission")}>
                                About IBF
                            </Link>
                        </div>
                        <div className="txt-content-footer">
                            <Link to={"/"} onClick={() => updateValue("gallery")}>
                                Gallery
                            </Link>
                        </div>
                        <div className="txt-content-footer" style={{ marginBottom: 0 }}>
                            <Link to={"/"} onClick={() => updateValue("team")}>
                                Meet the Team
                            </Link>
                        </div>
                    </div>
                    <div className="section-content-footer">
                        <div className="title-content-footer">
                            Social Media
                        </div>
                        <div className="txt-content-footer" onClick={handleClickIFb}>
                            Facebook
                        </div>
                        <div className="txt-content-footer" onClick={handleClickIg}>
                            Instagram
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-copy-right">
                <div className="content-copyright">
                    © 2023 Indonesia Biru Foundation
                </div>
                <div className="content-copyright">
                    Design with ❤️ by <span>Potara Studio</span>
                </div>
            </div>
        </>
    )
}

export default Footer;
