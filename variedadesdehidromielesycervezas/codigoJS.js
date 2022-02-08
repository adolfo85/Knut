// Crea una variable con un array que contenga nombre y precio del producto
let products = [];

// crea una variable que indique el monto total:

let total = 0;


// Crea una función que denomina add para agregar los productos. 
// La función envía el nombre del producto y el precio a la consola.
function add(product, price){
    console.log(product, price);
    // push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`;
}

// Crea una función para pagar:
function pay (){
    console.log(product,price);
    window.alert(product.join(", \n"));
}

