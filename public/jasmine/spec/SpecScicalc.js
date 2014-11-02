describe('Test appController', function(){	
	it('Should appendInput to data', function(){
		$scope = {
		  $on: function() {}
		}
		ctrl =  new appController($scope);
		$scope.appendInput('42');
		expect($scope.data.textdata).toBe('42');
	})	
	
	it('Should clear data', function(){
		$scope = {
		  $on: function() {}
		}
		ctrl =  new appController($scope);
		$scope.appendInput('42');
		$scope.clear();
		expect($scope.data.textdata).toBe('');
	})

	it('Should swap the ui', function(){
		$scope = {
		  $on: function() {}
		}
		ctrl =  new appController($scope);
		expect(document.getElementById('io').style.display).toBe('inline');
		expect(document.getElementsByClassName('symbol')[0].style.display).toBe('none');
		expect(document.getElementsByClassName('symbol')[1].style.display).toBe('none');		
		$scope.swapUI();
		expect(document.getElementById('io').style.display).toBe('none');
		expect(document.getElementsByClassName('symbol')[0].style.display).toBe('inline');		
		expect(document.getElementsByClassName('symbol')[1].style.display).toBe('inline');
		$scope.swapUI();
		expect(document.getElementById('io').style.display).toBe('inline');
		expect(document.getElementsByClassName('symbol')[0].style.display).toBe('none');
		expect(document.getElementsByClassName('symbol')[1].style.display).toBe('none');
	})
	
	it('Should save statements into labels', function(){
		$scope = {
		  $on: function() {}
		}
		ctrl =  new appController($scope);
		$scope.label = 'x';
		$scope.statement = '2+2';
		$scope.saveLabel();
		expect($scope.statements[$scope.label]).toBe($scope.statement);
	})	
	
	it('Should replace labels with statements', function(){
		$scope = {
		  $on: function() {}
		}
		ctrl =  new appController($scope);
		expect($scope.replaceAll('14/x', 'x', '2+5')).toBe('14/2+5');
	})	
})