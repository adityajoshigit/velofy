import React, { Component } from 'react';

class Place extends Component {
    render() { 
        const {
            name,
            imageLink,
            description,
            city,
            country
        } = this.props;
        
        return (
            <div className="place-item">
                <span className="place-name">
                    {name}
                </span>
                <img 
                    src={imageLink} 
                    alt="picture" 
                    className="place-image" 
                />
                <p className="place-summary">
                    {description}
                </p>
                <div className="place-location">
                    <span className="place-city">
                        {city}
                    </span>
                    <span className="place-country">
                        {country}
                    </span>
                </div>
            </div>
        );
    }
}
 
export default Place;