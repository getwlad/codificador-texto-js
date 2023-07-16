document.addEventListener(
  "DOMContentLoaded",
  function () {
    const semTexto = document.getElementById("semTexto");
    const comTexto = document.getElementById("comTexto");
    semTexto.style.display = "flex";
    const btnCript = document.getElementById("btn-cript");
    const btnDecript = document.getElementById("btn-descript");
    const btnCopiar = document.getElementById("copiar");

    btnCript.addEventListener("click", () => {
      const textConv = document.getElementById("conv-text");
      const text = textConv.value;

      const textoCriptado = document.getElementById("mensagem");
      textoCriptado.innerText = criptografar(text);

      semTexto.style.display = "none";
      comTexto.style.display = "flex";
    });

    btnDecript.addEventListener("click", () => {
      const textConv = document.getElementById("conv-text");
      const text = textConv.value;

      const textoCriptado = document.getElementById("mensagem");
      textoCriptado.innerText = decriptografar(text);

      semTexto.style.display = "none";
      comTexto.style.display = "flex";
    });

    btnCopiar.addEventListener("click", () => {
      navigator.permissions
        .query({ name: "clipboard-write" })
        .then((result) => {
          if (result.state === "granted" || result.state === "prompt") {
            const textoCriptado = document.getElementById("mensagem");

            navigator.clipboard.writeText(textoCriptado.textContent);
          }
        });
    });
  },
  false
);

const criptografar = (text) => {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  let result = text.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (result.includes(matrizCodigo[i][0])) {
      result = result.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  return result;
};

const decriptografar = (text) => {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  let result = text.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (result.includes(matrizCodigo[i][1])) {
      result = result.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  return result;
};
