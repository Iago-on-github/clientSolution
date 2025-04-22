// ativar a landingPage

// const landingPageActivator = {
//     active: true,
//     id: "landing_page",
//     configurations: {
//         image: "https://cdn.awsli.com.br/400x300/1791/1791543/logo/tmpsualojavolta-3ebc7d35e6.png",
//         title: "Sua Loja",
//         subtitle: "Melhores ofertas para você!",
//         description: "Venha conhecer a (Sua Loja), o seu destino ideal para tudo o que você precisa! Aqui, oferecemos uma seleção incrível de produtos que vão desde roupas estilosas e eletrônicos de última geração até itens para o seu lar que vão transformar o seu dia a dia.",
//         buttonText: "Botão de redirecionamento",
//         linkButton: "#",
//     }
// };

// injetar a landingPage
function landingPageInjection() {

    // verifica se `active == false` ou se landingPage já está injetada (se true, não retorna nada)
    if (!landingPageActivator.active || $(`#${landingPageActivator.id}`).length > 0) return;

    const landingPage = $("<div></div>");
    landingPage.attr("id", landingPageActivator.id);

    const configs = landingPageActivator.configurations;

    // injeção dinâmica do html
    landingPage.html(`
        <section>
            <div class="landingPageContainer">
                <div class="imageStore">
                    <a href="${configs.linkButton}"><img src="${configs.image}" alt="imagem_logo_loja"></a>
                </div>

                <div class="textStore">
                    <h1>${configs.title}</h1>
                    <h2>${configs.subtitle}</h2>
                    <p>${configs.description}</p>
                    <a href="${configs.linkButton}"><button>${configs.buttonText}</button></a>
                </div>
            </div>
        </section>
    `);

    // lugar de injeção (before id #box-banners)
    const banners = $("#box-banners");

    if (banners.length > 0) {
        landingPage.insertBefore(banners);
    }
};

// carregamento da página

$(window).on("load", () => {
    landingPageInjection();
});