// Função para atualizar a data no topo
function configurarData() {
    const txtData = document.getElementById('data-atual');
    const agora = new Date();
    
    const opcoes = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long' 
    };

    let dataHoje = agora.toLocaleDateString('pt-BR', opcoes);
    
    // Deixa a primeira letra maiúscula
    dataHoje = dataHoje.charAt(0).toUpperCase() + dataHoje.slice(1);
    
    txtData.innerText = dataHoje;
}

// Executar quando a página carregar
window.onload = function() {
    configurarData();
    console.log("App Home carregado com sucesso!");
};