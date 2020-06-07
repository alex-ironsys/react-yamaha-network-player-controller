import React, { Component } from 'react';

class Titlebar extends Component {
    render() {
        return (
            <div className="title-bar">
                <h2 className="primary-color">Yamaha Network Player Controller</h2>
                <p>For Yamaha PianoCraft CRX-N560</p>
            </div>
        )
    }
}

export default Titlebar;