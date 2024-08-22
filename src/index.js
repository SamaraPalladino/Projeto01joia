
document.getElementById('aplicarDesconto10').addEventListener('click', function() {
  var valorCompra = parseFloat(document.getElementById('valorCompra').value)
  if (isNaN(valorCompra) || valorCompra <= 0) {
    document.getElementById('resultado').innerText = 'Por favor, insira um valor válido para a compra.';
    return;
  }
var desconto = valorCompra * 0.10;
var valorComDesconto = valorCompra - desconto;
})

document.getElementById('aplicarDesconto5').addEventListener('click', function() {
  var valorCompra = parseFloat(document.getElementById('valorCompra').value)
  var desconto = valorCompra * 0.5;
var valorComDesconto = valorCompra - desconto;
})

 