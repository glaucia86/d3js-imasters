/**
 *
 * Arquivo: index.js
 * Data: 17/07/2018
 * Descrição: Desenvolvimento de um simples gráfico usando a biblioteca do Js: D3.js
 * Author: Glaucia Lemos
 *
 */

var d3 = require("d3");

var data = [56, 89, 125, 264, 397, 451, 582, 654];

d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", (d) => {
        return 'R$ ' + d;
    }
);