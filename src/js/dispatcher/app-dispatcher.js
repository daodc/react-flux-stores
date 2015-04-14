var Dispatcher = require("flux").Dispatcher;
var _ = require("underscore");

var AppDispatcher = _.extend(new Dispatcher(), {
    handleViewAction: function(action) {
        console.log('action', action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
});

module.exports = AppDispatcher;