// Ejecuta este código cuando el documento esté listo
$(document).ready(function(){
    $('#myModal').on('show.bs.modal', function (e) {
    });
  
    // Cierra el modal al hacer clic en el botón de cerrar
    $('#btnCerrar').click(function() {
      $('#myModal').modal('hide');
    });
  
    // Muestra el modal automáticamente al cargar la página
    $('#myModal').modal('show');
  });
// validaciones para el inicio de sesion
  document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!validateEmail(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }
        alert("Inicio de sesión exitoso.");
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const emailReg = document.getElementById('emailReg').value;
        const passwordReg = document.getElementById('passwordReg').value;
        const age = document.getElementById('age').value;

        if (username.length < 3) {
            alert("El nombre de usuario debe tener al menos 3 caracteres.");
            return;
        }

        if (!validateEmail(emailReg)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        if (passwordReg.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (age < 15) {
            alert("Debes tener al menos 15 años para registrarte.");
            return;
        }
        alert("Registro exitoso.");
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
