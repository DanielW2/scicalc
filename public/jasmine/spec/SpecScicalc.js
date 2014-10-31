describe('Test main controller', function(){
	it('Should initialize testValue to Success!', function(){
		$scope = {
		  $on: function() {}
		}
		ctrl =  new appController($scope);
		expect($scope.testValue).toBe('Success!');
	})
	
	it('Should appendInput to data', function(){
		$scope = {
		  $on: function() {}
		}
		ctrl =  new appController($scope);
		$scope.appendInput('42');
		expect($scope.data.textdata).toBe('42')	;;
	})	
})