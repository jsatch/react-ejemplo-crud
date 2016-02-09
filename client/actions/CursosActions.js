var CursosDispatcher = require('../dispatchers/CursosDispatcher');
var CursosConstants = require('../constants/CursosConstants');

var CursosActions = {
  listarCursos : function(){
    CursosDispatcher.handleServerAction({
      actionType :CursosConstants.LISTAR_CURSOS
    });
  },
  agregarCurso : function(curso){
    CursosDispatcher.handleViewAction({
      actionType :CursosConstants.AGREGAR_CURSO,
      curso : curso
    });
  },
  modificarCurso : function(curso){
    CursosDispatcher.handleViewAction({
      actionType :CursosConstants.MODIFICAR_CURSO,
      curso : curso
    });
  },
  eliminarCurso : function(id){
    CursosDispatcher.handleViewAction({
      actionType :CursosConstants.ELIMINAR_CURSO,
      id : id
    });
  }
};

module.exports = CursosActions;
