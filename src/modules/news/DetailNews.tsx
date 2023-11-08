import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/detailNews.png';
import imgDescetailNews from '../../assets/images/descDetailNews.png';

const DetailNews = () => {
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
                    Project Delft 2022/2023
                </div>
                <div className="date-detail-news">
                    Ki Joko Bodo • December 21, 2022
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    NTB Just like last year a group of 4 students from the TU Delft traveled to lombok to work on a project on behalf of IBF. Read more about this group and their project. Our team consists of four bachelor students from TU Delft. Steef and Coosje are both fourth year Civil Engineering students, Quirine is a TPM student and I (Imke) am an Architecture student. As you can see we are a quite diverse group which benefits our project work.
                </div>
                <img src={imgDescetailNews} alt="detail-news" className="img-detail-news" />
                <div className="desc-detail-news">
                    Just like last year a group of 4 students from the TU Delft traveled to lombok to work on a project on behalf of IBF. Read more about this group and their project. Just like last year a group of 4 students from the TU Delft traveled to lombok to work on a project on behalf of IBF. Read more about this group and their project.
                </div>
                <div className="desc-detail-news">
                    Just like last year a group of 4 students from the TU Delft traveled to lombok to work on a project on behalf of IBF. Read more about this group and their project. Just like last year a group of 4 students from the TU Delft traveled to lombok to work on a project on behalf of IBF. Read more about this group and their project.
                </div>
            </div>
        </div>
    )
}

export default DetailNews;
