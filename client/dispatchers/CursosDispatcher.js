var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var CursosDispatcher = assign(
  new Dispatcher(),
  {
    handleViewAction : function(action){
      this.dispatch({
        source : 'VIEW_ACTION',
        action : action
      });
    },
    handleServerAction : function(action){
      this.dispatch({
        source : 'SERVER_ACTION',
        action : action
      });
    }
  }
);

module.exports = CursosDispatcher;
