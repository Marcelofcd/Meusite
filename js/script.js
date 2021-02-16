var span = document.querySelector('.menu');

span.addEventListener('click', function(){
    var conteudo = document.querySelector('.conteudo p');

    if (conteudo.classList.contains('mostrar')){
        conteudo.classList.remove('mostrar');
    } else {
        conteudo.classList.add('mostrar');
    }
});