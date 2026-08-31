function calcularVolume() {
    const raio = +prompt("Digite o raio da esfera:");
    if (!raio || raio <= 0) {
        document.getElementById("resultado").innerText = "Valor inválido!";
        return;
    }
    const volume = (4 / 3) * Math.PI * (raio ** 3);
    document.getElementById("resultado").innerText = `Volume: ${volume.toFixed(2)}`;
}
