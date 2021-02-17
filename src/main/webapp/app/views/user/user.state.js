(function (angular) {
    'use strict';
    
    angular
        .module('GitAppApplication')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('user', {
            parent: 'views',
            url: '/user',
            views: {
                'content@': {
                    templateUrl: 'app/views/user/user.html',
                    controller: 'userController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})(angular);
