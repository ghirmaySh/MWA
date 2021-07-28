
angular.module("meanTenis").factory("PlayersDataFactory",PlayersDataFactory);
    
    function PlayersDataFactory($http){
        return { 
        getAll : getAllPlayers,
        getOne : getOnePlayer,
    };
    function getAllPlayers() {
        return $http.get("/api/players").then(complete).catch(failed);
    }
    function getOnePlayer(id) {
        return $http.get("/api/players/" + id).then(complete).catch(failed);
    }

    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;
    }
    
}