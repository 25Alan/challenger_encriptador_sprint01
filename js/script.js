// Llaves de encriptación del desafío
const LLAVES = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };

// Mapa inverso: "enter" -> "e", "imes" -> "i", ...
const LLAVES_INVERSAS = Object.fromEntries(
  Object.entries(LLAVES).map(([letra, clave]) => [clave, letra])
);

// Regex para desencriptar: busca todas las claves en UNA sola pasada.
// Así un reemplazo nunca genera texto que otro reemplazo vuelva a modificar
// (antes "llames" -> "llaimenters" se desencriptaba como "lla").
const REGEX_CLAVES = new RegExp(Object.values(LLAVES).join("|"), "g");

export function encriptar(texto) {
  return texto.replace(/[aeiou]/g, (letra) => LLAVES[letra]);
}

export function desencriptar(texto) {
  return texto.replace(REGEX_CLAVES, (clave) => LLAVES_INVERSAS[clave]);
}

// Pasa a minúsculas y quita acentos (á -> a, ü -> u, ñ -> n)
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");
const mensaje = document.querySelector("#mensaje");
const buttonEncriptar = document.querySelector("#buttonEncriptar");
const buttonDesencriptar = document.querySelector("#buttonDesencriptar");
const buttonCopy = document.querySelector("#buttonCopy");

function mostrarMensaje(texto, tipo = "info") {
  mensaje.textContent = texto;
  mensaje.dataset.tipo = tipo;
}

function procesar(transformar) {
  const original = inputText.value;

  if (original.trim() === "") {
    outputText.value = "";
    mostrarMensaje("No ingresó ningún texto.", "error");
    inputText.focus();
    return;
  }

  const limpio = normalizar(original);
  outputText.value = transformar(limpio);

  if (limpio !== original) {
    mostrarMensaje("Se convirtieron mayúsculas y acentos automáticamente.", "aviso");
  } else {
    mostrarMensaje("");
  }
}

async function copiarTexto() {
  if (outputText.value === "") {
    mostrarMensaje("No hay nada para copiar.", "error");
    return;
  }

  try {
    await navigator.clipboard.writeText(outputText.value);
    buttonCopy.textContent = "¡COPIADO!";
    setTimeout(() => (buttonCopy.textContent = "COPIAR"), 1500);
  } catch {
    // Por ejemplo, si la página no se sirve por https o el navegador lo bloquea
    outputText.select();
    mostrarMensaje("No se pudo copiar. Use Ctrl+C sobre el texto seleccionado.", "error");
  }
}

buttonEncriptar.addEventListener("click", () => procesar(encriptar));
buttonDesencriptar.addEventListener("click", () => procesar(desencriptar));
buttonCopy.addEventListener("click", copiarTexto);
