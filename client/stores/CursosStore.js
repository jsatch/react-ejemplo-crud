var CursosDispatcher = require('../dispatchers/CursosDispatcher');
var CursosConstants = require('../constants/CursosConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require('request');

var CHANGE_EVENT = 'change';

var _cursos = [];

var CursosStore = assign({},
  EventEmitter.prototype,
  {
    getCursos : function(){
      return _cursos;
    },
    emitChange : function() {
      this.emit(CHANGE_EVENT);
    },
    addChangeListener : function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }
);

CursosDispatcher.register(function(action){
  switch(action.action.actionType){
    case CursosConstants.LISTAR_CURSOS:
      CursosStore.emitChange();
      /*request.get('http://evaluando.herokuapp.com/evaluation', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          _evaluations = JSON.parse(body).evaluations;
          CursosStore.emitChange();
        }
      });*/

    break;
    case CursosConstants.AGREGAR_CURSO:
      var curso = action.action.curso;
      _cursos.push(curso);
      CursosStore.emitChange();
      /*request.get('http://evaluando.herokuapp.com/evaluation' + queryParams ,
        function (error, response, body) {
          if (!error && response.statusCode == 200) {
            // ...
            CursosStore.emitChange();
          }
        }
      );*/
    break;
    case CursosConstants.MODIFICAR_CURSO:
      var curso = action.action.curso;
      request.get('http://evaluando.herokuapp.com/term', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          //_terms = JSON.parse(body).terms;
          CursosStore.emitChange();
        }
      });
    break;
    case CursosConstants.ELIMINAR_CURSO:
      var id = action.action.id;
      request.get('http://evaluando.herokuapp.com/term', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          /* ... */
          CursosStore.emitChange();
        }
      });
    break;
    default:
      // no op
  }
});

module.exports = CursosStore;
