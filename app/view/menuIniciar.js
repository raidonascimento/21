Ext.define('realPneus.view.menuIniciar', {
    extend: 'Ext.Panel',
     requires: [
	'Ext.Toolbar' 
     ],
    alias: 'widget.menuIniciar',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Menu Iniciar'
	    },
	    {
		xtype: 'button',
		text: 'teste',
		height: 75,
		action: 'testesql'
	    },
	    {
		xtype: 'button',
		text: 'Sincronizar',
		height: 75,
		action: 'sincronizar'
	    },
	    {
		xtype: 'button',
		text: 'Lista servico',
		height: 75,
		action: 'listaservico'
	    },
	    {
		xtype: 'button',
		text: 'Lista de pneus',
		height: 75,
		action: 'listapneus'
	    },
	    {
		xtype: 'button',
		text: 'Lista de Clientes',
		height: 75,
		action: 'listaclientes'
	    },
	    {
		xtype: 'button',
		text: '	Criar Coleta',
		height: 75,
		action: 'criarColeta'
	    }
	]
    }
});