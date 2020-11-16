<?php
$to = "manager@girlschase.com.ua";
$subject = "Обратный звонок";
$headers = "From: message@girlschase.com.ua";

if (

isset($_POST["name"]) && 
 
isset($_POST["tel"])

) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],    
    	'tel' => $_POST["tel"]        
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 

    foreach ($result as $key => $value) {
        $txt_for_mail .= $key . ": " . $value ."\n";
 }

  mail($to, $subject, $txt_for_mail, $headers);

}

?>