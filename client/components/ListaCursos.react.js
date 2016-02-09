var React = require('react');
var CursoItem = require('./CursoItem.react');

var ListaCursos = React.createClass({
  propTypes: {
    cursos: React.PropTypes.array,
    eliminarHandler : React.PropTypes.func,
    guardarHandler : React.PropTypes.func
  },
  getInitialState: function() {
    return {
      modo : 'edicion'
    };
  },
  render: function() {
    var listadoCursosElements = null;
    if (this.props.cursos.length === 0){
      listadoCursosElements = <div className="alert alert-info" role="alert">
        No hay cursos</div>;
    }else {
      var thiz = this;
      listadoCursosElements = <ul className="list-group">
        {
          this.props.cursos.map(function(curso){
            return (
              <CursoItem
                key={curso.id}
                defaultCurso={curso}
                eliminarHandler={thiz.props.eliminarHandler}
                guardarHandler={thiz.props.guardarHandler} />
            )
          })
        }
      </ul>;
    }

    return (
      listadoCursosElements
    )
  }
});
module.exports = ListaCursos;
