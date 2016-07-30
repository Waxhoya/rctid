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
}
//window.addEventListener("load", drawChart);
