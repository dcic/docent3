/*eslint camelcase: 0*/

/**
 * @author Michael McDermott
 * Created on 7/20/15.
 */

(function() {
  'use strict';

  angular
    .module('docent3')
    .factory('d3Data', d3Data);

  /* @ngInject */
  function d3Data() {
    return {
      'row_nodes': [{
        'rank': 5,
        'name': 'ATAC-Seq',
        'clust': 8,
        'ini': 10
      }, {
        'rank': 1,
        'name': 'Immunofluorescence',
        'clust': 4,
        'ini': 9
      }, {
        'rank': 0,
        'name': 'KINOMEscan',
        'clust': 6,
        'ini': 8
      }, {
        'rank': 9,
        'name': 'L1000',
        'clust': 7,
        'ini': 7
      }, {
        'rank': 2,
        'name': 'MS Proteomics',
        'clust': 2,
        'ini': 6
      }, {
        'rank': 6,
        'name': 'P100',
        'clust': 9,
        'ini': 5
      }, {
        'rank': 8,
        'name': 'RNA-Seq',
        'clust': 0,
        'ini': 4
      }, {
        'rank': 4,
        'name': 'RPPA',
        'clust': 5,
        'ini': 3
      }, {
        'rank': 3,
        'name': 'SWATH-MS',
        'clust': 3,
        'ini': 2
      }, {
        'rank': 7,
        'name': 'Viability',
        'clust': 1,
        'ini': 1
      }],
      'col_nodes': [{
        'rank': 13,
        'name': '83iSMA-n5',
        'clust': 32,
        'ini': 34
      }, {
        'rank': 29,
        'name': 'A375',
        'clust': 7,
        'ini': 33
      }, {
        'rank': 30,
        'name': 'A549',
        'clust': 8,
        'ini': 32
      }, {
        'rank': 1,
        'name': 'C32',
        'clust': 18,
        'ini': 31
      }, {
        'rank': 9,
        'name': 'COLO858',
        'clust': 12,
        'ini': 30
      }, {
        'rank': 14,
        'name': 'CS00iCTR-n2',
        'clust': 33,
        'ini': 29
      }, {
        'rank': 15,
        'name': 'CS13iSMA-n1',
        'clust': 31,
        'ini': 28
      }, {
        'rank': 16,
        'name': 'CS14iCTR-n6',
        'clust': 30,
        'ini': 27
      }, {
        'rank': 17,
        'name': 'CS25iCTR-18n2',
        'clust': 29,
        'ini': 26
      }, {
        'rank': 18,
        'name': 'CS28iALS-n2A',
        'clust': 28,
        'ini': 25
      }, {
        'rank': 19,
        'name': 'CS29iALS-n1N',
        'clust': 27,
        'ini': 24
      }, {
        'rank': 20,
        'name': 'CS30iALS-n1A',
        'clust': 26,
        'ini': 23
      }, {
        'rank': 21,
        'name': 'CS32iSMA-n3',
        'clust': 25,
        'ini': 22
      }, {
        'rank': 22,
        'name': 'CS52iALS-n6A',
        'clust': 24,
        'ini': 21
      }, {
        'rank': 23,
        'name': 'CS77iSMA-n5',
        'clust': 23,
        'ini': 20
      }, {
        'rank': 24,
        'name': 'CS83iCTR-33n1',
        'clust': 22,
        'ini': 19
      }, {
        'rank': 26,
        'name': 'HA1E',
        'clust': 3,
        'ini': 18
      }, {
        'rank': 2,
        'name': 'HME1',
        'clust': 20,
        'ini': 17
      }, {
        'rank': 27,
        'name': 'HPAC',
        'clust': 4,
        'ini': 16
      }, {
        'rank': 28,
        'name': 'HT29',
        'clust': 2,
        'ini': 15
      }, {
        'rank': 3,
        'name': 'K2',
        'clust': 19,
        'ini': 14
      }, {
        'rank': 10,
        'name': 'LOXIMVI',
        'clust': 13,
        'ini': 13
      }, {
        'rank': 31,
        'name': 'MCF7',
        'clust': 6,
        'ini': 12
      }, {
        'rank': 4,
        'name': 'MDAMB231',
        'clust': 21,
        'ini': 11
      }, {
        'rank': 5,
        'name': 'MMACSF',
        'clust': 17,
        'ini': 10
      }, {
        'rank': 6,
        'name': 'MZ7MEL',
        'clust': 16,
        'ini': 9
      }, {
        'rank': 25,
        'name': 'NPC',
        'clust': 1,
        'ini': 8
      }, {
        'rank': 32,
        'name': 'PC3',
        'clust': 5,
        'ini': 7
      }, {
        'rank': 33,
        'name': 'Promocell myocytes',
        'clust': 9,
        'ini': 6
      }, {
        'rank': 7,
        'name': 'RVH421',
        'clust': 15,
        'ini': 5
      }, {
        'rank': 8,
        'name': 'SKMEL28',
        'clust': 14,
        'ini': 4
      }, {
        'rank': 11,
        'name': 'WM115',
        'clust': 11,
        'ini': 3
      }, {
        'rank': 12,
        'name': 'WM1552C',
        'clust': 10,
        'ini': 2
      }, {
        'rank': 0,
        'name': 'cell-free',
        'clust': 0,
        'ini': 1
      }],
      'links': [{
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'tranche2'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': '1271738-62-5 (MI-2)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'entinostat (MS275)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ-5676'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ-5687'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ004777'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EX527'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'trichostatin-a'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC0321'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC0646'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC1215'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'zebularine'
        }],
        'source': 0,
        'target': 1,
        'value': 32.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'tranche2'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': '1271738-62-5 (MI-2)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'entinostat (MS275)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ-5676'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ-5687'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ004777'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EX527'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'trichostatin-a'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC0321'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC0646'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC1215'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'zebularine'
        }],
        'source': 0,
        'target': 2,
        'value': 32.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'tranche2'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': '1271738-62-5 (MI-2)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'entinostat (MS275)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ-5676'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ-5687'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ004777'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EX527'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'trichostatin-a'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC0321'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC0646'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC1215'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'zebularine'
        }],
        'source': 0,
        'target': 22,
        'value': 32.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'tranche2'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': '1271738-62-5 (MI-2)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'entinostat (MS275)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ-5676'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ-5687'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ004777'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EX527'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'trichostatin-a'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC0321'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC0646'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC1215'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'zebularine'
        }],
        'source': 0,
        'target': 26,
        'value': 32.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'tranche2'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': '1271738-62-5 (MI-2)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'entinostat (MS275)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ-5676'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ-5687'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EPZ004777'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'EX527'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'trichostatin-a'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC0321'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC0646'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'UNC1215'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd72',
          'name': 'zebularine'
        }],
        'source': 0,
        'target': 27,
        'value': 32.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'JNK-IN-8'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'Vemurafenib + JNK-IN-8'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'Vemurafenib'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'EGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'PDGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'NRG'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'IGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'FGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'HGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'TGF-Beta'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'TNF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd20',
          'name': 'Vemurafenib'
        }],
        'source': 1,
        'target': 4,
        'value': 3.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'JNK-IN-8'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'Vemurafenib + JNK-IN-8'
        }],
        'source': 1,
        'target': 21,
        'value': 3.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'JNK-IN-8'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'Vemurafenib + JNK-IN-8'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'Vemurafenib'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'EGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'PDGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'NRG'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'IGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'FGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'HGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'TGF-Beta'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1d',
          'name': 'TNF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd20',
          'name': 'Vemurafenib'
        }],
        'source': 1,
        'target': 31,
        'value': 3.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'JNK-IN-8'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb0',
          'name': 'Vemurafenib + JNK-IN-8'
        }],
        'source': 1,
        'target': 32,
        'value': 3.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb4',
          'name': 'ZSTK474'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb6',
          'name': 'MPS-1-IN-1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcb8',
          'name': 'Ibrutinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcba',
          'name': 'TGX221'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcbc',
          'name': 'BGJ398'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcbe',
          'name': 'CGP082996'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcc0',
          'name': 'Baricitinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfcc2',
          'name': 'MRT67307'
        }],
        'source': 2,
        'target': 33,
        'value': 8.0
      }, {
        'info': [{
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KRAS'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KRAS'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'zebularine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'zebularine'
        }],
        'source': 3,
        'target': 1,
        'value': 86.0
      }, {
        'info': [{
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KRAS'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KRAS'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'zebularine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'zebularine'
        }],
        'source': 3,
        'target': 2,
        'value': 86.0
      }, {
        'info': [{
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KRAS'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KRAS'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'zebularine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'zebularine'
        }],
        'source': 3,
        'target': 16,
        'value': 86.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'zebularine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'zebularine'
        }],
        'source': 3,
        'target': 18,
        'value': 86.0
      }, {
        'info': [{
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KRAS'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KRAS'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'zebularine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'zebularine'
        }],
        'source': 3,
        'target': 19,
        'value': 86.0
      }, {
        'info': [{
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KRAS'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KRAS'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'zebularine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'zebularine'
        }],
        'source': 3,
        'target': 22,
        'value': 86.0
      }, {
        'info': [{
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc49',
          'name': 'KRAS'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFP(control)'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'EGFR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MUC1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BRAF'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MTOR'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AKT2'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'AURKB'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'BIRC5'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MCL1'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'MYL9'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERBB3'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'ERG'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PDGFA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'PIK3CA'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'CXCR4'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KIT'
        }, {
          'release': false,
          '_id': '55a95fef00bce706c3cdfc4b',
          'name': 'KRAS'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc79',
          'name': 'zebularine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'alpha-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'beta-estradiol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'BIX 01338'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'entinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fluphezine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'fulvestrant'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'genistein'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'Mitoxantrone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'monorden'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'sirolimus'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tanespamycin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'thioridazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'tretinoin (atra)'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trichostatin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'trifluoperazine'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'troglitazone'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0321'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc0646'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'unc1215'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'valproic acid'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'withaferin a'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'wortmannin'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc7b',
          'name': 'zebularine'
        }],
        'source': 3,
        'target': 27,
        'value': 86.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 0,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 5,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 6,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 7,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 8,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 9,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 10,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 11,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 12,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 13,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 14,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfd9d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9e',
          'name': 'amyotrophic lateral sclerosis'
        }],
        'source': 4,
        'target': 15,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'tranche2'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': '1271738-62-5 (MI-2)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'entinostat (MS275)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ-5676'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ-5687'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ004777'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EX527'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'trichostatin-a'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC0321'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC0646'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC1215'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'zebularine'
        }],
        'source': 5,
        'target': 1,
        'value': 32.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'tranche2'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': '1271738-62-5 (MI-2)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'entinostat (MS275)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ-5676'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ-5687'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ004777'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EX527'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'trichostatin-a'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC0321'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC0646'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC1215'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'zebularine'
        }],
        'source': 5,
        'target': 2,
        'value': 32.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'tranche2'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': '1271738-62-5 (MI-2)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'entinostat (MS275)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ-5676'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ-5687'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ004777'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EX527'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'trichostatin-a'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC0321'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC0646'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC1215'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'zebularine'
        }],
        'source': 5,
        'target': 22,
        'value': 32.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'tranche2'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': '1271738-62-5 (MI-2)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'entinostat (MS275)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ-5676'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ-5687'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ004777'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EX527'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'trichostatin-a'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC0321'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC0646'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC1215'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'zebularine'
        }],
        'source': 5,
        'target': 26,
        'value': 32.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'tranche2'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': '1271738-62-5 (MI-2)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'acetyldiline (Ci-994)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'belinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'BIX 01294'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'CPI-169'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'decitabine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'DMSO'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'entinostat (MS275)'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ-5676'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ-5687'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EPZ004777'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'EX527'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'geldamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK-J4'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK1210151A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'gsk126'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'GSK525762A'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'jq1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'LY-294002'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'methylstat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'OSI-027'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'rapamycin'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'resveratrol'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'salermide'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'staurosporine'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'trichostatin-a'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC0321'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC0646'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'UNC1215'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'vorinostat'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd6f',
          'name': 'zebularine'
        }],
        'source': 5,
        'target': 27,
        'value': 32.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 0,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 5,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 6,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 7,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 8,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 9,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 10,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 11,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 12,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 13,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 14,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd96',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd97',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd98',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd99',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfd9a',
          'name': 'L-glutamate'
        }],
        'source': 6,
        'target': 15,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Afatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Axitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Bosutinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cabozantinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Ceritinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Crizotinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Dabrafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Dasatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Erlotinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Gefitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Imatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Lapatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Nilotinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Pazopanib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'ponatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Regorafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Ruxolitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Tofacitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trametinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Vandetanib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab + Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab + Loperamide'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab + Domperidone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Domperidone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Loparemide'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Prednisolone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Entecavir'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Diethylpropion'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Olmesartan'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorefenib + Diclofenac'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Dasatinib + Cytarabine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Erlotinib + Cefuroxime'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Imatinib + Cyclosporine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Loperamide'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Domperidone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Prednisolone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Entecavir'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Diethylpropion'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Olmesartan'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Diclofenac'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cytarabine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cefuroxime'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cyclosporine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Afatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Axitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Bosutinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cabozantinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Ceritinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Crizotinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Dabrafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Dasatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Erlotinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Gefitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Imatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Lapatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Nilotinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Pazopanib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'ponatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Regorafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Ruxolitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Tofacitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trametinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Vandetanib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab + Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab + Loperamide'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab + Domperidone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Domperidone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Loparemide'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Prednisolone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Entecavir'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Diethylpropion'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Olmesartan'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorefenib + Diclofenac'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Dasatinib + Cytarabine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Erlotinib + Cefuroxime'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Imatinib + Cyclosporine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Loperamide'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Domperidone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Prednisolone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Entecavir'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Diethylpropion'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Olmesartan'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Diclofenac'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cytarabine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cefuroxime'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cyclosporine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Afatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Axitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Bosutinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cabozantinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Ceritinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Crizotinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Dabrafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Dasatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Erlotinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Gefitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Imatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Lapatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Nilotinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Pazopanib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'ponatinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Regorafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Ruxolitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Tofacitinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trametinib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Vandetanib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab + Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab + Loperamide'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Trastuzumab + Domperidone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Domperidone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Loparemide'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sunitinib + Prednisolone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Entecavir'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Diethylpropion'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorafenib + Olmesartan'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Sorefenib + Diclofenac'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Dasatinib + Cytarabine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Erlotinib + Cefuroxime'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Imatinib + Cyclosporine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Ursodeoxycholic acid'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Loperamide'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Domperidone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Prednisolone'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Entecavir'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Diethylpropion'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Olmesartan'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Diclofenac'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cytarabine'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cefuroxime'
        }, {
          'release': true,
          '_id': '55a95fed00bce706c3cdfc15',
          'name': 'Cyclosporine'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Afatinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Axitinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Bosutinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Cabozantinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Ceritinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Crizotinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Dabrafenib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Dasatinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Erlotinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Gefitinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Imatinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Lapatinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Nilotinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Pazopanib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'ponatinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Regorafenib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Ruxolitinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sorafenib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sunitinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Tofacitinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Trametinib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Vandetanib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Vemurafenib'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Trastuzumab'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Trastuzumab + Ursodeoxycholic acid'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Trastuzumab + Loperamide'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Trastuzumab + Domperidone'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sunitinib + Ursodeoxycholic acid'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sunitinib + Domperidone'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sunitinib + Loparemide'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sunitinib + Prednisolone'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sorafenib + Ursodeoxycholic acid'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sorafenib + Entecavir'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sorafenib + Diethylpropion'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sorafenib + Olmesartan'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Sorefenib + Diclofenac'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Dasatinib + Cytarabine'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Erlotinib + Cefuroxime'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Imatinib + Cyclosporine'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Ursodeoxycholic acid'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Loperamide'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Domperidone'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Prednisolone'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Entecavir'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Diethylpropion'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Olmesartan'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Diclofenac'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Cytarabine'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Cefuroxime'
        }, {
          'release': false,
          '_id': '55a95fed00bce706c3cdfc1f',
          'name': 'Cyclosporine'
        }],
        'source': 6,
        'target': 28,
        'value': 150.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'SB590885'
        }],
        'source': 7,
        'target': 3,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'SB590885'
        }],
        'source': 7,
        'target': 4,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'SB590885'
        }],
        'source': 7,
        'target': 20,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'SB590885'
        }],
        'source': 7,
        'target': 21,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'SB590885'
        }],
        'source': 7,
        'target': 24,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'SB590885'
        }],
        'source': 7,
        'target': 25,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'SB590885'
        }],
        'source': 7,
        'target': 29,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'SB590885'
        }],
        'source': 7,
        'target': 30,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'SB590885'
        }],
        'source': 7,
        'target': 31,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfca5',
          'name': 'SB590885'
        }],
        'source': 7,
        'target': 32,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 0,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 5,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 6,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 7,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 8,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 9,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 10,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 11,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 12,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 13,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 14,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff400bce706c3cdfda0',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfda1',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc6',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff400bce706c3cdfdc7',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff500bce706c3cdfdc9',
          'name': 'stimulation A-N'
        }],
        'source': 8,
        'target': 15,
        'value': 2.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 0,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'SB590885'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'Vemurafenib'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'EGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'PDGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'NRG'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'IGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'FGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'HGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'TGF-Beta'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'TNF'
        }],
        'source': 9,
        'target': 3,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'SB590885'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'Vemurafenib'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'EGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'PDGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'NRG'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'IGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'FGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'HGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'TGF-Beta'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'TNF'
        }],
        'source': 9,
        'target': 4,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 5,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 6,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 7,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 8,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 9,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 10,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 11,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 12,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 13,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 14,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd85',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd86',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd87',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd8c',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8d',
          'name': 'L-glutamate'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd8e',
          'name': 'L-glutamate'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'spinal muscular atrophy'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': true,
          '_id': '55a95ff300bce706c3cdfd91',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd92',
          'name': 'tunicamycin'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'spinal muscular atrophy'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'amyotrophic lateral sclerosis'
        }, {
          'release': false,
          '_id': '55a95ff300bce706c3cdfd93',
          'name': 'tunicamycin'
        }],
        'source': 9,
        'target': 15,
        'value': 8.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff200bce706c3cdfd39',
          'name': 'GDC0941'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd39',
          'name': 'MK2206'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd39',
          'name': 'WYE125132'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd39',
          'name': 'Torin1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd39',
          'name': 'PD0325901'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd3b',
          'name': 'GDC0941'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd3b',
          'name': 'MK2206'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd3b',
          'name': 'WYE125132'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd3b',
          'name': 'Torin1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd3b',
          'name': 'PD0325901'
        }, {
          'release': false,
          '_id': '55a95ff200bce706c3cdfd3c',
          'name': 'GDC0941'
        }, {
          'release': false,
          '_id': '55a95ff200bce706c3cdfd3c',
          'name': 'MK2206'
        }, {
          'release': false,
          '_id': '55a95ff200bce706c3cdfd3c',
          'name': 'WYE125132'
        }, {
          'release': false,
          '_id': '55a95ff200bce706c3cdfd3c',
          'name': 'Torin1'
        }, {
          'release': false,
          '_id': '55a95ff200bce706c3cdfd3c',
          'name': 'PD0325901'
        }],
        'source': 9,
        'target': 17,
        'value': 10.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'SB590885'
        }],
        'source': 9,
        'target': 20,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'SB590885'
        }],
        'source': 9,
        'target': 21,
        'value': 5.0
      }, {
        'info': [{
          'release': false,
          '_id': '55a95ff200bce706c3cdfd2f',
          'name': '106 compounds'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd39',
          'name': 'GDC0941'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd39',
          'name': 'MK2206'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd39',
          'name': 'WYE125132'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd39',
          'name': 'Torin1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd39',
          'name': 'PD0325901'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd3b',
          'name': 'GDC0941'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd3b',
          'name': 'MK2206'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd3b',
          'name': 'WYE125132'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd3b',
          'name': 'Torin1'
        }, {
          'release': true,
          '_id': '55a95ff200bce706c3cdfd3b',
          'name': 'PD0325901'
        }, {
          'release': false,
          '_id': '55a95ff200bce706c3cdfd3c',
          'name': 'GDC0941'
        }, {
          'release': false,
          '_id': '55a95ff200bce706c3cdfd3c',
          'name': 'MK2206'
        }, {
          'release': false,
          '_id': '55a95ff200bce706c3cdfd3c',
          'name': 'WYE125132'
        }, {
          'release': false,
          '_id': '55a95ff200bce706c3cdfd3c',
          'name': 'Torin1'
        }, {
          'release': false,
          '_id': '55a95ff200bce706c3cdfd3c',
          'name': 'PD0325901'
        }],
        'source': 9,
        'target': 23,
        'value': 10.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'SB590885'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'Vemurafenib'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'EGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'PDGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'NRG'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'IGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'FGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'HGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'TGF-Beta'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'TNF'
        }],
        'source': 9,
        'target': 24,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'SB590885'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'Vemurafenib'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'EGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'PDGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'NRG'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'IGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'FGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'HGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'TGF-Beta'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'TNF'
        }],
        'source': 9,
        'target': 25,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'SB590885'
        }],
        'source': 9,
        'target': 29,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'SB590885'
        }],
        'source': 9,
        'target': 30,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'SB590885'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'Vemurafenib'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'EGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'PDGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'NRG'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'IGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'FGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'HGF'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'TGF-Beta'
        }, {
          'release': false,
          '_id': '55a95ff100bce706c3cdfd1e',
          'name': 'TNF'
        }],
        'source': 9,
        'target': 31,
        'value': 5.0
      }, {
        'info': [{
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'AZ628'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Selumetinib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'Vemurafenib'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'PLX4720'
        }, {
          'release': true,
          '_id': '55a95ff000bce706c3cdfc8e',
          'name': 'SB590885'
        }],
        'source': 9,
        'target': 32,
        'value': 5.0
      }]
    };
  }
})();
