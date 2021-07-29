angular.module("meanTenis").controller("PlayersController",PlayersController);

  
    function PlayersController(PlayersDataFactory){
        const vm = this;
        vm.name ="Mean Tenis App" ;
        PlayersDataFactory.getAll().then(function(response){
            vm.players = response;
        });
    
        vm.playerForm = {}
            //  const playerData ={
            //      name: vm.newName,
            //      age: vm.newAge,
            //      country:vm.newCountry,
            //      rank = vm.newRank,
            //      netWorth= vm.newNetworth,
            vm.addPlayer = function(){ 
                if(vm.playerForm.$valid){
                 PlayersDataFactory.addOne(vm.addPlayer)
                 .then(function(response){
                     console.log("Game saved");
                   }).catch(function(error){
                    console.log("Error while saving",error)
                 })
             
            }
    }  
} 
