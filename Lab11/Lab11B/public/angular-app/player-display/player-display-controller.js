angular.module("meanPlayer").controller("PlayerController", PlayerController);

function PlayerController($routeParams, PlayerDataFactory){
    var vm = this;
     vm.title = "MEAN Tenis App";
    vm.show="edit";
    var id = $routeParams.id;
    PlayerDataFactory.getOne(id)
        .then(function(response){
            vm.player = response;
    });

    vm.deleteSuccess = null;
    vm.deletePlayer = function(playerId){
        if(playerId){
            console.log(playerId);
            PlayerDataFactory.deleteOne(playerId).then(function(response){
                console.log(response)
                vm.deleteSuccess = true;

            }).catch(function(error){
                console.log(error);
            });
        }
    } 

    vm.editPlayer=function(){ 
        vm.show="update";
                 vm.name=vm.player.name;
                 vm.country=vm.player.country;
                 vm.age=vm.player.age;
                 vm.rank=vm.player.rank;
                 vm.netWorth=vm.player.netWorth;
              
    }  
    vm.updatePlayer=function(){  
        const newCity={
            
                name:vm.name,
                country:vm.country,
                age: vm.age,
                rank: vm.rank,
                netWorth: vm.netWorth,
              
        }
        PlayerDataFactory.updateOne(id,newCity)
        .then(function(response){
            PlayerDataFactory.getOne(id).then(function(response){
                vm.player = response;
                vm.show="edit";
                console.log(vm.player);
                vm.name=null,
                vm.country=null,
                vm.age=null;
                vm.rank=null;
                vm.netWorth=null;
            }).catch(function(err){

            });
    });

    }

}