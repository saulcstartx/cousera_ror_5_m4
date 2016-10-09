(function () {
  'use strict';

  angular.module('Data')
  .service('MenuDataService', MenuDataService);

  // ###########   Services   ###########
  // ####################################
  MenuDataService.$inject = ['$http', 'CONFDATA'];
  function MenuDataService($http, CONFDATA) {
    var service = this;
    service._baseUrl = CONFDATA.url;

    // Public declarations
    service.getAllCategories    = getAllCategories;
    service.getItemsForCategory = getItemsForCategory;

    // Methods

    function getAllCategories() {
      return $http({
          method:  'GET',
          url:     service._baseUrl + '/categories.json'
        });
    }

    function getItemsForCategory(categoryShortName) {
      return $http({
          method:  'GET',
          params: {category: categoryShortName},
          url:     service._baseUrl + '/menu_items.json'
        });
    }

  }
})();
