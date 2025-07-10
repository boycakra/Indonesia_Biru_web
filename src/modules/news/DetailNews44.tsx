import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/coralai/image1.png'; // training graph
import img2 from '../../assets/coralai/image2.jpg'; // bar graph - square frame
import img3 from '../../assets/coralai/image3.png'; // visual detection metal
import img4 from '../../assets/coralai/image4.png'; // bar graph - metal frame
import img5 from '../../assets/coralai/image5.png'; // visual detection square
import img7 from '../../assets/coralai/image6.png'; // visual detection square

const ArticleCoralAICategorization = () => {
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
                <span>AI-Based Coral Categorization in Lombok Reefs</span>
            </div>

            <div className="container-main-img-detail-news">
                <img src={img5} alt="YOLOv8 segmented coral with square frame" className="img-main-detail-news" />
            </div>

            <div className="container-title-detail-news">
                <div className="title-detail-news">
                    Automatic AI-Based Categorization of Biotic Components in Coral Reefs
                </div>
                <div className="date-detail-news">
                    By Elsa Dianita Aulia • 01 July 2025
                </div>
            </div>

            <div className="container-desc-detail-news">
                <div className="desc-detail-news space-y-6">
                    <p>
                    Indonesia’s coral reefs are among the most diverse and extensive in the world, supporting vital marine ecosystems and millions of coastal livelihoods. However, these reef systems are under increasing pressure due to climate change, destructive fishing, pollution, and coastal development. Rising sea surface temperatures have triggered mass bleaching events, while human activities continue to degrade reef habitats and reduce coral cover.
                    </p>
                    <br />
                    <p>In response, coral restoration efforts are accelerating across Indonesia, with active projects led by government bodies, NGOs, research institutions, and local communities. In Lombok, restoration activities are underway in areas such as Gili Matra, Kecinan, Pandanan, Senggigi, Gili Gede, and Gili Asahan. These initiatives often involve deploying artificial structures, like reef stars and metal frames, to promote coral regrowth, while engaging local stakeholders to build stewardship and environmental awareness.

                    </p>
                    <br/>
                    <p>
                    To help address these gaps, our team developed a deep-learning model to assist in the monitoring and analysis of coral reef habitats—both natural and restored—using underwater imagery.
                    </p>

                    <h2 className="text-xl font-semibold">🔍 Study Area and Dataset</h2>
                    <br />
                    <p>
                        The team collected over 2,000 annotated images from shallow reefs across Kecinan, Medana, Impos, Pandanan, and Gili Asahan. These included both natural quadrat-based frames and artificial structures like Mars hexagons and metal reef tables.
                    </p>
                    <br />
                    <p>Table 1. List of categories set in Roboflow and applied for training and evaluation of the YOLOv8-based coral segmentation model</p>
                    <img src={img7} alt="Training loss and mAP chart" className="img-detail-news" />
                    <br />
                    <p>
                        For robust evaluation, an independent test set of 40 images was captured at different times and angles. The dataset was expanded to nearly 5,000 images using data augmentation techniques before model training.
                    </p>
                    <br />
                   
                    
                    <br />
                    <h2 className="text-xl font-semibold">🧠 Model Training and Architecture</h2>
                    <br />
                    <p>
                        Eighteen categories were defined, including 16 biotic coral types and 2 structural types (Frame, Metal Frame). All images were annotated with Roboflow and reviewed by marine experts. The model was trained for 50 epochs using YOLOv8 in Google Colab.
                    </p>
                    <br />
                    <img src={img1} alt="Training loss and mAP chart" className="img-detail-news" />
                    
                    <p>
                        Figure 1 shows a consistent decrease in loss values, with mAP50 reaching ~0.27 for both bounding boxes and segmentation masks. The stricter mAP50–95 peaked at 0.20 and 0.16, respectively, reflecting moderate segmentation performance.
                    </p>
                    <br />
                    <p>The model’s performance was evaluated in two main contexts, natural reef images with squared frames and restoration images with metal structures. Each prediction was compared against expert-labeled ground truth annotations. Coverage values were calculated for each biotic category, and the Pearson correlation coefficient was used to assess accuracy.</p>
                    
                    <br/>
                    <p>The training and validation performance of the YOLOv8-based coral segmentation model across 50 epochs is shown in Figure 1. The loss functions, including box, segmentation (seg), classification (cls), and distribution focal loss (dfl), demonstrate a consistent downward trend during training, indicating effective learning. Validation losses also decreased during the initial stages, with the lowest values reached between epochs 30 and 40, before showing slight increases, suggesting the onset of overfitting.
In terms of detection and segmentation accuracy, the model’s precision and recall metrics steadily improved over time, with some fluctuations, particularly in precision, reflecting variability in object detection performance. The mean Average Precision (mAP) at IoU 0.5 (mAP50) for both bounding boxes (B) and masks (M) reached approximately 0.27, while the stricter mAP50–95 metric peaked at around 0.20 (B) and 0.16 (M), indicating moderate segmentation accuracy across a range of thresholds.</p>
                    <br />
                    <h2 className="text-xl font-semibold">🏝️ Results on Natural Reefs</h2>
                    <br />
                    <ul className="list-disc list-inside">
                        <li>High frame detection accuracy with correlation r = 0.94 (p &lt; 0.001) between AI and manual annotations.</li>
                        <li>Major coral types like AC Branching, C Heliopora, and C Massive were well-identified.</li>
                        <li>AI even spotted colonies that human reviewers missed—highlighting potential for hybrid monitoring.</li>
                    </ul>

                    <Slider {...settings} className="slider-container my-6">
                        <div>
                        <img src={img2} alt="Bar chart comparing manual and YOLOv8 predictions in square frames" className="img-detail-news" />
                        </div>
                        <div>
                            <img src={img5} alt="YOLOv8 segmented coral with square frame" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />
                    <h2 className="text-xl font-semibold">🔩 Results on Metal Frame Restoration Sites</h2>
                    <br />
                    <ul className="list-disc list-inside">
                        <li>Detection was less reliable in artificial reef structures.</li>
                        <li>Only 17.5% of metal frames were fully detected, while 25% had poor detection.</li>
                        <li>Weaker correlation (r = 0.10, p = 0.71) between AI and manual outputs due to occlusion, structure overlap, and lack of training examples.</li>
                    </ul>
                    <br />
                    <Slider {...settings} className="slider-container my-6">
                        <div>
                        <img src={img4} alt="Bar chart comparing manual and YOLOv8 predictions in metal frames" className="img-detail-news" />
                        </div>
                        <div>
                        <img src={img3} alt="Visual comparison: ground truth vs YOLOv8 in metal frame" className="img-detail-news" />
                        </div>
                    </Slider>
                    <br />
                    
                    

                    <h2 className="text-xl font-semibold">🧪 Key Takeaways & Recommendations</h2>
                    <br />
                    <p>This study demonstrates that AI-based image analysis can significantly enhance coral reef monitoring—particularly for natural quadrat-based assessments. While performance in artificial structures remains limited, these challenges can be addressed through improved training data and structural standardization.
Integrating such AI tools into coral restoration projects can reduce labour-intensive manual annotation, provide consistent and scalable monitoring, and support data-driven conservation strategies. As restoration efforts in Lombok and across Indonesia continue to grow, combining local engagement with technological innovation will be key to ensuring long-term reef recovery and resilience.
                    </p>
                    <br />
                    <ul className="list-disc list-inside mb-4">
                        <li>📈 AI models like YOLOv8 can significantly reduce the time and effort of coral annotation.</li>
                        <li>🌊 For reliable results in artificial sites, more diverse and annotated metal frame images are needed.</li>
                        <li>💡 Ensemble models or post-processing can help reduce over-detection and improve consistency.</li>
                        <li>🛠️ Integration with interactive correction tools could enhance performance through user feedback.</li>
                    </ul>
                    <br />
                    <p>
                        As reef restoration scales across Indonesia, this fusion of marine biology and AI offers scalable monitoring solutions—helping conservation teams focus more on protecting reefs and less on labor-intensive annotation.
                    </p>
                    <br />
                    <h2>Join the Movement! 🌊</h2>
                    <br />
                    <p className="mt-4">
                        Follow <a href="https://www.instagram.com/indonesiabirufoundation/" target="_blank" rel="noopener noreferrer">Indonesia Biru Foundation</a> for more updates, upcoming clean-up events, and ways you can support marine conservation efforts. 🌊💙
                    </p>
                    
                    <p className="mt-4 font-semibold">
                        For the Dataset, models, and scripts are publicly accessible:
                        <br />
                        <a href="https://drive.google.com/drive/folders/15J-T0nRCPeJUFuV4J9MNNFjYtCvagUND?usp=sharing" target="_blank" rel="noopener noreferrer">Dataset</a> • 
                        <a href="https://colab.research.google.com/drive/1tQW9c1I1aHUt5mijs3G7hjcOKKhjP4_F?usp=drive_link" target="_blank" rel="noopener noreferrer">Colab Script</a>
                    </p>
                    <br />
                    <p className="mt-4">
                        <strong>Contributor:</strong> Elsa Dianita Aulia
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleCoralAICategorization;
