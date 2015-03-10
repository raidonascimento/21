Ext.define('realPneus.model.pneusModel', {
    extend: 'Ext.data.Model',
    requires: [
	'Ext.data.Field'
    ],
    config: {
	fields: [
	    {name: 'codigo'},
	    {name: 'marca'},
	    {name: 'modelo'},
	    {name: 'medida'},
	    {name: 'aplicacao'},
	    {name: 'todos'}
	    
	]
    }
});