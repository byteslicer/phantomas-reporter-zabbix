/**
 * Reporter for zabbix using zabbix_sender
 * --reporter zabbix
 *
 * Options:
 *  --zabbix-server <server>
 *  --zabbix-port <port>
 *  --zabbix-hostname <zabbix-host>
 */
'use strict';

var ZabbixSender = require('zabbix-sender');

module.exports = function(results, reporterOptions, options) {
	var params = {};

	// -R zabbix:<server>:<port>:<hostname>
	if (reporterOptions.length > 0) {
		options['zabbix-server'] = reporterOptions[0];
		options['zabbix-port'] = reporterOptions[1];
		options['zabbix-hostname'] = reporterOptions[2];
	}

  for(var option in options) {
    if(option.startsWith('zabbix-'))
      params[option.substr(7)] = options[option];
  }

	return {
		render: function(done) {
      var sender = new ZabbixSender(params);
			var metrics = results.getMetrics();
      
      sender.send(metrics, function(err) {
        if (err) console.log('Error: ', err);
        done();
      });
		}
	};
};
