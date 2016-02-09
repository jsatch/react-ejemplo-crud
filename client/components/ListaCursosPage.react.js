var React = require('react');
var CreacionCurso = require('./CreacionCurso.react');
var ListaCursos = require('./ListaCursos.react');
var CursosStore = require('../stores/CursosStore');
var CursosActions = require('../actions/CursosActions');

var ListaCursosPage = React.createClass({
  getInitialState: function() {
    return {
      cursos : [{id : 1, nombre : 'Taller Bluemix'}]
    };
  },
  componentDidMount: function() {
    CursosStore.addChangeListener(this._onChange);
    CursosActions.listarCursos();
  },
  componentWillUnmount: function() {
    CursosStore.removeChangeListener(this._onChange);
  },
  render : function(){
    return (
      <div className="container">
        <h1>Mantenimiento de Cursos</h1>
        <CreacionCurso agregarHandler={this.agregarHandler}/>
        <ListaCursos
          cursos={this.state.cursos}
          eliminarHandler={this.eliminarHandler}
          guardarHandler={this.guardarHandler}/>
      </div>
    )
  },
  _onChange : function(){
    this.setState({
      cursos : CursosStore.getCursos()
    });
  },
  eliminarHandler : function(cursoId){
    console.log('Se eliminara: ' + cursoId);
  },
  guardarHandler : function(curso){
    console.log('Se guardara: ' + curso.nombre);
  },
  agregarHandler : function(nombre){
    console.log('Se guardara: ' +  nombre);
    CursosActions.agregarCurso({id:1, nombre: nombre});
  }
});

module.exports = ListaCursosPage;
