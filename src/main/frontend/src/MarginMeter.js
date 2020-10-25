import React, { Component } from 'react';

class MarginMeter extends Component {

    constructor() {
        super();
        this.state = { "margin" : -1};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <svg width={820} height={380}>
                    <g transform={"translate(410,360)"}>
                        <clipPath id="chance-cut-off">
                            <rect x="-500" y="-330" width="830" height="330"/>
                        </clipPath>

                        <circle x={0} y={0} r={320} stroke={"lightgray"} stroke-width={4} fill={"white"} clip-path="url(#chance-cut-off)" />

                        {
                            [ this.state.margin ].map(margin => {
                                var angle = 90 + 90 * margin / 12;

                                return [
                                            [angle-20, angle-10, "#ccf"],
                                            [angle-10, angle, "#ddf"],
                                            [angle, angle+10, "#eef"],
                                            [angle+10, angle+20, "#fff"]
                                        ].map(a => {
                                            let radius = 319;
                                            let start = a[0];
                                            let end = a[1];
                                            let colour = a[2];

                                            let x1 = -radius * Math.cos(start/180 * Math.PI);
                                            let y1 = -radius * Math.sin(start/180 * Math.PI);
                                            let x2 = -radius * Math.cos(end/180 * Math.PI);
                                            let y2 = -radius * Math.sin(end/180 * Math.PI);

                                            return <path d={"M 0 0 " + x1 + " " + y1 + "A " + radius + " " + radius + ", 0, 0, 1 " + x2 + " " + y2 + "Z"} fill={colour}></path>
                                    })
                        })}

                        <circle x={0} y={0} r={100} stroke={"lightgray"} stroke-width={3} fill={"white"} clip-path="url(#chance-cut-off)"/>

                        <line x1="-400" y1="0" x2="400" y2="0" stroke="lightgray" stroke-width={3}/>

                        <g transform={"rotate(90)"}>
                            <line x1={-320} y1={0} x2={-100} y2={0} stroke="gray" stroke-width={3} />
                        </g>

                        {
                            [ this.state.margin ].map(margin => {

                                let l1 = 330;
                                let l2 = 10;

                                let angle = 90 + 90 * margin / 12;
                                let v1 = angle - 90;
                                let v2 = angle + 90;

                                let x1 = -l2 * Math.cos((v1/180) * Math.PI);
                                let y1 = -l2 * Math.sin((v1/180) * Math.PI);

                                let x2 = -l1 * Math.cos((angle/180) * Math.PI);
                                let y2 = -l1 * Math.sin((angle/180) * Math.PI);

                                let x3 = -l2 * Math.cos((v2/180) * Math.PI);
                                let y3 = -l2 * Math.sin((v2/180) * Math.PI);

                                return <path d={"M " + x1 + " " + y1 + " L " + x2 + " " + y2 + " L " + x3 + " " + y3 + " Z"} stroke-width={1} stroke={"gray"} fill={"gray"} />
                            })
                        }

                        <circle x={0} y={0} r={10} stroke={"white"}  stroke-width={1} fill={"gray"}/>

                    </g>
                </svg>
            </div>
        );
    }
}

export default MarginMeter;