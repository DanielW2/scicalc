function appController($scope, $http) {
	/*$http directive is used to communicate to the server */
	$scope.data = { textdata: '' };
	$scope.response = {};
	$scope.statements = {};

	$scope.appendInput = function(input) {
		$scope.data.textdata=$scope.data.textdata+input;
	};
	
	$scope.clear = function () {
		$scope.data.textdata='';
	};
	
	$scope.swapUI = function () {
		var statementForms = document.getElementsByClassName('symbol');
		for (var i = 0; i < statementForms.length; i++) {
			if (document.getElementsByClassName('symbol')[i].style.display === 'none')
				document.getElementsByClassName('symbol')[i].style.display = 'inline';
			else
				document.getElementsByClassName('symbol')[i].style.display = 'none';
		}
			
		if (document.getElementById('io').style.display === 'none')
		    document.getElementById('io').style.display = 'inline';
		else
		    document.getElementById('io').style.display = 'none';
	};
	
	$scope.saveLabel = function () {
		$scope.statements[$scope.label] =  $scope.statement;
	};
	
	$scope.send = function () {
		/*executed when submit is clicked*/
		var posting = $http({
			method: 'POST',
			/*posting to /post */
			url: '/post',
			data: $scope.data,

			processData: false
		});
		posting.success(function (response) {
			/*executed when server responds back*/
			console.log(response);
			$scope.data.textdata = response;
		});
	};
}