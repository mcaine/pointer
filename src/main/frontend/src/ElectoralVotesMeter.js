import React, { Component } from 'react';

class ElectoralVotesMeter extends Component {

    constructor(props) {
        super(props);
        this.state = { "votes" : props.votes };
    }

    componentDidMount() { }

    render() {
        function angleForVotes(votes) {
            let centreVal = 270;
            return 90 + (votes - centreVal) / (centreVal/90);
        }

        function range(start, stop, step) {
            var result = [start], it = start;
            while (it < stop) {
                result.push(it += step);
            }
            return result;
        }

        return (
            <div>
                <svg width={820} height={380}>

                    <g transform={"translate(410,360)"}>
                        <clipPath id="ev-cut-off">
                            <rect x="-500" y="-330" width="830" height="330"/>
                        </clipPath>

                        <circle x={0} y={0} r={320} stroke={"lightgray"} stroke-width={4} fill={"white"} clipPath="url(#ev-cut-off)" />

                        {
                            [ this.props.votes ].map(votes => {

                                let angle = angleForVotes(votes);
                                let width = 10;

                                var divisions = [angle - 2 * width, angle - width, angle, angle + width, angle + 2 * width];
                                var colours = ["#eef", "#ccf", "#ccf", "#eef"];
                                var positions = [
                                    [divisions[0], divisions[1], colours[0]],
                                    [divisions[1], divisions[2], colours[1]],
                                    [divisions[2], divisions[3], colours[2]],
                                    [divisions[3], divisions[4], colours[3]]
                                ];

                                if (angle > 90 - 2 * width) {
                                    divisions = [angle - 2 * width, angle - width, angle, angle + width, 90, angle + 2 * width];
                                    colours = ["#eef", "#ccf", "#ccf", "#eef", "#fee"];
                                    positions = [
                                        [divisions[0], divisions[1], colours[0]],
                                        [divisions[1], divisions[2], colours[1]],
                                        [divisions[2], divisions[3], colours[2]],
                                        [divisions[3], divisions[4], colours[3]],
                                        [divisions[4], divisions[5], colours[4]]
                                    ];
                                }

                                if (angle > 90 - width) {
                                    divisions = [angle - 2 * width, angle - width, angle, 90, angle + width, angle + 2 * width];
                                    colours = ["#eef", "#ccf", "#ccf", "#fcc", "#fee"];
                                    positions = [
                                        [divisions[0], divisions[1], colours[0]],
                                        [divisions[1], divisions[2], colours[1]],
                                        [divisions[2], divisions[3], colours[2]],
                                        [divisions[3], divisions[4], colours[3]],
                                        [divisions[4], divisions[5], colours[4]]
                                    ];
                                }

                                if (angle > 90 ) {
                                    divisions = [angle - 2 * width, angle - width, 90, angle, angle + width,  angle + 2 * width];
                                    colours = ["#eef", "#ccf", "#fcc", "#fcc", "#fee"];
                                    positions = [
                                        [divisions[0], divisions[1], colours[0]],
                                        [divisions[1], divisions[2], colours[1]],
                                        [divisions[2], divisions[3], colours[2]],
                                        [divisions[3], divisions[4], colours[3]],
                                        [divisions[4], divisions[5], colours[4]]
                                    ];
                                }

                                if (angle > 90 + width) {
                                    divisions = [angle - 2 * width, 90, angle - width, angle, angle + width,  angle + 2 * width];
                                    colours = ["#eef", "#fee", "#fcc", "#fcc", "#fee"];
                                    positions = [
                                        [divisions[0], divisions[1], colours[0]],
                                        [divisions[1], divisions[2], colours[1]],
                                        [divisions[2], divisions[3], colours[2]],
                                        [divisions[3], divisions[4], colours[3]],
                                        [divisions[4], divisions[5], colours[4]]
                                    ];
                                }

                                if (angle > 90 + 2 * width) {
                                    divisions = [angle - 2 * width, angle - width, angle, angle + width,  angle + 2 * width];
                                    colours = [ "#fee", "#fcc", "#fcc", "#fee"];
                                    positions = [
                                        [divisions[0], divisions[1], colours[0]],
                                        [divisions[1], divisions[2], colours[1]],
                                        [divisions[2], divisions[3], colours[2]],
                                        [divisions[3], divisions[4], colours[3]]
                                    ];
                                }

                                return positions
                                    .map(a => {
                                        let radius = 319;
                                        let start = a[0];
                                        let end = a[1];
                                        let colour = a[2];

                                        let x1 = -radius * Math.cos(start/180 * Math.PI);
                                        let y1 = -radius * Math.sin(start/180 * Math.PI);
                                        let x2 = -radius * Math.cos(end/180 * Math.PI);
                                        let y2 = -radius * Math.sin(end/180 * Math.PI);

                                        return <path d={"M 0 0 " + x1 + " " + y1 + "A " + radius + " " + radius + ", 0, 0, 1 " + x2 + " " + y2 + "Z"} fill={colour} clipPath="url(#ev-cut-off)"></path>
                                    })
                            })}

                        <circle x={0} y={0} r={100} stroke={"lightgray"} stroke-width={3} fill={"white"} clipPath="url(#ev-cut-off)"/>

                        <line x1="-400" y1="0" x2="400" y2="0" stroke="lightgray" stroke-width={3}/>

                        <g transform={"rotate(90)"}>
                            <line x1={-320} y1={0} x2={-100} y2={0} stroke="gray" stroke-width={3} />
                        </g>

                        {range(20, 520, 20).map(val => {
                            let posnAngle = angleForVotes(val);
                            let centreVal = 270;
                            let printedVal = val < centreVal ? 2 * centreVal - val : val;
                            let textRotate = val >= centreVal ? 180 : 0;
                            return <g transform={"rotate(" + posnAngle +")"}>
                                <line x1="-320" y1="0" x2="-310" y2="0" stroke="lightgray" stroke-width={3}/>
                                <g transform={"translate(-290,0)"}>
                                    <g transform={"rotate(" + textRotate +")"}><text fill="gray" x={-13} y={5}>{printedVal}</text></g>
                                </g>
                            </g>
                        })};

                        {range(10, 510, 20).map(val => {
                            let posnAngle = angleForVotes(val);
                            let centreVal = 270;
                            let printedVal = val < centreVal ? 2 * centreVal - val : val;
                            return <g transform={"rotate(" + posnAngle +")"}>
                                <line x1="-320" y1="0" x2="-315" y2="0" stroke="lightgray" stroke-width={3}/>
                            </g>
                        })};

                        {
                            [ this.props.votes ].map(votes => {
                                let l1 = 330;
                                let l2 = 10;

                                let angle = angleForVotes(votes);
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

export default ElectoralVotesMeter;