Ext.define('realPneus.view.clientesList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.clientesList',
    requires: [
	'Ext.data.Store',
	'Ext.List',
	'Ext.field.Search',
	'Ext.Toolbar',
	'realPneus.store.clientesStore',
        'Ext.XTemplate'
    ],
    config: {
	store: 'clientesStore',
	itemTpl: '{nome_cliente}',
	onItemDisclosure: true,
	//filters: true,
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Lista de Clientes',
		items: [
		    {
			xtype: 'button',
			text: 'Voltar',
			height: 75,
			action: 'menuIniciar'
		    },
		    {
			xtype: 'searchfield',
			itemId: 'searchField',
			placeHolder: 'Search'
		    }

		]
	    }
	]
    }
});
