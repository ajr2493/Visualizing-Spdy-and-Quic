/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var spdyQuic = [{x: 36, y: 0.25},
    {x: 36, y: 0.5},
    {x: 40, y: 0.75},
    {x: 57, y: 1}];


var spdy = [{x: 16, y: 0.1},
    {x: 21, y: 0.2},
    {x: 25, y: 0.3},
    {x: 35, y: 0.4},
    {x: 45, y: 0.5},
    {x: 80, y: 0.6},
    {x: 100, y: 0.7},
    {x: 135, y: 0.8},
    {x: 5433, y: 0.9},
    {x: 12981, y: 1}];

var http = [{x: 21, y: 0.009174312},
    {x: 24, y: 0.018348624},
    {x: 25, y: 0.027522936},
    {x: 38, y: 0.036697248},
    {x: 40, y: 0.04587156},
    {x: 44, y: 0.055045872},
    {x: 49, y: 0.064220183},
    {x: 67, y: 0.073394495},
    {x: 68, y: 0.082568807},
    {x: 84, y: 0.091743119},
    {x: 85, y: 0.100917431},
    {x: 94, y: 0.110091743},
    {x: 95, y: 0.119266055},
    {x: 104, y: 0.128440367},
    {x: 114, y: 0.137614679},
    {x: 128, y: 0.146788991},
    {x: 157, y: 0.155963303},
    {x: 157, y: 0.165137615},
    {x: 173, y: 0.174311927},
    {x: 198, y: 0.183486239},
    {x: 213, y: 0.19266055},
    {x: 218, y: 0.201834862},
    {x: 226, y: 0.211009174},
    {x: 232, y: 0.220183486},
    {x: 242, y: 0.229357798},
    {x: 261, y: 0.23853211},
    {x: 271, y: 0.247706422},
    {x: 278, y: 0.256880734},
    {x: 298, y: 0.266055046},
    {x: 343, y: 0.275229358},
    {x: 356, y: 0.28440367},
    {x: 373, y: 0.293577982},
    {x: 377, y: 0.302752294},
    {x: 430, y: 0.311926606},
    {x: 465, y: 0.321100917},
    {x: 472, y: 0.330275229},
    {x: 473, y: 0.339449541},
    {x: 494, y: 0.348623853},
    {x: 567, y: 0.357798165},
    {x: 615, y: 0.366972477},
    {x: 688, y: 0.376146789},
    {x: 722, y: 0.385321101},
    {x: 779, y: 0.394495413},
    {x: 814, y: 0.403669725},
    {x: 1325, y: 0.412844037},
    {x: 1540, y: 0.422018349},
    {x: 1540, y: 0.431192661},
    {x: 1848, y: 0.440366972},
    {x: 1982, y: 0.449541284},
    {x: 2023, y: 0.458715596},
    {x: 2100, y: 0.467889908},
    {x: 2415, y: 0.47706422},
    {x: 2596, y: 0.486238532},
    {x: 2598, y: 0.495412844},
    {x: 2688, y: 0.504587156},
    {x: 2693, y: 0.513761468},
    {x: 2817, y: 0.52293578},
    {x: 2843, y: 0.532110092},
    {x: 2989, y: 0.541284404},
    {x: 3482, y: 0.550458716},
    {x: 3498, y: 0.559633028},
    {x: 3637, y: 0.568807339},
    {x: 3799, y: 0.577981651},
    {x: 3934, y: 0.587155963},
    {x: 3939, y: 0.596330275},
    {x: 4098, y: 0.605504587},
    {x: 4201, y: 0.614678899},
    {x: 4295, y: 0.623853211},
    {x: 4381, y: 0.633027523},
    {x: 4427, y: 0.642201835},
    {x: 4444, y: 0.651376147},
    {x: 4477, y: 0.660550459},
    {x: 4625, y: 0.669724771},
    {x: 5015, y: 0.678899083},
    {x: 5208, y: 0.688073394},
    {x: 5974, y: 0.697247706},
    {x: 6254, y: 0.706422018},
    {x: 6267, y: 0.71559633},
    {x: 6274, y: 0.724770642},
    {x: 6585, y: 0.733944954},
    {x: 6668, y: 0.743119266},
    {x: 6723, y: 0.752293578},
    {x: 6992, y: 0.76146789},
    {x: 7005, y: 0.770642202},
    {x: 7069, y: 0.779816514},
    {x: 7256, y: 0.788990826},
    {x: 7492, y: 0.798165138},
    {x: 8106, y: 0.80733945},
    {x: 8386, y: 0.816513761},
    {x: 9169, y: 0.825688073},
    {x: 9366, y: 0.834862385},
    {x: 9582, y: 0.844036697},
    {x: 10282, y: 0.853211009},
    {x: 10515, y: 0.862385321},
    {x: 10603, y: 0.871559633},
    {x: 10698, y: 0.880733945},
    {x: 10767, y: 0.889908257},
    {x: 10796, y: 0.899082569},
    {x: 11284, y: 0.908256881},
    {x: 11615, y: 0.917431193},
    {x: 11671, y: 0.926605505},
    {x: 11717, y: 0.935779817},
    {x: 11926, y: 0.944954128},
    {x: 12161, y: 0.95412844},
    {x: 12525, y: 0.963302752},
    {x: 12578, y: 0.972477064},
    {x: 12689, y: 0.981651376},
    {x: 12817, y: 0.990825688},
    {x: 13176, y: 1}];

var data = [
    {
        label: 'Spdy+Quic',
        strokeColor: '#00FF7F',
        data: spdyQuic
    },
    {
        label: 'Spdy',
        strokeColor: '#FFCE56',
        data: spdy
    },
    {
        label: 'Http',
        strokeColor: '#FF6384',
        data: http
    }
];



//var ctx = $("#cdf");
var ctx = document.getElementById("cdf").getContext("2d");
var myLineChart = new Chart(ctx).Scatter(data, {
    bezierCurve: true,
    responsive: true,
    showTooltips: true,
    pointDot: false,
    hoverMode: 'single',
    scaleShowHorizontalLines: true,
    scaleShowLabels: true,
    scaleArgLabel: "<%=value%>ms",
    scaleBeginAtZero: true,
    legendTemplate: "<ul style=\"list-style-type:square;font-size:16px; \" class=\"<%=name.toLowerCase()%>-legend\"><%for(var i=0;i<datasets.length;i++){%><li style=\"display: inline-block;padding-right:8px;padding-left:8px;color:<%=datasets[i].strokeColor%>\"><span class=\"<%=name.toLowerCase()%>-legend-marker\" ></span><%=datasets[i].label%></li><%}%></ul>",
    scales: {
        xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Probability'
                }
            }],
        yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Page Load Time (ms)'
                }
            }]
    }
});

$('#cdfLegend').html(myLineChart.generateLegend());
