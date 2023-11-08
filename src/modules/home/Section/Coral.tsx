import React from 'react';
import imgCoral1 from '../../../assets/images/coral1.png'
import imgCoral2 from '../../../assets/images/coral2.png'

const Coral = React.forwardRef<HTMLDivElement>((props, ref) => {
    console.log(props);
    const content1 = [
        "Globally, coral reefs house up to 33% of all known fish species despite occupying only 0.1% of the ocean.",
        "They provide nursery grounds for over 25% of all marine species.",
        "Indonesia is the second largest producer of fish globally and 54% of all Indonesians depend on fish for their protein intake.",
        "Global reef tourism is estimated to be worth about US$35.8 billion dollars.",
        "The coral reefs of Indonesia provide annual economic benefits estimated at US$1.6 billion",
        "Indonesia’s reefs protect more than 50,000 km of its coastlines from wave erosion, storm and tsunami risk."
    ];
    const content2 = [
        "Globally, over 50% of coral reefs are lost, with Indonesia heavily impacted. one-third of Indonesia's 5.1 million hectares of coral reef is at risk, according to the Indonesian Institute of Sciences",
        "<span>Overfishing</span>: Industrial activity has reduced large ocean fish by 90% from pre-industrial levels and around 75 percent of Indonesia's fish resources are fully exploited or subject to overfishing.",
        "<span>Habitat destruction</span> Although illegal, the practice of dynamite and cyanide fishing continues to run rampant in Indonesian waters.",
        "<span>Sedimentation</span>: Increased sedimentation through higher river discharge alongside unsustainable fisheries and agricultural practice can settle on top of corals - smothering them while also impeding water clarity.",
        "<span>Pollution</span>: When pollutants enter the water: plastics and human waste, they too can smother coral reefs, but more adverse is their impact in propagating damaging algal blooms. Pollution can also make corals more susceptible to disease while impeding growth and reproduction.",
        "<span>Global warming</span>  A warming ocean: causes thermal stress that contributes to coral bleaching, vulnerability to infectious disease and starvation in most corals; temperature increase is one of the most pressing issues threatening our reefs."
    ];
    return (
        <div className="container-coral" ref={ref}>
            <div className="title-coral">
                Indonesia’s Coral Reefs
            </div>
            <div className="desc-coral">
                Lombok sits at the centre of the Coral Triangle, a 6-million km2 ecosystem spanning 6 countries. The Coral Triangle has more coral reef fish diversity than anywhere else in the world: 37% (2,228) of the world’s coral reef fish species (6,000) and houses 76% (605) of the world’s coral species (798), the highest coral diversity in the world. Protecting and conserving such a biodiverse habitat is profoundly important to both the environmental and socio-economic future of South-East Asia.
            </div>
            <div className="container-content-coral">
                <img src={imgCoral1} alt="coral" className="img-coral" />
                <div className="container-item-coral">
                    <div className="content-title-coral">
                        Why We Need Coral?
                    </div>
                    {content1.map((e, index) => (
                        <div className="content-item-coral" key={`content_coral_${index}`}>
                            {e}
                        </div>
                    ))}
                </div>
            </div>
            <div className="container-content-coral">
                <div>
                    <div className="content-title-coral">
                        The Challenges
                    </div>
                    {content2.map((e, index) => (
                        <div className="content-item-coral" key={`content_coral_2_${index}`} dangerouslySetInnerHTML={{ __html: e }} />
                    ))}
                </div>
                <img src={imgCoral2} alt="coral" className="img-coral" />
            </div>
        </div>
    )
});

export default Coral;
