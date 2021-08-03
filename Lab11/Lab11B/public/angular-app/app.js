
angular.module("meanPlayer", ["ngRoute","angular-jwt"]).config(config).run(run);

function config($routeProvider,$httpProvider){
  $httpProvider.interceptors.push("AuthInterceptor");
    
    $routeProvider
    .when("/", {
        templateUrl: "angular-app/player-list/playerList.html",
        controller : "PlayersController",
        controllerAs: "vm"
    })
    .when("/player/:id", {
        templateUrl: "angular-app/player-display/player.html",
        controller : "PlayerController",
        controllerAs: "vm"
    })
    .when("/register", {
        templateUrl: "angular-app/register/register.html",
        controller: "RegisterController",
        controllerAs: "vm",
        access: { restricted: false },
      })
      .when("/profile", {
        templateUrl: "angular-app/profile/profile.html",
        access: { restricted: true },
      })
      .otherwise({
        redirectTo: "/",
      });
  } 
  function run($rootScope, $location, $window, AuthFactory) {
    console.log("1");
    $rootScope.$on(
      "$routeChangeStart",
      function (event, nextRoute, currentRoute) {
        console.log("2");
        if (
          nextRoute.access !== undefined &&
          nextRoute.access.restricted &&
          !AuthFactory.auth
        ) {
          event.preventDefault(); 
          $location.path("/"); 
        }
      }
    );
  }
  
