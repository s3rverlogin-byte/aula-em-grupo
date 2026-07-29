function teste(){
    let teste1=fetch("./main.json");
    let compiler=teste1.json();
    console.log(compiler);
}
teste();