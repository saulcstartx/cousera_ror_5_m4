(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menu-app/views/categories.html',
  bindings: {
    items: '<'
  }
});


})();
