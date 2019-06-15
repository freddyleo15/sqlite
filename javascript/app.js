class Cliente {
    constructor(nombre,precio,fecha){
    this.nombre =nombre;
    this.precio=precio;
    this.fecha=fecha;
    }

}

class UI {
      NuevoCliente(cliente){
          const listarCliente = document.getElementById('lista-clientes');
          const element = document.createElement('div');
          element.innerHTML = `
          <div class="card text-center mb-4">
          <div class="card-body" >
          <strong>nombre Cliente </strong>: ${cliente.nombre}
          <strong>precio </strong>: ${cliente.precio}
          <strong>fecha </strong>: ${cliente.fecha}
</div>
</div> `;
        
    listarCliente.appendChild(element);
        }

      AñadirCliente(){

      }

      ResetForm(){
          document.getElementById('cliente-form').reset();
      }

      MostrarCliente(){

      }
       
}

document.getElementById('cliente-form').addEventListener('submit',function(e){

      const nombre = document.getElementById('nombre').value;
      const precio = document.getElementById('precio').value;
      const fecha  = document.getElementById('fecha').value;

      const cliente = new Cliente (nombre,precio,fecha); 
      const ui = new UI();
      ui.NuevoCliente(cliente);
      ui.ResetForm();


      e.preventDefault();
}


);