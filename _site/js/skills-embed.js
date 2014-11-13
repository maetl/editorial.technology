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

var skills = [
  {"label": "Javascript", "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
  {"label": "Domain Models", "href": "http://en.wikipedia.org/wiki/Domain-driven_design"},
  {"label": "Microservices", "href": "http://martinfowler.com/articles/microservices.html"},
  {"label": "Ruby", "href": "https://www.ruby-lang.org/en/"},
  {"label": "Backbone, Ember", "href": "http://backbonejs.org/"},
  {"label": "HTML/CSS", "href": "http://www.w3.org/standards/webdesign/htmlcss"},
  {"label": "PHP", "href": "http://php.net/"},
  {"label": "Message Queues", "href": "http://en.wikipedia.org/wiki/Message_queue"},
  {"label": "Document DBs", "href": "http://en.wikipedia.org/wiki/Document-oriented_database"},
  {"label": "MySQL, Postgres", "href": "http://www.mysql.com/"},
  {"label": "Redis, Memcache", "href": "http://redis.io/"},
  {"label": "Hypermedia APIs", "href": "http://en.wikipedia.org/wiki/Representational_state_transfer"},
  {"label": "Rails, Sinatra", "href": "http://rubyonrails.org/"},
  {"label": "NodeJS", "href": "http://nodejs.org/"},
  {"label": "Technical Writing", "href": "http://en.wikipedia.org/wiki/Technical_writing"},
  {"label": "Editorial Design", "href": "http://en.wikipedia.org/wiki/Communication_design"},
  {"label": "Content Strategy", "href": "http://en.wikipedia.org/wiki/Content_strategy"},
  {"label": "Web Typography", "href": "http://en.wikipedia.org/wiki/Typography"},
  {"label": "Python", "href": "https://www.python.org/"}
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
    })
    .on("click", function(d, s) {
        d3.select(this)
            .style("fill", "#ff6d58");
        window.open(skills[s].href)
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
