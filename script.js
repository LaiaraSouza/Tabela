function criarJogador(nome){
  var jogador = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  return jogador
}

var paulo = criarJogador("Paulo")
var rafa = criarJogador("Rafa")
var laiara = criarJogador("Laiara")

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)
laiara.pontos = calculaPontos(laiara)

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos 
}

var jogadores = [rafa, paulo, laiara]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}

function adicionarJogador(){
  var nomeDoNovoJogador = prompt("Qual o nome do jogador?")
  var novoJogador = criarJogador(nomeDoNovoJogador)
  jogadores.push(novoJogador)
  exibirJogadoresNaTela(jogadores)
}







