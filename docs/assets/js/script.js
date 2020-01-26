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
  $('[data-toggle="tooltip"]').tooltip();
})