
app.controller('DashboardCtrl', function($scope, $cookieStore, $state)
{
	console.log("in DashboardCtrl");

	$scope.loginUserSession = $cookieStore.get("loggedInUser");
	console.log("loginUserSession: " + $scope.loginUserSession);
    if($scope.loginUserSession == "" || $scope.loginUserSession == null || $scope.loginUserSession == undefined)
    {
        $state.go('/');
        return;
    }

    $scope.logOutUser = function()
    {
        if($scope.loginUserSession)
        {
             $cookieStore.put("loggedInUser", null);
             $cookieStore.put("rememberMe", null);
             $state.go('/');
        }
    }
});