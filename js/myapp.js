const $usuario = $("#usuario");
const $password = $("#password");

/* CREDENCIALES VERDADERAS */

const credenciales = {
    usuario: "UCH2024",
    pass: "123456"
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    if (valueUsuario == credenciales.usuario) {
        /* aplicamo localstorage */
        if (valuePassword == credenciales.pass) {
            localStorage.setItem("usuarioAutenticado", true);
            location.href = "dashboard.html";
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