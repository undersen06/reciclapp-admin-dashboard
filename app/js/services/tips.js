'use strict';

(function() {
  this.app.factory('$Tips', ['$http', '$q', 'ENV',
  function($http, $q, ENV, StorageUserService){


    return {
      getTips: function() {
        let defer = $q.defer();
        $http({
          url: ENV.LOCAL + ENV.GET_REGIONS,
          method: 'GET'
        }).then(function(_response) {
          defer.resolve(_response);

        }, function(_error) {
          defer.reject(_error);
        });
        return defer.promise;
      }

    }
  }]);
}).call(this);
