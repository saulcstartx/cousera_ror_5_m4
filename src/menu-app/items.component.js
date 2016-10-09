(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menu-app/views/items.html',
  bindings: {
    elements: '<'
  }
});


})();
