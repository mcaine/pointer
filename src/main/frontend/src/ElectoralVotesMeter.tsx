function ElectoralVotesMeter ({ votes }: { votes: number }) {


    function angleForVotes(votes: number) {
            let centreVal = 270;
            return 90 + (votes - centreVal) / (centreVal/90);
        }
//
//     function range(start:number, stop: number, step: number) {
//             var result = [start], it = start;
//             while (it < stop) {
//                 result.push(it += step);
//             }
//             return result;
//         }
//
//
//                                     let l1 = 330;
//                                     let l2 = 10;
//
                                     let angle = angleForVotes(votes);

//                                     let v2 = angle + 90;
//
//                                     let x1 = -l2 * Math.cos((v1/180) * Math.PI);
//                                     let y1 = -l2 * Math.sin((v1/180) * Math.PI);
//
//                                     let x2 = -l1 * Math.cos((angle/180) * Math.PI);
//                                     let y2 = -l1 * Math.sin((angle/180) * Math.PI);
//
//                                     let x3 = -l2 * Math.cos((v2/180) * Math.PI);
//                                     let y3 = -l2 * Math.sin((v2/180) * Math.PI);
//
//                                 let width = 10;
//
//                                 var divisions = [angle - 2 * width, angle - width, angle, angle + width, angle + 2 * width];
//                                 var colours = ["#eef", "#ccf", "#ccf", "#eef"];
//                                 var positions = [
//                                     [divisions[0], divisions[1], colours[0]],
//                                     [divisions[1], divisions[2], colours[1]],
//                                     [divisions[2], divisions[3], colours[2]],
//                                     [divisions[3], divisions[4], colours[3]]
//                                 ];
//
//                                 if (angle > 90 - 2 * width) {
//                                     divisions = [angle - 2 * width, angle - width, angle, angle + width, 90, angle + 2 * width];
//                                     colours = ["#eef", "#ccf", "#ccf", "#eef", "#fee"];
//                                     positions = [
//                                         [divisions[0], divisions[1], colours[0]],
//                                         [divisions[1], divisions[2], colours[1]],
//                                         [divisions[2], divisions[3], colours[2]],
//                                         [divisions[3], divisions[4], colours[3]],
//                                         [divisions[4], divisions[5], colours[4]]
//                                     ];
//                                 }
//
//                                 if (angle > 90 - width) {
//                                     divisions = [angle - 2 * width, angle - width, angle, 90, angle + width, angle + 2 * width];
//                                     colours = ["#eef", "#ccf", "#ccf", "#fcc", "#fee"];
//                                     positions = [
//                                         [divisions[0], divisions[1], colours[0]],
//                                         [divisions[1], divisions[2], colours[1]],
//                                         [divisions[2], divisions[3], colours[2]],
//                                         [divisions[3], divisions[4], colours[3]],
//                                         [divisions[4], divisions[5], colours[4]]
//                                     ];
//                                 }
//
//                                 if (angle > 90 ) {
//                                     divisions = [angle - 2 * width, angle - width, 90, angle, angle + width,  angle + 2 * width];
//                                     colours = ["#eef", "#ccf", "#fcc", "#fcc", "#fee"];
//                                     positions = [
//                                         [divisions[0], divisions[1], colours[0]],
//                                         [divisions[1], divisions[2], colours[1]],
//                                         [divisions[2], divisions[3], colours[2]],
//                                         [divisions[3], divisions[4], colours[3]],
//                                         [divisions[4], divisions[5], colours[4]]
//                                     ];
//                                 }
//
//                                 if (angle > 90 + width) {
//                                     divisions = [angle - 2 * width, 90, angle - width, angle, angle + width,  angle + 2 * width];
//                                     colours = ["#eef", "#fee", "#fcc", "#fcc", "#fee"];
//                                     positions = [
//                                         [divisions[0], divisions[1], colours[0]],
//                                         [divisions[1], divisions[2], colours[1]],
//                                         [divisions[2], divisions[3], colours[2]],
//                                         [divisions[3], divisions[4], colours[3]],
//                                         [divisions[4], divisions[5], colours[4]]
//                                     ];
//                                 }
//
//                                 if (angle > 90 + 2 * width) {
//                                     divisions = [angle - 2 * width, angle - width, angle, angle + width,  angle + 2 * width];
//                                     colours = [ "#fee", "#fcc", "#fcc", "#fee"];
//                                     positions = [
//                                         [divisions[0], divisions[1], colours[0]],
//                                         [divisions[1], divisions[2], colours[1]],
//                                         [divisions[2], divisions[3], colours[2]],
//                                         [divisions[3], divisions[4], colours[3]]
//                                     ];
//                                 }


    return (
            <div>
                {angle}
                <svg width={820} height={380}>

                    <g transform={"translate(410,360)"}>
                        <clipPath id="ev-cut-off">
                            <rect x="-500" y="-330" width="830" height="330"/>
                        </clipPath>

                        <circle x={0} y={0} r={320} stroke={"lightgray"} stroke-width={4} fill={"white"} clipPath="url(#ev-cut-off)" />




                        <circle x={0} y={0} r={100} stroke={"lightgray"} stroke-width={3} fill={"white"} clipPath="url(#ev-cut-off)"/>

                        <line x1="-400" y1="0" x2="400" y2="0" stroke="lightgray" stroke-width={3}/>

                        <g transform={"rotate(90)"}>
                            <line x1={-320} y1={0} x2={-100} y2={0} stroke="gray" stroke-width={3} />
                        </g>



                        <circle x={0} y={0} r={10} stroke={"white"}  stroke-width={1} fill={"gray"}/>

                    </g>
                </svg>


            </div>
        );

}

export default ElectoralVotesMeter;