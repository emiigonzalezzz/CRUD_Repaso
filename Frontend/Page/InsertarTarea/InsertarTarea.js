window.onload=()=>{
    
    let formElement = document.querySelector("#insertar")

    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData = new FormData(formElement);
        let url = "http://localhost/CRUD_Repaso/Backend/Controller/TareaController.php?function=Insertar"

        let config = {
                method: 'POST',
                body: formData
        }

        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        console.log(datos);
    
        if (datos !=true){
            console.log("Ya existen");
        }else{
            console.log("Insertado conrrectamente");
            alert("Tarea ingresada correctamente");
            document.getElementById("insertar").reset();
        }
    }
}