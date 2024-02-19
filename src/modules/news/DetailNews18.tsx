import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/Indonesia biru_imlek.jpg';

const ArticleYearOfDragon = () => {
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
                / <span>The Year of the Dragon</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="detail-news" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Welcoming the Year of the Dragon with Indonesia Biru Foundation
                </div>
                <div className="date-detail-news">
                    By Boy Cakraningrat • February 11, 2024
                </div>
            </div>
            
            <div className="container-desc-detail-news">
                <div className="article-container">
                    <div className="article-section">
                        <h1>Greetings, Blue Rangers! 🌊</h1>
                        <p>
                            As we usher in the Year of the Dragon, Indonesia Biru Foundation (IBF) extends warm wishes to all our supporters and partners, especially on this auspicious occasion of Chinese New Year. The Year of the Dragon symbolizes strength, leadership, and determination – qualities that resonate deeply with our mission to empower coastal communities and enhance ocean literacy among Indonesians.
                        </p>
                    </div>

                    <div className="article-section">
                        <h2>Embracing Leadership and Determination</h2>
                        <p>
                            In the spirit of the dragon, we are inspired to set ambitious goals and pursue them with unwavering determination. This year, Indonesia Biru Foundation aims to reach even greater heights in our efforts to protect and restore coral reefs, conduct scientific research, and foster community development along coastal regions. With your continued support, we are confident in our ability to make significant strides towards a healthier marine environment.
                        </p>
                        <h2>Our Commitment to Ocean Literacy</h2>
                        <p>
                            At the heart of our mission lies a dedication to enhancing ocean literacy among the citizens of Indonesia. Through innovative programs, educational initiatives, and community engagement activities, we strive to instill a deeper understanding of marine ecosystems and the importance of sustainable conservation practices. By empowering individuals with knowledge, we can cultivate a generation of ocean stewards who are passionate about safeguarding our seas for future generations.
                            As we embark on this journey together, let us harness the spirit of the dragon to propel us towards success. Whether it's through scientific research, community outreach, or advocacy efforts, every action we take brings us closer to our shared vision of a thriving marine environment. Together, as guardians of the ocean, we can overcome challenges, inspire change, and create a brighter future for our planet.
                        
                        </p>
                    </div>

                    
                </div>

                <div className="article-container">
                    <div className="article-section">
                        <h2>Join the Blue Movement</h2>
                        <p>
                            As we celebrate the Year of the Dragon, we invite you to join the Blue Movement and become part of our journey towards a sustainable future. Whether you're a scientist, a conservationist, or simply someone who cares about the ocean, there are countless ways to get involved and make a difference. Follow Indonesia Biru Foundation on social media, participate in our events, or consider making a donation to support our initiatives. Together, let's make waves and create positive change for our oceans and communities.
                            On behalf of Indonesia Biru Foundation, we extend our warmest wishes for a successful and prosperous Year of the Dragon. May this auspicious year bring you abundant opportunities, joy, and fulfillment in all your endeavors. Thank you for your continued support and dedication to our shared mission of protecting Indonesia's marine heritage. Together, we can make a difference and leave a lasting legacy for generations to come.
                        
                        </p>
                    </div>

                    

                    <div className="article-section">
                        <h2>Happy Chinese New Year! 🐲</h2>
                        <p>
                            #IndonesiaBiruFoundation #YearOfTheDragon #OceanConservation #CommunityDevelopment #BlueMovement
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ArticleYearOfDragon;
