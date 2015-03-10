<?php

//chama o arquivo de conexão com o bd
include("conectar_real.php");

//consulta sql
$query = mysql_query("SELECT a.codigo, b.nome tipo, c.nome modelo, d.nome categoria, e.nome subgrupo, f.nome grupo, g.nome medida, a.preco,
    CONCAT(c.nome, ' - ', b.nome, ' - ', g.nome) AS nome

    FROM servico a
    INNER JOIN servico_tipo b ON (b.codigo = a.tipo)
    INNER JOIN pneu_modelo c ON (c.codigo = a.modelo)
    INNER JOIN servico_categoria d ON (d.codigo = a.categoria)
    INNER JOIN servico_subgrupo e ON (e.codigo = a.subgrupo)
    INNER JOIN servico_grupo f ON (f.codigo = e.grupo)
    INNER JOIN pneu_medida g ON (g.codigo = a.medida)

    WHERE a.ativo = 'Sim'

 
LIMIT  10

    ") or die(mysql_error());

//faz um looping e cria um array com os campos da consulta
$rows = array('sincronizarServicosStore' => array());
while ($contato = mysql_fetch_assoc($query)) {
    $rows['sincronizarServicosStore'][] = $contato;
}


//encoda para formato JSON
echo json_encode($rows);
?>