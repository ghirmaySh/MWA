angular.module("MyApp").factory("teameFactory",TeamFactory);

function teamFactory($http){
    return {
        getTenTeams :getTen,
        getOneTeam :getOneTeam
    };
    function getTen(){
        return $http.get("https://www.easports.com/fifa/ultimate-team/api/fut/item")
        .then (completed)
        .catch(failed)
    }
    function getOneTeam (teamType){
        return $http.get("https://www.easports.com/fifa/ultimate-team/api/fut/item"  + teamType +"random")
        .then(complete)
        .catch(failed);
    }
    function completed(response){
        return response.data;
           
    }
    function failed(error){
        return error.statusText;

    }
  }
