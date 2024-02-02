const cargarRazas = async () => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/list');
        const razas = response.data.message;
        const selectRazas = document.getElementById('razas');
        razas.forEach(raza => {
            const option = document.createElement('option');
            option.value = raza;
            option.textContent = raza;
            selectRazas.appendChild(option);
        });
    } catch (error) {
        console.error('Error al cargar razas:', error);
    }
};

const cargarImagen = async () => {
    const razaSeleccionada = document.getElementById('razas').value;
    if (!razaSeleccionada) {
        alert('Por favor, selecciona una raza');
        return;
    }
    try {
        const response = await axios.get(`https://dog.ceo/api/breed/${razaSeleccionada}/images/random`);
        const imagen = response.data.message;
        document.getElementById('perroImagen').src = imagen;
    } catch (error) {
        console.error('Error al cargar imagen:', error);
    }
};

document.getElementById('cargarRazas').addEventListener('click', cargarRazas);
document.getElementById('cargarImagen').addEventListener('click', cargarImagen);
