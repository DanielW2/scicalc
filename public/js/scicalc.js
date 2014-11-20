function appController($scope, $http) {
	/*$http directive is used to communicate to the server */
	$scope.data = { textdata: '' };
	$scope.response = {};
	$scope.statements = {};
	
	$scope.testValue = 'Success!';
/*
	viewportwidth = 0;
	viewportheight = 0;
	  
	 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
	  
	 if (typeof window.innerWidth != 'undefined')
	 {
		  viewportwidth = window.innerWidth;
		  viewportheight = window.innerHeight;
	 }
	
	document.body.style.height = viewportheight-60;*/
	
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
	
	replaceAll = function(original, s, r){
		return original.split(s).join(r);
	};
	
	finalize = function() {
		for (var label in $scope.statements) {//This should be moved to it's own function
			$scope.data.textdata = replaceAll($scope.data.textdata, label, $scope.statements[label]);
		}	
	};
	
	$scope.send = function () {
		finalize();
		
		var posting = $http({
			method: 'POST',
			/*posting to /post */
			url: '/post',
			data: $scope.data,

			processData: false
		});
		posting.success(function (response) {
			/*executed when server responds back*/
			$scope.data.textdata = response;
		});
	};
}

window.onload = function(event) {
	document.body.style.height = window.innerHeight - 60;
}

window.onresize = function(event) {
	document.body.style.height = window.innerHeight - 60;
}