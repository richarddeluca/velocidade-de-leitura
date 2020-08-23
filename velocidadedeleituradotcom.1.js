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
var livroQuatro = document.querySelector("#livro4")
var livroCinco = document.querySelector("#livro5")
var livroSeis = document.querySelector("#livro6")

var segundos = document.querySelector("#segundos")
var mediaDeLeitura = document.querySelector("#mediaDeLeitura")

function botaoFront() {
  document.querySelector("#parteFront").style.display = 'none';
  document.querySelector('#parteUm').style.display = 'block';
  document.querySelector('body').style.backgroundColor = "#f4f4ec";
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
  else if (livroTres.checked) {
    document.querySelector("#trechoTres").style.display = 'block';
    document.querySelector("#trechoTres").id = "terminei"
    p = 267
  }
  else if (livroQuatro.checked) {
    document.querySelector("#trechoQuatro").style.display = 'block';
    document.querySelector("#trechoQuatro").id = "terminei"
    p = 267
  }
  else if (livroCinco.checked) {
    document.querySelector("#trechoCinco").style.display = 'block';
    document.querySelector("#trechoCinco").id = "terminei"
    p = 267
  }
  else {
    document.querySelector("#trechoSeis").style.display = 'block';
    document.querySelector("#trechoSeis").id = "terminei"
    p = 344
  }

  // document.querySelector("#form").style.display = 'none';
  // document.querySelector("#botaoComecar").style.display = 'none';
  document.querySelector("#parteUm").style.display = 'none';
  document.querySelector("#botaoTerminar").style.display = 'block';
  document.querySelector('body').style.backgroundColor = "#fefefe";
  var contador = window.setInterval(function () {
    s++;
  }, 1000);

  window.scrollTo(0, 0);
}

// quando o botão "terminei" é apertado:

  // O contador para

  // O trecho some
function botaoTerminar() {
  if (true) {
    document.querySelector("#parteDois").style.display = 'none';
    document.querySelector("#botaoTerminar").style.display = 'none';
    document.getElementById("iframe").style.display = 'block';
    document.querySelector("#demo-top-bar").style.display = 'block';
    // document.getElementById("#iframe2").style.display = 'block';
    // document.getElementById("#iframe3").style.display = 'block';
    // document.getElementById("#iframe4").style.display = 'block';
    // document.getElementById("#iframe5").style.display = 'block';


    segundos.innerHTML = 'Você levou ' + s + ' segundos para ler esse texto' + '<br> Sua média de leitura é de';
    media = parseInt(60 / s * p)
    mediaDeLeitura.innerHTML = media + ' palavras por minuto';
    console.log(s)
    console.log(p)
    console.log(media)
    console.log(60 / s * p)
  }

  window.scrollTo(0, 0);
}
    // perguntas aparecem

// É calculado o nº de palavras dividido pelo tempo vezes 60
//             O nº de acertos dividido pelo nº de perguntas vezes 100%

///////////////////////////

// Irei colocar cada trecho em um div, cada um com um id. O botão ativará o id.