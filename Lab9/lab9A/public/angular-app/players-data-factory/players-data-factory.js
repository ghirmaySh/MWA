
angular.module("meanTenis").factory("PlayersDataFactory",PlayersDataFactory);
    
    function PlayersDataFactory($http){
        return { 
        getAll : getAllPlayers,
        getOne : getOnePlayer,
        addOne : addOnePlayer,
        delete : deletePlayer 
    };
    function getAllPlayers() {
        return $http.get("/api/players").then(complete).catch(failed);
    }
    function getOnePlayer(id) {
        return $http.get("/api/players/" + id).then(complete).catch(failed);
    }
    function addOnePlayer(player){
     return $http.post("/api/games",player).then(complete).catch(failed)
    }
    function deletePlayer(id){
        return $http.delete("/api/games/" + id).then(complete).catch(failed)
    }
    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;
    }
    
}