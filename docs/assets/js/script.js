// Writing effect
let i = 0;
let text = "Hola, mi nombre es Bárbara.";

function typing() {
    if (i < text.length) {
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 90);
    }
}
typing();


$(function () {

  $("a").click(function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var gato = this.hash;

        $('html, body').animate({
            scrollTop: $(gato).offset().top
        }, 800, function() {
            window.location.hash = gato;
        });
    }
  });

    $('[data-toggle="tooltip"]').tooltip();
})