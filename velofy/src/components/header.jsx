import React, { Component } from 'react';

class Header extends Component {
    render() { 
        const { label } = this.props;
        console.log('text = ' , label);
        return (
            <div className="header-cmp-div">
                <h2>
                    {label}
                </h2>
            </div>
        );
    }
}
 
export default Header;