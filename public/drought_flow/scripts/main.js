

function main() {

    var m = [20, 120, 20, 120],
        w = 1280 - m[1] - m[3],
        h = 900 - m[0] - m[2],
        i = 0,
        root = {};

    var spendField = "sum_SantaClara";
    var sumFields = ["SantaClara", "Alameda", "SanFrancisco", "SanMateo","SantaCruz","California"];
    var sourceFields = ["Category", "Level1", "Level2", "Level3", "Level4"];

    var colors = ["#bd0026", "#fecc5c", "#fd8d3c", "#f03b20", "#B02D5D",
        "#9B2C67", "#982B9A", "#692DA7", "#5725AA", "#4823AF",
        "#d7b5d8", "#dd1c77", "#5A0C7A", "#5A0C7A"];

    var formatNumber = d3.format(",.2f");
    var formatCurrency = function (d) { 
        return "" + formatNumber(d) + " "
    };

    var tree = d3.layout.tree();
    var circles={};
    var paths={};
    var labels={};

    tree.children(function (d) { return d.values; }).size([h, w]);

    var toolTip = d3.select(document.getElementById("toolTip"));
    var header = d3.select(document.getElementById("head"));
    var header1 = d3.select(document.getElementById("header1"));
    var header2 = d3.select(document.getElementById("header2"));

    var SantaSpend = d3.select(document.getElementById("SantaSpend"));

    var AlamedaSpend = d3.select(document.getElementById("AlamedaSpend"));

    var SanSpend = d3.select(document.getElementById("SanSpend"));

    var SanMSpend = d3.select(document.getElementById("SanMSpend"));

    var SantaCzSpend = d3.select(document.getElementById("SantaCzSpend"));

    var CaliforniaSpend = d3.select(document.getElementById("CaliforniaSpend"));

    

    var SantaClaraButton = d3.select(document.getElementById("SantaClaraButton"));
    var AlamedaButton = d3.select(document.getElementById("AlamedaButton"));
    var SanFranciscoButton = d3.select(document.getElementById("SanFranciscoButton"));
    var SanMateoButton = d3.select(document.getElementById("SanMateoButton"));
    var SantaCruzButton = d3.select(document.getElementById("SantaCruzButton"));
    var CaliforniaButton = d3.select(document.getElementById("CaliforniaButton"));

    var federalTip = d3.select(document.getElementById("federalTip"));
    var stateTip = d3.select(document.getElementById("stateTip"));
    var localTip = d3.select(document.getElementById("localTip"));


    var diagonal = d3.svg.diagonal()
        .projection(function (d) {
            return [d.y, d.x];
        });

    var svg = d3.select("#body").append("svg:svg")
        .attr("width", w + m[1] + m[3])
        .attr("height", h + m[0] + m[2])
        .append("svg:g")
        .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

    var levelCeil=[{},{},{},{}];

    var nodeRadius;

    d3.csv("/data/drought_map.csv", function (csv) {

        var data = [];

        //Remove all zero values nodes
        csv.forEach(function (d) {
            var t = 0;
            for (var i = 0; i < sumFields.length; i++) {
                t += Number(d[sumFields[i]]);
            }
            if (t > 0) {
                data.push(d);
            }
        })

        var nest = d3.nest()
            .key(function (d) {
                return d.Level1;
            })
            .key(function (d) {
                return d.Level2;
            })
            .key(function (d) {
                return d.Level3;
            })
            .entries(data);

        root = {};
        root.values = nest;
        root.x0 = h / 2;
        root.y0 = 0;

        var nodes = tree.nodes(root).reverse();

        tree.children(function (d) {
            return d.children;
        });

        initialize();

        // Initialize the display to show a few nodes.
        root.values.forEach(toggleAll);

        toggleNodes(root.values[2]);
        toggleNodes(root.values[2].values[0]);
        toggleNodes(root.values[3]);

        update(root);

        toggleButtons(0);

        function initialize() {

            SantaClaraButton.on("click", function (d) {
                toggleButtons(0);
                spendField = "sum_SantaClara";
                update(root);
            });

            AlamedaButton.on("click", function (d) {
                toggleButtons(1);
                spendField = "sum_Alameda";
                update(root);
            });

            SanFranciscoButton.on("click", function (d) {
                toggleButtons(2);
                spendField = "sum_SanFrancisco";
                update(root);
            });

            SanMateoButton.on("click", function (d) {
                toggleButtons(3);
                spendField = "sum_SanMateo";
                update(root);
            });

            SantaCruzButton.on("click", function (d) {
                toggleButtons(4);
                spendField = "sum_SantaCruz";
                update(root);
            });

             CaliforniaButton.on("click", function (d) {
                toggleButtons(5);
                spendField = "sum_California";
                update(root);
            });




            for (var i = 0; i < sumFields.length; i++) {
                for (var y = 0; y < levelCeil.length; y++) {
                    levelCeil[y]["sum_" + sumFields[i]] = 0;
                }
            }

            sumNodes(root.children);
        }

        function toggleAll(d) {
            if (d.values && d.values.actuals) {
                d.values.actuals.forEach(toggleAll);
                toggleNodes(d);
            }
            else if (d.values) {
                d.values.forEach(toggleAll);
                toggleNodes(d);
            }
        }


    });

    function setSourceFields(child, parent) {
        if (parent) {
            for (var i = 0; i < sourceFields.length; i++) {
                var sourceField = sourceFields[i];
                if (child[sourceField] != undefined) {
                    child["source_" + sourceField] = child[sourceField];
                }
                parent["source_" + sourceField] = (child["source_" + sourceField]) ? child["source_" + sourceField] : child[sourceField];
            }
        }

    }

    function sumNodes(nodes) {
        for (var y = 0; y < nodes.length; y++) {
            var node = nodes[y];
            if (node.children) {
                sumNodes(node.children);
                for (var z = 0; z < node.children.length; z++) {
                    var child = node.children[z];
                    for (var i = 0; i < sumFields.length; i++) {
                        if (isNaN(node["sum_" + sumFields[i]])) node["sum_" + sumFields[i]] = 0;
                        node["sum_" + sumFields[i]] += Number(child["sum_" + sumFields[i]]);
                        if ((node.parent)) {
                            levelCeil[node.depth-1]["sum_" + sumFields[i]] = Math.max(levelCeil[node.depth-1]["sum_" + sumFields[i]], Number(node["sum_" + sumFields[i]]));
                            setSourceFields(node, node.parent);
                        }

                    }
                }
            }
            else {
                for (var i = 0; i < sumFields.length; i++) {
                    node["sum_" + sumFields[i]] = Number(node[sumFields[i]]);
                    if (isNaN(node["sum_" + sumFields[i]])) {
                        node["sum_" + sumFields[i]] = 0;
                    }
                }
            }
            setSourceFields(node, node.parent);
        }

    }

    function update(source) {

        var duration = d3.event && d3.event.altKey ? 5000 : 500;

        var nodes = tree.nodes(root).reverse();

        var depthCounter = 0;

        nodeRadius = d3.scale.sqrt()
            .domain([0, levelCeil[0][spendField]])
            .range([1, 40]);

        // Normalize for fixed-depth.
        nodes.forEach(function (d) {
            d.y = d.depth * 180;
            d.numChildren = (d.children) ? d.children.length : 0;
            if (d.depth == 1) {
                d.linkColor = colors[(depthCounter % (colors.length - 1))];
                depthCounter++;
            }
            if (d.numChildren == 0 && d._children) d.numChildren = d._children.length;

        });

        //Set link colors based on parent color
        nodes.forEach(function (d) {
            var obj = d;
            while ((obj.source && obj.source.depth > 1) || obj.depth > 1) {
                obj = (obj.source) ? obj.source.parent : obj.parent;
            }
            d.linkColor = (obj.source) ? obj.source.linkColor : obj.linkColor;

        });

        // Update the nodes…
        var node = svg.selectAll("g.node")
            .data(nodes, function (d) {
                return d.id || (d.id = ++i);
            });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("svg:g")
            .attr("class", "node")
            .attr("id",function (d) { return "node_" + d.key })
            .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on("click", function (d) {
                if (d.numChildren > 50) {
                    alert(d.key + " has too many departments (" + d.numChildren + ") to view at once.");
                }
                else {
                    toggleNodes(d);
                    update(d);
                }
            });

        nodeEnter.append("svg:circle")
            .attr("r", 1e-6)
            .on("mouseover", function (d) {
                node_onMouseOver(d);
            })
            .on("mouseout", function (d) { node_onMouseOut(d)})
            .style("fill", function (d) {
                circles[d.key] = this;
                return d.source ? d.source.linkColor : d.linkColor;
            })
            .style("fill-opacity", ".8")
            .style("stroke", function (d) {
                return d.source ? d.source.linkColor : d.linkColor;
            });

        nodeEnter.append("svg:text")
            .attr("x", function (d) {
                labels[d.key] = this;
                return d.children || d._children ? -15 : 15;
            })
            .attr("dy", ".35em")
            .attr("text-anchor",
            function (d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function (d) {
                var ret = (d.depth == 4) ? d.Level4 : d.key;
                ret = (String(ret).length > 25) ? String(ret).substr(0, 22) + "..." : ret;
                return ret;
            })
            .style("fill-opacity", "0")
            .style("font-size","16")
            .style("font-weight","bold")
            .on("mouseover", function (d) {node_onMouseOver(d);})
            .on("mouseout", function (d) { node_onMouseOut(d)});

        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        nodeUpdate.select("circle")
            .attr("r", function (d) { return isNaN(nodeRadius(d[spendField])) ? 2: nodeRadius(d[spendField]); })
            .style("fill", function (d) { return d.source ? d.source.linkColor : d.linkColor })
            .style("fill-opacity", function (d) { return ((d.depth + 1) / 5);});

        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        nodeExit.select("circle").attr("r", 1e-6);

        nodeExit.select("text").style("fill-opacity", 1e-6);

        var link = svg.selectAll("path.link")
            .data(tree.links(nodes), function (d) {
                return d.target.id;
            });

        var rootCounter = 0;

        // Enter any new links at the parent's previous position.
        link.enter().insert("svg:path", "g")
            .attr("class", "link")
            .attr("id",function (d) { return "link_" + d.target.key })
            .attr("d", function (d) {
                paths[d.target.key] = this;
                if (Number(d.target[spendField]) > 0) {
                    var o = {x: source.x0, y: source.y0};
                    return diagonal({source: o, target: o});
                }
                else {
                    null;
                }
            })
            .style("stroke", function (d, i) {
                if (d.source.depth == 0) {
                    rootCounter++;
                    return (d.source.children[rootCounter - 1].linkColor);
                }
                else {
                    return (d.source) ? d.source.linkColor : d.linkColor;
                }
            })
            .style("stroke-width", function (d, i) { return isNaN(nodeRadius(d.target[spendField])) ? 4: nodeRadius(d.target[spendField])*2; })
            .style("stroke-opacity", function (d) { return d.target[spendField] <= 0 ? .1 : ((d.source.depth + 1) / 4.5); })
            .style("stroke-linecap", "round")
            .on("mouseover", function (d) {node_onMouseOver(d.source);})
            .on("mouseout", function (d) { node_onMouseOut(d.source)});

        link.transition()
            .duration(duration)
            .attr("d", diagonal)
            .style("stroke-width", function (d, i) { return isNaN(nodeRadius(d.target[spendField])) ? 4: nodeRadius(d.target[spendField])*2; })
            .style("stroke-opacity", function (d) {
                var ret = ((d.source.depth + 1) / 4.5)
                if (d.target[spendField] <= 0) ret = .1;
                return ret;
            })

        link.exit().transition()
            .duration(duration)
            .attr("d", diagonal)
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });


        function node_onMouseOver(d) {

            if (typeof d.target != "undefined") {
                d = d.target;
            }

            toolTip.transition()
                .duration(200)
                .style("opacity", ".9");
            header.text(d["source_Level1"]);
            header1.text((d.depth > 1) ? d["source_Level2"] : "");
            header2.html((d.depth > 2) ? d["source_Level3"] : "");
            if (d.depth > 3) header2.html(header2.html() + " - " + d["source_Level4"]);




             

            SantaSpend.text(formatCurrency(d["sum_SantaClara"]));

            AlamedaSpend.text(formatCurrency(d["sum_Alameda"]));

            SanSpend.text(formatCurrency(d["sum_SanFrancisco"]));

            SanMSpend.text(formatCurrency(d["sum_SanMateo"]));

            SantaCzSpend.text(formatCurrency(d["sum_SantaCruz"]));

            CaliforniaSpend.text(formatCurrency(d["sum_California"]));

           

            toolTip.style("left", (d3.event.pageX + 15) + "px")
                .style("top", (d3.event.pageY - 75) + "px");
 

            if(d.depth == 1){
                toolTip.style("height", "140px");
            }else if(d.depth == 2){
                toolTip.style("height", "150px");
             }else if(d.depth == 3){
                toolTip.style("height", "180px");
            }

             
                

            d3.select(labels[d.key]).transition().style("font-weight","bold").style("font-size","16");;
            d3.select(circles[d.key]).transition().style("fill-opacity",0.6);
            highlightPath(d);

            function highlightPath(d) {
                if (d) {
                    d3.select(paths[d.key]).style("stroke-opacity",function (d) {return d.target[spendField] <= 0 ? .1 + .3 : ((d.source.depth + 1) / 4.5) + .3;});
                    highlightPath(d.parent);
                }
            }



        }

        function node_onMouseOut(d) {
            toolTip.transition()
                .duration(500)
                .style("opacity", "0");

            d3.select(labels[d.key]).transition().style("font-weight","bold").style("font-size","14");
            d3.select(circles[d.key]).transition().style("fill-opacity",0.3);
            noHighlightPath(d);

            function noHighlightPath(d) {
                if (d) {
                    d3.select(paths[d.key]).style("stroke-opacity",function (d) {return d.target[spendField] <= 0 ? .1 : ((d.source.depth + 1) / 4.5);});
                    noHighlightPath(d.parent);
                }
            }
        }


    }



    function toggleNodes(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
    }

    function toggleButtons(index) {
        d3.selectAll(".button").attr("class",function (d,i) { return (i==index) ? "button selected" : "button"; });
        d3.selectAll(".tip").attr("class",function (d,i) { return (i==index) ? "tip selected" : "tip";});
    }

//For drawing the label for the flow diagram.
 
    
var data1 = ["TEXT SAMPLE"], r = 15;
            var svg1 = d3.select("#rectarea");
        var bar = svg1.selectAll("g")
            .data(data1)
          .enter().append("g")
            .attr("transform", function(d, i) { return "translate(100,100)"; });
 

       // bar.append("text")
         //   .attr("dy", "-.35em")
           // .attr("opacity", "1")
            //.text(function(d) { return "ivan"; });

            bar.append("text")
              .attr("dy", "6em")
              .attr("dx", "6em")
               .style("font-size","24")
               .attr("z-index","999")
               .style("stroke","red")
              .style("text-anchor", "middle")
              .text(function(d) { return "Human Impact"; });


              bar.append("text")
              .attr("dy", "18em")
              .attr("dx", "3em")
               .style("font-size","24")

               .style("stroke-width","19")
              .style("text-anchor", "middle")
              .text(function(d) { return "Drought Factors"; });

              bar.append("text")
              .attr("dy", "30em")
              .attr("dx", "6em")
               .style("font-size","24")
                .style("stroke","green")
              .style("text-anchor", "middle")
              .text(function(d) { return "Natural Impact"; });




}