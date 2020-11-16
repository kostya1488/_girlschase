<?php
$to = "manager@girlschase.com.ua";
$subject = "Заявка с сайта";
$headers = "From: message@girlschase.com.ua";

if (

isset($_POST["name"]) && 
isset($_POST["tel"]) && 
isset($_POST["insta"]) && 
isset($_POST["exp"])

) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
        'tel' => $_POST["tel"],
        'insta' => $_POST["insta"],
    	'exp' => $_POST["exp"]        
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 

    foreach ($result as $key => $value) {
        $txt_for_mail .= $key . ": " . $value ."\n";
 }

  mail($to, $subject, $txt_for_mail, $headers);

}

?>