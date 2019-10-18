<?php

    // Telegram
    $token = "973838360:AAFoxP1EuuZCfmJjA0anrqIEEGXLvebGJps";
    $chat_ids = ["667322034", "567420635", "462343724", "446329362"];

    $nameInput = $_POST['name'];
    $phoneInput = $_POST['phone'];

    $arr = array(
	    'Имя клиента' => $nameInput,
	    'Телефон клиента' => $phoneInput
    );

    print_r($_POST);
    if( !empty($_POST) ) {
        foreach( $_POST as $key => $value ) {
            if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "action") {
                $txt .= "<b>". $key . "</b> - " . $value ."%0A";
            }
        }
    }

    foreach ($chat_ids as $chat_id) {
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    }

    wp_die();
