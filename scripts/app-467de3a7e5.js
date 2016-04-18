!function(){"use strict";angular.module("app",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ui.bootstrap","app.core"])}(),function(){"use strict";function t(t,e){function n(){o()}function o(){t.getLocation(a.location).then(e.getWeather(a.location))}var a=this;a.location=t.location,n()}t.$inject=["geoLocationService","weatherService"],angular.module("app").controller("MainController",t)}(),function(){"use strict";angular.module("app.core",[])}(),function(){"use strict";function t(t,e){function n(n){return t.get("http://api.openweathermap.org/data/2.5/weather?&units=metric&q="+n.city+","+n.countryCode+"&APPID="+e).success(function(t){n.weatherData=t,n.weatherIcon="http://openweathermap.org/img/w/"+t.weather[0].icon+".png",n.weather=t.weather[0].main,n.tempC=t.main.temp,n.tempF=1.8*n.tempC+32})}var o={getWeather:n};return o}t.$inject=["$http","WEATHER_KEY"],angular.module("app.core").factory("weatherService",t)}(),function(){"use strict";function t(t){function e(e){return t.get("http://ip-api.com/json").success(function(t){e.city=t.city,e.country=t.country,e.countryCode=t.countryCode,e.region=t.region})}var n={tempF:"90",tempC:"90",celsius:!1,city:"",country:"",lat:"","long":"",weather:"",weatherData:"",weatherIcon:"",region:""},o={location:n,getLocation:e};return o}t.$inject=["$http"],angular.module("app.core").factory("geoLocationService",t)}(),function(){"use strict";function t(){}angular.module("app").run(t)}(),function(){"use strict";function t(t){t.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).otherwise({redirectTo:"/"})}t.$inject=["$routeProvider"],angular.module("app").config(t)}(),function(){"use strict";angular.module("app").constant("WEATHER_KEY","ced22edda5ab59a89469af8a36ce60af")}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.defaults.useXDomain=!0,delete e.defaults.headers.common["X-Requested-With"]}t.$inject=["$logProvider","$httpProvider"],angular.module("app").config(t)}(),angular.module("app").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class=container><div class="jumbotron text-center"><h1>Hello fair citizen of {{vm.location.city}}, {{vm.location.region}}</h1><p>Your current temperature is {{vm.location.celsius ? vm.location.tempC : vm.location.tempF}} <i ng-click="vm.location.celsius = !vm.location.celsius"><span ng-show=vm.location.celsius>C</span> <span ng-hide=vm.location.celsius>F</span> </i></p><p>and it is <img src={{vm.location.weatherIcon}} alt=""> ({{vm.location.weather}}) outside!</p></div><div class="box on" ng-show=toggle ng-animate="\'box\'">On</div><p id=footer>Made with <span class=stylish>style</span> by <a href=http://ric.mclaughlin.today>Ric McLaughlin</a></p></div>')}]);
//# sourceMappingURL=../maps/scripts/app-467de3a7e5.js.map
