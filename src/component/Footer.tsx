import Logo from '../assets/images/Logo.svg'

const Footer = () => {
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
                        <div className="txt-content-footer">
                            andre@indonesiabiru.id
                        </div>
                        <div className="txt-content-footer">
                            +62 813-5378-8090
                        </div>
                    </div>
                    <div className="section-content-footer">
                        <div className="title-content-footer">
                            Who We Are
                        </div>
                        <div className="txt-content-footer">
                            About IBF
                        </div>
                        <div className="txt-content-footer">
                            Gallery
                        </div>
                        <div className="txt-content-footer" style={{ marginBottom: 0 }}>
                            Meet the Team
                        </div>
                    </div>
                    <div className="section-content-footer">
                        <div className="title-content-footer">
                            Social Media
                        </div>
                        <div className="txt-content-footer">
                            Facebook
                        </div>
                        <div className="txt-content-footer">
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
