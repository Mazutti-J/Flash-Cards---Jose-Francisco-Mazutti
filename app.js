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
    <img width="200" height="100" style="position:relative; vertical-align:middle" src="${imagemP}" alt="">
    </div>
    </div>`


    function viraCartao(){
        respostaEstaVizivel =! respostaEstaVizivel;
        cartao.classList.toggle('active', respostaEstaVizivel);
    }

    // <img src="${imagemP}" alt="Descrição da imagem" id="imagem_${Math.random()}"></img>
    // // A imagem vai carregar corretamente?
    // let imagem = cartao.querySelector('img');
    // imagem.onload = () => {
    //     console.log('Imagem carregada com sucesso!');
    // };
    
    // imagem.onerror = () => {
    //     console.error('Erro ao carregar a imagem.');
    // };

    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}