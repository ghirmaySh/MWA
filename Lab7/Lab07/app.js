angular.module("MyApp", ["ngRoute"]).config(config);

function config($routeProvider) { 
  $routeProvider
    .when("/", {
      templateUrl:"home/home.html",
      controller:"homeController",
      controllerAs:"HomeCtrlr"
    })
    .when("/about", {
      templateUrl:"about/about.html",
      controller:"AboutController",
      controllerAs:"aboutCtrlr"
    })
    .when("/fifaGame", {
        templateUrl:"fifaGame/game.html",
        controller:"TeamController",
        controllerAs:"TeamCtrlr"
      })
    .otherwise({ redirectTo: "/" });
}
