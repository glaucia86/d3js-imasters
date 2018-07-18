/**
 *
 * Arquivo: index.js
 * Data: 17/07/2018
 * Descrição: Desenvolvimento de um simples gráfico usando a biblioteca do Js: D3.js
 * Author: Glaucia Lemos
 *
 */

var d3 = require("d3");

var data = [30, 86, 168, 281, 303, 365];

d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", function (d) {
        return d + 'px'
    })
    .text(function (d) {
        return '$ ' + d;
    });