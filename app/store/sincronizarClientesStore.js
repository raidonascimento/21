//var store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
//	 arquivo = store2.data.get(1);
//	 if (arquivo == null){
//	 link = 'app/php/listaClientes.php';    
//	 }else{
//	    ip =arquivo.data.ip;	
//	    link ='http://'+ip+'/php/listaClientes.php';
//	}

Ext.define('realPneus.store.sincronizarClientesStore', {
    extend: 'Ext.data.Store',
    config: {
	model: 'realPneus.model.sincronizarClientesModel',
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		create: 'app/php/vazio.php', //CRUD
		read : 'app/php/listaClientes.php',
		//read: link,
		update: 'app/php/vazio.php',
		destroy: 'app/php/vazio.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'clientes'
	    },
	    writer: {
		type: 'json', //json ou xml
		rootProperty: 'clientes',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});