Ext.define('realPneus.model.sincronizarPneusModel', {
    extend: 'Ext.data.Model',
    config: {
	fields: [
	    {name: 'codigo'},
	    {name: 'marca'},
	    {name: 'modelo'},
	    {name: 'medida'},
	    {name: 'aplicacao'}
	]
    }
});
