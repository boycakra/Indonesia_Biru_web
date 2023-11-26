import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import imgNews1 from "../../../assets/images/news1.png";
import imgNews2 from "../../../assets/images/news2.png";
import imgNews3 from "../../../assets/images/news3.png";
import imgNews4 from "../../../assets/images/news4.png";
import imgNews5 from "../../../assets/images/news5.png";
import imgNews6 from "../../../assets/images/resized_image.png";
import arrowLeft from '../../../assets/icons/Arrow-left.svg';
import arrowRight from '../../../assets/icons/Arrow-right.svg';

const News = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    const sliderRef = useRef<Slider | null>(null);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [currentPagenation, setCurrentPagenation] = useState(0);
    const [imageDimensions, setImageDimensions] = useState({ width: 528, height: 480 });


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (currentSlide: number, nextSlide: number) => {
            console.log(currentSlide, nextSlide)
            if (currentSlide === 2 && nextSlide === 3) {
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
            setImageDimensions({ width: img.width, height: img.height });
        };
    }, []);

    
    
    const containerStyle = {
        // Use imageDimensions to set the dimensions of the container
        width: `${imageDimensions.width}px`,
        height: `${imageDimensions.height}px`,
    };

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
                        <Link to={"/detail-news"}>
                            <div className="container-content-restoration">
                                <img src={imgNews1} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">Planting Hope: How Indonesia Biru Foundation Restores Coral Reefs</div>
                                <div className="content-desc-restoration">
                                    In the heart of paradise, on the beautiful island of Lombok, the Indonesia Biru Foundation (IBF) is silently scripting a tale of hope for the oceans. Established in 2020, this independent organization has been on a remarkable journey of coral reef research, restoration, and fostering the development of coastal communities. At its core, IBF carries the noble vision of increasing marine literacy among Indonesian citizens, and their approach is both scientific and deeply community-oriented.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news-2"}>
                            <div className="container-content-restoration">
                                <img src={imgNews2} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">Project Reef Support</div>
                                <div className="content-desc-restoration">
                                    Since the 1950’s more than half of the coral reefs worldwide have decayed. If this trend continues, we will have lost or severely damaged over 90% of all coral reefs by 2050. The main causes: global warming, destructive fishing and pollution of our oceans and seas.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news-3"}>
                            <div className="container-content-restoration">
                                <img src={imgNews3} alt="Slide 1" className="img-restoration"/>
                                <div className="content-title-restoration">Empowering Marine Conservation: Indonesia Biru Foundation's Journey in Coral Restoration and Eco-Tourism</div>
                                <div className="content-desc-restoration">
                                    In the heart of Indonesia Biru Foundation, led by Raditya Andrean Saputra, M.Sc., is rewriting the narrative of marine conservation. Their Coral Lab at "ECO KECINAN" isn't just a scientific haven; it's a call to action for non-divers and non-scientists to engage with the urgent dialogue surrounding our oceans.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news-4"}>
                            <div className="container-content-restoration">
                                <img src={imgNews4} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">Nurturing Coral Life: The Stages of Coral Restoration</div>
                                <div className="content-desc-restoration">
                                    Coral restoration is a delicate and crucial endeavor undertaken by organizations like the Indonesia Biru Foundation (IBF). The process involves several stages, each of which contributes to the revival of our coral reefs and the preservation of marine ecosystems.
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
                                    style={containerStyle}
                                />
                                <div className="content-title-restoration">Reevaluating Coral Rehabilitation: Lessons from Ghost Bay, Amed, Bali</div>
                                <div className="content-desc-restoration">
                                    In the pursuit of biodiversity preservation, Srikandi Bio Farma, along with the University of Udayana's Nature Enthusiast Students and Amed Dive Center, embarked on a coral conservation mission in Amed Ghost Bay in 2022. Despite employing coral transplantation, a common method for reef restoration, recent evaluations unearthed challenges that prompt a reconsideration of future initiatives.
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
                                    
                                />
                                <div className="content-title-restoration">Reevaluating Coral Rehabilitation: Lessons from Ghost Bay, Amed, Bali</div>
                                <div className="content-desc-restoration">
                                    In the pursuit of biodiversity preservation, Srikandi Bio Farma, along with the University of Udayana's Nature Enthusiast Students and Amed Dive Center, embarked on a coral conservation mission in Amed Ghost Bay in 2022. Despite employing coral transplantation, a common method for reef restoration, recent evaluations unearthed challenges that prompt a reconsideration of future initiatives.
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
