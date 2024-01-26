function hacerPeticion() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const idConsulta = document.getElementById("inputID").value;

    axios.get(url)
        .then(response => {
            const infoBox = document.getElementById("infoBox");
            infoBox.innerHTML = "";

            const usuario = response.data.find(datos => datos.id == idConsulta);

            if (usuario) {
                infoBox.innerHTML += `<div class="columna1"><font style="color:blue;">ID: </font> ${usuario.id}</div>
                                      <div class="columna2"><font style="color:blue;">Nombre: </font>${usuario.name}</div>
                                      <div class="columna3"><font style="color:blue;">Usuario: </font>${usuario.username}</div>
                                      <div class="columna4"><font style="color:blue;">Email: </font>${usuario.email}</div>
                                      <div class="columna5"><font style="color:blue;">Calle: </font>${usuario.address.street}</div>
                                      <div class="columna5"><font style="color:blue;">Número: </font>${usuario.address.suite}</div>
                                      <div class="columna5"><font style="color:blue;">Ciudad: </font>${usuario.address.city}</div>`;
            }
        })
        .catch(error => {
            console.error("Error al hacer la petición:", error);
        });
}

document.getElementById("btnCargar").addEventListener("click", function () {
    hacerPeticion();
});

document.getElementById("btnLimpiar").addEventListener("click", function () {
    let infoBox = document.getElementById("infoBox");
    infoBox.innerHTML = "";
    let inputID = document.getElementById("inputID");
    inputID.value = "";
});
