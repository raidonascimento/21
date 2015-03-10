Ext.define('realPneus.model.coletasCompletoModel', {
    extend: 'Ext.data.Model',
    requires: [
	'Ext.data.Field'
    ],
    config: {
	fields: [
	    {name: 'nome_cliente'},
	    {name: 'cpf_cnpj'},
	    {name: 'cod_pneu'},
	    {name: 'idPneu'},
	    {name: 'data_entrega'},
	    {name: 'observacao'},
	    {name: 'n_fogo'},
	    {name: 'n_serie'},
	    {name: 'cod_funcionario'},
	    {name: 'cod_servico'},
	    {name: 'vendedor'},
	    {name: 'data_coleta'}
	    
	]
    }

});