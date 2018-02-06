angular.module('pag-site')
.controller('LoginCtrl', function($scope, AuthService, $state){

    $scope.user = {
        name:'',
        password:''
    };

    $scope.login = function(){
        AuthService.login($scope.user).then(function(msg){
            $state.go('admin.main');
        }, function(errMsg){
            $scope.angularAlert = "login failed!";
            $window.alert(angularAlert);

     
    });
};
})
