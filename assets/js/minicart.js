const myJson = {
    "productos": [
        {
            "ID": "001",
            "Descripcion": "Producto",
            "Precio": 899.99
        },

        {
            "ID": "002",
            "Descripcion": "Producto 2",
            "Precio": 599.99
        },

        {
            "ID": "003",
            "Descripcion": "Producto 3",
            "Precio": 799.99
        },

        {
            "ID": "004",
            "Descripcion": "Producto 4",
            "Precio": 399.99
        },

        {
            "ID": "005",
            "Descripcion": "Producto 5",
            "Precio": 299.99
        },

        {
            "ID": "006",
            "Descripcion": "Producto 6",
            "Precio": 699.99
        },

        {
            "ID": "007",
            "Descripcion": "Producto 7",
            "Precio": 599.99
        },

        {
            "ID": "008",
            "Descripcion": "Producto 8",
            "Precio": 499.99
        }

    ]}



const addToShoppingCartButtons = document.querySelectorAll('.add-to-cart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

var carro = new Array;
let ide;
let price;
let itemTitle;


//Tomo el valor del nombre del producto al cual se le hizo clic para agregar al carrito

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.transmitv');
  
    itemTitle = item.querySelector('.nombre').value;

    for (var i = 0; i<8; i++){

        if (itemTitle == myJson.productos[i].Descripcion) {

             ide=myJson.productos[i].ID;
             price=myJson.productos[i].Precio;
        }

    }

    
    console.log(ide+" "+itemTitle+" "+price);

   const resultado =document.getElementById("vista");
    const comprobante = document.createElement('div');


    comprobante.innerHTML= `<div>
    <p>${itemTitle}</p>
    </div>`
    resultado.appendChild(comprobante);
   
    
  }





  

  
    


/*

class Producto {
    constructor (itemTitle, ide, price) {
        this.nombre=itemTitle;
        this.precio=price;
        this.id=ide;

    }

imprimir () {
    


}

    

        

    }
*/
    







