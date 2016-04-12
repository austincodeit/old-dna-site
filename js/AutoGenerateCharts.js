DrawCharts("N1");  //load N1 when page loads

	function myFunction(district) {
		
		if (!district) { district = "N1"}
		
		DrawCharts(district);
		
		return false;
    }

function DrawCharts(district) {	
	
	if(window.myBar != null){
		window.myBar.destroy();
	}
	if(window.myBar2 != null){
		window.myBar2.destroy();
	}
	if(window.myBar3 != null){
		window.myBar3.destroy();
	}
	if(window.myBar4 != null){
		window.myBar4.destroy();
	}
	
	var chartjsData = [];
	chartjsData2 = [];
	 chartjsData3 = [];
		QualData = [];
	var chartjsData4 = [];
	
	var json1 = d3.csv("mdc.csv", function(d) {
		json1 = d;
        johnnyc = d;
		for (var i = 0; i < json1.length; i++) {
            chartjsData.push(json1[i][district + "Income"]);
            chartjsData3.push(json1[i][district + "Rent"]);
            QualData.push(json1[i][district + "Misc"]);
            chartjsData4.push(json1[i][district + "Comp"]);
            chartjsData2.push(json1[i][district + "Demo"]);
        }
	
		var barChartData = {
            labels : ["Less than $10,000","$10,000 to $14,999","$15,000 to $24,999","$25,000 to $34,999","$35,000 to $49,999","$50,000 to $74,999","$75,000 to $99,999","$100,000 to $149,999","$150,000 to $199,999","$200,000 or more"],datasets : [
                {
                    fillColor : "rgba(230,37,59,0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    data : chartjsData

                }
            ]
        };
		var barChartData4 = {
            labels : ["Jan","Feb","Mar","Apr","May","June","July","Sep","Oct","Nov","Dec"],datasets : [
                {
                    fillColor : "rgba(230,37,59,.5)",
                    strokeColor : "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
                    data : chartjsData4

                }
            ]
        };
		barChartData2 = [
			{
				value: parseInt(chartjsData2[0]),
				color:"#ECD078",
				highlight: "#FF5A5E",
				label: "White"
			},
			{
				
				value: parseInt(chartjsData2[1]),
				color: "#D95B43",
				highlight: "#FF5A5E",
				label: "Asian"
			},
			{
				
				value: parseInt(chartjsData2[2]),
				color: "#C02942",
				highlight: "#FF5A5E",
				label: "Black"
			},
			{
				
				value: parseInt(chartjsData2[3]),
				color: "#53777A",
				highlight: "#FF5A5E",
				label: "Biracial/Other"
			}
	
			];
			
		var barChartData3 = [
			{
				value: parseInt(chartjsData3[0]),
				color:"#ECD078",
				highlight: "#FF5A5E",
				label: "Renter Percentage"
			},
			{
				
				value: parseInt(chartjsData3[1]),
				color: "#D95B43",
				highlight: "#FF5A5E",
				label: "Owner Percentage"
			},
	
			]; 
		
		window.myBar = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData);
		window.myBar3 = new Chart(document.getElementById("canvas3").getContext("2d")).Pie(barChartData3);
		window.myBar4 = new Chart(document.getElementById("canvas4").getContext("2d")).Line(barChartData4);
		window.myBar2 = new Chart(document.getElementById("canvas2").getContext("2d")).Pie(barChartData2);
		
		
		document.getElementById("demo").innerHTML = "You are now viewing data for Car District " + district + "."
		});
		
		
	}

