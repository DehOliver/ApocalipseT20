async function carregar(pagina){

    const resposta = await fetch(`pages/${pagina}.html`);

    const texto = await resposta.text();

    document.getElementById("conteudo").innerHTML = texto;

}