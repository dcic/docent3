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
      perturbagens: []
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
      do_zoom: false,
      row_callback: rowCallback,
      col_callback: colCallback,
      tile_colors: ['#6A9CCD', '#ED9124'],
      title_tile: true,
      click_tile: tileCb,
      // 'click_group': click_group_callback
      resize: false,
      order: vm.active,
      zoom: false,
      super_font_size: '24px'
    };

    function rowCallback(rowLabel) {
      vm.query = isTransposed()
        ? { cellLine: rowLabel }
        : { dataset: rowLabel };
      search();
    }

    function colCallback(colLabel) {
      vm.query = isTransposed()
        ? { dataset: colLabel }
        : { cellLine: colLabel };
      search();
    }

    function isTransposed() {
      var winWidth = angular.element(window).width();
      return (winWidth < 992 && winWidth > 768);
    }

    function tileCb(tileInfo) {
      var pertIds = lodash.map(tileInfo.perts, function(pert) {
        return pert._id;
      });
      vm.query = {
        dataset: tileInfo.row,
        cellLine: tileInfo.col,
        perturbagens: pertIds.join(',')
      };
      search();
    }

    function search(params) {
      $http({
        url: 'http://amp.pharm.mssm.edu/LDR/api/releases/filter',
        method: 'GET',
        params: vm.query
      }).then(function(response) {
        console.log(response);
        vm.releases = response.data;
      });

    }

  }
})();
