import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/SectionProvider';
import imgDetailNews from '../../assets/images/large_Shore.png';

const DetailNews5 = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        // Scroll to the top on component mount
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <div className="container-detail-news">
            {/* Breadcrumb */}
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>
                    Home
                </Link>{' '}
                / <span>News Detail</span>
            </div>

            {/* Main Image */}
            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="detail-news" className="img-main-detail-news" />
            </div>

            {/* Title and Date */}
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Plastic Pollution on course to double by 2030: IBF's Call to Action
                </div>
                <div className="date-detail-news">January 15, 2024</div>
                
            </div>

            {/* Article Content */}
            <div className="container-desc-detail-news">
            <div className="date-detail-news">UN Report • October 2021</div>
                <div className="desc-detail-news">
                    <p>
                        The UN's recent report on plastic pollution signals a dire future, projecting a doubling of plastic waste by 2030.
                        In response, the Indonesia Biru Foundation (IBF) emphasizes the critical need for immediate action and collective
                        efforts to combat this escalating crisis.
                    </p>
                </div>

                {/* Main Article Content */}
                <div className="desc-detail-news">
                    <section>
                        <h2>Global Plastic Menace</h2>
                        <p>
                            The report, titled "From Pollution to Solution: a global assessment of marine litter and plastic pollution,"
                            outlines severe consequences for health, economy, biodiversity, and climate. The urgent call for a reduction
                            in unnecessary plastic use aligns with IBF's commitment to environmental conservation.
                        </p>
                        <br />
                    </section>

                    <section>
                        <h2>Solutions for a Sustainable Future</h2>
                        <p>
                            IBF advocates for an accelerated transition from fossil fuels to renewable energies and the removal of subsidies,
                            aligning with the report's recommendations. The foundation emphasizes the need for circular approaches to reduce
                            plastic waste and safeguard marine ecosystems.
                        </p>
                        <br />
                    </section>

                    <section>
                        <h2>IBF's Pledge</h2>
                        <p>
                            As plastic pollution continues to threaten marine life and human health, IBF pledges its commitment to address
                            the crisis. The foundation calls for a global shift in plastic production and consumption and urges investments in
                            robust monitoring systems to identify and mitigate plastic pollution sources.
                        </p>
                        <br />
                    </section>

                    <section>
                        <h2>Global Cooperation for a Cleaner Future</h2>
                        <p>
                            IBF acknowledges the report's significance in shaping discussions on global cooperation. The foundation stands
                            ready to contribute to the UN Environment Assembly in 2022, working towards a sustainable, plastic-free future.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DetailNews5;
