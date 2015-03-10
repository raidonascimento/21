//var store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
//	 arquivo = store2.data.get(1);
//	 if (arquivo == null){
//	 link = 'app/php1/listaPneu.php';    
//	 }else{
//	    ip =arquivo.data.ip;	
//	    link ='http://'+ip+'/php1/listaPneu.php';
//	}

Ext.define('realPneus.store.sincronizarPneusStore', {
    extend: 'Ext.data.Store',
    config: {
	model: 'realPneus.model.sincronizarPneusModel',
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		//read : 'app/php/listaPneu.php',
		create: 'app/php/vazio.php', //CRUD
		read: 'app/php/listaPneus.php',
		update: 'app/php/vazio.php',
		destroy: 'app/php/vazio.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'sincronizarPneusStore'
	    },
	    writer: {
		type: 'json', //json ou xml
		rootProperty: 'sincronizarPneusStore',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	autoLoad: true,
	autoSync: true	
    }
});