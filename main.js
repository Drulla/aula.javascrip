function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar! acesse meu Linkedin clicando aqui ";
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/matheus-freire-drulla-a52541156/");
}

function trocar(){
    document.getElementById("mousemove").innerHTML ="Obrigado por passar o mouse"
    //alert("Trocar Texto")
}

function voltar(){
    document.getElementById("mousemove").innerHTML ="Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada")
}

function funcaoChance(elemento){
    console.log(elemento.value)
}

/*
var nome = "Matheus Drulla";
var idade=23;
var frase =" Coritiba maior vencedor do mundo"

alert("Bem vindo" + nome + "que tem" + idade + "anos");
console.log(frase) /* traz alerta no console em F12*
console.log(frase.tolowerCase())-- deixa tudo maiusculo */


/*arrays
var lista = ["maça","pera","laranja"];
console.log(lista);
console.loge(lista[1]); /*traz o primeiro item*/
/*

/*condicionais, laço de repetição, date
var idade = prompt("Qaul sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*repetição
var count =0;
while (count <5){
    console.log(count);
    count++;
};
*/

/*for*
var count ;
for(count= 0 ; count <=5; count ++){
    alert(count);
}
/*

/*date
var d = new Date();
alert(d);
*/

/*função
function soma (n1,n2){
    return n1 + n2;
}
alert(soma (5,10));
*/
