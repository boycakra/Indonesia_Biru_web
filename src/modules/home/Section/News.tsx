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
            if (currentSlide === 16 && nextSlide === 17) {
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
