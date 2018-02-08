var _ = require("lodash");

module.exports = {
  event: function(contract, filter){
    return new Promise(function(resolve, reject){
      var evt = contract[filter.event]();

      evt.watch();
      evt.get(function(err, logs){
        var log = _.filter(logs, filter);
	if(!_.isEmpty(log)){
          resolve(log);
	} else {
	  throw Error("Failed to find event " + filter.event);
	}
      });

      evt.stopWatching();
    });
  }
}

