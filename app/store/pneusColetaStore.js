Ext.define('realPneus.store.pneusColetaStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql'
    ],
    config: {
	autoLoad: true,
	model: 'realPneus.model.pneusColetaModel',
	storeId: 'pneusColetaStore',
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'pneus_coleta'
	}
    }
});