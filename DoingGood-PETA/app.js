/**
 * Created by Mindstix laptop7 on 06-Apr-15.
 */

var app = angular.module('tnyApp', ['ui.router', 'ngCookies','ui.bootstrap.datetimepicker']);

app.config(function($stateProvider, $urlRouterProvider)
{
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
         
        .state("/", {
            url: "/",
            templateUrl: "views/login.html",
            controller: 'LoginCtrl'
        })

        .state('/dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        })

        .state("/dashboard.category", {
            url:'/category',
            templateUrl: 'views/category.html',
            controller: 'CategoryCtrl'
        })

        .state("/dashboard.publishContent", {
            url: '/publishContent',
            templateUrl: 'views/publishContent.html',
            controller: 'PublishContentCtrl'
        })

        .state("/dashboard.content", {
            url: '/content',
            templateUrl: 'views/content.html',
            controller: 'ContentCtrl'
        })  

        .state("/dashboard.sponsors", {
            url: '/sponsors',
            templateUrl: 'views/sponsors.html',
            controller: 'SponsorsCtrl'
        })       
});

