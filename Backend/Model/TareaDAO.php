<?php

require_once "../Connection/Connection.php";

class tarea
{

    public function ObtenerTareaModel()
    {
        $connection = connection();
        $sql = "SELECT * FROM tareas;";
        $respuesta = $connection->query($sql);
        $tareas = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $tareas;
    }
    
    public function InsertarTareaModel($nombre, $estado, $fecha, $hora)
    {
        $sql = "INSERT INTO tareas(nombre, estado, fecha, hora) VALUES('$nombre', '$estado', '$fecha', '$hora');";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    public function EliminarTareaModel($id)
    {
        $sql = "DELETE FROM tareas WHERE id = $id;";
        $connection = connection();
        $respuesta = $connection->query($sql); 
        return $respuesta;
    }
    public function ModificarTareaModel($id, $nombre, $estado, $fecha, $hora)
    {
        $sql = "UPDATE tareas SET nombre = '$nombre' , estado = '$estado', fecha = '$fecha' , hora = '$hora' WHERE id = $id";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
    }
}
