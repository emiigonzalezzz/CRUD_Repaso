window.onload=()=>{
    ObtenerTarea();
 }

 async function ObtenerTarea(){ 
    let url = "http://localhost/CRUD_Repaso/Backend/Controller/TareaController.php?function=Obtener"
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos);
   MostrarTarea(datos)
    
 }
 async function EliminarTarea(id){
  let formData = new FormData();
  formData.append("id", id);
  let url = "http://localhost/CRUD_Repaso/Backend/Controller/TareaController.php?function=Eliminar"
  
  let config = {
      method: 'POST',
      body: formData
}
  let respuesta = await fetch(url, config);
  let datos = await respuesta.json();
  console.log(datos);
  location.reload();
  alert(id);
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
               <td><button onclick="EliminarTarea(${tarea[i].id})">Eliminar</button></td>
       </tr>
       `;

}
}