// A little hexagonal pattern generator.
// (c) Mark Rickerby, 2014

// scaling factor based on the formula for calcuating a hex width:
// width = sqrt(3) / 2 * height
var widthFactor = (Math.sqrt(3)/2);

// Calculates a hexagonal path around a central point
function hexagonalPath(x, y, size) {
    var path = [];
    for(var p=0; p<6; p++) {
        var angle = 2 * Math.PI / 6 * (p + 0.5);
        var point = [];
        point[0] = x + size * Math.cos(angle);
        point[1] = y + size * Math.sin(angle);
        path.push(point);
    }
    path.push([path[0][0], path[0][1]]);
    return path;
}

//Data Journalism
//E-commerce
//Content Strategy
//Microservices
//Hypermedia APIs

var skills = [
  {"label": "Javascript"},
  {"label": "DDD, TDD, BDD"},
  {"label": "Microservices"},
  {"label": "Ruby"},
  {"label": "Backbone, Ember"},
  {"label": "HTML/CSS"},
  {"label": "PHP"},
  {"label": "Message queues"},
  {"label": "Document DBs"},
  {"label": "MySQL, Postgres"},
  {"label": "Redis, Memcache"},
  {"label": "Hypermedia APIs"},
  {"label": "Rails, Sinatra"},
  {"label": "NodeJS"},
  {"label": "Technical Writing"},
  {"label": "Editorial Design"},
  {"label": "Content Strategy"},
  {"label": "Web Typography"},
  {"label": "Python"},
  {"label": "Web Typography"},
  {"label": "E-book design"},
  {"label": "A/B Testing"},
  {"label": "Managing Tech Debt"},
  {"label": "Technical Writing"},
  {"label": "Redis & Memcache"},
  {"label": "Couchbase & MongoDB"},
  {"label": "NodeJs"}
];

var svg = d3.select("#skills-diagram").append("svg");
var diagram = svg.selectAll("path.area");

pointData = [
    hexagonalPath(370, 300, 60),
    hexagonalPath(310, 405, 60),
    hexagonalPath(430, 405, 60),
    hexagonalPath(490, 300, 60),
    hexagonalPath(430, 195, 60),
    hexagonalPath(310, 195, 60),
    hexagonalPath(250, 300, 60),
    hexagonalPath(190, 405, 60),
    hexagonalPath(250, 510, 60),
    hexagonalPath(370, 510, 60),
    hexagonalPath(490, 510, 60),
    hexagonalPath(550, 405, 60),
    hexagonalPath(610, 300, 60),
    hexagonalPath(550, 195, 60),
    hexagonalPath(490, 90, 60),
    hexagonalPath(370, 90, 60),
    hexagonalPath(250, 90, 60),
    hexagonalPath(190, 195, 60),
    hexagonalPath(130, 300, 60),
];

var hexagon = diagram.data(pointData).enter();

hexagon.append("path")
    .attr("d", d3.svg.line())
    .on("mouseover", function() {
        d3.select(this).transition()
            .duration(200)
            .ease("linear")
            .style("fill", "#ff6d58");
    })
    .on("mouseout", function() {
        d3.select(this).transition()
            .duration(2000)
            .ease("linear")
            .style("fill", "#ffa295");
    });

hexagon.append("text")
    .attr("x", function(d) {
        return d[1][0];
    })
    .attr("y", function(d) {
        return d[1][1] - 55;
    })
    .attr("font-size", "14px")
    .attr("text-anchor", "middle")
    .text(function(d, s) {
        return skills[s].label;
    });
