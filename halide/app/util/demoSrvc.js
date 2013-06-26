// Generated by CoffeeScript 1.6.3
(function() {
  angular.module("demoService", ['metaService']).factory("DemoService", [
    '$http', 'MetaConstants', function($http, MetaConstants) {
      return {
        call: function($scope, action) {
          var base;
          base = MetaConstants.baseUrl;
          return $http.get("" + base + "/demo").success(function(data, status, headers, config) {
            console.log("DemoService " + action + " success");
            console.log(config);
            console.log(status);
            console.log(headers());
            console.log(data);
            return true;
          }).error(function(data, status, headers, config) {
            console.log("DemoService failure");
            console.log(config);
            console.log(status);
            console.log(headers());
            console.log(data);
            $scope.errorMsg = (data != null ? data.error : void 0) || data;
            return true;
          });
        }
      };
    }
  ]);

}).call(this);