<?php
// несколько получателей
$to  = 'mangalkzn.info@gmail.com' . ', ';  // обратите внимание на запятую
$to .= 'mangalkzn.info@gmail.com';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма меняется он!!
$message = 
$_POST['firstname'] . '<br />' . 
$_POST['lastname'] . '<br />' . 
$_POST['phone'] . '<br />' . 
$_POST['email'] . '<br />' . 
$_POST['select'] . '<br />' . 
$_POST['message'];

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// // Дополнительные заголовки
// $headers .= 'To: Иван <Ivan@example.com>' . "\r\n"; // Свое имя и email
// $headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>