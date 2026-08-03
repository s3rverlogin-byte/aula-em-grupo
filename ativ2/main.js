let save=[];
async function compiler(){
    let arq= await fetch("./main.js");
    let json_arq= await arq.json();
    save=json_arq;
}

function input(){
    console.log("teste");
}