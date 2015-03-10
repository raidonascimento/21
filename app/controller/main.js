Ext.define('realPneus.controller.main', {
    extend: 'Ext.app.Controller',
    requires: [
	'Ext.MessageBox',
	'Ext.util.Filter'
    ],
    config: {
	routes: {
	    '': 'showMenuIniciar'
	},
	refs: {
	    menuIniciar: {
		xtype: 'menuIniciar',
		selector: 'menuIniciar',
		autoCreate: true
	    },
	    clientesList: {
		xtype: 'clientesList',
		selector: 'clientesList',
		autoCreate: true
	    },
	    servicoList: {
		xtype: 'servicoList',
		selector: 'servicoList',
		autoCreate: true
	    },
	    pneusList: {
		xtype: 'pneusList',
		selector: 'pneusList',
		autoCreate: true
	    },
	    coletasForm: {
		xtype: 'coletasForm',
		selector: 'coletasForm',
		autoCreate: true
	    },
	    testeBtn: 'button[action=testesql]',
	    sincronizarBtn: 'button[action=sincronizar]',
	    showListaClientesBtn: 'button[action=listaclientes]',
	    salvarPneusColetasBtn: 'button[action=salvarPneusColeta]',
	    salvarColetaBtn: 'button[action=salvarColeta]'
	},
	control: {
	    testeBtn: {
		tap: 'teste'
	    },
	    sincronizarBtn: {
		tap: 'sincronizar'
	    },
	    showListaClientesBtn: {
		tap: 'showListaClientes'
	    },
	    salvarPneusColetasBtn: {
		tap: 'salvarPneusColeta'
	    },
	    salvarColetaBtn: {
		tap: 'salvarColeta'
	    },
	    'button[action=listaservico]': {
		tap: 'showServicoList'
	    },
	    'button[action=listapneus]': {
		tap: 'showPneusList'
	    },
	    'button[action=menuIniciar]': {
		tap: 'showMenuIniciar'
	    },
	    'button[action=criarColeta]': {
		tap: 'showColetasForm'
	    },
	    'searchfield': {
		clearicontap: 'clearSearch'
	    },
	     "clientesList #searchField": {
                keyup: 'search'
            },
	    'selectfield[name=idPneu]': {
		change: 'onSelecaoPneuServico'
	    }
	}
    },
    showMenuIniciar: function () {
	var store = Ext.getStore('clientesStore');
	store.load();
	var store2 = Ext.getStore('pneusStore');
	store2.load();
	var store3 = Ext.getStore('servicosStore');
	store3.load();
	Ext.Viewport.setActiveItem(this.getMenuIniciar());
    },
    showColetasForm: function () {
	var _storePneus = Ext.getStore('pneusStore');
	_storePneus.load();
	Ext.Viewport.setActiveItem(this.getColetasForm());
    },
    showListaClientes: function () {
	var store = Ext.getStore('clientesStore');
	store.load();
	Ext.Viewport.setActiveItem(this.getClientesList());
    },
    showServicoList: function () {
	Ext.Viewport.setActiveItem(this.getServicoList());
    },
    showPneusList: function () {
	Ext.Viewport.setActiveItem(this.getPneusList());
    },
    teste: function () {
	var _coletasStore = Ext.getStore('coletasStore');
	_coletasStore.load();
	Ext.Viewport.setActiveItem(this.getMenuIniciar());
//	this.salvarIdColetaPneus();
    },
    sincronizar: function () {
	this.apagarClientesSincronizar();
	this.sincronizarClientes();
	this.apagarPneusSincronizar();
	this.sincronizarPneus();
	this.apagarServicoSincronizar();
	this.sincronizarServico();
	this.apagarFuncionariosSincronizar();
	this.sincronizarFuncionario();
    },
    apagarClientesSincronizar: function () {
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM clientes');
	}
    },
    sincronizarClientes: function () {
	var j = 0;
	var _store = Ext.getStore('sincronizarClientesStore');
	var _store2 = Ext.getStore('clientesStore');
	_store.each(function () {
	    var _record = _store.data.get(j);
	    var _model = Ext.create('realPneus.model.clientesModel', {
		nome_cliente: _record.data.nome,
		codigo: _record.data.codigo
//		apelido: record.data.apelido,
//		cpfoucnpj: record.data.cpfoucnpj,
//		registro: record.data.registro,
//		telefone_com: record.data.telefone_com,
//		telefone_res: record.data.telefone_res,
//		celular: record.data.celular,
//		email: record.data.email,
//		localidade: record.data.localidade
	    });
	    _store2.add(_model);
	    j++;
	});
	_store2.sync();
    },
    apagarPneusSincronizar: function () {
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM pneus');
	}
    },
    sincronizarPneus: function () {
	var j = 0;
	var _store = Ext.getStore('sincronizarPneusStore');
	var _store2 = Ext.getStore('pneusStore');
	_store.each(function () {
	    var _record = _store.data.get(j);
	    var _model = Ext.create('realPneus.model.pneusModel', {
		codigo: _record.data.codigo,
		marca: _record.data.marca,
		modelo: _record.data.modelo,
		medida: _record.data.medida,
		aplicacao: _record.data.aplicacao,
		todos: _record.data.medida + ' | ' + _record.data.modelo + ' | ' + _record.data.marca
	    });
	    _store2.add(_model);
	    j++;
	});
	_store2.sync();
    },
    apagarServicoSincronizar: function () {
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM servico');
	}
    },
    sincronizarServico: function () {
	var j = 0;
	var _store = Ext.getStore('sincronizarServicosStore');
	var _store2 = Ext.getStore('servicosStore');
	_store.each(function () {
	    var _record = _store.data.get(j);
	    var _model = Ext.create('realPneus.model.servicosModel', {
		codigo: _record.data.codigo,
		tipo: _record.data.tipo,
		modelo: _record.data.modelo,
		categoria: _record.data.categoria,
		subgrupo: _record.data.subgrupo,
		grupo: _record.data.grupo,
		medida: _record.data.medida,
		preco: _record.data.preco,
		nome: _record.data.nome
	    });
	    _store2.add(_model);
	    j++;
	});
	_store2.sync();
    },
    apagarFuncionariosSincronizar: function () {
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM funcionarios');
	}
    },
    sincronizarFuncionario: function () {
	var j = 0;
	var _storeSincronizar = Ext.getStore('sincronizarFuncionariosStore');
	var _storeFuncionarios = Ext.getStore('funcionariosStore');
	_storeSincronizar.each(function () {
	    var _record = _storeSincronizar.data.get(j);
	    var _model = Ext.create('realPneus.model.funcionariosModel', {
		codigo: _record.data.codigo,
		nome: _record.data.nome,
		login: _record.data.login,
		senha: _record.data.senha
	    });
	    _storeFuncionarios.add(_model);
	    j++;
	});
	_storeFuncionarios.sync();
    },
    salvarPneusColeta: function () {
	var _form = this.getColetasForm();
	var _camposForm = Ext.create('realPneus.model.coletasCompletoModel', _form.getValues());
	var _pneusStore = Ext.getStore('pneusStore');
	var _record = _pneusStore.data.get(_camposForm.data.idPneu);
	var _pneusColetaStore = Ext.getStore('pneusColetaStore');
	var _salvarPneusColetaModel = Ext.create('realPneus.model.pneusColetaModel', {
	    codigo_coleta: '',
	    cod_pneu: _record.data.codigo,
	    cod_servico: _camposForm.data.cod_servico,
	    n_fogo: _camposForm.data.n_fogo,
	    n_serie: _camposForm.data.n_serie
	});
	_pneusColetaStore.add(_salvarPneusColetaModel);
	_pneusColetaStore.sync();
    },
    salvarColeta: function () {
	var _storePneusColeta = Ext.getStore('pneusColetaStore');
	var j = 0;
	_storePneusColeta.each(function () {
	    var _recordPneusColeta = _storePneusColeta.data.get(j + 1);

	    if (_recordPneusColeta.data.codigo_coleta == '') {
		var _coletasStore = Ext.getStore('coletasStore');
		_coletasStore.load();
		var _recordColetas = _coletasStore.data.last();
		if (_recordColetas == null){    
		_recordPneusColeta.set('codigo_coleta', '1.0');
		_storePneusColeta.sync();
		}else{
		_recordPneusColeta.set('codigo_coleta', _recordColetas.data.id + 1);
		_storePneusColeta.sync();
		    
		}
	    }
	    j++;
	});
	var _form = this.getColetasForm();
	var camposForm = Ext.create('realPneus.model.coletasCompletoModel', _form.getValues());
	var _salvarColetaModel = Ext.create('realPneus.model.coletasModel', {
	    nome_cliente: camposForm.data.nome_cliente,
	    cpf_cnpj: camposForm.data.cpf_cnpj,
	    data_entrega: camposForm.data.data_entrega,
	    observacao: camposForm.data.observacao,
	    cod_funcionario: '1254',
	    data_coleta: camposForm.data.data_coleta,
	    vendedor: 'Fernando'
	});
	var _salvarColetaStore = Ext.create('realPneus.store.coletasStore');
	_salvarColetaStore.add(_salvarColetaModel);
	_salvarColetaStore.sync();
	this.teste();

    },
    salvarIdColetaPneus: function () {
	var _storeColeta = Ext.getStore('coletasStore');
	var t = 0;
	_storeColeta.each(function () {
	    t++;
	});
	console.log(t);


	var _storePneusColeta = Ext.getStore('pneusColetaStore');
	var j = 0;
	_storePneusColeta.each(function () {
	    var _recordPneusColeta = _storePneusColeta.data.get(j + 1);

	    if (_recordPneusColeta.data.codigo_coleta == '') {
		var _coletasStore = Ext.getStore('coletasStore');
		_coletasStore.load();
		var _recordColetas = _coletasStore.data.last();

		_recordPneusColeta.set('codigo_coleta', _recordColetas.data.id + 1);
		_storePneusColeta.sync();
	    }
	    j++;
	});
    },
    onSelecaoPneuServico: function (field, newValue) {
	var _pneusStore = Ext.getStore('pneusStore');
	var _record = _pneusStore.data.get(newValue);
	var form = field.up('coletasForm');
	var servicoField = form.child('selectfield[name=cod_servico]');
	var option = new Array();
	var i = 0;
	var n = 0;
	var _servicoStore = Ext.getStore('servicosStore');
	_servicoStore.each(function () {

	    var _recordServico = _servicoStore.data.get(i);
	    if (_record.data.medida == _recordServico.data.medida) {
		option[n] = new Object();
		option[n].text = _recordServico.data.nome;
		option[n].value = _recordServico.data.codigo;
		n++;
	    }
	    i++;
	});
	servicoField.setOptions(option);
	servicoField.enable();
    },
    
    search: function(textfield, e, eOpts) {
        var value = textfield.getValue(),	// Search value
        	store = Ext.getStore('clientesStore');	// People store

        // Clear current filter if less than 2
        if (value.length === 0) {
        	store.clearFilter();
        }

        // Search term must be at least 2 characters
        if (value.length < 2) {
        	return;
        }

        // Clear any current filters
        store.clearFilter();

        // Check if a value is provided
        if (value) {

            // Spit value to get multiple terms
            var terms = value.split(' ');

            // Convert each search string into regex
            var regexps = [];
            Ext.each(terms, function(term) {

                // Ensure term is not space and at least 2 characters
                if (term && term.length > 1) {
                    regexps.push(new RegExp(term, 'i')); // Case-insensitive regex
                }

            });
	    
store.filter();
            // Filter records
            store.filter(function(record) {


                var matches = [];

                // Check each of the regular expressions
                Ext.each(regexps, function(regex) {

        			var match = record.get('nome_cliente').match(regex);
                    matches.push(match);

                });

                // If nothing was found, return false to not show
                if (regexps.length > 1 && matches.indexOf(false) != -1) {
                    return false;
                } else {
                    // Else return to show
                    return matches[0];
                }

            });

        }

    },

    clearSearch: function(textfield, e, eOpts) {

        // Get store
        var store = Ext.getStore('clientesStore');

        // Clear filter
        store.clearFilter();

    }

});
    
