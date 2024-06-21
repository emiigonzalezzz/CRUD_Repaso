<?php

require_once '../Model/TareaDAO.php';

$function = $_GET['function'];

switch ($function) {
    case "Obtener":
        ObtenerTarea();
        break;
    case "Insertar":
        InsertarTarea();
        break;
    case "Eliminar":
        EliminarTarea();
        break;
    case "Modificar":
        ModificarTarea();
        break;
}

function ObtenerTarea()
{
    $resultado = (new tarea())->ObtenerTareaModel();
    echo json_encode($resultado);
}
function InsertarTarea()
{
    $nombre = $_POST['nombre'];
    $estado = $_POST['estado'];
    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];
    $resultado = (new tarea())->InsertarTareaModel($nombre, $estado, $fecha, $hora);
    echo json_encode($resultado);
}


function EliminarTarea()
{
    $id = $_POST["id"];
    $resultado = (new tarea())->EliminarTareaModel($id);
    echo json_encode($resultado);
}
function ModificarTarea()
{
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $estado = $_POST['estado'];
    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];
    $resultado = (new tarea())->ModificarTareaModel($id, $nombre, $estado, $fecha, $hora);
    echo json_encode($resultado);
}
