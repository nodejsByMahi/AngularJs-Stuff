/**
 * Created by Mindstix laptop7 on 06-Apr-15.
 */
app.controller("LoginCtrl", function($scope, $location, $cookieStore,$state)
{
    $scope.loginFailed  = false;
    $scope.remember = false;
    $scope.user = {};
    console.log("In loginCtrl");

    if($cookieStore.get("rememberMe"))
    {
        $scope.remember = true;
        $scope.user = $cookieStore.get("rememberMe");
    }

    $scope.checkLoginDetails = function()
    {
        if($scope.user.loginUserName == "Admin" && $scope.user.loginPassword == "Admin")
        {
            $cookieStore.put("loggedInUser", $scope.user.loginUserName);
             $state.go('/dashboard.publishContent');
        }
        else
        {
            $scope.loginFailed = true;
        }
    }

    $scope.rememberMe = function()
    {
        if($scope.remember)
        {
            $scope.remember = false;
            $cookieStore.put("rememberMe", null);
        }
        else
        {
            $cookieStore.put("rememberMe", $scope.user);
        }
    }
});
