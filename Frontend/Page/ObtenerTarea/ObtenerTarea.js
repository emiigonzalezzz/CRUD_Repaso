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
       </tr>
       `;

    }
}