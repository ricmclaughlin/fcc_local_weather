(function() {
  'use strict';

  angular
    .module('fccLocalWeather')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
