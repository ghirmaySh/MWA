angular.module("meanTenis", ["ngRoute"]).config(config);

function config($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "angular-app/players-list/players-list.html",
        controller: "PlayersController",
        controllerAs: "vm"
    }).when("/players/:id", {
        templateUrl: "angular-app/players-display/players-display.html",
        controller: "PlayerController",
        controllerAs: "vm"
    });
};

