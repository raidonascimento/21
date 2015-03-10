Ext.define('realPneus.view.servicoList', {
    extend: 'Ext.List',
    alias: 'widget.servicoList',
    config: {
	store: 'servicosStore',
	itemTpl: '{nome}',
	onItemDisclosure: true,
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Lista de Coletas',
		items: [
		    {
			xtype: 'button',
			text: 'Voltar',
			height: 75,
			action: 'menuIniciar'
		    }

		]
	    }
	]
    }
});