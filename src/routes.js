(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu-app/views/home.html'
  })

  // Premade list page
  .state('categoryList', {
    url: '/categories',
    templateUrl: 'src/menu-app/views/category-list.html',
    controller: 'CategoryListController as categoryList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories().then(
          function (resp) {
            return resp.data;
          },
          function (err) {
            return [];
          }
        );
      }]
    }
  })

  .state('categoryList.itemList', {
    url: '/items/{categoryId}',
    templateUrl: 'src/menu-app/views/item-list.html',
    controller: "ItemListController as itemList",
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryId).then(
          function (resp) {
            return resp.data.menu_items;
          },
          function (err) {
            return [];
          }
        );
      }]
    }
  });

}

})();
