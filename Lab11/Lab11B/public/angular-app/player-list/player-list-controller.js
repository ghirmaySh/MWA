angular.module("meanPlayer").controller("PlayersController", PlayersController);

function PlayersController(PlayerDataFactory, $http) {
    var vm = this;
    vm.title = "MEAN TENIS APP";
    vm.isSubmitted = false;

    PlayerDataFactory.getAll()
        .then(function (response) {
            vm.players = response;
        });

    vm.searchPlayer = function () {
        
        console.log(country);
        $http.getAll("/api/player/search/search?=" + vm.country).then(function (response) {
            vm.results = response.data;
        }).catch(function (error) {

        });
    }

    vm.addPlayer = function () {
        var postData = {
            name: vm.name,
            country: vm.country,
            age: vm.age,
            rank: vm.rank,
            netWorth: vm.netWorth,
        };
        if (vm.playerForm.$valid) {
            PlayerDataFactory.addOne( postData).then(function (response) {
                    vm.players = response;
                    console.log( "Getting in player" ,vm.players);
            })
        } else {
            vm.isSubmitted = true;
            console.log("Data Validation Failed")
        }
    } 

}
