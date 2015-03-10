Ext.define('realPneus.view.coletasForm', {
    extend: 'Ext.form.Panel',
    onItemDisclosure: true,
    alias: 'widget.coletasForm',
    requires: [
	'Ext.field.Select',
	'Ext.field.DatePicker',
	'Ext.form.FieldSet',
	'Ext.List'
    ],
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Coleta de Pneus',
		itemId: 'toolbarFormColeta',
		items: [
		    {
			xtype: 'button',
			action: 'menuIniciar',
			text: 'Menu Iniciar'
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'textfield',
			name: 'nome_cliente',
			label: 'nome'
		    },
		    {
			xtype: 'textfield',
			name: 'cpf_cnpj',
			label: 'CPF ou CNPJ'
		    },
		    {
			xtype: 'textfield',
			name: 'observacao',
			label: 'Observação'
		    },
		    {
			xtype: 'datepickerfield',
			label: 'Data da Entrega',
			name: 'data_entrega',
			dateFormat: 'd/m/Y',
			submitFormat: 'd/m/Y',
			//useMask: true,
			value: new Date(),
			picker: {
			    slotOrder: ['day', 'month', 'year']
			}
		    }
		]
	    },
	    {
		xtype: 'selectfield',
		label: 'Pneu',
		name: 'idPneu',
		displayField: 'todos',
		valueField: 'id',
////		hidden: false,
		placeHolder: 'Selecione o Pneu',
		usePicker: true,
		autoSelect: true,
		store: 'pneusStore'
	    },
	    {
		xtype: 'selectfield',
		label: 'Serviço',
		name: 'cod_servico',
		placeHolder: 'Selecione o Serviço',
		autoSelect: true,
		usePicker: true,
		disabled: true
	    },
	    {
		xtype: 'textfield',
		name: 'n_fogo',
		label: 'Nº do fogo'
	    },
	    {
		xtype: 'textfield',
		name: 'n_serie',
		label: 'Nº de serie'

	    },
	    {
		xtype: 'button',
		action: 'salvarPneusColeta',
		ui: 'confirm',
		text: 'Salvar Pneus'
	    },
	    {
		xtype: 'container',
		height: 25
	    },
	    {
		xtype: 'button',
		action: 'salvarColeta',
		ui: 'confirm',
		text: 'Salvar Coletas'
	    },
	    {
		xtype: 'datepickerfield',
		label: 'data da coleta',
		name: 'data_coleta',
		dateFormat: 'd/m/Y',
		hidden: true,
		value: new Date()
	    }
	]
    }
});
