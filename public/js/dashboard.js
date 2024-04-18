const compras = [
    {   
        "id": "12",
        "uuid": "15414581asda1a1x",
        "nombre": "Compra en Real Plaza",
        "monto": "S/. 14.25",
        "detalle": "La compra se realizo en Real plaza a las 9:30pm",
        "productos": [
            {
                "image": "img/cuerda.webp" ,
                "SKU": "14815",
                "nombre": "Cuerda de pescador - 1m",
                "monto": "S/ 10.25"
            },
            {
                "image": "img/inka.png" ,
                "SKU": "145811",
                "nombre": "Gaseosa Inka Cola",
                "monto": "S/ 2.00"
            },
            {
                "image": "img/coca.png" ,
                "SKU": "148112",
                "nombre": "Gaseosa Coca Cola",
                "monto": "S/ 2.00"
            }
        ]
    },
    {
        "id": "16",
        "uuid": "15414581ytytaaddq1",
        "nombre": "Compra en Monterrico",
        "monto": "S/. 48.25",
        "detalle": "La compra se realizo en Monterrico a las 7:20pm",
        "productos": [
            {
                "image": "img/pala.jpg" ,
                "SKU": "177774",
                "nombre": "Pala",
                "monto": "S/ 20.25"
            },
            {
                "image": "img/solintex.png" ,
                "SKU": "177771",
                "nombre": "Pintura Solintex",
                "monto": "S/ 9.00"
            },
            {
                "image": "img/terrocal.png" ,
                "SKU": "177779",
                "nombre": "Terrocal en Pomo",
                "monto": "S/ 11.00"
            }
        ]
    },
    {
        "id": "18",
        "uuid": "1566664514aa",
        "nombre": "Compra en Azangaro",
        "monto": "S/. 200",
        "detalle": "La compra se realizo en Azangaro a las 6:06pm",
        "productos": [
            {
                "image": "img/Vn.png" ,
                "SKU": "666",
                "nombre": "Vela negra",
                "monto": "S/ 200"
            }
        ]
    }
];
//Imprimir esa lista de compras
const $misProductos = $("#misProductos");
compras.forEach((compra) => {
    //2. Crear una NUEVA URL donde usemos de parametro el ID
    const link = "producto.html?idcompra="+compra.id;
    const template = `
        <article class="w-full p-6 bg-[#272727] rounded-lg shadow" data-id="${compra.id}" data-uuid="${compra.uuid}">
            <i class="fa-solid fa-cart-shopping-fast text-2xl text-white"></i>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${compra.nombre}</h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                ${compra.detalle}
            </p>
            <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-2 rounded-lg dark:bg-green-900 dark:text-green-300">
                ${compra.monto}
            </span>
            <a href="${link}" class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-lg">
                Ver Productos
                <i class="fa-sharp fa-solid fa-tags ml-1"></i>
            </a>
        </article>
    `;
    $misProductos.append(template);
});

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idcompra = params.get("idcompra");
let misproductos = [];
if (idcompra) {
    compras.forEach((compra) => {
        if (compra.id == idcompra) {
            const mytitle = "Historial de productos de " + compra.nombre;
            $("#myTitle").html(mytitle);
            misproductos = compra.productos;           
        }
    });
    if (misproductos.length > 0) {
        misproductos.forEach((producto)=> {
            const template = `
                <article class="flex flex-col h-full bg-[#272727] shadow-sm rounded-xl">
                    <div class="h-60 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                        <img src="${producto.image}" class="h-52" alt="">
                    </div>
                    <div class="p-4 md:p-6">
                        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                            SKU: ${producto.SKU}
                        </span>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                            ${producto.nombre}
                        </h3>
                        <p class="mt-3 inline-flex bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-2 rounded-lg dark:bg-green-900 dark:text-green-300">
                            ${producto.monto}
                        </p>
                    </div>
                </article>
            `;
            $("#myProducts").append(template);
        });
    }
}

// Verificar si el usuario está autenticado
$(document).ready(function(){
    const usuarioAutenticado = localStorage.getItem("usuarioAutenticado");
    if(!usuarioAutenticado) {
        location.href = "index.html";
    }
});

// Boton de cerrar sesion
$("#cerrarSes").on("click", function(){
    localStorage.removeItem("usuarioAutenticado");
});     