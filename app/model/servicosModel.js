Ext.define('realPneus.model.servicosModel', {
    extend: 'Ext.data.Model',
    requires: [
	'Ext.data.Field'
    ],
    config: {
	fields: [
	    {name: 'codigo'},
	    {name: 'tipo'},
	    {name: 'modelo'},
	    {name: 'categoria'},
	    {name: 'subgrupo'},
	    {name: 'grupo'},
	    {name: 'medida'},
	    {name: 'preco'},   
	    {name: 'nome'}
	]
    }
});