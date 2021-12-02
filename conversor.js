var t = document.getElementById('texto')
var r = document.getElementById('resultado')
var ar= document.getElementById('area-result')

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertMaiusc = document.getElementById('maiuscAlertBtn')
var alertMinusc = document.getElementById('minuscAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}
 
if (alertMaiusc) {
    alertMaiusc.addEventListener('click', function () {
        
    if(t.value.length == 0){
    alert('Digite um texto...', 'danger')
    r.classList.remove('border', 'border-primary')
    ar.classList.add('hidden')
    r.value = ""
    }
    else {
    r.value = t.value.toUpperCase()
    alert('Seu texto foi convertido para letras maiúsculas!', 'success')
    ar.classList.remove('hidden')
    r.classList.add('border', 'border-primary')
    }
  })
}
if (alertMinusc) {
    alertMinusc.addEventListener('click', function () {
   
    if(t.value.length == 0){  
    alert('Digite um texto...', 'danger')
    r.classList.remove('border', 'border-primary')
    ar.classList.add('hidden')
    r.value = ""
    }
    else {
    r.value = t.value.toLowerCase() 
    alert('Seu texto foi convertido para letras minúsculas!', 'info')
    ar.classList.remove('hidden')
    r.classList.add('border', 'border-primary')
    }
    })
  }

  function copyText() {
    r.value
    r.select()
    r.setSelectionRange(0, r.value.length)
    document.execCommand('copy')
    alert('Texto copiado!', 'warning')
  }