function criaCartao(categoria, pergunta, resposta) {
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
    <img width="150" height="150" src="https://i.redd.it/8yz0onqhtfld1.gif" alt="Descrição do GIF">
    </div>
    </div>`

    container.appendChild(cartao);











}