var app = angular.module('exampleApp', ['ngAnimate','ui.bootstrap','ui.validate','ngMessages']);

app.run(function($rootScope, $interval){
	//para inspeccionar el scope acceder por batarang, seleccionar el scope y escribir $scope en la consola
	// $rootScope.$$watchers[0].get
	//accede al watcher del scope

	$interval(function(){
		$rootScope.now = new Date().toLocaleTimeString();
		//Angular revisa la lista de watchers con el digest y los dispara
		//$rootScope.$digest();
	}, 1000);
});

app.controller('BatmanDetector', function($scope){
	var vm = this;

		var batmanDetector = function(){
			if (vm.firstName === 'Batman' || vm.firstName === 'Superman'){
				if (vm.firstName === 'Batman') {
					vm.supers = 'label label-primary';
				} else if (vm.firstName === 'Superman'){
					vm.supers = 'label label-danger';
				}

				return vm.firstName;
			}
		};
		$scope.$watch(batmanDetector,function(isBatman){
			if(isBatman){
				vm.sufix = "and your mom's name is Martha" ;
			}
			else {
				vm.sufix = '';
			}
		});
});

app.controller('Validador',function($scope){
	var vm = this;
	vm.validRange = 90;
	vm.validValue = 1;
	vm.validate = function(input){
		return ! input.$valid && ! input.$error.required;
	}

	vm.save = function(){
		if(vm.form.$valid){
			vm.saved = 'This form is valid';
			setTimeout(function(){
				vm.saved = ''
			},
			2000);
		}
	}

	// Forma villera del amo y señor
	// vm.validateInput = function(name, type) {
	// 	var input = vm.form[name];
	// 		return (input.$dirty || vm.submitted) && ( input.$error[type] || ! input.$valid );
	// }

});

app.controller('myController', function($scope){
	var vm = this;
	vm.numberArray = [1,2,3,4,5];
	vm.doSomething = function(number){
		console.log(number);
		return number;
	}
});

app.controller('dynamicTable', ['$scope', function($scope){
	var vm = this;
	vm.array = [
		{id:'NES',firstName:'Freddy',lastName:'Krueger'},
		{id:'F13',firstName:'Jason',lastName:'Voorhees'},
		{id:'HWE',firstName:'Michael',lastName:'Myers'}
	]

	vm.add = function(obj){
		console.log(obj);
		//vm.array.push(angular.copy(obj));
		vm.array.push({id:vm.array.length + 1,firstName:vm.newItem.firstName, lastName:vm.newItem.lastName});

	}
}]);

app.controller('agenda', ['$scope', function($scope){
	var vm = this;
	vm.entradasAgenda = [
		{firstName: 'Elliot', lastName: 'Spencer', Alias: 'Pinhead', phoneNumber: '0800-LAMENT'},
		{firstName: 'Ed', lastName: 'Gein', Alias: 'Leatherface', phoneNumber: '0800-HOTSAUSAGE'},
		{firstName: 'Charles "Chucky"', lastName: 'Lee', Alias: 'The Lakeshore Strangler', phoneNumber: '0800-DOLL'}
	];
}]);

app.controller('testController',['$scope',function($scope){
	var vm = this;
	vm.save = function(){
		console.log('saving...');

	}
	vm.countries = [
		{id: 1, name: 'Argentina'},
		{id: 2, name: 'Brasil'},
		{id: 3, name: 'Chile'}
	]
}]);
