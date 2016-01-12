var w = 500,
  h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions1 = ['Year 2005 - 21.195','Year 2010 - 27.77','Year 2015 - 20.91'];
var LegendOptions2 = ['Year 2005 - 18.224','Year 2010 - 31.114','Year 2015 - 31.125'];
var LegendOptions3 = ['Year 2005 - 18.59','Year 2010 - 20.85','Year 2015 - 23.61'];
var LegendOptions4 = ['Year 2005 - 16.8','Year 2010 - 19.62','Year 2015 - 31.55'];
var LegendOptions5 = ['Year 2005 - 14.70','Year 2010 - 19.04','Year 2015 - 22.26'];
var LegendOptions6 = ['Year 2005 - 19.63','Year 2010 - 16.90','Year 2015 - 6.205'];

//Data Santa Clara
var data1 = [
      [
      {axis:"PDSI",value:0.30},
      {axis:"Preciptation",value:0.59},
      {axis:"Population",value:0.84},
      {axis:"Reservoir Levels",value:0.70},
      {axis:"Avg Temperature",value:0.58},
      {axis:"Water Usage",value:0.72}
     
     
      ],[
      {axis:"PDSI",value:0.78},
      {axis:"Preciptation",value:0.52},
      {axis:"Population",value:0.89},
      {axis:"Reservoir Levels",value:0.41},
      {axis:"Avg Temperature",value:0.587},
      {axis:"Water Usage",value:0.97}
      
      ],[
      {axis:"PDSI",value:0.86},
      {axis:"Preciptation",value:0.81},
      {axis:"Population",value:0.91},
      {axis:"Reservoir Levels",value:0.216},
      {axis:"Avg Temperature",value:0.583},
      {axis:"Water Usage",value:0.24}
      
      ]
    ];

    //Data Alameda
var data2 = [
      [
      {axis:"PDSI",value:0.303},
      {axis:"Preciptation",value:0.52},
      {axis:"Population",value:0.72},
      {axis:"Reservoir Levels",value:0.78},
      {axis:"Avg Temperature",value:0.56},
      {axis:"Water Usage",value:0.42}
     
     
      ],[
      {axis:"PDSI",value:0.783},
      {axis:"Preciptation",value:0.46},
      {axis:"Population",value:0.75},
      {axis:"Reservoir Levels",value:0.95},
      {axis:"Avg Temperature",value:0.553},
      {axis:"Water Usage",value:0.83}
      
      ],[
      {axis:"PDSI",value:0.861},
      {axis:"Preciptation",value:0.70},
      {axis:"Population",value:0.84},
      {axis:"Reservoir Levels",value:0.86},
      {axis:"Avg Temperature",value:0.552},
      {axis:"Water Usage",value:0.54}
      
      ]
    ];


      //Data San Fransisco
var data3 = [
      [
      {axis:"PDSI",value:0.22},
      {axis:"Preciptation",value:0.30},
      {axis:"Population",value:0.83},
      {axis:"Reservoir Levels",value:0.82},
      {axis:"Avg Temperature",value:0.62},
      {axis:"Water Usage",value:0.40}
     
     
      ],[
      {axis:"PDSI",value:0.99},
      {axis:"Preciptation",value:0.24},
      {axis:"Population",value:0.82},
      {axis:"Reservoir Levels",value:0.90},
      {axis:"Avg Temperature",value:0.623},
      {axis:"Water Usage",value:0.30}
      
      ],[
      {axis:"PDSI",value:0.65},
      {axis:"Preciptation",value:0.39},
      {axis:"Population",value:0.90},
      {axis:"Reservoir Levels",value:0.916},
      {axis:"Avg Temperature",value:0.627},
      {axis:"Water Usage",value:0.59}
      
      ]
    ];

        //Data San Mateo
var data4 = [
      [
      {axis:"PDSI",value:0.305},
      {axis:"Preciptation",value:0.25},
      {axis:"Population",value:0.84},
      {axis:"Reservoir Levels",value:0.71},
      {axis:"Avg Temperature",value:0.57},
      {axis:"Water Usage",value:0.36}
     
     
      ],[
      {axis:"PDSI",value:0.781},
      {axis:"Preciptation",value:0.21},
      {axis:"Population",value:0.89},
      {axis:"Reservoir Levels",value:0.76},
      {axis:"Avg Temperature",value:0.57},
      {axis:"Water Usage",value:0.30}
      
      ],[
      {axis:"PDSI",value:0.863},
      {axis:"Preciptation",value:0.38},
      {axis:"Population",value:0.91},
      {axis:"Reservoir Levels",value:0.82},
      {axis:"Avg Temperature",value:0.57},
      {axis:"Water Usage",value:0.57}
      
      ]
    ];


    //Data Santa Cruz
var data5 = [
      [
      {axis:"PDSI",value:0.304},
      {axis:"Preciptation",value:0.18},
      {axis:"Population",value:0.83},
      {axis:"Reservoir Levels",value:0.71},
      {axis:"Avg Temperature",value:0.57},
      {axis:"Water Usage",value:0.18}
     
     
      ],[
      {axis:"PDSI",value:0.785},
      {axis:"Preciptation",value:0.15},
      {axis:"Population",value:0.87},
      {axis:"Reservoir Levels",value:0.76},
      {axis:"Avg Temperature",value:0.57},
      {axis:"Water Usage",value:0.21}
      
      ],[
      {axis:"PDSI",value:0.862},
      {axis:"Preciptation",value:0.25},
      {axis:"Population",value:0.89},
      {axis:"Reservoir Levels",value:0.82},
      {axis:"Avg Temperature",value:0.57},
      {axis:"Water Usage",value:0.24}
      
      ]
    ];


        //Data California
var data6 = [
      [
      {axis:"PDSI",value:0.586},
      {axis:"Preciptation",value:0.63},
      {axis:"Population",value:0.89},
      {axis:"Reservoir Levels",value:0.686},
      {axis:"Avg Temperature",value:0.58},
      {axis:"Water Usage",value:0.11}
     
     
      ],[
      {axis:"PDSI",value:0.18},
      {axis:"Preciptation",value:0.65},
      {axis:"Population",value:0.92},
      {axis:"Reservoir Levels",value:0.65},
      {axis:"Avg Temperature",value:0.57},
      {axis:"Water Usage",value:0.10}
      
      ],[
      {axis:"PDSI",value:0.13},
      {axis:"Preciptation",value:0.16},
      {axis:"Population",value:0.97},
      {axis:"Reservoir Levels",value:0.219},
      {axis:"Avg Temperature",value:0.56},
      {axis:"Water Usage",value:0.07}
      
      ]
    ];

var spendField = data1;
var LegendOptions = LegendOptions1;
   var SantaClaraButton = d3.select(document.getElementById("SantaClaraButton"));
    var AlamedaButton = d3.select(document.getElementById("AlamedaButton"));
    var SanFranciscoButton = d3.select(document.getElementById("SanFranciscoButton"));
    var SanMateoButton = d3.select(document.getElementById("SanMateoButton"));
    var SantaCruzButton = d3.select(document.getElementById("SantaCruzButton"));
    var CaliforniaButton = d3.select(document.getElementById("CaliforniaButton"));

  SantaClaraButton.on("click", function (d) {
                 
                 LegendOptions = LegendOptions1;
                spendField = data1;
                 RadarChart.draw("#chart", spendField, mycfg);
                 loader(LegendOptions1);
                toggleButtons(0);
                 
            });

            AlamedaButton.on("click", function (d) {
               
                LegendOptions = LegendOptions2;
                spendField = data2;
                RadarChart.draw("#chart", spendField, mycfg);
                loader(LegendOptions2);
                 toggleButtons(1);
                
            });

            SanFranciscoButton.on("click", function (d) {
              
                LegendOptions = LegendOptions3;
                spendField = data3;
                RadarChart.draw("#chart", spendField, mycfg);
                loader(LegendOptions3);
                 toggleButtons(2);
            
            });

            SanMateoButton.on("click", function (d) {
             
                LegendOptions = LegendOptions4;
                spendField = data4;
                RadarChart.draw("#chart", spendField, mycfg);
                loader(LegendOptions4);
                 toggleButtons(3);
           
            });

            SantaCruzButton.on("click", function (d) {
                
                LegendOptions = LegendOptions5;
                spendField = data5;
                RadarChart.draw("#chart", spendField, mycfg);
                loader(LegendOptions5);
                 toggleButtons(4);
                
            });

             CaliforniaButton.on("click", function (d) {
                 
                LegendOptions = LegendOptions6;
                spendField = data6;
                RadarChart.draw("#chart", spendField, mycfg);
                loader(LegendOptions6);
                 toggleButtons(5);
               
            });

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,//just increasing chart area
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", spendField, mycfg);
loader(LegendOptions);
////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////



 

 function loader(LegendOptions){

       var svg = d3.select('#spider')
          .selectAll('svg')
          .append('svg')
          .attr("width", w+300)
          .attr("height", h+200);

          var dataset = [
                          [0, 0], [1, 1], [2, 2], [3, 3], [4, 4],
                          [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]
                        ];
           var xScale = d3.scale.linear()
                               .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                               .range([0, w]);

                                var yScale = d3.scale.linear()
                               .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                               .range([h, 0]);

           var scale = d3.scale.linear()
                              .domain([100, 500])
                              .range([10, 350]);
           
                              svg.append("g")
                             
                              .attr("transform", "translate(100," + 500 + ")")
                              .attr("class", "x axis")
                            
                          .call(d3.svg.axis()
                          .scale(xScale)
                          .orient("bottom"));


                           svg.append("g")
                             
                          .attr("transform", "translate(100," + 7 + ")")
                          .attr("class", "y axis")
                          .call(d3.svg.axis()
                          .scale(yScale)
                          .orient("left"));

          //Create the title for the legend
          var text = svg.append("text")
            .attr("class", "title")
            .attr('transform', 'translate(90,0)') 
            .attr("x", w - 70)
            .attr("y", 14)
            .attr("font-size", "18px")
            .attr("fill", "#404040")
            .text("Radar Area");
              
          //Initiate Legend 
          var legend = svg.append("g")
            .attr("class", "legend")
            .attr("height", 100)
            .attr("width", 400)
            .attr('transform', 'translate(90,20)') 
            ;
            //Create colour squares
            legend.selectAll('rect')
              .data(LegendOptions)
              .enter()
              .append("rect")
              .attr("x", w - 65)
              .attr("y", function(d, i){ return (i+1) * 20;})
              .attr("width", 10)
              .attr("height", 10)
              .style("fill", function(d, i){ return colorscale(i);})
              ;
            //Create text next to squares
            legend.selectAll('text')
              .data(LegendOptions)
              .enter()
              .append("text")
              .attr("x", w - 52)
              .attr("y", function(d, i){ return (i+1) * 20 + 9;})
              .attr("font-size", "14px")
              .attr("fill", "#737373")
              .text(function(d) { return d; }); 


             var text1 = svg.append("rect")
             
            .attr('transform', 'translate(90,0)') 
            .attr("x", 420)
            .attr("y", 24)
             .attr("width", 180)
              .attr("height", 80)
              .attr("opacity","0.20")
            .attr("class","alice")
            .attr("font-size", "18px")
            .attr("fill", "#404040")
            .text("Radar Area");
    }



    function toggleButtons(index) {
        d3.selectAll(".button").attr("class",function (d,i) { return (i==index) ? "button selected" : "button"; });
        
    }