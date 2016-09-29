/*
	This angular module is to handle the carousel logic using bootstrap
	Adding additional elements is only a matter of adding another link to the array below.
*/
(function(){
	var app = angular.module('portfolio',[]);

	app.directive('carousel', function($timeout){
		
		return{
			restrict:'E',
			scope:{
				links: '='
			},
			templateUrl: './templates/carousel.html',
			link:function(scope,element){
				$timeout(function() {
					$('.carousel-indicators li',element).first().addClass('active');
          			$('.carousel-inner .item',element).first().addClass('active');
				});
			}
		};
	});

	app.controller('carouselCtrl',function($scope){
		
		$scope.links=[
			{ 
				src:"./assets/images/cockadoodle.PNG",
				alt:"",
				caption:"Cockadoodle: An anonymous Chat Service",
				url:"https://github.com/stefanstancu/Cockadoodle"
			},
     		{ 
     			src:"./assets/images/cockadoodle_login.PNG",
     			alt:"",
     			caption:"",
     			url:"https://github.com/stefanstancu/Cockadoodle"
     		},
     		{ 
     			src:"./assets/images/krispykremesales.PNG",
     			alt:"",
     			caption:"Sales Tracker: Custom Software for WOSS Mutual",
     			url:"https://github.com/stefanstancu/Sales-Software"
     		},
     		{
     			src:"./assets/images/excelsheet_printout.PNG",
     			alt:"",
     			caption:"Sale Tracker Excel printout",
     			url:"https://github.com/stefanstancu/Sales-Software"
     		}
		];
	});
})();
