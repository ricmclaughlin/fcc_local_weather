(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(geoLocationService, weatherService) {
    var vm = this;
    vm.location = geoLocationService.location;
    activate();

    function activate() {
      getWeatherByLocation();
    }

    function getWeatherByLocation() {
      geoLocationService.getLocation(vm.location).then(weatherService.getWeather(vm.location));
    }

  }
})();
