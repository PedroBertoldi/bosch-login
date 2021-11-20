function adicionarPublicacao(){
    let input = document.getElementById("novo");
    let valor = input.value;
    if(valor != ""){
        let publicacoes = document.getElementById("plubicacoes");
        publicacoes.innerHTML += `
        <div class="pub">
            <span>Você</span>
            <p>
                ${valor}.
            </p>
        </div>`;
    }
    input.value = "";
}