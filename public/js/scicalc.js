function appController($scope, $http) {
	/*$http directive is used to communicate to the server */
	$scope.data = { textdata: '' };
	$scope.response = {};

	$scope.appendInput = function(input) {
		$scope.data.textdata=$scope.data.textdata+input;
	};
	
	$scope.clear = function () {
		$scope.data.textdata='';
	};
	
	$scope.addLabel = function () {
	    if (document.getElementsByClassName('symbol').style.display === 'none')
		    document.getElementsByClassName('symbol').style.display = 'inline';
		else
		    document.getElementsByClassName('symbol').style.display = 'none';
			
		if (document.getElementById('io').style.display === 'none')
		    document.getElementById('io').style.display = 'inline';
		else
		    document.getElementById('io').style.display = 'none';
	};
	
	$scope.send = function () {
		/*executed when submit is clicked*/
		console.log("inside click");
		console.log($scope.data.textdata);

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