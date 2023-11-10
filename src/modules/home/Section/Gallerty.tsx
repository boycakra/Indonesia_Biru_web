import React from 'react';
import Slider from 'react-slick';
import arrowLeft from '../../../assets/icons/Arrow-left.svg';
import arrowRight from '../../../assets/icons/Arrow-right.svg';
import { useRef, useState } from 'react';
import imgGallery1 from '../../../assets/images/gallery1.jpg';
import imgGallery2 from '../../../assets/images/gallery2.jpg';
import imgGallery3 from '../../../assets/images/gallery3.jpg';
import imgGallery4 from '../../../assets/images/gallery4.jpg';
import imgGallery5 from '../../../assets/images/gallery5.jpg';
import imgGallery6 from '../../../assets/images/gallery6.jpg';
import imgGallery7 from '../../../assets/images/gallery7.jpg';
import imgGallery8 from '../../../assets/images/gallery8.jpg';
import imgGallery9 from '../../../assets/images/gallery9.jpg';
import imgGallery10 from '../../../assets/images/gallery10.jpg';
import imgGallery11 from '../../../assets/images/gallery11.jpg';
import imgGallery12 from '../../../assets/images/gallery12.jpg';
import imgGallery13 from '../../../assets/images/gallery13.jpg';
import imgGallery14 from '../../../assets/images/gallery14.jpg';
import imgGallery15 from '../../../assets/images/gallery15.jpg';


const Gallery = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    const sliderRef = useRef<Slider | null>(null);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [isFirstSlide, setIsFirstSlide] = useState(true);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (currentSlide: number, nextSlide: number) => {
            if (currentSlide === 1 && nextSlide === 2) {
                setIsLastSlide(true)
            }
            if (currentSlide === 1 && nextSlide === 0) {
                setIsFirstSlide(true)
            }
        }
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
        <div className="container-gallery" ref={ref}>
            <div className="container-title-gallery">
                <div className="title-gallery">
                    Welcome to <br />
                    Our Gallery
                </div>
                <div className="title-gallery-mobile">
                    Welcome to Our Gallery
                </div>
                <div className="container-btn-gallery">
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
                    <div className="container-gallerty-slide">
                        <div className="container-gallery-row-1">
                            <img src={imgGallery1} alt="gallery" className="img-gallery" />
                            <img src={imgGallery2} alt="gallery" className="img-gallery" />
                        </div>
                        <div className="container-gallery-row-2">
                            <img src={imgGallery3} alt="gallery" className="img-gallery" />
                            <img src={imgGallery4} alt="gallery" className="img-gallery" />
                            <img src={imgGallery5} alt="gallery" className="img-gallery" />
                        </div>
                    </div>
                    <div className="container-gallerty-slide">
                        <div className="container-gallery-row-1">
                            <img src={imgGallery6} alt="gallery" className="img-gallery" />
                            <img src={imgGallery7} alt="gallery" className="img-gallery" />
                        </div>
                        <div className="container-gallery-row-2">
                            <img src={imgGallery8} alt="gallery" className="img-gallery" />
                            <img src={imgGallery9} alt="gallery" className="img-gallery" />
                            <img src={imgGallery10} alt="gallery" className="img-gallery" />
                        </div>
                    </div>
                    <div className="container-gallerty-slide">
                        <div className="container-gallery-row-1">
                            <img src={imgGallery11} alt="gallery" className="img-gallery" />
                            <img src={imgGallery12} alt="gallery" className="img-gallery" />
                        </div>
                        <div className="container-gallery-row-2">
                            <img src={imgGallery13} alt="gallery" className="img-gallery" />
                            <img src={imgGallery14} alt="gallery" className="img-gallery" />
                            <img src={imgGallery15} alt="gallery" className="img-gallery" />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
});

export default Gallery;
