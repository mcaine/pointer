import React, { Component } from 'react';
import './Meter.css';

class ChanceMeter extends Component {

    constructor() {
        super();
        this.state = { "chance" : 40};
    }

    componentDidMount() { }

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
                            [
                                [0, 10, "#ccf"],
                                [10, 30, "#ddf"],
                                [30, 60, "#eef"],
                                [60, 120, "#fff"],
                                [120, 150, "#fee"],
                                [150, 170, "#fdd"],
                                [170, 180, "#fcc"]
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
                        }

                        <circle x={0} y={0} r={100} stroke={"lightgray"} stroke-width={3} fill={"white"} clip-path="url(#chance-cut-off)"/>

                        <line x1="-400" y1="0" x2="400" y2="0" stroke="lightgray" stroke-width={3}/>

                        <g transform={"rotate(10)"}>
                            <line x1={-320} y1={0} x2={-100} y2={0} stroke="lightgray" stroke-width={3} />
                        </g>

                        <g transform={"rotate(30)"}>
                            <line x1={-320} y1={0} x2={-100} y2={0} stroke="lightgray" stroke-width={3} />
                        </g>

                        <g transform={"rotate(60)"}>
                            <line x1={-320} y1={0} x2={-100} y2={0} stroke="lightgray" stroke-width={3} />
                        </g>

                        <g transform={"rotate(120)"}>
                            <line x1={-320} y1={0} x2={-100} y2={0} stroke="lightgray" stroke-width={3} />
                        </g>

                        <g transform={"rotate(150)"}>
                            <line x1={-320} y1={0} x2={-100} y2={0} stroke="lightgray" stroke-width={3} />
                        </g>

                        <g transform={"rotate(170)"}>
                            <line x1={-320} y1={0} x2={-100} y2={0} stroke="lightgray" stroke-width={3} />
                        </g>

                        {
                            [ this.state.chance ].map(chance => {

                                let l1 = 330;
                                let l2 = 10;

                                let angle = 1.8 * chance;
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

                        <text x="-270" y="-17" className="pointer">VERY LIKELY</text>
                        <text x="-250" y="-78" className="pointer">LIKELY</text>
                        <text x="-200" y="-150" className="pointer">LEANING</text>
                        <text x="-23" y="-200" className="pointer">TOSSUP</text>
                        <text x="140" y="-150" className="pointer">LEANING</text>
                        <text x="200" y="-78" className="pointer">LIKELY</text>
                        <text x="210" y="-17" className="pointer">VERY LIKELY</text>

                    </g>
                </svg>
            </div>
        );
    }
}

export default ChanceMeter;