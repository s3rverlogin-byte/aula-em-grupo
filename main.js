let save=[]
async function teste(){
    let teste1=await fetch("./main.json");
    let compiler= await teste1.json();
    save=compiler;
}
function input(){
    let teste=document.getElementById("input").value;
    if(save[teste]){
        alert(save[teste]);
    }else{
        alert("erro de busca");
    }
}
teste();