describe('Test appController', function(){	
    beforeEach(function() {
		$scope = {
		  $on: function() {}
		}
		ctrl =  new appController($scope);
    });

	it('Should appendInput to data', function(){
		$scope.appendInput('42');
		expect($scope.data.textdata).toBe('42');
	})	
	
	it('Should clear data', function(){
		$scope.appendInput('42');
		$scope.clear();
		expect($scope.data.textdata).toBe('');
	})

	it('Should swap the ui', function(){
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
		$scope.label = 'x';
		$scope.statement = '2+2';
		$scope.saveLabel();
		expect($scope.statements[$scope.label]).toBe($scope.statement);
	})	
	
	it('Should replace labels with statements', function(){
		expect(replaceAll('14/x', 'x', '2+5')).toBe('14/2+5');
	})	
	
	it('Should finalize the statement for evaluation', function(){
		$scope.appendInput('x+5');
		$scope.label = 'x';
		$scope.statement = '2';
		$scope.saveLabel();		
		finalize();
		expect($scope.data.textdata).toBe('2+5');
	})		
})