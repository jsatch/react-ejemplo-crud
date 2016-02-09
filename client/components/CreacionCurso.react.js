var React = require('react');

var CreacionCurso = React.createClass({
  propTypes: {
    agregarHandler : React.PropTypes.func
  },
  getInitialState: function() {
    return {
      nombre : ''
    };
  },
  render: function() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="periodoTributario">Nuevo curso:
          </label>
          <input type="text" className="form-control" id="periodoTributario"
            onChange={this._onChangeNombre}
            value={this.state.nombre}/>
          <input type="button" className="btn btn-primary" value="+"
            onClick={this._agregarHandler} />
        </div>
      </form>
    );
  },
  _agregarHandler : function(){
    this.props.agregarHandler(this.state.nombre);
    this.setState({nombre : ''});
  },
  _onChangeNombre : function(event) {
    this.setState({
      nombre : event.target.value
    });
  }
});
module.exports = CreacionCurso;
