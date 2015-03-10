Ext.define('realPneus.store.Contatos', {
    
    
extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql'
    ],
    
    config: {
        model: 'realPneus.model.clientesModel',
        autoLoad :true,
	storeId: 'Contatos',

        proxy: {
//            type: 'ajax',
//            url : 'app/contatos.json',  //  the json file that holds all our contact info.
//            reader: {
//                type: 'json',
//                rootProperty:'contatos'}
type: 'localstorage',
	    id:'bancoteste'  
        }
	

    }
});