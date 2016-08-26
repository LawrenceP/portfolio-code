angular.
  module('frenchQuiz').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<french-quiz-questions></french-quiz-questions>'
        }).
        when('/about', {
          template: '<about></about>'
        }).
        when('/contact', {
          template: '<contact></contact>'
        }).
        otherwise('/');
    }
  ]);
