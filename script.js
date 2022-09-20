let who = ['El perro','Mi abuela','Su tortuga','Mi pajaro'];
let what = ['comio','molesto','aplasto','arruino'];
let when = ['antes de la clase ','justo a tiempo','cuando yo lo termine','durante mi almuerzo','mientras yo estaba rezando'];

function generateExcuse(who, what, when){
    whoNum = Math.floor(Math.random() * who.length);
    whatNum = Math.floor(Math.random() * what.length);
    whenNum = Math.floor(Math.random() * when.length);
    return who[whoNum] + " " + what[whatNum] + " " + "mi trabajo" + " " + when[whenNum];
}

function onLoad(){
    var excuse = document.getElementById('excuse');
    excuse.innerHTML = generateExcuse(who, what, when);
}

window.onload = onLoad;