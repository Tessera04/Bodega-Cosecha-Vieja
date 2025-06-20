window.addEventListener("DOMContentLoaded", function () {

    //Funcion para cambiar frases en la pagina index.html
    var frases = [
        "Un vino, una historia.",
        "Desde el Valle de Uco al mundo.",
        "Tradición que se saborea.",
        "Cultivamos pasión en cada copa."
    ];

    //Definimos un contador y las variables de los elementos a usar
    var actual = 0;
    var contenedor = document.getElementById("frases-bienvenida");
    var boton = document.getElementById("cambiar-frase");

    if (contenedor && boton) {
        boton.addEventListener("click", function () {
            actual = actual + 1;

            if (actual >= frases.length) {
                actual = 0;
            }

            contenedor.textContent = frases[actual];
        });
    }

    // Validación del formulario
    var form = document.getElementById("form-contacto");
    if (form) {
        form.addEventListener("submit", function (e) {
            //Definimos las variables de los elementos a usar
            var nombre = document.getElementById("nombre").value.trim();
            var email = document.getElementById("email").value.trim();
            var asunto = document.getElementById("asunto").value.trim();
            var mensaje = document.getElementById("mensaje").value.trim();

            if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
                alert("Por favor, completar todos los campos antes de continuar.");
                e.preventDefault();
            } else {
                alert("Mensaje enviado correctamente!");
            }
        });
    }

    // Carrito de compras: total estimado
    var totalElement = document.getElementById("total");
    if (totalElement) {
        var total = 0;
        var precios = document.querySelectorAll(".precio span");

        precios.forEach(function (precio) {
            var boton = document.createElement("button");
            boton.textContent = "Agregar";
            boton.style.marginLeft = "1rem";
            boton.style.padding = "4px 8px";
            boton.style.border = "none";
            boton.style.backgroundColor = "#7a3e2f";
            boton.style.color = "white";
            boton.style.borderRadius = "6px";
            boton.style.cursor = "pointer";
            precio.parentElement.appendChild(boton);

            boton.addEventListener("click", function () {
                var valorTexto = precio.textContent.replace("$", "").replace(".", "").replace(",", ".");
                var valor = parseFloat(valorTexto);
                total += valor;
                totalElement.textContent = total.toFixed(2);
            });
        });
    }

    // Efecto para imágenes de viñedos
    // Hace zoom a la imagen y agrega una iluminacion detras
    var imagenes = document.querySelectorAll(".imagenes-vinedos");

    if (imagenes.length > 0) {
        imagenes.forEach(function (img) {
            img.style.cursor = "pointer"; // cambia el cursor

            img.addEventListener("click", function () {
                mostrarImagenEnGrande(img.src, img.alt);
            });
        });

        function mostrarImagenEnGrande(src, alt) {
            var overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = 1000;

            var img = document.createElement("img");
            img.src = src;
            img.alt = alt;
            img.style.maxWidth = "90%";
            img.style.maxHeight = "90%";
            img.style.borderRadius = "12px";
            img.style.boxShadow = "0 0 25px rgba(255,255,255,0.5)";
            img.style.transition = "transform 0.3s";
            img.style.transform = "scale(1)";

            overlay.appendChild(img);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", function () {
                overlay.remove();
            });
        }
    }

});