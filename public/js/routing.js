(function(){
  var app = angular.module('routeApp',['ui.router']);
  app.config(function($stateProvider){
    $stateProvider.state('home',{
      url : '/home',
      templateUrl : '/partials/home.html'
    });
    $stateProvider.state('page1',{
      url : '/page1',
      templateUrl : '/partials/page1.html'
    });
    $stateProvider.state('page2',{
      url : '/page2',
      templateUrl : '/partials/page2.html'
    });
    $stateProvider.state('page2.detail',{
      url : '/:id/detail',
      templateUrl : '/partials/detail.html',
      controller : 'detailController as dctrl'
    });
  });

  app.controller('detailController',function($stateParams){
    dctrl = this;
    dctrl.id = $stateParams.id;
  });

  app.controller('goController',function($state){
    gctrl = this;
    gctrl.goSomewhere = function(){
      $state.go('home');
    }
  });

  app.run(function($rootScope,$state){
    $rootScope.$state = $state;
  });
})();
