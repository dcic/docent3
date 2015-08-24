(function() {
  'use strict';

  angular
    .module('docent3', ['ngLodash'])
    .controller('Docent3Controller', Docent3Controller);

  /* @ngInject */
  function Docent3Controller($http, d3Data, lodash) {

    var vm = this;
    vm.releases = [];
    vm.test = 'TESTING';
    vm.tileCb = tileCb;
    vm.query = {
      dataset: '',
      cellLine: '',
      perturbagenIds: []
    };
    vm.arguments = {
      networkData: d3Data,
      svgDivId: 'svg-div',
      rowLabel: 'Assays',
      colLabel: 'Cell Lines',
      outerMargins: {
        'top': 'inherit',
        'bottom': 'inherit',
        'left': 'inherit',
        'right': 'inherit'
      },
      opacityScale: 'log',
      inputDomain: 0.1,
      tileColors: ['#6A9CCD', '#ED9124'],
      titleTile: true,
      clickTile: tileCb,
      // 'click_group': click_group_callback
      resize: false,
      order: vm.active,
      transpose: false
    };


    function tileCb(tileInfo) {
      vm.query = {
        dataset: tileInfo.row,
        cellLine: tileInfo.col,
        perturbagenIds: lodash.map(tileInfo.perts, function(pert) {
          return pert._id;
        })
      };
      search();
    }

    function search() {
      $http({
        url: 'http://amp.pharm.mssm.edu/LDR/api/releases/filter',
        method: 'GET',
        params: {
          dataset: vm.query.dataset,
          cellLine: vm.query.cellLine,
          perturbagens: vm.query.perturbagenIds.join(',')
        }
      }).then(function(response) {
        console.log(response);
        vm.releases = response.data;
      });

    }

  }
})();
