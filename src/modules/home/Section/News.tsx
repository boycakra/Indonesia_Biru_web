import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import imgNews0 from "../../../assets/images/news0.png";
import imgNews1 from "../../../assets/images/news1.png";
import imgNews2 from "../../../assets/images/news2.png";
import imgNews3 from "../../../assets/images/news3.png";
import imgNews4 from "../../../assets/images/news4.png";
import imgNews5 from "../../../assets/images/news5.png";
import imgNews6 from "../../../assets/images/news6.png";
import imgNews7 from "../../../assets/images/news7.png";
import imgNews8 from "../../../assets/images/news8.png";
import imgNews9 from "../../../assets/images/news9.png";
import imgNews10 from "../../../assets/images/large_acara.png";
import imgNews11 from "../../../assets/images/bocil.1.png";
import imgNews12 from "../../../assets/images/large_nomenie.png";
import imgNews13 from "../../../assets/images/new13.png";
import imgNews14 from "../../../assets/images/small_Shore.png";
import imgNews15 from "../../../assets/images/Event_21.png";
import imgNews16 from "../../../assets/gillasahan/gill.jpg";
import imgNews17 from "../../../assets/images/mangrove.png";
import imgNews18 from "../../../assets/images/Indonesia biru_imlek.jpg";
import imgNews19 from "../../../assets/images/Collecting_with_kids.jpg";
import imgNews20 from "../../../assets/images/global.jpg";
import imgNews21 from "../../../assets/images/laut-plastik.png";
import imgNews22 from "../../../assets/images/price.png";
import imgNews23 from "../../../assets/images/Mangrove.jpeg";
import imgNews24 from "../../../assets/images/Cita Buana.jpeg";
import imgNews25 from "../../../assets/images/Sanur kolab Hyatt (3).jpeg";
import imgNews26 from "../../../assets/images/mafff1 (1).jpeg";
import imgNews27 from "../../../assets/images/biofarma (3).jpeg";
import imgNews28 from "../../../assets/images/news_28a.jpeg";
import imgNews29 from "../../../assets/images/News_29a.jpeg";
import imgNews30 from "../../../assets/images/news_30a (1).jpg";
import imgNews31 from "../../../assets/images/news_31a (1).jpg";
import imgNews32 from "../../../assets/images/bluewater.png";
import imgNews33 from "../../../assets/images/news_33a.jpg";
import imgNews34 from "../../../assets/images/news_34a.jpg";
import imgNews35 from "../../../assets/images/news_35a.jpg";
import imgNews36 from "../../../assets/images/sd (1).jpg";
import imgNews37 from "../../../assets/cnewgalry/cnewgalary (23).jpg";
import imgNews38 from "../../../assets/images/Seven Secrets (4).png";
import imgNews39 from "../../../assets/images/BMIbaru (5).png";
import imgNews40 from "../../../assets/images/Events_Fred.png";
import imgNews41 from "../../../assets/images/merged_image.jpg";
import imgNews42 from "../../../assets/images/kerang.png";
import imgNews43 from "../../../assets/biofarmavisit/biofarmavisit.png";
import imgNews44 from "../../../assets/coralai/image3.png";
import imgNews45 from "../../../assets/camerasea/image15.png";
import arrowLeft from '../../../assets/icons/Arrow-left.svg';
import arrowRight from '../../../assets/icons/Arrow-right.svg';

const News = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    const sliderRef = useRef<Slider | null>(null);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [currentPagenation, setCurrentPagenation] = useState(0);
   


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (currentSlide: number, nextSlide: number) => {
            console.log(currentSlide, nextSlide)
            if (currentSlide === 43 && nextSlide === 44) {
                setIsLastSlide(true)
            }
            if (currentSlide === 1 && nextSlide === 0) {
                setIsFirstSlide(true)
            }
        },
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
            }
        ]
    };
    useEffect(() => {
        // Fetch image dimensions dynamically
        const img = new Image();
        img.src = imgNews1;
        img.onload = () => {
           
        };
    }, []);

    
    
    

    const goToPrevious = () => {
        if (!isFirstSlide) {
            sliderRef.current?.slickPrev();
            setIsLastSlide(false);
            setCurrentPagenation(currentPagenation - 1)
        }
    };

    const goToNext = () => {
        
        if (!isLastSlide) {
            sliderRef.current?.slickNext();
            setIsFirstSlide(false);
            setCurrentPagenation(currentPagenation + 1)
        }
        console.log(currentPagenation);
    };
    
    return (
        <div className="container-news" ref={ref}>
            <div className="container-title-news">
                <div className="title-news">
                    Our News
                </div>
                <div className="desc-news">
                    Join our coral restoration journey and keep updated on our mission to protect this unique marine ecosystem.
                </div>
            </div>
            <div className="carousel-container">
                <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
                <div className="carousel-slide">
                        <Link to={"/detail-news-45"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews45}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">  Peek into the daily lives of marine creatures </div>
                                <div className="content-date-restoration">  By Elsa Dianita Aulia • 03 July 2025</div>
                                <div className="content-desc-restoration">
                                Ever wondered what the fish are up to today? 🐡 our camera’s got you covered! Now you can peek into the daily lives of marine creatures, live and in HD! 🎬🐠 
                    
                                
                   
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-44"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews44}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">  AI-Based Coral Categorization in Lombok Reefs</div>
                                <div className="content-date-restoration">  By Elsa Dianita Aulia • 01 July 2025</div>
                                <div className="content-desc-restoration">
                                Indonesia Biru Foundation developed a deep learning model that can automatically categorize coral and biotic components in reef imagery using the YOLOv8 segmentation framework.
                   
                                
                   
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-43"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews43}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">  Coral Restoration in Gili Asahan with Bio Farma</div>
                                <div className="content-date-restoration">  June 19, 2025</div>
                                <div className="content-desc-restoration">
                                Restoration efforts are breathing new life into Gili Asahan’s reefs, thanks to a collaborative coral restoration program with Bio Farma
                   
                   
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-42"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews42}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">  Snorkeling Awareness & Ocean Conservation</div>
                                <div className="content-date-restoration">  February 22, 2025</div>
                                <div className="content-desc-restoration">
                                🌊 Exploring the ocean is a privilege, but with that comes responsibility. As Blue Rangers, let’s ensure we protect marine ecosystems and leave nothing but bubbles behind!
                   
                   
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-41"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews41}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">  Mangrove Restoration with BRO Management</div>
                                <div className="content-date-restoration">  February 17, 2025</div>
                                <div className="content-desc-restoration">
                                Mangroves play a crucial role in protecting coastal ecosystems, serving as natural barriers against erosion, storm surges, and even climate change impacts. These incredible trees provide shelter for marine biodiversity and contribute to carbon sequestration, making their restoration more vital than ever. Sadly, mangrove forests are rapidly declining due to deforestation and industrial expansion, leading to severe ecological consequences. Through this initiative, IBF and BRO Management are taking an active step towards reversing the damage and inspiring future generations to do the same. 
                    
                   
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-40"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews40}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">  Fun Freediving Events ✨🤩🥳</div>
                                <div className="content-date-restoration">  February 15, 2025</div>
                                <div className="content-desc-restoration">
                                Huge thanks to <a href="https://www.instagram.com/lombokfreedive/" target="_blank" rel="noopener noreferrer">@lombokfreedive</a>, for sharing valuable knowledge with LFC members! We learned so much today! 🎉
                    
                   
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-39"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews39}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">  Indonesia Biru Foundation: A Successful Step Towards Mangrove Restoration in Lombok</div>
                                <div className="content-date-restoration">  January 19, 2025</div>
                                <div className="content-desc-restoration">
                                The Indonesia Biru Foundation (IBF), in collaboration with Reef Support, recently concluded a groundbreaking initiative to conserve and revitalize the Cemare Mangrove ecosystem in Lombok. The project, MangroveAI, seamlessly integrated community efforts with advanced technological solutions such as remote sensing and computer vision to enhance ecosystem monitoring and management. The event not only marked a major milestone in environmental restoration but also exemplified how technology and community action can create sustainable change.
                    
                   
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-38"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews38}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Discover Sustainability at Seven Secrets Resort: A Journey to Protect and Preserve</div>
                                <div className="content-date-restoration">  January 15, 2025</div>
                                <div className="content-desc-restoration">
                                Seven Secrets Resort in Lombok Island-Indonesia is more than a luxury escape. It's a pledge to safeguard our planet, empower communities, and protect the oceans. Nestled in the serene beauty of Nipah Bay, our resort combines world-class amenities and personalized service with meaningful opportunities to contribute to a sustainable future.
                   
                   
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-36"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews36}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Raising Awareness on Elasmobranchs through Education</div>
                                <div className="content-date-restoration">  January 13, 2025</div>
                                <div className="content-desc-restoration">
                                The Indonesia Biru Foundation has once again taken the lead in environmental education by organizing an engaging and impactful event aimed at raising awareness about elasmobranchs—sharks and rays—among elementary school students. Held as part of the foundation's ongoing marine conservation campaign, this program is designed to instill a sense of wonder, responsibility, and knowledge about these critical species in young learners, emphasizing their ecological importance and unique biology.
                   
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-37"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews37}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Coral Connect 2025: A Successful Collaboration for Coral Reef Restoration</div>
                                <div className="content-date-restoration">  January 12, 2025</div>
                                <div className="content-desc-restoration">
                                The "Coral Connect" event held at Pearl Beach Resort, Gili Asahan, from January 10th to 12th, 2025, was a resounding success, bringing together passionate individuals from the Indonesia Biru Foundation, TU Delft, Seachange Indonesia, and environmental experts worldwide. With a shared commitment to coral reef restoration, the event provided a platform for meaningful discussions on cutting-edge techniques, eco-tourism, and environmental protection. Attendees were inspired by the latest innovations and scientific approaches to preserve coral ecosystems for future generations.
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                
                <div className="carousel-slide">
                        <Link to={"/detail-news-35"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews35}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Coastal Ecosystem Conservation 🌊</div>
                                <div className="content-date-restoration">  October 26, 2024</div>
                                <div className="content-desc-restoration">
                                Hello, Blue Rangers! 🌊 We are excited to share our recent participation in an environmental seminar hosted by the Student Council (BEM) of Mataram University. This seminar, held in collaboration with the NTB Department of Marine and Fisheries, brought together experts and advocates to discuss the current state of coastal ecosystems and the vital need for preservation efforts.
                   
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-34"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews34}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">  New Awareness Project Survey: Conserving Sharks and Rays for Future Generations 🦈</div>
                                <div className="content-date-restoration">  October 25, 2024</div>
                                <div className="content-desc-restoration">
                                Hello, Blue Rangers! 🌊 We are thrilled to announce a new project in collaboration with Coral Reef Care aimed at increasing awareness of the importance of sharks and rays in marine ecosystems. This one-year project, based in Nusa Tenggara Barat (NTB), is designed to educate and inspire sustainable practices that protect marine life for future generations.
                    
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-33"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews33}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">  Weekly Environmental Collaboration with SD Lombok Insani!</div>
                                <div className="content-date-restoration">  October 23, 2024</div>
                                <div className="content-desc-restoration">
                                Hello, Blue Rangers! 🌊 Indonesia Biru Foundation (IBF) is proud to announce our ongoing collaboration with SD Lombok Insani, where we join hands to bring environmental awareness to the next generation. Our weekly sessions are designed to educate students about the importance of preserving coastal ecosystems and the vibrant biodiversity of marine life.
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-32"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews32}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Indonesia Biru Foundation Named Finalist in Blue Water Heroes 2024!</div>
                                <div className="content-date-restoration">  October 11, 2024</div>
                                <div className="content-desc-restoration">
                                Hi Blue Ranger 🌊! We are thrilled to announce that Indonesia Biru Foundation has been selected as a finalist in the <a href="https://bluewateredufest.com/blue-water-heroes/" target="_blank" rel="noopener noreferrer">Blue Water Heroes 2024</a> awards! This remarkable recognition, presented by Blue Water Edufest in collaboration with Tatler Gen.T, celebrates our unwavering commitment to marine conservation.
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-31"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews31}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Steady Growth in Coral Conservation: 2022-2024 Milestones</div>
                                <div className="content-date-restoration">September 31, 2024</div>
                                <div className="content-desc-restoration">
                                Hi Blue Ranger 🌊! Consistency is our guiding star as we continue working for coral reef restoration and marine health. Over the past two years, our conservation projects have slowly but steadily yielded encouraging signs of progress.
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-29"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews29}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Coral Restoration with Waste Clay</div>
                                <div className="content-date-restoration">September 30, 2024</div>
                                <div className="content-desc-restoration">
                                Hi Blue Ranger 🌊! We're thrilled to share the progress of a meaningful collaboration that is now showing tangible results. Not long ago, alongside <a href="https://www.instagram.com/sara__howard/" target="_blank" rel="noopener noreferrer">@sara__howard</a> and <a href="https://www.instagram.com/kevalastudio/" target="_blank" rel="noopener noreferrer">@kevalastudio</a>, we embarked on a small project with a big vision: turning waste clay into a valuable tool for coral restoration. The project’s goal is to help corals attach to barren rock surfaces, which has huge potential for reviving coral ecosystems.
                         </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news-30"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews30}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Youth in Mangrove Conservation</div>
                                <div className="content-date-restoration">September 29, 2024</div>
                                <div className="content-desc-restoration">
                                Hi Blue Ranger 🌊! We are thrilled to announce our latest collaboration with <a href="https://www.instagram.com/coralreefcare/" target="_blank" rel="noopener noreferrer">@coralreefcare</a> and <a href="https://www.instagram.com/cemare_ecogreen/" target="_blank" rel="noopener noreferrer">@cemare_ecogreen</a>, focusing on a crucial part of coastal resilience — mangrove conservation.
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-28"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews28}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Networking with the World ARC Fleet</div>
                                <div className="content-date-restoration">September 28, 2024</div>
                                <div className="content-desc-restoration">
                                Hi Blue Ranger 🌊! This past week was filled with excitement as we spent time at @medanabaymarina, connecting with the @world_arc_rally fleet ⛵️. As the sailors prepared for their next adventure, we had the perfect opportunity to build meaningful relationships, exchange ideas, and share our passion for marine conservation. 
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-27"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews27}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Biofarma and Indonesia Biru Foundation Collaboration</div>
                                <div className="content-date-restoration">July 31, 2024</div>
                                <div className="content-desc-restoration">
                                Indonesia Biru Foundation, in collaboration with Biofarma, Seachange Indonesia, and Oceanway Dive, proudly announces a significant reef restoration project in Gili Asahan. This project has reached a major milestone with the planting of over 1000 new coral fragments at depths of 8-13 meters.
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-26"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews26}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Using Cycling for Marine Conservation Campaigns</div>
                                <div className="content-date-restoration">July 28, 2024</div>
                                <div className="content-desc-restoration">
                                Who would've thought cyclist and marine conservation is a match? We proved it right in Bandung! 🌊"
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-25"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews25}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> World Turtle Day: A Successful Event for Conservation Awareness</div>
                                <div className="content-date-restoration">May 24, 2024</div>
                                <div className="content-desc-restoration">
                                On Thursday, May 23, 2024, the Indonesia Biru Foundation proudly hosted World Turtle Day, a highly successful event dedicated to raising awareness about sea turtle conservation. The event took place from 3pm to 5pm, drawing an enthusiastic crowd of local communities, tourists, children, environmental enthusiasts, and families.🌏♻️
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-24"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews23}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Successful Mangrove Restoration Event</div>
                                <div className="content-date-restoration">April 28, 2023</div>
                                <div className="content-desc-restoration">
                                We have some exciting news to share with you! @coralreefcare, Indonesia Biru Foundation, and @cemare_ecogreen are teaming up to conduct a new mission in Cemare, South Lembar 🌱. We'll be working on mangrove restoration, waste management, and environmental education, all with the aim of maintaining the balance of nature and ensuring sustainable benefits for all🌏♻️
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-23"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews24}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Explore, Learn, and Protect: Inviting Schools to Indonesia Biru Foundation</div>
                                <div className="content-date-restoration">April 18, 2023</div>
                                <div className="content-desc-restoration">
                                Calling all educators and young minds! Indonesia Biru Foundation is thrilled to announce that our doors are open for school visits. Embark on an educational journey like no other as we invite students to immerse themselves in the wonders of the environment, coral reefs, and conservation through an engaging hands-on experience.
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-22"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews22}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration"> Sea Level Rise: Understanding the Impacts and Solutions</div>
                                <div className="content-date-restoration">February 26 , 2024</div>
                                <div className="content-desc-restoration">
                                Studies cited in the article attribute sea level rise to various factors, including melting ice sheets, thermal expansion of seawater, and changes in ocean circulation patterns. These processes contribute to the increasing frequency and severity of flooding, erosion, and storm surges along coastlines worldwide.
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-21"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews21}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Study Finds, Plastic Pollution Worsens Ocean Acidification</div>
                                <div className="content-date-restoration">February 25 , 2024</div>
                                <div className="content-desc-restoration">
                                Plastic pollution continues to pose a significant threat to marine ecosystems, with far-reaching consequences for ocean health. A recent study highlighted in a <a href="https://phys.org/news/2022-09-plastic-degradation-ocean-contributes-acidification.html" target="_blank" rel="noopener noreferrer">Phys.org article</a> reveals that plastic degradation in the ocean exacerbates ocean acidification, compounding the challenges faced by marine life.
                    
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-20"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews20}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">The Arrival of the Worst Heatwave: A Call to Action for Reef Conservation</div>
                                <div className="content-date-restoration">February 24 , 2024</div>
                                <div className="content-desc-restoration">
                                Hi Blue Ranger! 🌊.  It's time to pay close attention to our reefs as we brace ourselves for the arrival of the worst heatwave expected this March-April. The impending heatwave poses a significant threat to our marine ecosystems, particularly coral reefs, which are highly sensitive to changes in temperature.
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-19"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews19}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Collaborative Art Project with Elemetry School in Lombok</div>
                                <div className="content-date-restoration">February 18 , 2024</div>
                                <div className="content-desc-restoration">
                                Today marks an exciting milestone as Indonesia Biru Foundation (IBF) joins hands with Elemetry School in Lombok for a collaborative art project aimed at cleaning up our coastlines. With the support of @infosd.lombokinsanischool, we are embarking on a mission to collect rubbish and transform it into meaningful works of art.
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-18"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews18}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Welcoming the Year of the Dragon with Indonesia Biru Foundation</div>
                                <div className="content-date-restoration">February 11, 2024</div>
                                <div className="content-desc-restoration">
                                As we usher in the Year of the Dragon, Indonesia Biru Foundation (IBF) extends warm wishes to all our supporters and partners, especially on this auspicious occasion of Chinese New Year. The Year of the Dragon symbolizes strength, leadership, and determination – qualities that resonate deeply with our mission to empower coastal communities and enhance ocean literacy among Indonesians.
                         </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-17"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews17}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">IBF Plants Mangroves</div>
                                <div className="content-date-restoration">February 03, 2024</div>
                                <div className="content-desc-restoration">
                                As we kick off the new week, Indonesia Biru Foundation (IBF) embarked on a meaningful mangrove planting initiative in collaboration with @cemare_ecogreen. It was a day filled with purpose, teamwork, and a commitment to our precious marine ecosystems. </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-16"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews16}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Coral Connect Lombok 2024: A Gathering of Ocean Enthusiasts</div>
                                <div className="content-date-restoration">January 23, 2024</div>
                                <div className="content-desc-restoration">
                                In the vibrant spirit of the ocean, Coral Connect Lombok 2024 concluded with a splash! 🌊 The event kicked off the new year by inviting passionate individuals to the enchanting @coralconnectlombok for two memorable days of connection and collaboration </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-15"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews15}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Coral Connect: Uniting Minds and Reefs for a Sustainable Tomorrow</div>
                                <div className="content-date-restoration">January 18, 2024</div>
                                <div className="content-desc-restoration">
                                    During the upcoming "Coral Connect: Connecting Minds and Reefs for a Better Future Event," scheduled for January 21st, a special sharing session is set to take place. This session will feature the active participation of esteemed organizations such as @livingseas.foundation, @indonesiabirufoundation, @pepsuwpics, and @seachangeindonesia.
                                </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-14"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews14}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">IBF Takes Stand Against Surging Plastic Pollution Crisis</div>
                                <div className="content-date-restoration">January 15, 2024</div>
                                <div className="content-desc-restoration">
                                The UN's recent report on plastic pollution signals a dire future, projecting a doubling of plastic waste by 2030.
                        In response, the Indonesia Biru Foundation (IBF) emphasizes the critical need for immediate action and collective
                        efforts to combat this escalating crisis. </div>
                            </div>
                        </Link>
                    </div>
                <div className="carousel-slide">
                        <Link to={"/detail-news-13"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews13}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">A Year of Gratitude and Progress: A Message from IBF Founder, Andresa Putra</div>
                                <div className="content-date-restoration">Desember 31, 2023</div>
                                <div className="content-desc-restoration">
                                    As we bid farewell to 2023, I want to express my deepest gratitude to each one of you for your unwavering support of our organization. This past year has been a remarkable journey of progress and learning, and it's with immense pride that I share some key highlights of our collective achievements.
                                </div>
                            </div>
                        </Link>
                    </div>

                <div className="carousel-slide">
                        <Link to={"/detail-news-12"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews12}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Indonesia Biru Foundation and Coral Connect Lombok Unveil Plans for Expanding a Second Coral Lab</div>
                                <div className="content-date-restoration">Desember 04, 2023</div>
                                <div className="content-desc-restoration">
                                    Exciting news is on the horizon as Indonesia Biru Foundation (IBF) and Coral Connect Lombok announce the development of a second coral lab. This significant expansion will serve as an information center and a hub for advanced reef restoration efforts
                                </div>
                            </div>
                        </Link>
                    </div>
            
                <div className="carousel-slide">
                        <Link to={"/detail-news-9"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews9}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Indonesia Biru Foundation and Coral Connect Lombok Unveil Plans for Expanding a Second Coral Lab</div>
                                <div className="content-date-restoration">Desember 04, 2023</div>
                                <div className="content-desc-restoration">
                                    Exciting news is on the horizon as Indonesia Biru Foundation (IBF) and Coral Connect Lombok announce the development of a second coral lab. This significant expansion will serve as an information center and a hub for advanced reef restoration efforts
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="carousel-slide">
                        <Link to={"/detail-news-11"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews11}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Inspiring Young Minds: Lombok Insani School's P1 Field Trip to IBF's Coral Lab, Desember 2023</div>
                                <div className="content-date-restoration">Desember 01, 2023</div>
                                <div className="content-desc-restoration">
                                    Exciting news is on the horizon as Indonesia Biru Foundation (IBF) and Coral Connect Lombok announce the development of a second coral lab. This significant expansion will serve as an information center and a hub for advanced reef restoration efforts
                                </div>
                            </div>
                        </Link>
                    </div>
                 <div className="carousel-slide">
                        <Link to={"/detail-news-8"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews8}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Restoring Life: Indonesia Biru Foundation's Mission to Save Coral Reefs</div>
                                <div className="content-date-restoration">November 26, 2023</div>
                                <div className="content-desc-restoration">
                                    In a world where coral reefs are vanishing at an alarming rate, a group of passionate students from TU Delft, namely Cas, Maurits, Vince, and Sara, has joined forces with the Indonesia Biru Foundation (IBF) to embark on a three-month journey to Lombok, Indonesia. Their mission: to save and restore the diminishing coral reefs surrounding Lombok and the enchanting Gili Islands.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news-7"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews7}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Revitalizing Indonesia's Coral Reefs: A Collaborative Journey with Indonesia Biru Foundation and Restor Team</div>
                                <div className="content-date-restoration">November 24, 2023</div>
                                <div className="content-desc-restoration">
                                In pursuing a hands-on approach to biodiversity preservation, the  Indonesia Biru Foundation (IBF) focuses on coral reef restoration. This comprehensive initiative involves the responsible harvesting of small fragments from healthy coral, ensuring minimal impact on existing ecosystems. Subsequently, these fragments are meticulously planted on spider constructions, providing a conducive environment for growth and the formation of new colonies. Through regular monitoring during dives, IBF keeps track of the progress and state of the planted coral fragments. The data collected is pivotal for ongoing improvement, enabling IBF to refine its methods and identify resilient coral species
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news-6"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews6}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Reevaluating Coral Rehabilitation: Lessons from Ghost Bay, Amed, Bali</div>
                                <div className="content-date-restoration">November 8, 2023</div>
                                <div className="content-desc-restoration">
                                    In the pursuit of biodiversity preservation, Srikandi Bio Farma, along with the University of Udayana's Nature Enthusiast Students and Amed Dive Center, embarked on a coral conservation mission in Amed Ghost Bay in 2022. Despite employing coral transplantation, a common method for reef restoration, recent evaluations unearthed challenges that prompt a reconsideration of future initiatives.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news-5"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews5}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                />
                                <div className="content-title-restoration">October Adventures with Blue Ranger 🌊: A Month of Ocean Conservation</div>
                                <div className="content-date-restoration">November 8, 2023</div>
                                <div className="content-desc-restoration">
                                    In the pursuit of biodiversity preservation, Srikandi Bio Farma, along with the University of Udayana's Nature Enthusiast Students and Amed Dive Center, embarked on a coral conservation mission in Amed Ghost Bay in 2022. Despite employing coral transplantation, a common method for reef restoration, recent evaluations unearthed challenges that prompt a reconsideration of future initiatives.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news-4"}>
                            <div className="container-content-restoration">
                                <img src={imgNews4} alt="Slide 1" className="img-restoration" style={{ objectFit: 'cover', height: '200px' }}/>
                                <div className="content-title-restoration">Nurturing Coral Life: The Stages of Coral Restoration</div>
                                <div className="content-date-restoration">November 4, 2023</div>
                                <div className="content-desc-restoration">
                                    Coral restoration is a delicate and crucial endeavor undertaken by organizations like the Indonesia Biru Foundation (IBF). The process involves several stages, each of which contributes to the revival of our coral reefs and the preservation of marine ecosystems.
                                </div>
                            </div>
                        </Link>
                    </div>
                   
                    <div className="carousel-slide">
                        <Link to={"/detail-news-3"}>
                            <div className="container-content-restoration">
                                <img src={imgNews3} alt="Slide 1" className="img-restoration"style={{ objectFit: 'cover', height: '200px' }}/>
                                <div className="content-title-restoration">Empowering Marine Conservation: Indonesia Biru Foundation's Journey in Coral Restoration and Eco-Tourism</div>
                                <div className="content-date-restoration">November 2, 2023</div>
                                <div className="content-desc-restoration">
                                    In the heart of Indonesia Biru Foundation, led by Raditya Andrean Saputra, M.Sc., is rewriting the narrative of marine conservation. Their Coral Lab at "ECO KECINAN" isn't just a scientific haven; it's a call to action for non-divers and non-scientists to engage with the urgent dialogue surrounding our oceans.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news-10"}>
                            <div className="container-content-restoration">
                                <img
                                    src={imgNews10}
                                    alt="Slide 1"
                                    className="img-restoration"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                    
                                />
                                <div className="content-title-restoration">Sailing for a Cause: IBF's Coral Restoration Workshop at World Arc Rally</div>
                                <div className="content-date-restoration">September 05, 2023</div>
                                <div className="content-desc-restoration">
                                    Exciting news is on the horizon as Indonesia Biru Foundation (IBF) and Coral Connect Lombok announce the development of a second coral lab. This significant expansion will serve as an information center and a hub for advanced reef restoration efforts
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news-2"}>
                            <div className="container-content-restoration">
                                <img src={imgNews2} alt="Slide 1" className="img-restoration" style={{ objectFit: 'cover', height: '200px' }}/>
                                <div className="content-title-restoration">Project Reef Support</div>
                                <div className="content-date-restoration">January 17, 2022</div>
                                <div className="content-desc-restoration">
                                    Since the 1950’s more than half of the coral reefs worldwide have decayed. If this trend continues, we will have lost or severely damaged over 90% of all coral reefs by 2050. The main causes: global warming, destructive fishing and pollution of our oceans and seas.
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="carousel-slide">
                        <Link to={"/detail-news1"}>
                            <div className="container-content-restoration">
                                <img src={imgNews1} alt="Slide 1" className="img-restoration" style={{ objectFit: 'cover', height: '200px' }}/>
                                <div className="content-title-restoration">Planting Hope: How Indonesia Biru Foundation Restores Coral Reefs</div>
                                <div className="content-date-restoration">November 6, 2022</div>
                                <div className="content-desc-restoration">
                                    In the heart of paradise, on the beautiful island of Lombok, the Indonesia Biru Foundation (IBF) is silently scripting a tale of hope for the oceans. Established in 2020, this independent organization has been on a remarkable journey of coral reef research, restoration, and fostering the development of coastal communities. At its core, IBF carries the noble vision of increasing marine literacy among Indonesian citizens, and their approach is both scientific and deeply community-oriented.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news"}>
                            <div className="container-content-restoration">
                                <img src={imgNews0} alt="Slide 1" className="img-restoration" style={{ objectFit: 'cover', height: '200px' }}/>
                                <div className="content-title-restoration">Coral Reef Restoration In North Lombok Regency</div>
                                <div className="content-date-restoration">January 1, 2021</div>
                                <div className="content-desc-restoration">
                                The successful execution of the coral reef restoration project in North Lombok Regency marks a crucial milestone in the ongoing efforts to protect and rejuvenate these vital marine ecosystems. With the combined expertise of the diverse team, ranging from marine biologists and environmental scientists to skilled divers and community leaders, this project showcases the power of collaborative action in addressing environmental challenges.
                                </div>
                            </div>
                        </Link>
                    </div>
                   
                </Slider>
            </div>
            <div className="container-btn-carousel-news">
                <button className={`btn-slider ${isFirstSlide ? "disabled-btn" : ""}`} onClick={goToPrevious}>
                    <img src={arrowLeft} alt="arrow-left" />
                </button>
                <button className={`btn-slider ${isLastSlide ? "disabled-btn" : ""}`} onClick={goToNext}>
                    <img src={arrowRight} alt="arrow-right" />
                </button>
            </div>
        </div>
    )
});

export default News;
