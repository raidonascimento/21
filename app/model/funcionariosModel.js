Ext.define('realPneus.model.funcionariosModel', {
    extend: 'Ext.data.Model',
    requires: [
	'Ext.data.Field'
    ],
    config: {
	fields: [
	    {name: 'codigo'},
	    {name: 'nome'},
	    {name: 'login'},
	    {name: 'senha'}
	]
    }
});