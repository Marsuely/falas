const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const dicionario = "qwertyuiopasdfghjklzxcvbnm";

function criptografar(texto) {
  let resultado = "";

  for (const caractere of texto.toLowerCase()) {
    const posicao = alfabeto.indexOf(caractere);

    if (posicao === -1) {
      // Mantém espaços, números e pontuação
      resultado += caractere;
    } else {
      resultado += dicionario[posicao];
    }
  }

  return resultado;
}

document.getElementById("botao").addEventListener("click", () => {
  const texto = document.getElementById("texto").value;
  document.getElementById("resultado").textContent = criptografar(texto);
});
