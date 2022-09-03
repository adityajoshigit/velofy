const Place = (
    {
        placeDetails
        , onPlaceSelection
        , cardStyle
        , showImage
        , showDescription
        , showAll
    }
) => {

    const displayTileImage = (url) => {
        if(showImage) return (
            <img 
                src={url} 
                alt="picture" 
                className="place-image card-img-top" 
            />
        );
    }

    const displayDescription = (desc) => {
        if(showDescription) return (
            <p className="place-summary card-text">
                {placeDetails.description}
            </p>
        );
    }

    return (
        <div className="card place-item place-card"
            onClick={
                () => onPlaceSelection()
            }
            style={cardStyle}
        >
            {
                displayTileImage(placeDetails.imageLink)
            }
            <div className="card-body">
                <h5 className="place-name card-title">
                    {placeDetails.name}
                </h5>
                {
                    displayDescription(placeDetails.description)
                }
                <p className="card-text location">
                    <span></span>
                    <span className="place-city">
                    {placeDetails.city}
                    </span>
                    , 
                    <span className="place-country">
                    {' ' + placeDetails.country}
                    </span>
                </p>
            </div>
        </div>
    );
};
 
export default Place;