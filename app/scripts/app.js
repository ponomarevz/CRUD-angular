'use strict';

/**
 * @ngdoc overview
 * @name crudApp
 * @description
 * # crudApp
 *
 * Main module of the application.
 */
angular
  .module('crudApp', ['ngRoute']);

angular
  .module('crudApp')
  .controller('persons', function ($scope, $http, $routeParams, personsL) {
    		
		$scope.selTable = function(item, $event ) {
			$scope.selTableItem = item;	
			$event.stopPropagation();
			
		};
		
		$scope.isSelTable= function (item) {
			return  $scope.selTableItem === item;
		};

		$scope.getClassRow = function(item) {
			var res = 'row list-group-item';
			if ($scope.isSelTable(item)) { 
				res = 'row list-group-item list-group-item-info';
			} 
			return res;
		};
		
		$scope.persons = personsL;
		
		//-----------------CRUD Person --------------------------
		$scope.addItem = function (it, personForm) {
			
			if(personForm.$valid){
                     
				$http({method: 'Post', url: 'http://localhost:3000/api/persons', data: it}).
					success(function() { 
					location.hash = '#/personss/mod';
				});
			}
		};
		
		$scope.Dele = function(item) {
			$http({method: 'DELETE', url: 'http://localhost:3000/api/persons/' + item._id}).
				success(function() { 
					location.hash = '#/personss/mod';
			});
		};
		
		$scope.Update = function(item, personForm) {
			if(personForm.$valid){
				$http({method: 'PUT', url: 'http://localhost:3000/api/persons/' + item._id, data: item}).
					success(function() { 
						location.hash = '#/personss/mod';
				});
			}
		};
			
	})
	.controller('customers', function ($scope, $http, $routeParams, customersL) {
		
		$scope.selTable = function(item, $event ) {
			$scope.selTableItem = item;	
			$event.stopPropagation();
			
		};
		
		$scope.isSelTable= function (item) {
			return  $scope.selTableItem === item;
		};

		$scope.getClassRow = function(item) {
			var res = 'row list-group-item';
			if ($scope.isSelTable(item)) { 
				res = 'row list-group-item list-group-item-info';
			} 
			return res;
		};
		
		$scope.onlyNumbers = /^\d+$/;
		
		$scope.customers = customersL;
		
		
		//-----------------CRUD Customer --------------------------
		$scope.addItem = function (it, customerForm) {
			if(customerForm.$valid){
				$http({method: 'Post', url: 'http://localhost:3000/api/customers', data: it}).
					success(function() { 
					location.hash = '#/customers/mod';
					
				});
			}
		};
		
		$scope.Dele = function(item) {
			$http({method: 'DELETE', url: 'http://localhost:3000/api/customers/' + item._id}).
				success(function() { 
					location.hash = '#/customers/mod';
			});
		};
		
		$scope.Update = function(item, customerForm) {
			if(customerForm.$valid){
				$http({method: 'PUT', url: 'http://localhost:3000/api/customers/' + item._id, data: item}).
					success(function() { 
						location.hash = '#/customers/mod';
				});
			}
		};
	
	});