import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/sharkray/judul.png';
import img2 from '../../assets/sharkray/image2.png';
import img3 from '../../assets/sharkray/img3.png';
import img4 from '../../assets/sharkray/img4.png';
import img5 from '../../assets/sharkray/img5.jpg';
import img6 from '../../assets/sharkray/img6.png';
import img7 from '../../assets/sharkray/img7.png';

const ArticleSharkRay = () => {
    const { updateValue } = useMyContext();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to="/" onClick={() => updateValue("")}>Home</Link>
                {' / '}
                <span>Shark and Ray Conservation Report</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={img1} alt="Shark and ray awareness program" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Progress Report: Raising Awareness for Shark and Ray Conservation
                </div>
                <div className="date-detail-news">
                    By Indonesia Biru Foundation • 08 July 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news space-y-6">
                <br />
                    <p>
                        For the past 4 months, Indonesia Biru Foundation and Coral Reef Check have been busy in Tanjung Luar, East Lombok—collecting data on shark and ray landings, chatting with local fishers, and bringing ocean vibes into classrooms through school education. Why? Because sharks and rays aren’t just big fish, they’re the ocean’s top predators and natural ecosystem managers! And what if they disappear? The food chain gets wobbly, marine ecosystems lose their balance, and even we humans, especially fishers, can feel the effects.🦈🌊
                    </p>
                    <br />

                    <img src={img2} alt="Tanjung Luar activities" className="img-detail-news" />
                    <br />

                    <p>
                        <strong>Shark and Ray Landing Data 🦈</strong>
                    </p>
                    <br />
                    <p>
                        Every morning, Tanjung Luar Market comes alive with energy. Fishermen hauling in their catch, fish being sliced and prepared, women setting up their stalls, and buyers weaving through the crowd. But wait… these aren’t your usual fish. The fish being sold here isn’t your everyday seafood. In fact, many of them are species that should be protected. Yup, you read that right—sharks and rays, some already cut and ready for sale, are a common sight in this bustling market.
                    </p>
                    <br />

                    <img src={img3} alt="Shark and ray market observation" className="img-detail-news" />
                    <br />
                    <p>
                        Did you know? In just four months, from January to April, a total of 971 sharks and rays were recorded from catches in Tanjung Luar. 🦈😭 And guess what? A whopping 88% of them were sharks. These animals were caught both intentionally (targeted catch) and unintentionally (bycatch), with the highest number of landings happening in April. We spotted a range of species like Silky Sharks, Tiger Sharks, Guitarfish, Jenkins’ Whiprays, and more.
                    </p>
                    <br />

                    <p>
                        Every day, an estimated 10 to 100 sharks are sold at Tanjung Luar Market. These sharks and rays are often purchased by collectors or sent for export outside the region. Some of the meat is also sold locally for consumption. One of the most sought-after products is the shark fin, which can sell for a high price in the market. Fins from guitarfish are the most expensive, selling for around Rp 3,000,000 to Rp 5,000,000 per kilo, while fins from thresher sharks go for about Rp 500,000 per kilo.
                    </p>
                    <br />

                    <img src={img4} alt="Shark fins and exports" className="img-detail-news" />

                    <br />
                    <p>
                        <strong>Fisherman Interview</strong>
                    </p>
                    <br />
                    <p>
                        We interviewed several local fishermen to gather deeper insights.🖊️Here’s what we found out:  
                        Many of the fishermen became shark catchers because it’s what they were taught, passed down from the older generation, who also made a living this way.  
                        When they’re unable to catch sharks, they rely on daily fishing as an alternative source of income.
                    </p>
                    <br />

                    <img src={img5} alt="Fisherman interviews" className="img-detail-news" />

                    <br />
                    <p>
                        <strong>School Visit</strong>
                    </p>
                    <br />
                    <p>
                        Not only did we collect data on shark and ray landings and interview local fishermen—we also made regular visits to two elementary schools in Tanjung Luar! The goal was to raise awareness among students about the ecological value of sharks and rays in ocean life.
                    </p>
                    <br />

                    <p>In our sessions, the kids learned about:</p>
                    <ul className="list-disc pl-6">
                        <li>🦈 The types of sharks and rays commonly landed in Tanjung Luar</li>
                        <li>📊 The conservation status of different species</li>
                        <li>🌊 The important roles sharks and rays play in keeping marine ecosystems healthy</li>
                        <li>✏️ And of course, fun worksheets to make learning exciting!</li>
                    </ul>
                    <br />

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                            <img src={img6} alt="School education and outreach" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img7} alt="Student activity on shark conservation" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />

                    <h2>Let’s Keep the Ocean in Balance 🌊</h2>
                    <br />

                    <p className="mt-4">
                        While our oceans seem vast and endless, their health depends on the balance maintained by creatures like sharks and rays. By understanding their role, spreading awareness, and supporting sustainable practices, we can help preserve marine biodiversity for generations to come.
                    </p>

                    <p className="mt-4">
                        Follow <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation</a> for more updates, field reports, and conservation stories. 💙🌏
                    </p>

                    <p className="mt-4">
                        <strong>Contributor:</strong> Indonesia Biru Foundation Field Team
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleSharkRay;
