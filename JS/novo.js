const nomeMes = document.getElementById("nomeMes");
const anoAtual = document.getElementById("anoAtual");
const diasCalendario = document.getElementById("diasCalendario");

const dataAtual = new Date();
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();
const diaHoje = dataAtual.getDate();

const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

nomeMes.textContent = meses[mes];
anoAtual.textContent = ano;

const primeiroDia = new Date(ano, mes, 1).getDay();
const totalDias = new Date(ano, mes + 1, 0).getDate();

for (let i = 0; i < primeiroDia; i++) {
    const vazio = document.createElement("span");
    diasCalendario.appendChild(vazio);
}

for (let dia = 1; dia <= totalDias; dia++) {
    const span = document.createElement("span");
    span.textContent = dia;
    span.classList.add("dia");

    if (dia === diaHoje) {
        span.classList.add("dia-ativo");
    }

    span.addEventListener("click", function () {
        const todosDias = document.querySelectorAll(".dia");

        todosDias.forEach(function (item) {
            item.classList.remove("dia-selecionado");
        });

        span.classList.add("dia-selecionado");
    });

    diasCalendario.appendChild(span);
}

const botoesCarrinho = document.querySelectorAll(".botao-carrinho");

botoesCarrinho.forEach(function (botao) {
    botao.addEventListener("click", function () {
        botoesCarrinho.forEach(function (item) {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");
    });
});

const botoesHorario = document.querySelectorAll(".lista-horarios .disponivel");

botoesHorario.forEach(function (botao) {
    botao.addEventListener("click", function () {
        botoesHorario.forEach(function (item) {
            item.classList.remove("horario-ativo");
        });

        botao.classList.add("horario-ativo");
    });
});