const Place = (
    {
        placeDetails
        , onPlaceSelection
        , cardStyle
    }
) => {
    return (
        <div className="card place-item place-card"
            onClick={
                () => onPlaceSelection()
            }
            style={cardStyle}
        >
            <img 
                src={placeDetails.imageLink} 
                alt="picture" 
                className="place-image card-img-top" 
            />
            <div className="card-body">
                <h5 className="place-name card-title">
                    {placeDetails.name}
                </h5>
                <p className="place-summary card-text">
                    {placeDetails.description}
                </p>
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