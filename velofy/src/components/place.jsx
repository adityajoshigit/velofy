import React, { Component } from 'react';

class Place extends Component {
    render() { 

        const {
            name,
            imageLink,
            description,
            city,
            country
        } = this.props.placeDetails;

        return (
            <div className="card place-item place-card">
                <img 
                    src={imageLink} 
                    alt="picture" 
                    className="place-image card-img-top" 
                />
                <div className="card-body">
                    <h5 className="place-name card-title">
                        {name}
                    </h5>
                    <p className="place-summary card-text">
                        {description}
                    </p>
                    <p className="card-text place-city">
                        {city}
                    </p>
                    <p className="card-text place-country">
                        {country}
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Place;