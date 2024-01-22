function hacerPeticion(){
    const http = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/users";
    
    // Validar la respuesta
    http.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            // Aquí se dibuja la página
            let res = document.getElementById("lista");
            const json = JSON.parse(this.responseText);

            // CICLO PARA IR TOMANDO CADA UNO DE LOS REGISTROS
            for(const datos of json){
                res.innerHTML += '<tr> <td class="columna1">' + datos.id + 
                '</td>' + '<td class="columna2">' + datos.name + 
                '</td>' + '<td class="columna3">' + datos.username + '</td>' +
                '</td>' + '<td class="columna4">' + datos.email + '</td>' +
                '</td>' + '<td class="columna5">' + datos.address.street + ', ' + datos.address.suite + ', ' + datos.address.city + ', ' + datos.address.zipcode + ', ' 
                                                  + datos.address.geo.lat + ', ' + datos.address.geo.lng + '</td>' +
                '</td>' + '<td class="columna6">' + datos.phone + '</td>' +
                '</td>' + '<td class="columna7">' + datos.website + '</td>' +
                '</td>' + '<td class="columna8">' + datos.company.name + ', ' + datos.company.catchPhrase + ', ' + datos.company.bs + '</td> </tr>'; 
            }
            res.innerHTML += "</tbody>";
        }
    };
    http.open('GET', url, true);
    http.send();
}

// Codificar los botones
document.getElementById("btnCargar").addEventListener("click", function(){
    hacerPeticion();
});

document.getElementById("btnLimpiar").addEventListener("click", function() {
    let res = document.getElementById("lista");
    res.innerHTML = "";
});

