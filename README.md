# phantomas-reporter-zabbix

Zabbix reporter for phantomas

##Parameters

```
--zabbix-config         The configuration file to use. Default: /etc/zabbix/zabbix_agentd.conf
--zabbix-bin            The path to the zabbix_sender program. Default: /usr/bin/zabbix_sender
--zabbix-server         The zabbix server (IP or hostname) to use. Default: (from zabbix config)
--zabbix-port           The zabbix server port to use. Default: (from zabbix config)
--zabbix-hostname       The hostname to report to zabbix. Default: - (from zabbix config)
```

``<server>:<port>:<hostname>`` - shorthand for ``--zabbix-server``, ``--zabbix-port`` and ``--zabbix-hostname``

## Usage

* Install phantomas-reporter-zabbix to your phantomas project dependencies
* Use it as specified in the [phantomas reporter docs](https://github.com/macbre/phantomas#reporters)

```
$ phantomas http://myapp.net -R zabbix
```

or

```
$ phantomas http://myapp.net -R zabbix --zabbix-config zabbix_agentd.conf
```

or

```
$ phantomas http://myapp.net -R zabbix:zabbix.example.net:80:myapp.net
```
