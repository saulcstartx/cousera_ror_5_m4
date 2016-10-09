(function () {
'use strict';

angular.module('LoaderSpinner', []);

angular.module('LoaderSpinner')
.config(function () {
  console.log("LoaderSpinner config fired.");
}).
run(function () {
  console.log("LoaderSpinner run fired.");
});

})();
