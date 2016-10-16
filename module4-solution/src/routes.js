(function() {
	'use strict';
	angular.module('MenuApp')
		   .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig ($stateProvider, $urlRouterProvider) {
       
      $urlRouterProvider.otherwise('/');

      // *** Set up UI states ***
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
      })
      
      .state('categories', {
        url: '/categories',
        templateUrl: 'templates/categories.template.html',
        controller: 'CategoryController as categoryCtrl',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {              
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/item-detail/{shortName}',
        templateUrl: 'templates/item-detail.template.html',
        controller: "ItemDetailController as itemDetail",
        resolve: {
          list: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {                  
              
              return MenuDataService.getItemsForCategory($stateParams.shortName).then(function (response) {
                console.log(response);
                return response.data.menu_items;                  
              });
            
          }]
        }
      });

   }

})();