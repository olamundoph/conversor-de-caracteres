var t = document.getElementById('texto')
var r = document.getElementById('resultado')

function maiuscula(){
    if(t.value.length == 0){
        alert("Digite um texto")
    }
    r.innerText = t.value.toUpperCase()
}

function minuscula(){
    if(t.value.length == 0){
        alert("Digite um texto")
    }
    r.innerText = t.value.toLowerCase()
}