angular.module('slidyApp',['ui.router','ngResource','slideCtrl.controllers','slideSV.services']);

angular.module('slidyApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('slides',{
        url:'/slides',
        templateUrl:'partials/slides/slides.html',
        controller:'SlideListController'
    });
}).run(function($state){
   $state.go('slides');
})