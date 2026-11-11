# Encriptador de textos

Página web para encriptar y desencriptar mensajes, hecha para el **Challenge Encriptador** de Oracle ONE / Alura (sprint 01).
Las consignas completas están en [actividad/condiciones.md](actividad/condiciones.md).

## Cómo funciona

Cada vocal se reemplaza por una "llave":

| Letra | Llave   |
|-------|---------|
| e     | `enter` |
| i     | `imes`  |
| a     | `ai`    |
| o     | `ober`  |
| u     | `ufat`  |

Ejemplo: `gato` → `gaitober` → `gato`

## Funcionalidades

- Encriptar y desencriptar texto.
- Copiar el resultado al portapapeles con un botón.
- Convierte mayúsculas y quita acentos automáticamente (y avisa cuando lo hace).
- Diseño responsive: una columna en celulares y tres columnas en escritorio.

## Tecnologías

HTML, CSS y JavaScript sin librerías.

## Cómo usarlo

Abrí `index.html` en el navegador. El botón de copiar necesita que la página se sirva por `https` o `localhost` (por ejemplo, con GitHub Pages o la extensión Live Server).

## Autor

Romero Alan - [GitHub: 25Alan](https://github.com/25Alan)
