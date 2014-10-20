angular.module("Myapp", [])
	.controller("mycontroller", function($scope, $http){
		//example index.html
		$http.get("pokemons.json").success(function(data){
			$scope.pokemones = data;
		});


		//example index2.html
		$scope.personas = [
			{name: "BRYAM", sueldo: "4000"},
			{name: "Julio", sueldo:"400"},
			{name: "Cesar"},
			{name: "Patricia"},
			{name: "Alfredo"},
			{name: "Juan"}
		];


	});