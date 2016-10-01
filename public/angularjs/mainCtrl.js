/**
 * http://usejsdoc.org/
 */

var risingInternational= angular.module('risingInternational',[]);


risingInternational.controller('mainPageCtrl', function($scope, $http, $location) {
	 
	$scope.category = 0;
	$scope.product = [] ;
	//$scope.prod1;


	$scope.cart_page = function(){
		console.log("cart page");
		window.location.assign('/cart_page');
	}

	$scope.signup = function(){
		console.log("inside signup page");
		var firstname = $scope.firstname;
		var lastname = $scope.lastname;
		var email = $scope.email;
		var phone = $scope.phone;
		var profession = $scope.profession;
		var organization = $scope.organization;
		var skills = $scope.skills;
		
console.log("vol signup")

		$http({
			method:"post",
			url:"/addVolunteers",
			data:{
				"firstname" : firstname,
				"lastname": lastname,
				"email": email,
				"phone": phone,
				"profession": profession,
				"organization": organization,
				"skills": skills
			}
		}).success(function(res){
			if(res.stscode == 200){
				console.log("values entered sucessfully");
				window.location.assign("/thankyou");

				
			}
			else{
				console.log("cannot add the values");
			}
		}).error(function(res){
			console.log("error while signup");
			console.log(res);
		});
	}
	
	
	$scope.singleProductPage = function(){

		//$scope.prodid = prod;
		
		console.log($scope.prod1);

		window.location.assign("/singleProduct");
	}

	$scope.getProductList = function(){
		//window.location.assign("/product-grid-left-sidebar");
		
	return $http({
	method : 'GET',
	url : '/getAllproduct'
	}).success(function(result) {

		if(result.stscode == 200){

			products = result.data;
			console.log(products);
				for(var i=0; i<products.length;i++){
					$scope.product.push(products[i].productname+";"+products[i].amount+";"+products[i].profilepic+";"+products[i].productdesc+
					";"+products[i].pid+";"+products[i].cid);	
					//$scope.productAmount.push(products[i].amount);	

					// $scope.product[i].productname = products[i].productname;
					// $scope.product[i].prodamount = products[i].amount;
					// $scope.product[i].prodimg = products[i].profilepic;
					// console.log($scope.product);
					
				}
				
			}
			else {
				console.log("No products");
			}
				
		});
	//return(resp)
	};
	 
	 

	 $scope.productgridleftsidebar = function(category){
	 	$scope.category = category;
		console.log("inside accomplishments ctrl");
   	window.location.assign("/product-grid-left-sidebar");
	 
	 }
	 $scope.dashboard = function(){
		 console.log("inside Dashboard ctrl");
   	  window.location.assign("/account-dashboard");
	 };
	 
	 $scope.aboutus = function(){
	 	console.log("inside About Us ctrl");
   	 	window.location.assign("/aboutus");
	 };

	  $scope.volunteersSignup = function(){
	 	console.log("inside Volunteers ctrl");
   	 	window.location.assign("/volunteersSignup");
	 };

	 $scope.profile = function(){
		 console.log("inside profile ctrl");
   	  window.location.assign("/account-profile");
	 };
	 
	 $scope.orders = function(){
		 console.log("inside profile ctrl");
   	  window.location.assign("/account-orders");
	 };
	 $scope.singleOrder = function(){
		 console.log("inside profile ctrl");
   	  window.location.assign("/account-single-order");
	 };
	 $scope.accomplishments = function(){
		 console.log("inside accomplishments ctrl");
   	  window.location.assign("/account-accomplishments");
	 };
	 $scope.leads = function(){
		 console.log("inside Address ctrl");
   	  window.location.assign("/account-leads");
	 };

	 	var agg = { label: 'Seller', pct: [30, 10, 6, 20, 14, 10, 10] },
	    bal = { label: 'Balanced',   pct: [24,  7, 2, 18, 13, 36, 5] },
	    mod = { label: 'Moderate',  pct: [12,  4, 2, 10, 11, 61, 8] },
	    inc = { label: 'Income',    pct: [ 0,  0, 0,  0,  0,100, 10] },

	    data = agg;

	var labels = ['Accessories', 'Apparel', 'Kids', 'Housewares', 'Jewelry', 'Pets','On Sale'];

	var w = 320,                       // width and height, natch
	    h = 320,
	    r = Math.min(w, h) / 2,        // arc radius
	    dur = 750,                     // duration, in milliseconds
	    color = d3.scale.category10(),
	    donut = d3.layout.pie().sort(null),
	    arc = d3.svg.arc().innerRadius(r - 70).outerRadius(r - 20);

	// ---------------------------------------------------------------------
	var svg = d3.select("#d3portfolio").append("svg:svg")
	    .attr("width", w).attr("height", h)
	     .on("click",function(){
	    	 
	     });

	var arc_grp = svg.append("svg:g")
	    .attr("class", "arcGrp")
	    .attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

	var label_group = svg.append("svg:g")
	    .attr("class", "lblGroup")
	    .attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

	// GROUP FOR CENTER TEXT
	var center_group = svg.append("svg:g")
	    .attr("class", "ctrGroup")
	    .attr("transform", "translate(" + (w / 2) + "," + (h / 2) + ")");

	// CENTER LABEL
	var pieLabel = center_group.append("svg:text")
	    .attr("dy", ".35em").attr("class", "chartLabel")
	    .attr("text-anchor", "middle")
	    .text(data.label);

	// DRAW ARC PATHS
	var arcs = arc_grp.selectAll("path")
	    .data(donut(data.pct));
	arcs.enter().append("svg:path")
	    .attr("stroke", "red")
	    .attr("stroke-width", 0.5)
	    .attr("fill", function(d, i) {return color(i);})
	    .attr("d", arc)
	    .each(function(d) {this._current = d});

	// DRAW SLICE LABELS
	var sliceLabel = label_group.selectAll("text")
	    .data(donut(data.pct));
	sliceLabel.enter().append("svg:text")
	    .attr("class", "arcLabel")
	    .attr("transform", function(d) {return "translate(" + arc.centroid(d) + ")"; })
	    .attr("text-anchor", "middle")
	    .text(function(d, i) {return labels[i]; });

	// --------- "PAY NO ATTENTION TO THE MAN BEHIND THE CURTAIN" ---------

	// Store the currently-displayed angles in this._current.
	// Then, interpolate from this._current to the new angles.
	
	function loadBrand(){
		
	}
	
	function arcTween(a) {
	    var i = d3.interpolate(this._current, a);
	    this._current = i(0);
	    return function(t) {
	        return arc(i(t));
	    };
	}

	// update chart
	function updateChart(model) {
	    data = eval(model); // which model?

	    arcs.data(donut(data.pct)); // recompute angles, rebind data
	    arcs.transition().ease("elastic").duration(dur).attrTween("d", arcTween);

	    sliceLabel.data(donut(data.pct));
	    sliceLabel.transition().ease("elastic").duration(dur)
	        .attr("transform", function(d) {return "translate(" + arc.centroid(d) + ")"; })
	        .style("fill-opacity", function(d) {return d.value==0 ? 1e-6 : 1;});
	        
	    pieLabel.text(data.label);
	}

	// click handler
	$("#objectives a").click(function() {
	    updateChart(this.href.slice(this.href.indexOf('#') + 1));
	});
	
	var data = {
		    "regions": ["Federal", "Tigray", "Afar", "Amhara", "Oromia", "Gambella", "Addis Ababa", "Dire Dawa", "Harar", "Benishangul-Gumuz", "Somali", "SNNPR "],
		    "institutions": [0, 0, 34, 421, 738, 0, 218, 22, 22, 109, 0, 456]
		}

		draw(data);

		function draw(data) {
		    var margin = {
		            "top": 10,
		            "right": 10,
		            "bottom": 30,
		            "left": 50
		        },
		        width = 700,
		        height = 300;

		    var x = d3.scale.ordinal()
		        .domain(data.regions.map(function(d) {
		            return d.substring(0, 2);}))
		        .rangeRoundBands([0, width], 0);


		    var y = d3.scale.linear()
		        .domain([0, d3.max(data.institutions)])
		        .range([height, 0]);

		    var xAxis = d3.svg.axis().scale(x).orient("bottom");

		    var yAxis = d3.svg.axis().scale(y).orient("left");

		    var svgContainer = d3.select("#root").append("svg")
		        .attr("class", "chart")
		        .attr("width", width + margin.left + margin.right)
		        .attr("height", height + margin.top + margin.bottom).append("g")
		            .attr("transform", "translate(" + margin.left + "," + margin.right + ")");

		    svgContainer.append("g")
		        .attr("class", "x axis")
		        .attr("transform", "translate( 0," + height + ")")
		        .call(xAxis);

		    svgContainer.append("g")
		        .attr("class", "y axis").call(yAxis)
		        .append("text")
		            .attr("transform", "rotate(-90)")
		            .attr("y", 6)
		            .attr("dy", ".71em")
		            .style("text-anchor", "end")
		            .text("Institutions");

		    svgContainer.selectAll(".bar").data(data.institutions).enter().append("rect")
		        .attr("class", "bar")
		        .attr("x", function(d, i) {
		            return i * x.rangeBand();
		        })
		        .attr("y", function(d) {
		            return y(d);
		        })
		        .attr("width", function(){
		            return x.rangeBand();
		        })
		        .attr("height", function(d) {
		            return height -y(d);
		        });
		    
		    
		    //Shruti's Edit
		    var chart = c3.generate({
		    	   bindto: '#master',
		    	       data: {
		    	         //url: '/angularjs/masterdata.json',
		    	    	  columns: [
		    	    	 ['Accessories',45],
		    	    	 ['Apparel',30],
		    	    	 ['Kids',20],
		    	    	 ['Housewares',15],
		    	    	 ['Jewelry',10],
		    	    	 ['Pets',20],
		    	    	 ['Onsale',20]
		    	    	   ],
		    	         //mimeType: 'json',
		    	         type : 'donut',
		    	         onmouseover: function (d, i) { console.log("onmouseover", d, i, this); },
		    	         onmouseout: function (d, i) { console.log("onmouseout", d, i, this); },
		    	         onclick: function (d, i) { 
		    	},
		    	         order: null // set null to disable sort of data. desc is the default.
		    	       },
		    	       axis: {
		    	         x: {
		    	           label: 'Sepal.Width'
		    	         },
		    	         y: {
		    	           label: 'Petal.Width'
		    	         }
		    	       },
		    	       donut: {
		    	         label: {
//		    	            format: function (d, ratio) { return ""; }
		    	         },
		    	         title: "Sales Analytics",
		    	 width: 70
		    	       },
		    	size: {
		    	width: 580,
		    	height: 400
		    	}

		    	     });
		    
		    
		}
		/*var init = function(){
		    makeGauge('#accessories', 42, '#1abc9c');
		    makeGauge('#apparels', 22, '#3498db');
		    //makeGauge('#d1-c3', 72, '#f39c12');
		};*/
		
		 var makeGauge = function(selector, value, color)
		    {
			c3.generate({
			    bindto: selector,
			    data: {
				columns: [
				    ['data', value]
				],
				type: 'gauge'
			    },
			    tooltip: {
				show: false
			    },
			    gauge: {
				label: {
				    format: function(value, ratio) {
					return value + '%';
				    },
				    show: false
				},
				min: 0,
				max: 100,
				units: ' %',
				width: 50
			    },
			    color: {
				pattern: [color, color, color], // the 3 color levels for the percentage values.
			    }
			});
		    };
		    
			makeGauge('#accessories', 13, '#1abc9c');
			makeGauge('#apparels', 8, '#3498db');
			makeGauge('#kids', 20, '#f39c12');
			makeGauge('#housewares', 17, '#1abc9c');
			
			
			var makeChart = function(selector, type, colors, legend)
		    {
               
			c3.generate({
				bindto: selector,
			    data: {
				x: 'x',
				//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
				columns: [
				    ['x', '2016-01-01', '2016-01-02', '2016-01-03', '2016-01-04', '2016-01-05', '2016-01-06',
				     '2016-01-07', '2016-01-08', '2016-01-09', '2016-01-10', '2016-01-11', '2016-01-12'],
				    ['Monthly Earnings', 30, 200, 100, 400, 150, 250, 30, 200, 112, 322, 70, 300]
				],
				//type: 'spline'
				type: type
			    },
			    axis: {
				x: {
				    type: 'timeseries',
				    tick: {
					format: '%Y-%m-%d'
				    }
				},

				y: {
				    max: 500,
				    tick: {
					values: [100, 200, 300, 400, 500]
				    }
				}

			    },

			    legend: {
				show: legend,
				position: 'inset'
			    },

			    color: {
				pattern: colors
			    }

			});
                 
		    } 
		makeChart('#d1-c5', 'bar', ['#3498db', '#2980b9'], false);
	
 });

risingInternational.filter('split', function() {
    return function(input, splitChar, splitIndex) {
        // do some bounds checking here to ensure it has that index
        return input.split(splitChar)[splitIndex];
    };
    
});

