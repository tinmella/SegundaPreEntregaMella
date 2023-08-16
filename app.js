class Producto{
    constructor(id,nombre,precio,descripcion,img){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.img = img
    }
    
}

class carrito{
    constructor(){
        this.listaCarrito = []
    }
    agregar(producto){
        this.listaCarrito.push(producto)
    }

    mostrar(){
        this.listaCarrito.forEach(producto => {
        console.log(producto)
        })
    }
}

class ProductoController{
    constructor(){
        this.listaProducto = []
    }
    agregar(producto){
        this.listaProducto.push(producto)
    }


    mostrarproductos(){
        let contenedorProductos = document.getElementById("contenedorProductos")
        this.listaProducto.forEach( producto => {
            contenedorProductos.innerHTML += `<div class="card" style="width: 18rem;">
            <img src= "${producto.img}"class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">${producto.precio}</p>
                <a href="#" class="btn btn-primary" id="ap-${producto.id}">Agrgar</a>
            </div>
        </div>`
        })
        this.listaProducto.forEach(producto =>{
            const btn =documnet.getElementById(`ap-${producto.id}`)
            btn.addeventlistener("click",() => {
                    console.log("Producto añadido")
                    carrito.agregar(producto)
                    carrito.mostrar()
                })
        })
    }
}

const p1= new Producto (1,"strap", 5000, "un producto para mejor agarre","https://contents.mediadecathlon.com/p2069660/k$3a78005ee0e69ac54dd1e8b63d01464a/correas-de-levantamiento-pesas-powerlifting.jpg?format=auto&quality=40&f=800x800")

const p2= new Producto (2,"Banda elastica (5kg)", 5000, "un producto para mejor agarre","https://contents.mediadecathlon.com/p2263893/k$de6578bab82ac102285a3c0c9673e06e/banda-de-entrenamiento-cross-training-5-kg.jpg?format=auto&quality=40&f=800x800")

const p3= new Producto (3,"Banda elastica (15kg)", 10000, "un producto para mejor agarre","https://contents.mediadecathlon.com/p2069660/k$3a78005ee0e69ac54dd1e8b63d01464a/correas-de-levantamiento-pesas-powerlifting.jpg?format=auto&quality=40&f=800x800")

const p4= new Producto (4,"Banda elastica (30kg)", 20000, "un producto para mejor agarre","https://contents.mediadecathlon.com/p2069660/k$3a78005ee0e69ac54dd1e8b63d01464a/correas-de-levantamiento-pesas-powerlifting.jpg?format=auto&quality=40&f=800x800")


const carroDeCompras = new carrito ()

const CP = new ProductoController()

CP.agregar(p1)
CP.agregar(p2)
CP.agregar(p3)
CP.agregar(p4)

CP.mostrarproductos()

