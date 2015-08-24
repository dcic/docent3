/**
 * @author Michael McDermott
 * Created on 7/28/15.
 */

(function() {
  'use strict';
  angular
    .module('docent3')
    .directive('clustergram', clustergramDir);

  function clustergramDir() {
    return {
      restrict: 'E',
      scope: {
        arguments: '='
      },
      templateUrl: 'clustergram.html',
      controller: ClustergramController,
      controllerAs: 'vm',
      bindToController: true
    };

    /* @ngInject */
    function ClustergramController($scope, d3Clust) {
      var vm = this;
      vm.setOrder = setOrder;
      vm.active = 'clust';

      function setOrder(orderString) {
        vm.active = orderString;
        d3Clust.reorder(orderString);
      }

      function renderClust() {
        if (angular.element(window).width() > 768) {
          vm.arguments.transpose = false;
          d3Clust.makeClust(vm.arguments);
        } else if (angular.element(window).width() < 768 &&
          angular.element(window).width() > 580) {
          vm.arguments.transpose = true;
          d3Clust.makeClust(vm.arguments);
        }
      }


      var runIt;
      angular.element(window).resize(function() {
        clearTimeout(runIt);
        runIt = setTimeout(renderClust(), 100);
      });

      renderClust();
    }
  }
}());
