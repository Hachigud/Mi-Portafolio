<?php 
    $to = "test-zso2c13e0@srv1.mail-tester.com";
	$nombre =filter_input(INPUT_POST, 'nombreCorreo', FILTER_SANITIZE_STRING);
	$email = filter_input(INPUT_POST, 'correo', FILTER_SANITIZE_STRING);
	$asunto = 'Formulario Rellenado';
	$mensaje = "Nombre: ".$nombre."<br> Email: ".$email." <br> Mensaje:".$_POST["detalles"];


	if(mail($to, $asunto, $mensaje)){
		echo "Correo enviado \n", $nombre, $to, $email , $asunto ,$mensaje;
	}else echo "error" ;
 ?>