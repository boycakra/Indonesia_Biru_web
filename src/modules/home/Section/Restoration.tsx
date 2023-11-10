import { useRef, useState } from 'react';
import Slider from 'react-slick';
import arrowLeft from '../../../assets/icons/Arrow-left.svg';
import arrowRight from '../../../assets/icons/Arrow-right.svg';
import imgRestoration1 from '../../../assets/images/restoration1.png'
import imgRestoration2 from '../../../assets/images/restoration2.png'
import imgRestoration3 from '../../../assets/images/restoration3.png'
import imgRestoration4 from '../../../assets/images/restoration4.png'

const Restoration = () => {
    const sliderRef = useRef<Slider | null>(null);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [isFirstSlide, setIsFirstSlide] = useState(true);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '20px',
        beforeChange: (currentSlide: number, nextSlide: number) => {
            if (currentSlide === 0 && nextSlide === 1) {
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

    const goToPrevious = () => {
        sliderRef.current?.slickPrev();
        setIsLastSlide(false);
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
        setIsFirstSlide(false);
    };
    return (
        <div className="container-restoration">
            <div className="container-title-restoration">
                <div className="title-restoration">
                    Our Restoration Process
                </div>
                <div className="desc-restoration">
                    Our process to help restore Indonesia’s most valuable natural resource:
                </div>
                <div className="container-btn-restoration">
                    <button className={`btn-slider ${isFirstSlide ? "disabled-btn" : ""}`} onClick={goToPrevious}>
                        <img src={arrowLeft} alt="arrow-left" />
                    </button>
                    <button className={`btn-slider ${isLastSlide ? "disabled-btn" : ""}`} onClick={goToNext}>
                        <img src={arrowRight} alt="arrow-right" />
                    </button>
                </div>
            </div>
            <div className="carousel-container">
                <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
                    <div className="carousel-slide">
                        <div className="container-content-restoration">
                            <img src={imgRestoration1} alt="Slide 1" className="img-restoration" />
                            <div className="content-title-restoration">Harvesting</div>
                            <div className="content-desc-restoration">
                                Our team dives down and harvests either fragments of a healthy coral or locates smaller corals growing in unsuitable areas damaged by environmental degradation.
                            </div>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <div className="container-content-restoration">
                            <img src={imgRestoration2} alt="Slide 2" className="img-restoration" />
                            <div className="content-title-restoration">Planting</div>
                            <div className="content-desc-restoration">
                                Our divers then securely attach these coral fragments to our various marine structures that serve as a foundation for these corals to grow and form healthy reefs.
                            </div>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <div className="container-content-restoration">
                            <img src={imgRestoration3} alt="Slide 3" className="img-restoration" />
                            <div className="content-title-restoration">Monitoring and Maintenance</div>
                            <div className="content-desc-restoration">
                                During our dives, we actively monitor the condition and assess the growth of the transplanted coral fragments. Algal control is vital step in maintaining our restored reefs.
                            </div>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <div className="container-content-restoration">
                            <img src={imgRestoration4} alt="Slide 4" className="img-restoration" />
                            <div className="content-title-restoration">Refinement</div>
                            <div className="content-desc-restoration">
                                We aim to learn from the data we collect and improve our methods. Coral restoration is a young field and our process of restoration evolves and adapts as we learn and streamline our methods.
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Restoration;
