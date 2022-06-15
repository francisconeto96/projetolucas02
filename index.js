 
let inputCGFOR = document.getElementById("data");

let inputCOTACAO = document.getElementById("cotacao");
let inputvendedor = document.getElementById("vendedor");
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
    
    
    
    let vendedor = inputvendedor.value;
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
   


    resultado.innerHTML = `CGFOR: ${data1}      ${vendedor} `;
    //resultado.innerHTML += `<br>VENDEDOR(A): ${vendedor} `;
    resultado.innerHTML += `<br>COTAÇÃO: ${cotacao} `;
    resultado.innerHTML += `<br>BP: ${bp} `;
    resultado.innerHTML += `<br>SEGMENTO: ${segmento} `;
    resultado.innerHTML += `<br>MATERIAL: ${material} `;
    resultado.innerHTML += `<br>VOLUME: ${volume} `;
    resultado.innerHTML += `<br>ZD01: ${zd01}% `;
    resultado.innerHTML += `<br>ZD02: ${zd02}% `;
    resultado.innerHTML += `<br>ZD03: ${zd03}% `;
    resultado.innerHTML += `<br>PREÇO: R$ ${preco} `;
    resultado.innerHTML += `<br>PAGAMENTO: ${pagamento} `;
    resultado.innerHTML += `<br>MOTIVO: ${motivo} `;
    resultado.innerHTML += `<br>CONCORRENTE: ${concorrente} `;
    
    

   
}




