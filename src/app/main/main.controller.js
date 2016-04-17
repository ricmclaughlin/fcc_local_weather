(function () {
  'use strict';

  angular
    .module('fccLocalWeather')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, WEATHER_KEY) {
    var vm = this;
    vm.tempF = '90';
    vm.tempC = '90';
    vm.celsius = false;
    vm.city = '';
    vm.country = '';
    vm.lat = '';
    vm.long = '';
    vm.weather = '';
    vm.weatherData = '';
    vm.weatherIcon = '';
    activate();

    function activate() {
      getLocation();

    }

    function getLocation() {
      $http.get('http://ip-api.com/json')
        .success(function (coordinates) {
          vm.city = coordinates.city;
          vm.country = coordinates.country;
          vm.countryCode = coordinates.countryCode;
          getWeather();
        });
    }

    function getWeather() {
      $http.get('http://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + vm.city + ',' + vm.countryCode + '&APPID=' + WEATHER_KEY).success(function (weatherData) {
        vm.weatherData = weatherData;
        vm.weatherIcon = 'http://openweathermap.org/img/w/' + weatherData['weather'][0].icon + '.png';
        vm.weather = weatherData['weather'][0].main;
        vm.tempC = weatherData['main'].temp;
        vm.tempF = (vm.tempC * (9 / 5)) + 32;
      });
    }
  }
})();
