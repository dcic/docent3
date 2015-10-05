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
      var clustergram;

      function setOrder(orderString) {
        vm.active = orderString;
        if (clustergram) {
          clustergram.reorder(orderString);
        } else {
          clustergram = d3Clust.clustergram(vm.arguments);
          clustergram.reorder(orderString);
        }
      }

      function renderClust() {
        var winWidth = angular.element(window).width();
        vm.arguments.transpose = (winWidth < 992 && winWidth > 550);
        clustergram = d3Clust.clustergram(vm.arguments);
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
