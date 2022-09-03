const PlaceDetails = (
    {
        place
    }
) => {

    const onShowMoreImages = (place) => {
        console.log('fetching more images ...');
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="img-container p-1">
                        <img src={place.imageLink} alt="picture" className="place-img" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="summary-container p-1">
                        <div className="place-name">
                            {place.name}
                        </div>
                        <div className="description-container">
                            {place.description}
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="misc-info-container">
                        <div className="location-container">
                            {place.city}, {' ' + place.country}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-outline-info btn-block"
                        onClick={
                            () => onShowMoreImages(place)
                        }
                    >
                        Show more images ...
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;