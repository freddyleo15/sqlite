class Cliente {
    constructor(nombre,precio,fecha){
    this.nombre =nombre;
    this.precio=precio;
    this.fecha=fecha;
    }

}

class UI {
      NuevoCliente(cliente){
          const listarCliente = document.getElementById('list-clientes');
          const element = document.createElement('div');
          element.innerHTML = `
          <div class="card text-center mb-4">
          <div class="card-body" >
          <strong>nombre Cliente </strong>: ${product.name}
          <strong>precio </strong>: ${product.precio}
          <strong>fecha </strong>: ${product.fecha}
</div>
</div>

          
          
          `;
        
      }

      AñadirCliente(){

      }

      MostrarCliente(){

      }
       
}

document.getElementById('cliente-form').addEventListener('submit',function(e){

      const nombre = document.getElementById('nombre').value;
      const precio = document.getElementById('precio').value;
      const fecha  = document.getElementById('fecha').value;

      const cliente = new Cliente (nombre,precio,fecha); 
      e.preventDefault();
}


);