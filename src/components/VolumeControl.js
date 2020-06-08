import React, { Component } from 'react';

class VolumeControl extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(!this.props.powerOn);
    }

    render() {
        const className = this.props.powerOn ? 'active' : 'inactive';

        return (
            <div>
                <button onClick={this.props.onClickVolumeDown}>Volume Down</button>
                <button onClick={this.props.onClickVolumeUp}>Volume Up</button>
            </div>
        )
    }
}

export default VolumeControl;