import React from 'react';
import img1 from '../../../assets/images/Event_oc.jpeg';

const Event = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    return (
        <div>
            <div className="container-event" ref={ref}>
            <div className="content-our-event">
                    <img src={img1} alt="event" className="img-event" />
                    
                </div>
                <div className="detail-event">
                    <div className="title-event">
                        IBF Event <br />
                        
                    </div>
                    <div className="title-event-mobile">
                        IBF Event
                    </div>
                    <div className="desc-event">
                    Get yourself down to Gili Asahan 20th & 21st January to take part in Crafting Coral for the Coral Connect event - Organised by 
                    <a href="https://www.instagram.com/indonesiabirufoundation/?g=5/" target="_blank"> @indonesiabirufoundation</a>, 
                    <a href="https://www.instagram.com/pearlbeachresortgiliasahan/" target="_blank">@pearlbeachresortgiliasahan</a>, 
                    <a href="https://www.instagram.com/oceanwaydive/" target="_blank">@oceanwaydive </a>
                    Registration will take place on site during the event; 150k to take part in the ceramic workshop & 200k for both the ceramic and plantation dive.

                    </div>
                    <div className="container-btn-event">
                        <a href='https://www.instagram.com/p/C0OUFHjvW_l/' target="_blank" rel="noopener noreferrer">
                            <button className="btn-event">
                                Event
                            </button>
                        </a>
                    </div>
                </div>
               
            </div>
            <div className="container-btn-event-mobile">
                <a href='https://www.instagram.com/p/C0OUFHjvW_l/' target="_blank" rel="noopener noreferrer">
                    <button className="btn-event">
                        Event
                    </button>
                </a>
            </div>
        </div>
    );
});

export default Event;
