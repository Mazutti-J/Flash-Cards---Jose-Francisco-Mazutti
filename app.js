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
    <img width="200" height="100" style="position:relative" src="${imagemP}" alt="">
    </div>
    </div>`


    let respostaEstavisivel = false

    function viraCartao() {
        respostaEstavisivel = !respostaEstavisivel
        cartao.classList.toggle('active', respostaEstavisivel)
    }

    cartao.addEventListener('click', viraCartao)






    container.appendChild(cartao)
}