Ext.define('realPneus.model.sincronizarClientesModel', {
    extend: 'Ext.data.Model',
    config: {
	fields: [
	    {name: 'codigo'},
	    {name: 'nome'},
	    {name: 'apelido'},
	    {name: 'cpfoucnpj'},
	    {name: 'registro'},
	    {name: 'telefone_com'},
	    {name: 'telefone_res'},
	    {name: 'celular'},
	    {name: 'email'},
	    {name: 'localidade'}
	]
    }
});