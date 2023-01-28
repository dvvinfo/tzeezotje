<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message_form = $_POST['message'];

$to = "alexeydzyuba27@gmail.com";
$subject ='Отправлена заявка с сайта НАЗВАНИЕ_САЙТА';
$message = "Заявка была отправлена пользоваталем $name с имейлом $email и с сообщением $message_form ";
$headers = "From: $name <$email>" . "\r\n";

if (mail($to,$subject,$message,$headers)) {
	echo 'Ваше сообщение успешно отправлено (ответ сервера)!';
} else {
	echo 'Возникла ошибка при отработке функции mail на сервере (ответ сервера)!';
}

