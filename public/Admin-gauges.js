/*******************************************
Gauges
*******************************************/
$('#gauges-1').dxCircularGauge({
	scale: {
		startValue: 0,
		endValue: 25,
		majorTick: {
			tickInterval: 10
		}
	},
	rangeContainer: {
		palette: 'pastel',
		ranges: [
			{ startValue: 0, endValue: 5 },
			{ startValue: 5, endValue: 15 },
            { startValue: 15, endValue: 20 },
			{ startValue: 20, endValue: 25 },
		]
	},
	value: 5.8
});



$('#gauges-2').dxCircularGauge({
	scale: {
		startValue: 0,
		endValue: 100000,
		majorTick: {
			color: '#1A1100',
			tickInterval: 10000
		},
		minorTick: {
			color: '#1A1100',
			visible: true,
			tickInterval: 25
		}
	},
	rangeContainer: {
		backgroundColor: 'none'
	},
	value: 21910
});




$(function () {

    var totaltime,endTime,totaltime1,result;
     var startTime = (new Date()).getTime();
           $.ajax({
                      url:'response_tester',
                      success:function(){
                         // t2 = Date.now();
                         // console.log(t2-t);//the time needed to do the request;
                         endTime = (new Date()).getTime();
                         // alert(endTime);
                         // alert('Took ' + (endTime - startTime) + 'ms');
                         totaltime=endTime - startTime;
                         totaltime1=totaltime;
                        result=JSON.stringify(totaltime1);
                        // alert(result);


    }
});     
                  
                  

    $('#redis').highcharts({

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor:'rgba(255, 255, 255, 0)'
        },

        title: {
            text: ''
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 3000,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 1000,
                color: '#55BF3B' // green
            }, {
                from: 1000,
                to: 2000,
                color: '#DDDF0D' // yellow
            }, {
                from: 2000,
                to: 3000,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Speed',
            data: [1245],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]

    },
        // Add some life
        function (chart) {
            if (!chart.renderer.forExport) {
                setInterval(function () {
                    var point = chart.series[0].points[0],
                        newVal,
                        inc = Math.round((Math.random() - 0.5) * 20);

                    newVal = point.y + inc;
                    if (newVal < 0 || newVal > 200) {
                        newVal = point.y - inc;
                    }

                    point.update(newVal);

                }, 3000);
            }
        });
});




