Ext.define('realPneus.model.pneusColetaModel', {
    extend: 'Ext.data.Model',
    requires: [
	'Ext.data.Field'
    ],
    config: {
	fields: [
	    {name: 'codigo_coleta'},
	    {name: 'cod_pneu'},
	    {name: 'cod_servico'},
	    {name: 'n_fogo'},
	    {name: 'n_serie'}
	    
	    
	]
    }
});