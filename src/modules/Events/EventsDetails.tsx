import { useEffect } from 'react';
import { useMyContext } from '../../context/SectionProvider';
import { Link } from 'react-router-dom';
import imgDetailNews from '../../assets/images/Event_oc.jpeg';
import imgDescetailNews from '../../assets/images/acara_event14.jpeg';

const EventsDetails = () => {
    const { updateValue } = useMyContext();
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <div className="container-detail-news">
            <div className="container-breadcrumb">
                <Link to={"/"} onClick={() => updateValue("")}>
                    Home
                </Link>{' '}
                / <span>Events Detail</span>
            </div>
            <div className="container-main-img-detail-news">
                <img
                    src={imgDetailNews}
                    alt="detail-news"
                    className="img-main-detail-news"
                />
            </div>
            <div className="container-title-detail-news">
                <div className="title-detail-news">Crafting Coral Events</div>
                <div className="date-detail-news">
                    Boy Cakraningrat • January 04, 2024
                </div>
            </div>
            <div className="container-desc-detail-news">
                <div className="desc-detail-news">
                    <p>
                        Get ready for an extraordinary experience at Gili Asahan
                        on January 20th and 21st, where Indonesia Biru
                        Foundation (IBF), in collaboration with{' '}
                        <Link to={'/Events-Details'}>
                            @pearlbeachresortgiliasahan
                        </Link>{' '}
                        and{' '}
                        <Link to={'/Events-Details'}>@oceanwaydive</Link>, will
                        host a Crafting Coral workshop as part of the Coral
                        Connect event.
                    </p>
                    <br />
                    <p>
                        Join us for an immersive event that goes beyond
                        traditional workshops. Participants will have the
                        opportunity to create coral-inspired ceramics, guided by
                        skilled artisans. The workshop fee is 150k, covering all
                        materials and expert guidance.
                    </p>
                    <br />
                    <p>
                        For those seeking a more comprehensive experience, a
                        combined package of the ceramic workshop and plantation
                        dive is available for 200k. The plantation dive allows
                        participants to actively contribute to marine
                        conservation by planting coral in the crystal-clear
                        waters surrounding Gili Asahan.
                    </p>
                    <br />
                    <p>
                        The event will feature an eco-conscious market,
                        showcasing sustainable products and initiatives.
                        Participants can explore handmade crafts and
                        eco-friendly merchandise while learning about
                        innovative solutions for a greener lifestyle.
                    </p>
                    <br />
                    <p>
                        Other highlights include a photo contest in the water,
                        a delicious lunch, educational workshop sessions, a
                        night movie focused on marine life, and expert
                        presentations about coral restoration techniques and
                        marine ecosystems.
                    </p>
                    <br />
                    <p>
                        Registration will take place on-site during the event.
                        Don't miss this opportunity to be part of a meaningful
                        journey towards a sustainable and thriving marine
                        ecosystem. Follow{' '}
                        <Link to={'/Events-Details'}>
                            @indonesiabirufoundation
                        </Link>{' '}
                        on Instagram for updates and behind-the-scenes moments.
                        Let's come together, learn, create, and make a positive
                        impact on our precious coral reefs.
                    </p>
                    <br />
                    <p>
                        See you at Gili Asahan!
                    </p>
                </div>

                <img
                    src={imgDescetailNews}
                    alt="detail-news"
                    className="img-detail-news"
                />

                <div className="desc-detail-news">
                    <p>
                        This event is not just about crafting coral but
                        fostering a deeper connection with our oceans. Your
                        participation contributes to the ongoing efforts of IBF
                        in marine conservation and restoration. Let's come
                        together, learn, create, and make a positive impact on
                        our precious coral reefs.
                    </p>
                    <br />
                    <p>
                        Follow{' '}
                        <Link to={'/Events-Details'}>
                            @indonesiabirufoundation
                        </Link>{' '}
                        on Instagram for updates and behind-the-scenes moments.
                        Don't miss this opportunity to be part of a meaningful
                        journey towards a sustainable and thriving marine
                        ecosystem!
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default EventsDetails;
