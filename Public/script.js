document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    axios.post('http://localhost:4000/login', {
        usuario: usuario,
        contrasena: contrasena
    })
    .then(response => {
        console.log('Respuesta:', response);
        window.location.href = 'http://localhost:3000';
        // Manejar la respuesta exitosa (por ejemplo, redirigir al usuario o guardar el token JWT)
    })
    .catch(error => {
        console.error('Error:', error);
        // Manejar errores (por ejemplo, mostrar un mensaje de error al usuario)
    });  

});