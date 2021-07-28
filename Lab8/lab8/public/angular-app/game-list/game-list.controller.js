angular.module("meanGames").controller("GamesController", GamesController);

function GamesController(GamesDataFactory) {
    const vm = this;
    vm.title = "Mean Games App";
    GamesDataFactory.getAll().then(function (response) {
        vm.games = response;
    });

}