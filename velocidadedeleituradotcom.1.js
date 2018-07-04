// no radio um livro é selecionado
// document.querySelector('input[name="rate"]:checked').value;

// Quando o botão começar é apertado

  // O trecho do livro é selecionado ++

  // as opções desaparecem ++

  // O trecho aparece ++

  // O botão "terminei" aparece

  //um contador começa

s = 0;
p = 0;
var livroUm = document.querySelector("#livro1")
var livroDois = document.querySelector("#livro2")
var livroTres = document.querySelector("#livro3")
var segundos = document.querySelector("#segundos")
var mediaDeLeitura = document.querySelector("#mediaDeLeitura")

function botaoFront() {
  document.querySelector("#parteFront").style.display = 'none';
  document.querySelector('#parteUm').style.display = 'block';
  document.querySelector('body').style.backgroundColor = "#ffffdc";
  // document.querySelector('body').id = 'background';
}

function botaoComecar() {
  if (livroUm.checked) {
    document.querySelector("#trechoUm").style.display = 'block';
    document.querySelector("#trechoUm").id = "terminei"
    p = 200
  }
  else if (livroDois.checked) {
    document.querySelector("#trechoDois").style.display = 'block';
    document.querySelector("#trechoDois").id = "terminei"
    p = 267
  }
  else {
    document.querySelector("#trechoTres").style.display = 'block';
    document.querySelector("#trechoTres").id = "terminei"
    p = 344
  }
  // document.querySelector("#form").style.display = 'none';
  // document.querySelector("#botaoComecar").style.display = 'none';
  document.querySelector("#parteUm").style.display = 'none';
  document.querySelector("#botaoTerminar").style.display = 'block';
  var contador = window.setInterval(function () {
    s++;
  }, 1000);
}

// quando o botão "terminei" é apertado:

  // O contador para

  // O trecho some
function botaoTerminar() {
  if (true) {
    document.querySelector("#parteDois").style.display = 'none';
    document.querySelector("#botaoTerminar").style.display = 'none';

    segundos.innerHTML = 'Você levou ' + s + ' segundos para ler esse trecho' + '<br> Sua média de leitura é de';
    mediaDeLeitura.innerHTML = 60 / s * p + ' palavras por minuto';
    console.log(s)
    console.log(p)
    console.log(60 / s * p)
  }
}
    // perguntas aparecem

// É calculado o nº de palavras dividido pelo tempo vezes 60
//             O nº de acertos dividido pelo nº de perguntas vezes 100%

///////////////////////////

// Irei colocar cada trecho em um div, cada um com um id. O botão ativará o id.