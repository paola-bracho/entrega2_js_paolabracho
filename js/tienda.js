
// ------------------------------SIMULACION DE UNA TIENDA CON CARRITO DE COMPRA USANDO CICLOS------------------------------


// Array con la lista de productos
const productos = [
    {nombre: "queso", precio: 3000},
    {nombre: "pan", precio: 1000},
    {nombre: "huevos", precio: 500},
    {nombre: "mantequilla", precio: 5000},
    {nombre: "jamon", precio: 9000},
    {nombre: "carne", precio: 15000},
];

// carrito de compras vacio donde se van ingresar los valores de los productos
let carrito = [];

// inicio del bucle donde se pregunta si desea comprar algo, si la respuesta es "si" se le muestra la lista de productos
let seleccion = prompt("Buenos dias, desea comprar algun producto?");

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor escriba si o no");
    seleccion = prompt("Desea comprar algun producto?");
}

if(seleccion === "si"){
    alert("A continuacion le presentaremos la lista de productos");
    let todosLosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio);
    alert(todosLosProductos.join(" / "));

} else if (seleccion === "no"){
    alert("¡Gracias por venir, hasta pronto!");
}

while (seleccion === "si") {
    let producto = prompt("agrega un producto al carrito");
    let precio = 0;

    if (producto === "queso" || producto === "pan" || producto === "huevos" || producto === "mantequilla" ||
    producto === "jamon" || producto === "carne") {

// mediante un switch se evalua caso por caso cual es el precio del producto elegido

        switch (producto) {
            case "queso":
                precio = 3000;
                break;
            case "pan":
                precio = 1000;
                break;
            case "huevos":
                precio = 500;
                break;
            case "matequilla":
                precio = 5000;
                break;
            case "jamon":
                precio = 9000;
                break;
            case "carne":
                precio = 15000;
                break;
            default:
                alert("estoy fallando")
                break;
        }

// Se preguntas la cantidad deseada del producto mediante un prompt y se agregan los datos al carrito de compras
    let unidades = parseInt(prompt("Cuantas unidades deseas llevar?"));

    carrito.push({producto, unidades, precio});
    console.log(carrito);
    } else {
        alert("no tenemos ese producto");
    }

    seleccion = prompt("Quieres llevar otro producto?");

// Si no desea seguir comprando, se muestra su carrito hasta el momento 
    while (seleccion === "no") {
        alert("Gracias por su compra! hasta la proxima 😄");
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`);
        })
    break;
    }
}

// Y mediante el metodo reduce se suma el total de todos los precios y las unidades, dando el total de la compra.
const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.unidades, 0);
alert(`El total a pagar de su compra es: $${total}`);













