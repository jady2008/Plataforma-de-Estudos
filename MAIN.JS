#container {
    display:flex ;
}
.cartao {
    margin: 1rem 1rem;
}
<div class="cartao__conteudo__pergunta">
    <p>O que é Java Script?</p>
</div>                        
<div class="cartao__conteudo__resposta">
    <p>O Java Script é uma linguagem de programação.</p>
</div>
<div class="cartao__conteudo__pergunta">
    <p>O que é CSS?</p>
</div>                        
<div class="cartao__conteudo__resposta">
    <p>O CSS é uma linguagem de estilização.</p>
</div>
.cartao {
    margin: 1rem 1rem;
    background-color: aqua;
    height: 20rem;
}
.cartao {
    margin: 1rem 1rem;
    background-color: aqua;
    height: 20rem;
    flex-grow: 1;
    flex-basis: calc(33% -6rem);
}
<article class="cartao">
    <div class="cartao__conteudo">
        <h3> Programação </h3>
        <div class="cartao__conteudo__pergunta">
            <p>O que é CSS?</p>
        </div>                        
        <div class="cartao__conteudo__resposta">
            <p>O CSS é uma linguagem de estilização.</p>
        </div>
    </div>
</article>
    .cartao__conteudo {
    text-align: center;
    height: 100%;
}
.cartao__conteudo h3 {
    background-color: tomato;
    text-align: left;
    padding: 0.5rem;
}
.cartao__conteudo h3 {
    background-color: tomato;
    text-align: left;
    padding: 0.5rem;
    position: absolute;
    margin: 0.6rem;
    border-radius: 0.6rem;
    font-size: 1vw;
}
