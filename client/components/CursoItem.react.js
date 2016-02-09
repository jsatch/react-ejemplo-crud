var React = require('react');

var CursoItem = React.createClass({
  propTypes: {
    defaultCurso: React.PropTypes.object,
    eliminarHandler : React.PropTypes.func,
    guardarHandler : React.PropTypes.func
  },
  getInitialState: function() {
    return {
      modo : "listado",
      curso : this.props.defaultCurso
    };
  },
  render: function() {
    var item = null;
    if (this.state.modo === 'listado'){
      item = <li className="list-group-item">
          {this.state.curso.nombre}
          <div className="pull-right">
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"
              onClick={this._cambiarEstadoHandler}></span>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"
              onClick={this.state.eliminarHandler}></span>
          </div>
        </li>;
    }else{
      item = <li className="list-group-item">
          <div className="row">
            <div className="col-md-8">
              <input type='text' className='form-control' value={this.state.curso.nombre}
                onChange={this._onChangeNombre} />
            </div>
            <div className="pull-right">
              <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"
                onClick={this._guardarHandler}></span>
            </div>
          </div>

        </li>;
    }
    return (
      item
    )
  },
  _cambiarEstadoHandler : function(){
    this.setState({
      modo : "edicion"
    });
  },
  _guardarHandler : function(){
    this.props.guardarHandler(this.state.curso);
    this.setState({
      modo : "listado"
    });
  },
  _eliminarHandler : function(){
    this.props.eliminarHandler(curso.id);
  },
  _onChangeNombre : function(event){
    var curso = {
      id : this.state.curso.id,
      nombre : event.target.value
    }
    this.setState({
      curso : curso
    });
  }
});

module.exports = CursoItem;
