 
let inputCGFOR = document.getElementById("data");

let inputCOTACAO = document.getElementById("cotacao");
let inputbp = document.getElementById("bp");
let inputsegmento = document.getElementById("segmento");
let inputmaterial = document.getElementById("material");
let inputvolume = document.getElementById("volume");
let inputzd01 = document.getElementById("zd01");
let inputzd02 = document.getElementById("zd02");
let inputzd03 = document.getElementById("zd03");
let inputpreco = document.getElementById("preco");
let inputCondPagamento = document.getElementById("pagamento");
let inputmotivo = document.getElementById("motivo");
let inputconcorrente = document.getElementById("concorrente");

let divresultado = document.getElementById("resultado");

 
 

function ok() {
    

    
    let data = inputCGFOR.value;

    data = inputCGFOR.value.split('/').reverse().join('-');
    
    var data1 = data.split('-').reverse().join('/');
    
    
    
    
    let cotacao = inputCOTACAO.value;
    let bp = inputbp.value;
    let segmento = inputsegmento.value;
    let material = inputmaterial.value;
    let volume = inputvolume.value;
    let zd01 = inputzd01.value;
    let zd02 = inputzd02.value;
    let zd03 = inputzd03.value;
    let preco = inputpreco.value;
    let pagamento = inputCondPagamento.value;
    let motivo = inputmotivo.value;
    let concorrente = inputconcorrente.value;
   


    resultado.innerHTML = `<p>CGFOR: ${data1} `;
    resultado.innerHTML += `<p>COTAÇÃO: ${cotacao} `;
    resultado.innerHTML += `<p>BP: ${bp} `;
    resultado.innerHTML += `<p>SEGMENTO: ${segmento} `;
    resultado.innerHTML += `<p>MATERIAL: ${material} `;
    resultado.innerHTML += `<p>VOLUME: ${volume} `;
    resultado.innerHTML += `<p>ZD01: ${zd01}% `;
    resultado.innerHTML += `<p>ZD02: ${zd02}% `;
    resultado.innerHTML += `<p>ZD03: ${zd03}% `;
    resultado.innerHTML += `<p>PREÇO: R$ ${preco} `;
    resultado.innerHTML += `<p>PAGAMENTO: ${pagamento} `;
    resultado.innerHTML += `<p>MOTIVO: ${motivo} `;
    resultado.innerHTML += `<p>CONCORRENTE: ${concorrente} `;
    
    

   
}




