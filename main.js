async function teste(){
    let teste1=await fetch("./main.json");
    let compiler= await teste1.json();
    console.log(compiler);
}
teste();