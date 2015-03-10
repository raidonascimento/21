Ext.define('realPneus.store.funcionariosStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql'
    ],
    config: {
	autoLoad: true,
	model: 'realPneus.model.funcionariosModel',
	storeId: 'funcionariosStore',
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'funcionarios'
	}
    }
});