var dashboardController= function ($scope,$http,$interval)
    {
  // Initialize the model variables
  $scope.firstName = "John";
  $scope.lastName = "Doe";

Dash_data_1="";
Dash_data_2="";
Dash_data_3="";
Dash_data_4="";

$http.get('/aqua-Service/data?data=Dashboard_data').success(function(data){


                                
                                Dash_data_1 = data.data2;
                                Dash_data_2 = data.data1;
                                Dash_data_3 = data.data3;
                                Dash_data_4 = data.data4;
                                // alert(mainModule.products.side1);
                                // console.log(Dash_data_1);
                                // console.log(Dash_data_3);

                            });


         $scope.Exhaution_Chart = function (){


             $('#ExhautionChart').highcharts({
        chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: '',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f}%)',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%'

                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Percent',
            data: Dash_data_1
        }]
    });

         
                        

}

            $scope.Exhaution_ChartDialog = function (){


                             $('#ExhautionChart2').highcharts({
                        chart: {
                            type: 'funnel',
                            marginRight: 100
                        },
                        title: {
                            text: '',
                            x: -50
                        },
                        plotOptions: {
                            series: {
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b> ({point.y:,.0f}%)',
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                                    softConnector: true
                                },
                                neckWidth: '30%',
                                neckHeight: '25%'

                                //-- Other available options
                                // height: pixels or percent
                                // width: pixels or percent
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        series: [{
                            name: 'Percent',
                            data: Dash_data_1
                        }]
                    });

         
}


  $scope.temp_chart = function (){

                         $('#tempchart').highcharts({

        chart: {
            type: 'columnrange',
            inverted: true
        },

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            title: {
                text: 'Temperature ( °F )'
            }
        },

        tooltip: {
            valueSuffix: '°F'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.y + '°F';
                    }
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Temperatures',
             data: Dash_data_2
        }]

    });



                }



                $scope.temp_chartDialog = function (){

                         $('#tempchart2').highcharts({

        chart: {
            type: 'columnrange',
            inverted: true
        },

        title: {
            text: 'Temperature variation by month'
        },

        subtitle: {
            text: ''
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            title: {
                text: 'Temperature ( °F )'
            }
        },

        tooltip: {
            valueSuffix: '°F'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.y + '°F';
                    }
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Temperatures',
            data: Dash_data_2
        }]

    });



                }



                 $scope.RainfallChart = function (){ 


                                     $('#Rainfall-CA').highcharts({
                            chart: {
                                type: 'column'
                            },
                            title: {
                                text: ''
                            },
                            
                            xAxis: {
                                categories: [
                                    '2004',
                                    '2005',
                                    '2006',
                                    '2007',
                                    '2008',
                                    '2009',
                                    '2010',
                                    '2011',
                                    '2012',
                                    '2013',
                                    '2014',
                                    '2015'
                                ],
                                crosshair: true
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Rainfall (mm)'
                                }
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    pointPadding: 0.2,
                                    borderWidth: 0
                                }
                            },
                             series: Dash_data_3
                        });

            };


                $scope.RainfallChartDialog = function (){

                                    $('#Rainfall-CA1').highcharts({
                            chart: {
                                type: 'column'
                            },
                            title: {
                                text: 'California Yearly Rainfall'
                            },
                            
                            xAxis: {
                                categories: [
                                    '2004',
                                    '2005',
                                    '2006',
                                    '2007',
                                    '2008',
                                    '2009',
                                    '2010',
                                    '2011',
                                    '2012',
                                    '2013',
                                    '2014',
                                    '2015'
                                ],
                                crosshair: true
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: 'Rainfall (mm)'
                                }
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    pointPadding: 0.2,
                                    borderWidth: 0
                                }
                            },
                            series: Dash_data_3
                        });

            };



                                        // { total1: "Kern River",total3: "Sacramento River", older1: 568000, older3: 4552000, perc1: 1953, perc3: 1945, tag1: 'Kern', tag3: 'Shasta' },
                                        // { total1: "Trinity River", total2: 91.7, older1: 2447650, older2: 4.6, perc1: 1962, perc2: 5.4, tag1: 'Trinity', tag2: 'Ethiopia' },
                                        // { total1: 16.7, total2: 80.7, total3: 21.1, older1: 3.8, older2: 7.0, older3: 2.7, perc1: 22.8, perc2: 8.4, perc3: 12.9, tag1: 'Netherlands', tag2: 'Egypt', tag3: 'Sri Lanka' },
                                        // { total1: "Stanislaus", total2: "Putah Creek", total3: 96.7, older1: 2400000, older2: 1602000, older3: 5.9, perc1: 1979, perc2: 1957, perc3: 6.1, tag1: 'Calaveras', tag2: 'Napa', tag3: 'Philippines' },
                                        // { total1: 38.2, total2: "Truckee River", total3: "Kings river", older1: 7.8, older2: 732000, older3: "1954", perc1: 20.4, perc2: 1913, perc3: 1000000, tag1: 'Poland', tag2: 'Placer', tag3: 'Fresno' },
                                        // { total1: "American River", total3: 154.7, total4: "San Luis Creek", older1: 1956, older3: 10.3, older4: 1967, perc1: 975000, perc3: 6.8, perc4: 2041000, tag1: 'Sacramento', tag3: 'Bangladesh', tag4: 'Mercede' },
                                        // { total1: "Colorado River", total4: 120.8, older1: 64800, older4: 11.0, perc1: 1938, perc4: 9.5, tag1: 'San Bernardino', tag4: 'Mexico' }



            $scope.ReservoirChart = function (){

                            $("#Reservoir-chart").dxChart({
                            dataSource: [
                                        { total1: "Kern River",total3: "Sacramento River", older1: 568000, older3: 4552000, perc1: 1953, perc3: 1945, tag1: 'Kern', tag3: 'Shasta' },
                                        { total1: "Trinity River", older1: 2447650, perc1: 1962, tag1: 'Trinity' },
                                        { total1: "Stanislaus", total2: "Putah Creek", older1: 2400000, older2: 1602000, perc1: 1979, perc2: 1957, tag1: 'Calaveras', tag2: 'Napa' },
                                        { total2: "Truckee River", total3: "Kings river", older2: 732000, older3: 1000000, perc2: 1913, perc3: 1954, tag2: 'Placer', tag3: 'Fresno' },
                                        { total1: "American River", total4: "San Luis Creek", older1: 975000, older4: 2041000, perc1: 1956, perc4: 1967, tag1: 'Sacramento', tag4: 'Mercede' },
                                        { total1: "Colorado River", older1: 64800, perc1: 1938, tag1: 'San Bernardino' }
                                        ],
                            commonSeriesSettings: {
                                type: 'bubble'
                            },
                            tooltip: {
                                enabled: true,
                                font: { size: 16 },
                                customizeText: function () { return this.point.tag + '<br/>Stream: ' + this.argumentText + ' <br/>Year built ' + this.valueText + ' <br/>Capacity ' + this.size; }
                            },
                            
                            legend: {
                                
                                    visible: false
                                
                            },
                            palette: ["#00ced1", "#008000", "#ffd700", "#ff7f50"],
                            seriesClick: function(series) {
                                series.isVisible() ? series.hide() : series.show(); 
                            },
                            series: [{
                                name: 'Central',
                                argumentField: 'total1',
                                valueField: 'older1',
                                sizeField: 'perc1',
                                tagField:'tag1'
                            }, {
                                name: 'North California',
                                argumentField: 'total2',
                                valueField: 'older2',
                                sizeField: 'perc2',
                                tagField: 'tag2'
                            }, {
                                name: 'Jefferson',
                                argumentField: 'total3',
                                valueField: 'older3',
                                sizeField: 'perc3',
                                tagField: 'tag3'
                            }, {
                                name: 'Silicon Valley',
                                argumentField: 'total4',
                                valueField: 'older4',
                                sizeField: 'perc4',
                                tagField: 'tag4'
                            }]
                        });

}


        $scope.DroughtChart = function (){



                         // Initiate the chart
                            $('#Drought-chart').highcharts('Map', {

                               title : {
                                    text : 'California'
                                },

                              colors: ['rgb(153,0,0)', 'rgb(255,51,51)', 'rgb(255,102,102)',
                                            'rgb(255,178,102)', 'rgb(255,255,153)'],


                                              colorAxis: {
                                            dataClassColor: 'category',
                                            dataClasses: [{
                                                to: 5
                                            }, {
                                                from: 5,
                                                to: 10
                                            }, {
                                                from: 10,
                                                to: 30
                                            }, {
                                                from: 30,
                                                to: 35
                                            }, {
                                                from: 35,
                                                to: 45
                                            }, {
                                                from:45
                                            }]
                                        },

                                

                                mapNavigation: {
                                    enabled: true,
                                    buttonOptions: {
                                        verticalAlign: 'bottom'
                                    }
                                },

                               

                                series : [{
                                    data : Dash_data_4,
                                    mapData: Highcharts.maps['countries/us/us-ca-all'],
                                    joinBy: 'hc-key',
                                    name: 'Random data',
                                    states: {
                                        hover: {
                                            color: '#BADA55'
                                        }
                                    },
                                    dataLabels: {
                                        enabled: true,
                                        format: '{point.name}'
                                    }
                                }]
                            });
                }
                    




 };












$(function(){  


var pie = new d3pie("industryChart1", {
                                              
                                              "size": {
                                                "canvasWidth": 590,
                                                "pieOuterRadius": "90%"
                                              },
                                           "data": {
                                                "sortOrder": "value-desc",
                                                "content": [
                                                    {
                                                        "label": "Commerical and Institutional Large Landscapes",
                                                        "value": 264131,
                                                        "color": "#2484c1"
                                                    },
                                                    {
                                                        "label": "Commerical and Institutional Interior and Small Landscapes",
                                                        "value": 218812,
                                                        "color": "#0c6197"
                                                    },
                                                    {
                                                        "label": "Industrial",
                                                        "value": 157618,
                                                        "color": "#4daa4b"
                                                    },
                                                    {
                                                        "label": "Energy Production",
                                                        "value": 114384,
                                                        "color": "#90c469"
                                                    },
                                                    {
                                                        "label": "Residential, Interior",
                                                        "value": 95002,
                                                        "color": "#daca61"
                                                    },
                                                    {
                                                        "label": "Residential,Exterior",
                                                        "value": 78327,
                                                        "color": "#e4a14b"
                                                    }

                                                    
                                                    
                                                    
                                                ]
                                            },
                                              "labels": {
                                                "outer": {
                                                    "format": "label-percentage1",
                                                  "pieDistance": 32
                                                },
                                                "inner": {
                                                  "hideWhenLessThanPercentage": 3
                                                },
                                                "mainLabel": {
                                                  "fontSize": 11
                                                },
                                                "percentage": {
                                                  "color": "#ffffff",
                                                  "decimalPlaces": 0
                                                },
                                                "value": {
                                                  "color": "#adadad",
                                                  "fontSize": 11
                                                },
                                                "lines": {
                                                  "enabled": true
                                                },
                                                "truncation": {
                                                  "enabled": true
                                                }
                                              },
                                              "effects": {
                                                "pullOutSegmentOnClick": {
                                                  "effect": "linear",
                                                  "speed": 2000,
                                                  "size": 8
                                                }
                                              },
                                              "misc": {
                                                "gradient": {
                                                  "enabled": true,
                                                  "percentage": 100
                                                }
                                              }
                                            });


              
    
                              

    var pie = new d3pie("industryChart", {
    "header": {
        "title": {
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasHeight": 258,
        "canvasWidth": 411,
        "pieOuterRadius": "93%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [

        {
                                                        "label": "Commerical and Institutional Large Landscapes",
                                                        "value": 264131,
                                                        "color": "#2484c1"
                                                    },
                                                    {
                                                        "label": "Commerical and Institutional Interior and Small Landscapes",
                                                        "value": 218812,
                                                        "color": "#0c6197"
                                                    },
                                                    {
                                                        "label": "Industrial",
                                                        "value": 157618,
                                                        "color": "#4daa4b"
                                                    },
                                                    {
                                                        "label": "Energy Production",
                                                        "value": 114384,
                                                        "color": "#90c469"
                                                    },
                                                    {
                                                        "label": "Residential, Interior",
                                                        "value": 95002,
                                                        "color": "#daca61"
                                                    },
                                                    {
                                                        "label": "Residential,Exterior",
                                                        "value": 78327,
                                                        "color": "#e4a14b"
                                                    }
            
        ]
    },
    "labels": {
        "outer": {
            "format": "label-percentage1",
            "pieDistance": 20
        },
        "inner": {
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": true
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    }
});



/*******************************************
Domestic Usage
*******************************************/


                    var pie = new d3pie("domestic", {
                "header": {
                    "title": {
                        "fontSize": 34,
                        "font": "courier"
                    },
                    "subtitle": {
                        "color": "#999999",
                        "fontSize": 10,
                        "font": "courier"
                    },
                    "location": "pie-center",
                    "titleSubtitlePadding": 10
                },
                "footer": {
                    "color": "#999999",
                    "fontSize": 10,
                    "font": "open sans",
                    "location": "bottom-left"
                },
                "size": {
                    "canvasHeight": 258,
                    "canvasWidth": 411,
                    "pieInnerRadius": "38%",
                    "pieOuterRadius": "93%"
                },
                "data": {
                    "sortOrder": "label-desc",
                    "smallSegmentGrouping": {
                        "enabled": true
                    },
                    "content": [
                        {
                            "label": "Irrigated Pasture",
                            "value": 11,
                            "color": "#e91e0f"
                        },
                        {
                            "label": "Rice",
                            "value": 9,
                            "color": "#671cf3"
                        },
                        {
                            "label": "Corn",
                            "value": 8,
                            "color": "#005149"
                        },
                        {
                            "label": "Cotton",
                            "value": 4,
                            "color": "#5c4002"
                        },
                        {
                            "label": "Other Field Crops",
                            "value": 10,
                            "color": "#672301"
                        },
                        {
                            "label": "Fruits and Nuts",
                            "value": 31,
                            "color": "#710369"
                        },
                        {
                            "label": "Truck Farming and Agriculture",
                            "value": 9,
                            "color": "#10037a"
                        },
                        {
                            "label": "Alfalfa",
                            "value": 18,
                            "color": "#048452"
                        }
                       
                    ]
                },
                "labels": {
                    "outer": {
                        
                        "pieDistance": 20
                    },
                    "inner": {
                        "hideWhenLessThanPercentage": 3
                    },
                    "mainLabel": {
                        "fontSize": 11
                    },
                    "percentage": {
                        "color": "#999999",
                        "fontSize": 11,
                        "decimalPlaces": 0
                    },
                    "value": {
                        "color": "#cccc43",
                        "fontSize": 11
                    },
                    "lines": {
                        "enabled": true,
                        "color": "#777777"
                    },
                    "truncation": {
                        "enabled": true
                    }
                },
                "effects": {
                    "pullOutSegmentOnClick": {
                        "effect": "linear",
                        "speed": 400,
                        "size": 8
                    }
                },
                "misc": {
                    "colors": {
                        "segmentStroke": "#000000"
                    }
                },
                "callbacks": {}
            });
                   


        var pie = new d3pie("domestic1", {
                "header": {
                    "title": {
                        "fontSize": 34,
                        "font": "courier"
                    },
                    "subtitle": {
                        "color": "#999999",
                        "fontSize": 10,
                        "font": "courier"
                    },
                    "location": "pie-center",
                    "titleSubtitlePadding": 10
                },
                "footer": {
                    "color": "#999999",
                    "fontSize": 10,
                    "font": "open sans",
                    "location": "bottom-left"
                },
                "size": {
                    "canvasHeight": 400,
                    "canvasWidth": 590,
                    "pieInnerRadius": "38%",
                    "pieOuterRadius": "93%"
                },
                "data": {
                    "sortOrder": "label-desc",
                    "smallSegmentGrouping": {
                        "enabled": true
                    },
                    "content": [
                        {
                            "label": "Irrigated Pasture",
                            "value": 11,
                            "color": "#e91e0f"
                        },
                        {
                            "label": "Rice",
                            "value": 9,
                            "color": "#671cf3"
                        },
                        {
                            "label": "Corn",
                            "value": 8,
                            "color": "#005149"
                        },
                        {
                            "label": "Cotton",
                            "value": 4,
                            "color": "#5c4002"
                        },
                        {
                            "label": "Other Field Crops",
                            "value": 10,
                            "color": "#672301"
                        },
                        {
                            "label": "Fruits and Nuts",
                            "value": 31,
                            "color": "#710369"
                        },
                        {
                            "label": "Truck Farming and Agriculture",
                            "value": 9,
                            "color": "#10037a"
                        },
                        {
                            "label": "Alfalfa",
                            "value": 18,
                            "color": "#048452"
                        }
                    ]
                },
                "labels": {
                    "outer": {
                       
                        "pieDistance": 20
                    },
                    "inner": {
                        "hideWhenLessThanPercentage": 3
                    },
                    "mainLabel": {
                        "fontSize": 11
                    },
                    "percentage": {
                        "color": "#999999",
                        "fontSize": 11,
                        "decimalPlaces": 0
                    },
                    "value": {
                        "color": "#cccc43",
                        "fontSize": 11
                    },
                    "lines": {
                        "enabled": true,
                        "color": "#777777"
                    },
                    "truncation": {
                        "enabled": true
                    }
                },
                "effects": {
                    "pullOutSegmentOnClick": {
                        "effect": "linear",
                        "speed": 400,
                        "size": 8
                    }
                },
                "misc": {
                    "colors": {
                        "segmentStroke": "#000000"
                    }
                },
                "callbacks": {}
            });


});





















