function hacerPeticion() {
    const http = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/albums";

    // Obtener el ID a consultar
    const idConsulta = document.getElementById("inputID").value;

    // Validar la respuesta
    http.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            // Aquí se dibuja la página
            let res = document.getElementById("lista");
            const json = JSON.parse(this.responseText);

            // Limpiar la tabla antes de mostrar los resultados
            res.innerHTML = "";

            // Ciclo para tomar solo el registro con el ID consultado
            for (const datos of json) {
                if (datos.id == idConsulta) {
                    res.innerHTML += '<tr> <td class="columna1">' + datos.userId + '</td>'
                        + '<td class="columna2">' + datos.id + '</td>'
                        + '<td class="columna3">' + datos.title + '</td> </tr>';
                    break; // No es necesario seguir iterando una vez encontrado el ID
                }
            }
        }
    };

    http.open('GET', url, true);
    http.send();
}

// Codificar los botones
document.getElementById("btnCargar").addEventListener("click", function() {
    hacerPeticion();
});

document.getElementById("btnLimpiar").addEventListener("click", function() {
    let res = document.getElementById("lista");
    res.innerHTML = "";
    let res1 = document.getElementById("inputID").value = "";
});



