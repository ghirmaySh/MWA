angular.module("meanTenis").controller("PlayerController", PlayerController);


function PlayerController(PlayersDataFactory, $routeParams) {
    const vm = this;
    const playerId = $routeParams.id;
    PlayersDataFactory.getOne(playerId).then(function (response) {
        console.log(response)
        vm.player = response;
       
    });
}