function landingPageInjection() {
    const landingPage = $("<div></div>");
    ("$body").append(landingPage);

    landingPage.attr = ("id", "landing_page");

    landingPage.html = `
    <section>
        <div class="landingPageContainer">
            <div class="imageStore">
                <a href="#"><img src="https://cdn.awsli.com.br/400x300/1791/1791543/logo/tmpsualojavolta-3ebc7d35e6.png" alt="imagem_logo_loja"></a>
            </div>

            <div class="textStore">
                <h1>Sua Loja</h1>
                <h2>Melhores ofertas para você!</h2>
                <p>Venha conhecer a (Sua Loja), o seu destino ideal para tudo o que você precisa! Aqui, oferecemos uma seleção incrível de produtos que vão desde roupas estilosas e eletrônicos de última geração até itens para o seu lar que vão transformar o seu dia a dia.</p>
                <a href="#"><button>Botão de redirecionamento</button></a>
            </div>
        </div>
    </section>`;

    const banners = $("#box-banners");

    if (banners.length > 0) {
        banners.insertBefore(landingPage, banners);
    }
}

$(window).on('load', () => {
    landingPageInjection();
});