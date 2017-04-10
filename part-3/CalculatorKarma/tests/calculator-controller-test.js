describe('canary test', function() {
	it('should pass', function() {
		expect(true).toBe(true);
	});	
});

describe('calculator', function() {
	beforeEach(angular.mock.module('calculatorApp'));

	var $controller;
	beforeEach(angular.mock.inject(function(_$controller_) {
		$controller = _$controller_;
		debugger;
	}));

	describe('initial conditions are correct', function() {
		it('should initialize x to zero', function() {
			// no locals still requires an empty object 
			var cut = $controller('CalculatorController', {});
			expect(cut.x).toBe(0);
		});
		it('should initialize y to zero', function() {
			// no locals still requires an empty object 
			var cut = $controller('CalculatorController', {});
			expect(cut.y).toBe(0);
		});
		it('should initialize z to zero', function() {
			// no locals still requires an empty object 
			var cut = $controller('CalculatorController', {});
			expect(cut.z).toBe(0);
		});
	});

	describe('sum', function() {
		it('should sum 1 and 2 correctly', function() {
			var cut = $controller('CalculatorController',  {});
			cut.x = 1;
			cut.y = 2;
			cut.sum();
			expect(cut.z).toBe(3);
		});
	});
});
