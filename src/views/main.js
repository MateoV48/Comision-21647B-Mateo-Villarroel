<script src="/js/main.js"></script>
// Capturar el formulario
const createPostForm = document.getElementById('create-post-form');

// Escuchar el evento de envío del formulario
createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Obtener los valores de los campos del formulario
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;
    const imagenURL = document.getElementById('imagenURL').value;

    // Enviar los datos al servidor utilizando fetch
    try {
        const response = await fetch('/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titulo, contenido, imagenURL })
        });

        if (response.ok) {
            // Redirigir o realizar alguna acción adicional después de la creación exitosa
            window.location.href = '/'; // Por ejemplo, redirigir a la página principal
        } else {
            console.error('Error al crear el post');
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
});
