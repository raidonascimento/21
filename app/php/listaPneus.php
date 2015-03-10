<?php
	//chama o arquivo de conexão com o bd
	include("conectar_real.php");
	 
	//consulta sql
	$query = mysql_query("SELECT a.codigo, c.nome marca, d.nome modelo, e.nome medida, a.aplicacao
FROM pneu a
INNER JOIN pneu_relacao b ON (b.codigo = a.relacao)
INNER JOIN pneu_marca c ON (c.codigo = b.marca)
INNER JOIN pneu_modelo d ON (d.codigo = b.modelo)
INNER JOIN pneu_medida e ON (e.codigo = a.medida)
  

 LIMIT 10

") or die(mysql_error());
	 
	//faz um looping e cria um array com os campos da consulta
	$rows = array('sincronizarPneusStore' => array());
	while($contato = mysql_fetch_assoc($query)) {
	    $rows['sincronizarPneusStore'][] = $contato;
	}
	

	//encoda para formato JSON
	echo json_encode($rows);
?>