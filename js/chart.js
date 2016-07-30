var scarfChart;

 function drawChart(array) {
	var scarfChart = new CanvasJS.Chart("chartTarget", {
		title:{
			text: "Scarf popularity"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
      dataPoints: scarfBox
    } ]
	});
	scarfChart.render();
  var flip1 = document.getElementById("scarfPic1").className = "hidden";
  var flip2 = document.getElementById("scarfPic2").className = "hidden";
  var flip3 = document.getElementById("scarfPic3").className = "hidden";
}
//window.addEventListener("load", drawChart);
