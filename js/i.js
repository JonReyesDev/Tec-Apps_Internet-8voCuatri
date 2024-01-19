function hacerPeticion(){
    const http = new XMLHttpRequest;
    const url = "https://jsonplaceholder.typicode.com/albums";

    //validar la respuesta
    http.onreadystatechange = function(){
        if(this.status ==200 && this.readyState== 4){
            //aqui se dibuja la pagina
            let res = document.getElementById("lista");
            const json = JSON.parse(this.responseText);

            //Ciclo para ir tomando cada uno de los registros

            for(const datos of json){
                res.innerHTML += '<tr> <td class ="columna1">'+datos.userid + '</td>'
                + '<td class ="columna2">'+datos.id + '</td>'
                + '<td class ="columna3">'+datos.title + '</td> </tr>'
            }
            res.innerHTML +="</tbody>"
        }
    }
    http.open('GET',url,true);
    http.send();
}
//Codificar los botones

document.getElementById("btnCargar").addEventListener("click",function(){
    hacerPeticion();
});

document.getElementById("btnLimpiar").addEventListener("click",function(){
    let res=document.getElementById("lista");
    res.innerHTML="";
})