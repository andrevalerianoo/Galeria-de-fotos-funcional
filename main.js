$(document).ready(function(){

    $('header button').click (function(){
        $('form').slideDown();
    })

    $('#button-cancelar').click (function(){
        $('form').slideUp();
    })

    $('form').on ('submit', function(e){
        e.preventDefault();

        const enderecoDanovaImagem = $('#nova-imagem').val();
        const novoitem = $('<li></li>');

        $(`<img src = "${enderecoDanovaImagem}"/>`).appendTo(novoitem);

        $(`
            <div class= "overlay-imagem-link">
            <a href= "${enderecoDanovaImagem}" title=" Ver imagem em tamanho real" target ="_blank">
            Ver imagem em tamanho real </a>
            </div>`).appendTo(novoitem);
            $(novoitem).appendTo('ul'); 

console.log();
    })
})