(function () {
  'use strict';

  angular
    .module('fccLocalWeather')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // Set options third-party lib

  }

})();
