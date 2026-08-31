function calcularJuros() {
    const capital = +prompt("Digite o Capital Inicial:");
    const taxaPorcentagem = +prompt("Digite a Taxa de Juros:");
    const tempo = +prompt("Digite o Tempo: ");

    if (!capital || capital <= 0 || taxaPorcentagem < 0 || !tempo || tempo <= 0) {
        document.getElementById("resultado").innerText = "Valores inválidos!";
        return;
    }

    const taxa = taxaPorcentagem / 100;
    const montante = capital * ((1 + taxa) ** tempo);
    document.getElementById("resultado").innerText = `Montante: R$ ${montante.toFixed(2)}`;
}
