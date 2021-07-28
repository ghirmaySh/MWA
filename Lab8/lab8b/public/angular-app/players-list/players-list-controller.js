angular.module("meanTenis").controller("PlayersController",PlayersController);

  
    function PlayersController(PlayersDataFactory){
        const vm = this;
        vm.name ="Mean Tenis App" ;
        PlayersDataFactory.getAll().then(function(response){
            vm.players = response;
        });
}