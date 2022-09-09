
const aceita = /^[a-z ]+$/; // Ragex expressao regulares que busca ou troca expressoes. No caso busca.
 
let entrada = document.getElementById('criptografar');
let saida = document.getElementById('descriptografar');

let botaoEncriptografar = document.getElementById('botao-criptografar');
let botaoDescriptografar = document.getElementById('botao-descriptografar');

let tela = document.getElementById('imagem-retangulo');

function limpaTela () { //função para deixar apenas caixa de texto na resposta.

    document.getElementById('imagem-retangulo').style.display = "none";
    document.getElementById('texto-retangulo').style.visibility  = "hidden";
}


function copiaTexto() { //função para copiar texto para area de transferencia

    let textoCopiado = saida
  
    navigator.clipboard.writeText(textoCopiado);
    alert ("Mensagem copiada para area de transferência")
}


botaoEncriptografar.onclick = function encrypt() {
    let mensagemEntrada = entrada.value;
    
    if (aceita.test(mensagemEntrada) == true) {
        let mensagemResultado = mensagemEntrada
        .replaceAll('a', 'ai')
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat')

        saida = mensagemResultado

       document.getElementById('descriptografar').innerHTML = saida;

    }else {
        alert (" Você digitou algum caractere que não é permitido, por favor tente novamente.")
    }

    limpaTela();

}

botaoDescriptografar.onclick = function descrypt() {
    let mensagemEntrada = entrada.value;
    if (aceita.test(mensagemEntrada) == true) {
        let resultadoMensagem = mensagemEntrada
        .replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u')

        saida = resultadoMensagem

        document.getElementById('descriptografar').innerHTML = saida;
    }else {
        alert (" Você digitou algum caractere que não é permitido, por favor tente novamente.")
    }   
    limpaTela();
}