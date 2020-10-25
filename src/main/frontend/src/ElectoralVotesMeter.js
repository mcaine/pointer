import React, { Component } from 'react';

class ElectoralVotesMeter extends Component {

    constructor() {
        super();
        this.state = { "votes" : 271 };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                Electoral Votes Meter
                <svg width={800} height={350}>
                    <g transform={"translate(400,350)"}>
                        <circle x={0} y={0} r={300}/>
                    </g>
                </svg>
            </div>
        );
    }
}

export default ElectoralVotesMeter;