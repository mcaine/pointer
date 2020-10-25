import React, { Component } from 'react';

class MarginMeter extends Component {

    constructor() {
        super();
        this.state = { "margin" : 0 };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                Margin Meter
                <svg width={800} height={350}>
                    <g transform={"translate(400,350)"}>
                        <circle x={0} y={0} r={300}/>
                    </g>
                </svg>
            </div>
        );
    }
}

export default MarginMeter;