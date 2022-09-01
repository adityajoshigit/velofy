import React, { Component } from 'react';

class Header extends Component {
    render() { 
        const { label } = this.props;
        console.log('text = ' , label);
        return (
            <div className="header-cmp-div">
                <span>
                    {label}
                </span>
            </div>
        );
    }
}
 
export default Header;