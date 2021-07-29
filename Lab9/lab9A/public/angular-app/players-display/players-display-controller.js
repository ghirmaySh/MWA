angular.module("meanTenis").controller("PlayerController", PlayerController);


function PlayerController(PlayersDataFactory, $routeParams) {
    const vm = this;
    const playerId = $routeParams.id;
    PlayersDataFactory.getOne(playerId).then(function (response) {
        console.log(response)
        vm.player = response;
       
    });
    vm.deletePlayer =function(){
        const playerId = $routeParams.id;
        GamesFactory.delete(playerId).then(function(response){
            console.log("Game removed");
        }).catch(function (error){
            console.log("Error while deleting",error)
        })
    };
}