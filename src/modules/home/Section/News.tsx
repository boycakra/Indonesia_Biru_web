import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import imgNews1 from "../../../assets/images/news1.png";
import imgNews2 from "../../../assets/images/news2.png";
import imgNews3 from "../../../assets/images/news3.png";
import arrowLeft from '../../../assets/icons/Arrow-left.svg';
import arrowRight from '../../../assets/icons/Arrow-right.svg';

const News = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    const pagenition = ["1", "2", "3"]
    const sliderRef = useRef<Slider | null>(null);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [currentPagenation, setCurrentPagenation] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        beforeChange: (currentSlide: number, nextSlide: number) => {
            console.log(currentSlide, nextSlide)
            if (currentSlide === 3 && nextSlide === 6) {
                setIsLastSlide(true)
            }
            if (currentSlide === 3 && nextSlide === 0) {
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
                                <div className="content-title-restoration">Delft 2022/2023</div>
                                <div className="content-desc-restoration">
                                    We take small fragments of a healthy coral. And also, we make sure we do not take too much and weaken the healthy coral.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news"}>
                            <div className="container-content-restoration">
                                <img src={imgNews2} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">Delft 2021/2022</div>
                                <div className="content-desc-restoration">
                                    After this we clean the spider constructions and tie the fragments onto these. Here the corals can form and create a new colony.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news"}>
                            <div className="container-content-restoration">
                                <img src={imgNews3} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">RESTORASI TERUMBU</div>
                                <div className="content-desc-restoration">
                                    During our dives, we actively monitor the condition and assess the development of the coral fragments that have been planted.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news"}>
                            <div className="container-content-restoration">
                                <img src={imgNews1} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">Delft 2022/2023</div>
                                <div className="content-desc-restoration">
                                    We take small fragments of a healthy coral. And also, we make sure we do not take too much and weaken the healthy coral.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news"}>
                            <div className="container-content-restoration">
                                <img src={imgNews2} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">Delft 2021/2022</div>
                                <div className="content-desc-restoration">
                                    After this we clean the spider constructions and tie the fragments onto these. Here the corals can form and create a new colony.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news"}>
                            <div className="container-content-restoration">
                                <img src={imgNews3} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">RESTORASI TERUMBU</div>
                                <div className="content-desc-restoration">
                                    During our dives, we actively monitor the condition and assess the development of the coral fragments that have been planted.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news"}>
                            <div className="container-content-restoration">
                                <img src={imgNews1} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">Delft 2022/2023</div>
                                <div className="content-desc-restoration">
                                    We take small fragments of a healthy coral. And also, we make sure we do not take too much and weaken the healthy coral.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news"}>
                            <div className="container-content-restoration">
                                <img src={imgNews2} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">Delft 2021/2022</div>
                                <div className="content-desc-restoration">
                                    After this we clean the spider constructions and tie the fragments onto these. Here the corals can form and create a new colony.
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-slide">
                        <Link to={"/detail-news"}>
                            <div className="container-content-restoration">
                                <img src={imgNews3} alt="Slide 1" className="img-restoration" />
                                <div className="content-title-restoration">RESTORASI TERUMBU</div>
                                <div className="content-desc-restoration">
                                    During our dives, we actively monitor the condition and assess the development of the coral fragments that have been planted.
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
                <div className="container-pagination-news">
                    {pagenition.map((e, index) => (
                        <div className={`pagenation ${index === currentPagenation ? "isActive" : ""}`} >{e}</div>
                    ))}
                </div>
                <button className={`btn-slider ${isLastSlide ? "disabled-btn" : ""}`} style={{ marginLeft: 0 }} onClick={goToNext}>
                    <img src={arrowRight} alt="arrow-right" />
                </button>
            </div>
        </div>
    )
});

export default News;
