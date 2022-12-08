let si = document.getElementById("s");
let ai = document.getElementById("a");
let fi = document.getElementById("f");
let vi = document.getElementById("v")
let imgr = document.getElementById("img-result");
let ncod = document.getElementById("nc");
let nsal = document.getElementById("ns");
let npuf = document.getElementById("np");
let ntro = document.getElementById("nt");

let character = "steve";
let numc = 0;
let nums = 0;
let nump = 0;
let numt = 0;

si.addEventListener("click", selectSteve)
ai.addEventListener("click", selectAlex)
vi.addEventListener("click", selectvill)
fi.addEventListener("click", fishOnce)

function selectvill(){
    vi.classList.add("active")
    ai.classList.remove("active");
    si.classList.remove("active");
    character = "vill"
}

function selectSteve (){
si.classList.add("active");
ai.classList.remove("active");
vi.classList.remove("active")
character = "steve";
}

function selectAlex (){
ai.classList.add("active");
si.classList.remove("active");
vi.classList.remove("active")
character = "alex";
}

function fishOnce(){ 

if (character==="steve"){
 let rand = Math.random();
if (rand < 0.71){
    numc++;
    ncod.innerHTML = numc;
    imgr.src = "img/Raw-Cod.png";
} else if (rand > 0.7 && rand < 0.91){
    nums++;
    nsal.innerHTML = nums;
    imgr.src = "img/Raw-Salmon.png";
} else if (rand > 0.9 && rand < 0.96){
    numt++;
    ntro.innerHTML = numt;
    imgr.src = "img/Tropical-Fish.jpg";
} else {
    nump++;
    npuf.innerHTML = nump;
   imgr.src = "img/Pufferfish.png";
}


} else if (character === "vill"){
    let rand = Math.random();
    if (rand < 0.3){
        numc++;
        ncod.innerHTML = numc;
        imgr.src = "img/Raw-Cod.png";
    } else if (rand > 0.31 && rand < 0.41){
        nums++;
        nsal.innerHTML = nums;
        imgr.src = "img/Raw-Salmon.png";
    } else if (rand > 0.4 && rand < 0.81){
        numt++;
        ntro.innerHTML = numt;
        imgr.src = "img/Tropical-Fish.jpg";
    } else {
        nump++;
        npuf.innerHTML = nump;
       imgr.src = "img/Pufferfish.png";
    }


} else {
    let rand = Math.random();
 if (rand < 0.11){
    numc++;
    ncod.innerHTML = numc;
 imgr.src = "img/Raw-Cod.png";
 } else if (rand > 0.1 && rand < 0.21){
    nums++;
    nsal.innerHTML = nums;
 imgr.src = "img/Raw-Salmon.png";
 } else if (rand > 0.20 && rand < 0.51){
    numt++;
    ntro.innerHTML = numt;
 imgr.src = "img/Tropical-Fish.jpg";
 } else {
    nump++;
    npuf.innerHTML = nump;
imgr.src = "img/Pufferfish.png";
 }
    
}
}