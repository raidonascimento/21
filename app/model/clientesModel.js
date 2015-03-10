Ext.define('realPneus.model.clientesModel', {
    extend: 'Ext.data.Model',
    requires: [
	'Ext.data.Field'
    ],
    config: {
	fields: [
	    {name: 'codigo'},
	    {name: 'nome_cliente'}
//	    {name: 'apelido'},
//	    {name: 'cpfoucnpj'},
//	    {name: 'registro'},
//	    {name: 'telefone_com'},
//	    {name: 'telefone_res'},
//	    {name: 'celular'},
//	    {name: 'email'},
//	    {name: 'localidade'}

	]
    }
});