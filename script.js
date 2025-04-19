const landingPageActivator = {
    active: true,
    id: "landing_page",
    configurations: {
        image: "https://cdn.awsli.com.br/400x300/1791/1791543/logo/tmpsualojavolta-3ebc7d35e6.png",
        title: "Sua Loja",
        subtitle: "Melhores ofertas para você!",
        description: "Venha conhecer a (Sua Loja), o seu destino ideal para tudo o que você precisa! Aqui, oferecemos uma seleção incrível de produtos que vão desde roupas estilosas e eletrônicos de última geração até itens para o seu lar que vão transformar o seu dia a dia.",
        buttonText: "Botão de redirecionamento",
        linkButton: "#",
    }
};

function landingPageInjection() {
    if (!landingPageActivator.active || $(`#${landingPageActivator.id}`).length > 0) return;

    const landingPage = $("<div></div>");
    landingPage.attr("id", landingPageActivator.id);

    const c = landingPageActivator.configurations;

    landingPage.html(`
        <section>
            <div class="landingPageContainer">
                <div class="imageStore">
                    <a href="${c.linkButton}"><img src="${c.image}" alt="imagem_logo_loja"></a>
                </div>

                <div class="textStore">
                    <h1>${c.title}</h1>
                    <h2>${c.subtitle}</h2>
                    <p>${c.description}</p>
                    <a href="${c.linkButton}"><button>${c.buttonText}</button></a>
                </div>
            </div>
        </section>
    `);

    const banners = $("#box-banners");
    if (banners.length > 0) {
        landingPage.insertBefore(banners);
    }
};

$(window).on("load", () => {
    landingPageInjection();
});
