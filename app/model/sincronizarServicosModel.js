Ext.define('realPneus.model.sincronizarServicosModel', {
    extend: 'Ext.data.Model',
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
