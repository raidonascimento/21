Ext.define('realPneus.store.clientesStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql',
	'Ext.util.Filter'
    ],
    config: {
	autoLoad: true,
	model: 'realPneus.model.clientesModel',
	storeId: 'clientesStore',
	pageSize: 25,
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'clientes'
	}
    }
});