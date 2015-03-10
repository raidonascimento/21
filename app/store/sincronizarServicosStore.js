Ext.define('realPneus.store.sincronizarServicosStore', {
    extend: 'Ext.data.Store',
    config: {
	model: 'realPneus.model.sincronizarServicosModel',
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		//read : 'app/php/listaPneu.php',
		create: 'app/php/vazio.php', //CRUD
		read: 'app/php/listaServicos.php',
		update: 'app/php/vazio.php',
		destroy: 'app/php/vazio.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'sincronizarServicosStore'
	    },
	    writer: {
		type: 'json', //json ou xml
		rootProperty: 'sincronizarServicosStore',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});