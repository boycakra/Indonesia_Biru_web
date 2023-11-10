import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/detailNews3.png';
import imgDescetailNews from '../../assets/images/descDetailNews3.png';

const DetailNews3 = () => {
    const { updateValue } = useMyContext();
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });

    }, [])

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to={"/"} onClick={() => updateValue("")}>Home</Link> / <span>News Detail</span>
            </div>
            <div className="container-main-img-detail-news">
                <img src={imgDetailNews} alt="detail-news" className="img-main-detail-news" />
            </div>
            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Empowering Marine Conservation: Indonesia Biru Foundation's Journey in Coral Restoration and Eco-Tourism
                </div>
                <div className="date-detail-news">
                    Boy Cakraningrat • November 9, 2023
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    In the heart of Indonesia Biru Foundation, led by Raditya Andrean Saputra, M.Sc., is rewriting the narrative of marine conservation. Their Coral Lab at "ECO KECINAN" isn't just a scientific haven; it's a call to action for non-divers and non-scientists to engage with the urgent dialogue surrounding our oceans. <br />
                    {" "} <br />
                    Why Coral Matters? <br />
                    Beyond the picturesque surface, the ocean holds secrets. Indonesia Biru Foundation acknowledges the challenges of coral restoration but also the imperative nature of managing local stressors before diving into rejuvenation efforts. Indonesia Biru Foundation is not your typical research organization. Their mission is to boost marine literacy through practical collaborations with local communities. The Coral Lab isn't just a scientific hub; it's a symbol of commitment to marine conservation for all. <br />
                </div>
                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                <div className="desc-detail-news">
                    Coral Lab @ ECO KECINAN: Where Innovation Meets Tourism <br />
                    Situated at "ECO KECINAN," the Coral Lab is more than a research facility; it's a tourist-friendly gateway into the marine world. Beyond the biological definition, coral becomes a bridge between technology, conservation, and the vibrant ecosystems below the waves. Indonesia Biru Foundation highlights coral's role as more than just a colorful organism. It's a home for marine life, a vital food source, a tourism generator, a coastal protector, and a key player in genetic diversity through reproduction. Indonesia Biru Foundation isn't just conducting research; they're inviting you to be part of it. From hands-on coral work to SCUBA diving courses, the Coral Lab is breaking down barriers between science and public engagement, making marine conservation a shared responsibility. <br />
                    {" "} <br />
                    With eyes set on the future, Indonesia Biru Foundation plans to farm 1000 coral fragments and open the Coral Lab to visitors by February 2022. Their research even delves into the impact of sunscreen on coral, addressing modern environmental concerns. Join them not just as tourists but as active contributors through collaboration, discussions, and support on platforms like Patreon. <br />
                    {" "} <br />
                    Key to Sustainability: A Holistic Approach <br />
                    For Indonesia Biru Foundation, sustainability isn't just about the environment; it's about coral ecology understanding, education awareness, and fostering personal connections with locals. Their approach ensures a delicate harmony between ecological preservation and community empowerment. In essence, Indonesia Biru Foundation's journey is a compelling narrative of science, tourism, and community coming together. As you explore the Coral Lab, remember, it's not just about the beauty you see but the responsibility we all share for what lies beneath the surface. <br />
                </div>
            </div>
        </div>
    )
}

export default DetailNews3;
