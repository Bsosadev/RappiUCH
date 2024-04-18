const $usuario = $("#usuario");
const $password = $("#password");

/* CREDENCIALES VERDADERAS */

const credenciales = [
    {
        usuario: "UCH2024",
        pass: "123456"
    },
    {
        usuario: "bsl", 
        pass: "123456"
    }
];

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    
    // Verificar las credenciales
    const usuarioValido = credenciales.find(credencial => credencial.usuario === valueUsuario);
    
    if (usuarioValido) {
        if (usuarioValido.pass === valuePassword) {
            // Aplicar localStorage
            localStorage.setItem("usuarioAutenticado", true);
            location.href = "dashboard_profe.html";
        } else {
            Swal.fire({
                title: "ERROR",
                text: "Contraseña incorrecta",
                icon: "error"
            });
        }
    } else {
        Swal.fire({
            title: "ERROR",
            text: "Usuario no encontrado",
            icon: "error"
        });
    }
});