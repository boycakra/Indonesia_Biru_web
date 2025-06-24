import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/biofarmavisit/Main.jpg'; // main image
import img2 from '../../assets/biofarmavisit/restoration.png'; // coral table restoration
import img3 from '../../assets/biofarmavisit/biodiversity.png'; // biodiversity
import img4 from '../../assets/biofarmavisit/biofarmavisit.png'; // biofarma visit

const ArticleBiofarmaAsahan = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>Home</Link>
                {' / '}
                <span>Coral Restoration in Gili Asahan with Bio Farma</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={img4} alt="Coral reef Gili Asahan" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    <p>From Rubble to Reef :</p>
                    <p>Coral Restoration with Bio Farma in Gili Asahan</p>
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • June 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Restoration efforts are breathing new life into Gili Asahan’s coral reefs, thanks to a powerful collaboration between Bio Farma, marine researchers, and dedicated local divers. Over the past year, our combined efforts have led to the deployment of over 100 metal coral tables and the planting of approximately 1,000 coral fragments. These early actions mark the beginning of a long-term vision for marine rehabilitation in West Lombok.
                    </p>

                    <p>
                        As climate change and human activities continue to threaten marine biodiversity, this restoration program is not just about saving corals—it’s about safeguarding the entire reef ecosystem and the livelihoods that depend on it.
                    </p>
                    <br />

                    <h2 className="text-xl font-semibold mb-2 mt-6">🌱 Why Coral Restoration Matters</h2>
                    <br />
                    <p>
                        Gili Asahan is a quiet paradise known for its crystal-clear waters and vibrant marine life. However, beneath the surface, many areas have turned into fields of coral rubble—a sign that thriving reefs once existed but have since suffered damage due to bleaching, storms, or destructive practices.
                    </p>

                    <p>
                        Coral reefs are not just beautiful—they play a crucial ecological role. They are nurseries for marine species, barriers against coastal erosion, and a vital source of income for tourism and fishing communities. Restoring coral reefs means restoring life, resilience, and hope.
                    </p>
                    <br />

                    <h2 className="text-xl font-semibold mb-2 mt-6">🛠 Building the Reefs: Our Coral Tables</h2>
                    <br />
                    <p>
                        The restoration process began in July 2024, with the strategic placement of metal tables across the rubble zones. These serve as foundations for coral fragments to attach and grow. Most of the fragments belong to branching coral species like Acropora, known for their rapid growth and structural complexity.
                    </p>

                    <p>
                        Other coral genera involved in the project include Anacropora, Seriatopora, Stylophora, Porites, and Hydnophora. All fragments were responsibly collected either from donor colonies or as naturally detached pieces found nearby—ensuring minimal disturbance to the environment.
                    </p>

                    <p>
                        Harsh weather in early 2025, combined with high sedimentation and reduced light levels, posed significant challenges. But through regular monitoring and adjustments, our team has been able to maintain coral health and adapt our strategies to the unique underwater conditions.
                    </p>
                    <br />

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img2} alt="Metal coral restoration tables in Gili Asahan" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img1} alt="Bio Farma team visits coral reef site" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />

                    <h2 className="text-xl font-semibold mb-2 mt-6">🤝 Strengthening Commitment: Bio Farma's Field Visit</h2>
                    <br />
                    <p>
                        From June 14–17, 2025, representatives from Bio Farma joined us at Gili Asahan to observe the progress of the coral restoration initiative. The visit included underwater monitoring dives, discussions with IBF’s field team, and reflections on the future of marine conservation in Indonesia.
                    </p>

                    <p>
                        The presence of corporate partners like Bio Farma shows that environmental stewardship can—and should—be a shared responsibility between businesses and conservation communities. The visit not only strengthened our collaboration but also laid the groundwork for more ambitious restoration goals in the coming year.
                    </p>
                    <br />

                    <h2 className="text-xl font-semibold mb-2 mt-6">🐟 Biodiversity on the Rise</h2>
                    <br />
                    <p>
                        Today, those once barren coral tables are transforming into miniature ecosystems. During recent biodiversity surveys, we observed multiple colonies of the tunicate <em>Ecteinascidia nexa</em>, alongside sea slugs, sea stars, and elegant feather stars.
                    </p>

                    <p>
                        Fish biodiversity has also shown positive signs. In total, 16 fish species were recorded during visual surveys—several of them being key indicator species such as the sunburst butterflyfish, painted sweetlips, horned bannerfish, and high fin grouper. These species are known to thrive in healthy reef environments, and their growing presence is a promising sign of ecological recovery.
                    </p>
                    <br />  

                    <img src={img3} alt="Fish and coral biodiversity in the restored reef" className="img-detail-news my-6" />

                    <br />
                    <h2 className="text-xl font-semibold mb-2 mt-6">🔭 What’s Next?</h2>
                    <br />
                    <ul className="list-disc list-inside mb-6">
                        <li>🧼 <strong>Ongoing Maintenance:</strong> Coral structures will be cleaned of algae every two months, with coral health regularly assessed.</li>
                        <li>🔬 <strong>Scientific Monitoring:</strong> Photogrammetry and biodiversity documentation will help track coral growth, fish presence, and reef development.</li>
                        <li>📢 <strong>Community Outreach:</strong> Locals, students, and visiting tourists will be invited to learn about coral conservation and participate in educational activities.</li>
                    </ul>

                    <p>
                        This is just the beginning. With continued support and engagement, we hope to turn Gili Asahan into a model site for coral restoration in the Coral Triangle region. Every coral planted today is a promise for the oceans of tomorrow.
                    </p>
                    <br />
                    <h2>Join the Movement! 🌊</h2>
                    <p className="mt-4">
                        Follow <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation</a> for more updates, upcoming clean-up events, and ways you can support marine conservation efforts. 🌊💙
                    </p>

                    <p className="mt-6"><strong>Contributor, Photographer:</strong> Elsa, Fildzah</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleBiofarmaAsahan;
