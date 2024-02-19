import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/Collecting_with_kids.jpg';

const ArticleArtProject = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to={"/"} onClick={() => updateValue("")}>
                    Home
                </Link>{' '}
                / <span>Cleaning up Our Coastlines</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="detail-news" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Collaborative Art Project with Elemetry School in Lombok: Cleaning up Our Coastlines
                </div>
                <div className="date-detail-news">
                    By Boy Cakraningrat• February 18, 2024
                </div>
            </div>
            
            <div className="container-desc-detail-news">
                <div className="article-container">
                    <div className="article-section">
                        <h1>Hi Blue Ranger! Turning Trash into Treasure</h1>
                        <p>
                            Today marks an exciting milestone as Indonesia Biru Foundation (IBF) joins hands with Elemetry School in Lombok for a collaborative art project aimed at cleaning up our coastlines. With the support of @infosd.lombokinsanischool, we are embarking on a mission to collect rubbish and transform it into meaningful works of art.
                        </p>
                    </div>

                    <div className="article-section">
                        <p>
                            Our first step is to collect rubbish from the coastline, gathering discarded items that threaten the health of our marine ecosystems. With each piece of rubbish collected, we are not only cleaning up our environment but also reclaiming materials that can be repurposed for artistic expression. From plastic bottles to discarded fishing nets, every item has the potential to become part of something beautiful.
                            Once the rubbish has been collected, our next task is to sort it into different categories and colors. This process allows us to organize the materials and identify opportunities for creative reuse. Additionally, we will ensure that each item is thoroughly cleaned to remove any debris or contaminants, ensuring the safety and integrity of our art materials.
                            As we embark on this inspiring journey, we invite you to stay tuned for updates on our collaborative art project. Follow Indonesia Biru Foundation on Instagram for behind-the-scenes footage, progress reports, and glimpses into the creative process. Together, let's turn the tide on ocean pollution and create a brighter future for our planet.
                       
                        </p>
                    </div>

                   
                </div>

                <div className="article-container">
                    <div className="article-section">
                        <h2>Join the Movement</h2>
                        <p>
                            If you're passionate about environmental conservation and creative expression, we invite you to join the movement and support our efforts. Whether it's participating in cleanup events, contributing to art installations, or spreading awareness about ocean pollution, every action makes a difference. Together, we can inspire change and protect the beauty of our coastlines for generations to come.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>For More Information, Together, We Can Make a Difference</h2>
                        <p>
                            If you want to learn more about Indonesia Biru Foundation's events and initiatives, follow us on Instagram and check out our latest post about this art project: <a href="https://www.instagram.com/p/C3ZOnw4Bx8Q/?g=5&img_index=1" target="_blank" rel="noopener noreferrer">IBF Art Project</a>.
                            Join us in our mission to protect our coastlines, promote sustainability, and unleash the power of creativity to inspire positive change. Together, we can create a world where our oceans are clean, our communities are vibrant, and our planet thrives.
                        
                        </p>
                    </div>

                    
                </div>

            </div>
        </div>
    );
};

export default ArticleArtProject;
