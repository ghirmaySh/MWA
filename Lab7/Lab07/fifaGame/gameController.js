
angular.module("MyApp").controller("TeamController", myteamController); 

function myteamController(TeamFactory,$ruoteParams){
    const vm= this;
    const teamType = $ruoteParams.teamType;
    TeamFactory.getOneTeam(teamType).then(function(response){
        vm.teams = response[0];
    });

}
