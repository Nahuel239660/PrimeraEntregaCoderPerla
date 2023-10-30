document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById("nombre");
    const nombreInput2 = document.getElementById("nombre");
    nombreInput2.value = nombreInput.value;

    const apellidoInput = document.getElementById("apellido");
    const apellidoInput2 = document.getElementById("apellido");
    apellidoInput2.value = apellidoInput.value;

    const botonContratar = document.getElementById('botonContratar');
    botonContratar.addEventListener('click', function() {
        const marcaSeleccionada = selectMarca.value;
        const modeloSeleccionado = selectModelo.value;
        const anioSeleccionado = selectAnio.value;
        const mensajeGuardado = `Hola, quiero contratar un seguro para mi vehículo ${marcaSeleccionada} ${modeloSeleccionado} año: ${anioSeleccionado}`;
        const contenedor = document.querySelector('#myTabContent');
        const formularioHTML = `
            <form id="contact_form">
                <div class="form-row">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="nombre" name="name" required value="${nombreGuardado} ${apellidoGuardado}">
                    </div>
                    <div>
                        <label for="telefono">Telefono:</label>
                        <input type="telefono" id="telefono" name="telefono" required>
                    </div>
                </div>
                <div>
                    <label for="message">Message:</label><br>
                    <textarea id="message" name="message" rows="4" cols="50" required>${mensajeGuardado}</textarea>
                </div>
                <div class="form-btn">
                    <input type="submit" class="boton-enviar" value="Enviar">
                </div>
            </form>
        `;
        contenedor.innerHTML = formularioHTML;

        const contactForm = document.getElementById('contact_form');
        const userName = document.querySelector('#nombre');
        const userTel = document.querySelector('#telefono');
        const message = document.querySelector('#message');

        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const body = {
                service_id: 'service_a39bl8f',
                template_id: 'template_fe28b3a',
                user_id: 'O4mvOOZbR9fx_QTde',
                template_params: {
                    'to_name': userName.value,
                    'from_name': userTel.value,
                    'message': message.value,
                }
            };
            try {
                const response = await sendEmail(body);
                handleResponse(response);
            } catch (error) {
                handleResponse(null);
            }
        });

        const handleResponse = (response) => {
            if (response && response.includes('OK')) {
                showSuccessAlert();
                clearFormFields();
            } else {
                showErrorAlert();
            }
        };

        const showSuccessAlert = () => {
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'El correo electrónico se ha enviado correctamente.',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                }
            });
        };

        const showErrorAlert = () => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un problema al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.',
            });
        };

        const sendEmail = async (body) => {
            const settings = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            };
            const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", settings);
            const data = await response.text();
            return data;
        };

        const clearFormFields = () => {
            userName.value = '';
            userTel.value = '';
            message.value = '';
        };
    });
});
