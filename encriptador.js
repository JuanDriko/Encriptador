const btnEncriptar = document.querySelector(".btn_en");
const btnDesencriptar = document.querySelector(".btn_des");
const noEncontrado = document.querySelector("h2");
const parrafo = document.querySelector("p");
const imagen = document.querySelector(".imagen");
const copiar = document.querySelector(".btn_cop");

btnEncriptar.addEventListener("click", () => {
  const texto = document.querySelector(".texto").value;

  if (texto.length != 0) {
    const textoEncriptado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/g, "ufat");
    noEncontrado.style.display = "none";
    imagen.style.display = "none";
    copiar.style.display = "block";
    parrafo.textContent = textoEncriptado;
  } else {
    noEncontrado.style.display = "block";
    imagen.style.display = "block";
    copiar.style.display = "none";
    parrafo.textContent =
      "Ingrese el texto que desees encriptar o desencriptar.";
      if (window.innerWidth <= 769) {
        imagen.style.display = "none"; 
    } else {
        imagen.style.display = "block";
    }
  }
});

btnDesencriptar.addEventListener("click", () => {
  const texto = document.querySelector(".texto").value;

  if (texto.length !== 0) {
    const textoDesencriptado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/g, "u");

    noEncontrado.style.display = "none";
    imagen.style.display = "none";
    copiar.style.display = "block";
    parrafo.textContent = textoDesencriptado;
  } else {
    noEncontrado.style.display = "block";
    copiar.style.display = "none";
    imagen.style.display = "block";
    parrafo.textContent =
      "Ingrese el texto que desees encriptar o desencriptar.";
    if (window.innerWidth <= 769) {
      imagen.style.display = "none";
    } else {
      imagen.style.display = "block";
    }
  }
});

copiar.addEventListener("click", () => {
  const textoACopiar = parrafo.textContent;
  const inputTemp = document.createElement("textarea");
  inputTemp.value = textoACopiar;
  document.body.appendChild(inputTemp);
  inputTemp.select();
  document.execCommand("copy");
  document.body.removeChild(inputTemp);
  alert("Texto copiado al portapapeles: " + textoACopiar);
});
