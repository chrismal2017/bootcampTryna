angular.module('pag-site')
.service('AuthService', function($q, $http, API_ENDPOINT){
    var LOCAL_TOKEN_KEY = 'yourTokenKey';
    var isAuthenticated = false;
    var authToken;

    function loadUserCredentials(){
        var token  = window.localStorage.getItem(LOCAL_TOKEN_KEY);
        if (token){
            useCredentials(token)
        }
    }
    function storeUserCredentials(){

           
     window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
     useCredentials(token);
    }


    function useCredentials(token){
     isAuthenticated = true;
     authToken = token;

     //set the  token  as header  for your requests
     $http.defaults.headers.common.Authorization = authToken;
  
    }

    function destroyUserCredentials(){

        authToken = undefined;
        isAuthenticated = false;
        $http.defaults.headers.common.Authorization = undefined;
        window.localStorage.removeItem(LOCAL_TOKEN_KEY); 

    }
    var login = function(user){
        return $q(function(resolve, reject){
            $http.post(API_ENDPOINT.url + '/authenticate', user).then(function(result){
                if(result.data.success)
                {
                    storeUserCredentials(result.data.token);
                    resolve(result.data.msg);
                }else{

                    reject(result.data.msg);
                }
            }
        )
        })
    }

    return{
        login:login,
        isAuthenticated: function(){return isAuthenticated; },

    };
})

.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENT){
    return{
responseError: function(response){

    $rootScope.$broadcast({
        401: AUTH_EVENT.notAuthenticated
    }[response.status], response);
    return $q.reject(response);
}
    };
})

.config(function ($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
});