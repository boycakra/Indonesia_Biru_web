import React from 'react';
import img1 from '../../../assets/images/ourMission1.png';
import img2 from '../../../assets/images/ourMission2.png';
import img3 from '../../../assets/images/ourMission3.png';

const OurMission = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    return (
        <div className="section-our-mission" ref={ref}>
            <div className="container-title-our-mission">
                <div className="title-our-mission">Our Mission</div>
                <div className="desc-title-our-mission">
                    Founded in 2020, IBF is organization focused on <span>marine</span> <br />
                    <span>research, restoration, and community development</span> <br />
                    within the coastal areas of Lombok, Indonesia.
                </div>
            </div>
            <div className="container-content-our-mission">
                <div className="content-our-mission">
                    <img src={img1} alt="our-mission-1" className="img-our-mission" />
                    <div className="detail-our-mission">
                        <div className="title-content-our-misison">
                            Restoration and Research
                        </div>
                        <div className="desc-content-our-mission">
                            Through research & method development, our team aims to maximise our overall impact to the reef. Discovering the most effective ways to restore coral reefs and other marine habitats will ensure the long term sustainability of our restoration projects.
                        </div>
                    </div>
                </div>
                <div className="content-our-mission">
                    <img src={img2} alt="our-mission-1" className="img-our-mission" />
                    <div className="detail-our-mission">
                        <div className="title-content-our-misison">
                            Local Community Engagement
                        </div>
                        <div className="desc-content-our-mission">
                            We don’t just value local community involvement in our restoration efforts but think it’s crucial in the adoption of sustainable practice community wide. Preserving Lombok's marine habitat is both economically and environmentally advantageous
                        </div>
                    </div>
                </div>
                <div className="content-our-mission">
                    <img src={img3} alt="our-mission-1" className="img-our-mission" />
                    <div className="detail-our-mission">
                        <div className="title-content-our-misison">
                            Education
                        </div>
                        <div className="desc-content-our-mission">
                            The plight of marine ecosystems is largely unseen by the public and education is a key antidote to this epidemic of unawareness. IBF works in schools and universities to address this; helped by our on shore coral labs providing an important window into the underwater world.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});


export default OurMission;