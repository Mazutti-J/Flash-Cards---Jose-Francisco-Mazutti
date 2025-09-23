function criaCartao(categoria, pergunta, resposta, imagemP) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao_conteudo">
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_pergunta">
    <p>${pergunta}</p>
    </div>
    <div class="cartao_conteudo_resposta">
    <p>${resposta}</p>
    <img href=="${imagemP}" alt="Descrição da imagem">
    </div>
    </div>`


    function viraCartao(){
        respostaEstaVizivel =! respostaEstaVizivel;
    }

    container.appendChild(cartao);

}