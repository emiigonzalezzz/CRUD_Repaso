window.onload=()=>{
    ObtenerTarea();
    ModificarTarea();
  }
  
  async function ObtenerTarea(){ 
    let url = "http://localhost/CRUD_Repaso/Backend/Controller/TareaController.php?function=Obtener"
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos);
   MostrarTarea(datos)
    
  }
  
  function MostrarTarea(tarea){
   let tbodyElement = document.querySelector("#tBodyTareas")
   for (let i=0; i < tarea.length; i++){
       tbodyElement.innerHTML+= `
           <tr>
               <td>${tarea[i].id}</td>
               <td>${tarea[i].nombre}</td>
               <td>${tarea[i].estado}</td>
               <td>${tarea[i].fecha}</td>
               <td>${tarea[i].hora}</td>
               <td><button onclick="CargarTareas('${tarea[i].id}', '${tarea[i].nombre}', '${tarea[i].estado}', '${tarea[i].fecha}', '${tarea[i].hora}')">Seleccionar</button></td>
       </tr>
       `;
  
    }
  }
    function CargarTareas(id, nombre, estado, fecha, hora){
  
      let idInput = document.querySelector("#id");
       idInput.value = id;
  
      let nombreInput = document.querySelector("#nombre");
        nombreInput.value = nombre;

      let estadoInput = document.querySelector("#estado");
        estadoInput.value = estado;

      let fechaInput = document.querySelector("#fecha");
        fechaInput.value = fecha;
  
      let horaInput = document.querySelector("#hora");
        horaInput.value = hora;
  }
  
  async function ModificarTarea(){
    let formElement = document.querySelector("#formModificar")
    
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/CRUD_Repaso/Backend/Controller/TareaController.php?function=Modificar"
  
        let config = {
            method: 'POST',
            body: formData
        }
        
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        location.reload();
        console.log(datos);
        
  }
  }
  