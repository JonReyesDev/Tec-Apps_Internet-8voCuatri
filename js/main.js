//Practica 02: uso del objeto fetch
//manejando promesas
//manejando await

//Usando await

const llamandoAwait = async () => {
    try{
        const url = "https://jsonplaceholder.typicode.com/todos";
        const respuesta = await fetch(url)
        const data = await respuesta.json()
        mostrarTodos(data);
    }

    catch(error){
        console.log("Surgio un error" + error);
    }
}


llamandoFetch = ()=>{
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => mostrarTodos(data))
    .catch((reject ) => {
        console.log("Surgio un error " + reject)
    })

}

const mostrarTodos = (data) => {
    console.log(data)
    const res = document.getElementById('respuesta');
    res.innerHTML = "";

    for(let item of data){
        res.innerHTML += item.userId + ", " + item.id + ", " +  item.title + " " + item.completed + "<br>";
    }
}

document.getElementById("btnCargarP").addEventListener('click', function(){
    llamandoFetch();
});

document.getElementById("btnCargarA").addEventListener('click', function(){
    llamandoAwait();
});

document.getElementById("btnLimpiar").addEventListener("click", function() {
    let res = document.getElementById("respuesta");
    res.innerHTML = "";
});