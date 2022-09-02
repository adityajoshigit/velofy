import React, { Component } from 'react';

class Header extends Component {
    render() { 
        const { label } = this.props;
        console.log('text = ' , label);
        return (
            <header className={' container-fluid app-header ' + this.props.clsName}>
                <div className='header-cmp-div'>
                    <span className='fs-2'>
                        {label}
                    </span>
                </div>
            </header>
        );
    }
}
 
export default Header;