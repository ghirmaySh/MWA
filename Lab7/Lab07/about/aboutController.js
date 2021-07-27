angular.module("MyApp").controller("AboutController", myAboutController); 

function myAboutController(){
    const vm = this;
    vm = "This is a about content from controller";
}