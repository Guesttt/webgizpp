var stringWebgiz = "";
var objWebgiz;

function normalizarNota(notaEmString) {
    var novaNota = "";

    for (var i = 0; i < notaEmString.length; i++) {
        switch(notaEmString[i]) {
            case "0":
                novaNota += notaEmString[i];
                break;
            case "1":
                novaNota += notaEmString[i];
                break;
            case "2":
                novaNota += notaEmString[i];
                break;
            case "3":
                novaNota += notaEmString[i];
                break;
            case "4":
                novaNota += notaEmString[i];
                break;
            case "5":
                novaNota += notaEmString[i];
                break;
            case "6":
                novaNota += notaEmString[i];
                break;
            case "7":
                novaNota += notaEmString[i];
                break;
            case "8":
                novaNota += notaEmString[i];
                break;
            case "9":
                novaNota += notaEmString[i];
                break;
            case ",":
                novaNota += ".";
                break;
        }
    }

    if(novaNota == ""){
        return 0;
    }
    else{
        return parseFloat(novaNota);
    }
}

function normalizarDisciplina(disci) {
    disci = disci.trim();
    var novaDisci = "";

    for(i = 6;i < disci.length;i++){
        novaDisci += disci[i];
    }

    return novaDisci;
}

function gerarObjWebgiz() {
    var tabelaWebgiz = document.getElementById("aixareaform").children[0].children[0].children[1].children[0].children[0].children[0].children;
    for (var i = 3; i < tabelaWebgiz.length; i++) {
        var nota1bim = normalizarNota(tabelaWebgiz[i].children[2].innerText);
        var nota2bim = normalizarNota(tabelaWebgiz[i].children[3].innerText);
        var nota3bim = normalizarNota(tabelaWebgiz[i].children[7].innerText);
        var nota4bim = normalizarNota(tabelaWebgiz[i].children[8].innerText)
    }
    stringWebgiz = '[';
    for (var i = 3; i < tabelaWebgiz.length; i++) {
        var disciplina = normalizarDisciplina(tabelaWebgiz[i].children[0].innerHTML);
        stringWebgiz += '{"id":"' + (i - 3) + '","disciplina":"' + disciplina 
        + '","notas":[' + 
        + nota1bim + ',' 
        + nota2bim + ',' 
        + nota3bim + ','
        + nota4bim  + '],'
        + '"media1sem":' + ((nota1bim + nota2bim) / 2) + ","
        + '"media2sem":' + ((nota3bim + nota4bim) / 2) + ","
        + '"faltas":' 
        + (
            parseFloat(tabelaWebgiz[i].children[15].innerText) +
            parseFloat(tabelaWebgiz[i].children[16].innerText) +
            parseFloat(tabelaWebgiz[i].children[18].innerText) +
            parseFloat(tabelaWebgiz[i].children[19].innerText)
        )
        + '}';
        if(i < tabelaWebgiz.length - 1){
            stringWebgiz += ",";
        }
    }
    stringWebgiz += ']';
    objWebgiz = JSON.parse(stringWebgiz);
}

gerarObjWebgiz()

var f = 0;
for(i = 0;i < objWebgiz.length;i++){
    f+=objWebgiz[i].faltas
}
console.log("total de faltas: " + f);