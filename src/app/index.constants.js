/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('fccLocalWeather')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
