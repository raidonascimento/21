Ext.define('realPneus.store.sincronizarFuncionariosStore', {
    extend: 'Ext.data.Store',
    config: {
	model: 'realPneus.model.sincronizarFuncionariosModel',
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		create: 'app/php/vazio.php', //CRUD
		read : 'app/php/listaFuncionarios.php',
		//read: link,
		update: 'app/php/vazio.php',
		destroy: 'app/php/vazio.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'funcionarios'
	    },
	    writer: {
		type: 'json', //json ou xml
		rootProperty: 'funcionarios',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});