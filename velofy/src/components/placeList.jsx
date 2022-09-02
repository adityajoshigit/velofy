import React, { Component } from 'react';
import Place from './place';

class PlaceList extends Component {
    state = {  } 
    render() { 
        return (
            <div 
                className={this.getCssClassName()}
            >
                {this.showPlaces()}
            </div>
        );
    }

    getCssClassName() {
        return this.props.containerClsName || 'place-list';
    }

    showPlaces() {
        if (this.props.places) {
            return this.props.places.map((place, index) => {
                return <Place   key={place.name+index}
                                placeDetails={place}
                                />;
            });
        }
    }
}
 
export default PlaceList;