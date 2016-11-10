angular.module('slideCtrl.controllers',[]).controller('SlideListController',function($scope,$state,$window,Slide){
    $scope.mobSlided = new $JssorSlider$('mobSlided');
});