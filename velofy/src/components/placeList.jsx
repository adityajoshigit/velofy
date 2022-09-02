import React, { Component } from 'react';
import Place from './place';

class PlaceList extends Component {
    render() { 
        return (
            <div 
                className={this.getCssClassName()}
            >
                <div className="row" data-masonry='{"percentPosition": true }'>
                    { this.showPlaces() }
                </div>
            </div>
        );
    }

    getCssClassName() {
        return ' place-list container-fluid py-2' + (this.props.clsName || '');
    }

    showPlaces() {
        const [ ...places ] = this.props.places;
        if (places) {
            return places.map((place, index) => {
                return (
                    <div className='col-sm-4 col-md-4 col-lg-4 py-3' 
                        key={place.name+index}>
                        <Place placeDetails={place} /> 
                    </div>
                );
            });
        }
    }
}
 
export default PlaceList;