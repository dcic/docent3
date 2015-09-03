/*eslint camelcase: 0*/

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
      network_data: d3Data,
      svg_div_id: 'svg-div',
      row_label: 'Assays',
      col_label: 'Cell Lines',
      outer_margins: {
        'top': 'inherit',
        'bottom': 'inherit',
        'left': 'inherit',
        'right': 'inherit'
      },
      opacity_scale: 'log',
      input_domain: 0.1,
      tile_colors: ['#6A9CCD', '#ED9124'],
      title_tile: true,
      click_tile: tileCb,
      // 'click_group': click_group_callback
      resize: false,
      order: vm.active,
      transpose: false,
      zoom: false,
      super_font_size: '24px'
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
        vm.releases = response.data;
      });

    }

  }
})();
