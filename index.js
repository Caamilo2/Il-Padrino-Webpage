let direction = ""
function deliveryWarn(){
    document.getElementById("sendingMessage").textContent = "Para realizar pedidos lo puede hacer con el número 2514 0173 de lunes a sábados en el horario de 11:00 a 15:00 o 18:00 a 0:00hs! "
}
document.getElementById("send-button").addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default behavior of the button click
  });
