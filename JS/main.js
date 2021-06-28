
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://www.twitch.tv/"); //abre em uma nova aba.
    //window.location.href = "https://www.twitch.tv/" //abre na mesma aba.
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

/*function soma(n1, n2){
    return n1 + n2;
}


function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));*/




/*var d = new Date();
alert(d.getHours());
alert(d.getMinutes());
alert(d.getDay());*/





/*var count;
for(count=0; count <= 5; count++){
    alert(count);
};*/



/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}*/





/*var idade = prompt("Qual a sua idade?")
if (idade >= 18) {
    alert("Maior de " + idade);
}else{
    alert("Menor de " + idade);
}*/






/*var nome = "Aron Souza";
var idade = 26;
var idade2 = 10;
alert(nome + " tem" + idade + " anos");
alert(idade + idade2)*/

//var lista = ["maçã", "pera", "laranja"];
//lista.push("Uva");
//lista.pop("laranja");

/*console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));*/

/*var fruta = {nome:"maçã", cor:"verde"}
console.log(fruta.nome);
alert(fruta.cor);*/
