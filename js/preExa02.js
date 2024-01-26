document.getElementById("btnConsultar").addEventListener("click", function () {
    const inputPais = document.getElementById("inputPais").value;

    // Limpiar resultados anteriores
    document.getElementById("resultado").innerHTML = "";

    // Consultar la API
    fetch(`https://restcountries.com/v3.1/name/${inputPais}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 0) {
                const pais = data[0]; // Tomar el primer resultado (puede haber múltiples resultados)
                const resultadoDiv = document.getElementById("resultado");
                resultadoDiv.innerHTML = `<h3>${inputPais}</h3>`;
                resultadoDiv.innerHTML += `<p>Capital: ${pais.capital}</p>`;
                resultadoDiv.innerHTML += `<p>Lenguaje: ${Object.values(pais.languages).join(', ')}</p>`;
            } else {
                document.getElementById("resultado").innerHTML = "No se encontraron resultados para ese país.";
            }
        })
        .catch(error => {
            console.error("Error al consultar la API:", error);
        });
});
