// SCRIPT PARA HEADER
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
});




// SCRIPT PARA FOOTER
document.addEventListener("DOMContentLoaded", function() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o footer:', error));
});


// SCRIPT PARA CONTATO ENVIADO
function mostrarPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function() {
        popup.style.display = "none";
    }, 10000); // O pop-up desaparecerá após 3 segundos
}
