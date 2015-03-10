Ext.define('realPneus.model.coletasModel', {
    extend: 'Ext.data.Model',
    requires: [
	'Ext.data.Field'
    ],
    config: {
	fields: [
	    {name: 'id'},
	    {name: 'nome_cliente'},
	    {name: 'cpf_cnpj'},
	    {name: 'data_entrega'},
	    {name: 'observacao'},
	    {name: 'cod_funcionario'},
	    {name: 'vendedor'},
	    {name: 'data_coleta'}
	    
	]
    }

});