//salva as informações
let save=[];
async function compiler(){
    //pega o arquivo .json
    let arq= await fetch("./main.js");
    //link o conteudo do .json no "save"
    let json_arq= await arq.json();
    save=json_arq;
}
//função de imput simples
function input(){
    alert("teste");
}