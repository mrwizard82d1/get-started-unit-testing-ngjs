angular.module('calculatorApp', []);
angular.module('calculatorApp').controller('CalculatorController', function CalculatorController() {
	var vm = this;
	vm.x = 0;
	vm.y = 0;
	vm.z = 0;

	vm.sum = function() {
		vm.z = vm.x + vm.y;
	};
});

