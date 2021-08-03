angular.module("meanPlayer").factory("PlayerDataFactory", PlayerDataFactory);

function PlayerDataFactory($http){
    return{
        getAll: getAllPlayers,
        getOne: getOnePlayer,
        addOne: addOnePlayer,
        updateOne:updateOnePlayer,
        deleteOne: deleteOnePlayer,
    };

    function getAllPlayers(){
        return $http.get("/api/player").then(complete).catch(failed);
    }

    
    function getOnePlayer(id){
        return $http.get("/api/player/"+id).then(complete).catch(failed);
    }
    function addOnePlayer(player){
        return $http.post("/api/player/", player).then(complete).catch(failed);
    }
    function updateOnePlayer(id,player){
        return $http.put("/api/player/"+id, player).then(complete).catch(failed);
    }

    function deleteOnePlayer(playerId){
        return $http.delete("/api/player/"+playerId).then(complete).catch(failed);
    }

    function complete(response){
        console.log(response.data);
        return response.data;
    }

    function failed(error){
        console.log("failed eror")
        return error.status.statusText;
    }
    

}