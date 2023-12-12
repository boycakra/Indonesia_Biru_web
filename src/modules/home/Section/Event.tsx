import React from 'react';
import img1 from '../../../assets/images/Coral_connect_event.png';

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
                        Save the date! #connectingmindsandreefs 🌏🐠Follow us @coralconnectlombok for more information soon! Interested? Do not hesitate to contact us via e-mail
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
