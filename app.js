var ultimaAcao = ''
var ultimoValor = ''
var operadores = ['+', '-', '*', '/']
function calcular(tipo, valor){
  if (tipo === 'acao'){
    if (ultimaAcao === tipo && operadores.includes(valor) && ultimoValor !== '=' && document.getElementById('resultado').value !== ""){
      // console.log('Repetiu a ação ' + valor)
      let old_value = String(document.getElementById('resultado').value)
      let new_value = old_value.slice(0, -1)
      document.getElementById('resultado').value = new_value + valor
    } else {

      // Limpa o display (id resultado)
      if (valor === 'c'){
        document.getElementById('resultado').value = ''
      }
      
      // Insere o operador aritmético
      if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        let display_calc = document.getElementById('resultado').value
        if (display_calc === ""){
          console.log("Display vazio")
        } else {
          document.getElementById('resultado').value += valor;
        }
      }

      // Calcula o resultado
      if (valor === '=' && document.getElementById('resultado').value !== ""){
        if (ultimaAcao === 'acao' && ultimoValor !== '='){
          let old_value = String(document.getElementById('resultado').value)
          let new_value = old_value.slice(0, -1)
          let valor_campo = eval(new_value);
          document.getElementById('resultado').value = valor_campo;
        } else {
          let valor_campo = eval(document.getElementById('resultado').value);
          document.getElementById('resultado').value = valor_campo;
        }
      }
    }
  } else if (tipo === 'valor') {
    let valor_campo = document.getElementById('resultado').value
    document.getElementById('resultado').value += valor
  }
  ultimaAcao = tipo
  ultimoValor = valor
}