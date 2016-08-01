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
      dataPoints: scarfBox
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

function dataChart() {
  var flipChart = document.getElementById("chartTarget").className = "";
  var marketChart = new CanvasJS.Chart("chartTarget", {
     title:{
     text: "Total click Stats"
     },
     axisY:{
       title:"Viewed and Selected"
     },
     animationEnabled: true,
     data: [
     {
       type: "stackedColumn",
       toolTipContent: "{label}<br/><span style='\"'color: {color};'\"'><strong>{name}</strong></span>: {y}mn tonnes",
       name: "Anthracite and Bituminous",
       showInLegend: "true",
       dataPoints: scarfBox
     },  {
       type: "stackedColumn",
       toolTipContent: "{label}<br/><span style='\"'color: {color};'\"'><strong>{name}</strong></span>: {y}mn tonnes",
       name: "Times the scarf was viewed",
       showInLegend: "true",
       dataPoints: scarfBox
     }
     ]
     ,
     legend:{
       cursor:"pointer",
       itemclick: function(e) {
         if (typeof (e.dataSeries.visible) ===  "undefined" || e.dataSeries.visible) {
           e.dataSeries.visible = false;
         }
         else
         {
           e.dataSeries.visible = true;
         }
         chart.render();
       }
     }
   });

   chart.render();
 }
