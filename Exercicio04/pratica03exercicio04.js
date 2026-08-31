function calcularArea() {
    const raio = +prompt("Digite o raio do círculo:");
    if (!raio || raio <= 0) {
        document.getElementById("resultado").innerText = "Valor inválido!";
        return;
    }
    const area = Math.PI * (raio ** 2);
    document.getElementById("resultado").innerText = `Área: ${area.toFixed(2)}`;
}
