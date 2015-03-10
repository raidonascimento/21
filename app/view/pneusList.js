Ext.define('realPneus.view.pneusList', {
    extend: 'Ext.List',
    alias: 'widget.pneusList',
    config: {
	store: 'pneusStore',
	itemTpl: '{todos}',
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