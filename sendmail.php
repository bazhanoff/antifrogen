<?php
$fio = $_POST['calculate-fio'];
$phone = $_POST['calculate-phone'];
$water = $_POST['calculate-water'];
$antifrogenN = $_POST['antifrogen-n'];
$antifrogenL = $_POST['antifrogen-l'];
$subject = 'Заявка с сайта antifrogen';
$headers = "Content-type: text/html; charset=utf-8 \r\n";

$fio = htmlspecialchars($fio);
$fio = urldecode($fio);
$fio = trim($fio);
$phone = htmlspecialchars($phone);
$phone = urldecode($phone);
$phone = trim($phone);
$water = htmlspecialchars($water);
$water = urldecode($water);
$water = trim($water);

if (isset($antifrogenL)) {
	$antifrogenL = htmlspecialchars($antifrogenL);
	$antifrogenL = urldecode($antifrogenL);
	$antifrogenL = trim($antifrogenL);
	$message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p><b>ФИО:</b> ' . $fio . '</p>
                        <p><b>Телефон:</b> ' . $phone . '</p> 
                        <p><b>Количество Антифроген-Л:</b> ' . $antifrogenL . ' шт</p> 
                        <p><b>Вода:</b> ' . $water . ' шт</p> 
                    </body>
                </html>';
	$result = mail('namelessoff@yandex.ru', $subject, $message, $headers);
} else {
	$antifrogenN = htmlspecialchars($antifrogenN);
	$antifrogenN = urldecode($antifrogenN);
	$antifrogenN = trim($antifrogenN);
	$message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p><b>ФИО:</b> ' . $fio . '</p>
                        <p><b>Телефон:</b> ' . $phone . '</p> 
                        <p><b>Количество Антифроген-Н:</b> ' . $antifrogenN . ' шт</p> 
                        <p><b>Вода:</b> ' . $water . ' шт</p> 
                    </body>
                </html>';
	$result = mail('namelessoff@yandex.ru', $subject, $message, $headers);
};

if ($result) {
	exit('<meta http-equiv="refresh" content="0; url=/" />');
}