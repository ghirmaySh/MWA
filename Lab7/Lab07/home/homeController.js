angular.module("MyApp").controller("HomeController", myHomeController); 

function myHomeController(){
    const vm = this;
    vam.homeContent = "This is a home content  from controller";
}
