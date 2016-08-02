var scarfChart;

function drawChart(array) {
  var flipChart = document.getElementById("chartTarget").className = "";
	scarfChart = new CanvasJS.Chart("chartTarget", {
		title:{
			text: "Scarf popularity"
		},
		data: [
		{
			type: "column",
      dataPoints: array
    } ]
	});
	scarfChart.render();
  var flip1 = document.getElementById("scarfPic1").className = "hidden";
  var flip2 = document.getElementById("scarfPic2").className = "hidden";
  var flip3 = document.getElementById("scarfPic3").className = "hidden";
  var flip4 = document.getElementById("voteAgain").className = "button";
}
//window.addEventListener("load", drawChart);

function voteAgain () {
  var flip1 = document.getElementById("scarfPic1").className = "scarfImg";
  var flip2 = document.getElementById("scarfPic2").className = "scarfImg";
  var flip3 = document.getElementById("scarfPic3").className = "scarfImg";
  var flipCharthide = document.getElementById("chartTarget").className = "hidden";
  var flip4 = document.getElementById("voteAgain").className = "hidden"; //
}

/* Marketing Chart */
function drawChartStack() {
  var flipChart = document.getElementById("chartTarget").className = "";
	scarfChart = new CanvasJS.Chart("chartTarget", {
		title:{
			text: "Agreggate total"
		},
    data: [
  {
    type: "stackedColumn",
    dataPoints: marketBoxTotal
  },  {
    type: "stackedColumn",
    dataPoints: marketBoxLong
  }
  ]
});
	scarfChart.render();
  var flip1 = document.getElementById("scarfPic1").className = "hidden";
  var flip2 = document.getElementById("scarfPic2").className = "hidden";
  var flip3 = document.getElementById("scarfPic3").className = "hidden";
  var flip4 = document.getElementById("voteAgain").className = "button";
}
