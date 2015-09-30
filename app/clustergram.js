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
    function ClustergramController(d3Clust) {
      var vm = this;
      vm.setOrder = setOrder;
      vm.active = 'clust';

      function setOrder(orderString) {
        vm.active = orderString;
        d3Clust.reorder(orderString);
      }

      function renderClust() {
        var winWidth = angular.element(window).width();
        vm.arguments.transpose = (winWidth < 992 && winWidth > 768);
        d3Clust.clustergram(vm.arguments);
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
