var vg_1 = "https://raw.githubusercontent.com/ianllow/FIT3179A2/main/visualization.vl.json";
var vg_2 = "https://raw.githubusercontent.com/ianllow/FIT3179A2/main/barchart.vg";

vegaEmbed("#choropleth_map", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("##barchart", vg_2).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);w