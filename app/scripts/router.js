'use strict';
//-------------роутер--------------
	angular.module('crudApp').config(function($routeProvider) {
	
		$routeProvider
			.when('/persons', {templateUrl: 'views/persons.html', controller: 'persons',
					resolve: {
						personsL: function($http) {
							return $http.get("http://localhost:3000/api/persons")
										.then(function (data) {
											return data.data;
										});
						}
						
					}
			})
			.when('/persons/mod', {redirectTo: '/persons'} )
			.when('/customers', {templateUrl: 'views/customers.html', controller: 'customers',
					resolve: {
						customersL: function($http) {
							return $http.get("http://localhost:3000/api/customers")
										.then(function (data) {
											return data.data;
											
										});
						}
						
					}
			})
			.when('/customers/mod', {redirectTo: '/customers'} )
			.when('/about', {templateUrl: 'views/about.html'})	
			.otherwise({redirectTo: '/persons'});
		
	});