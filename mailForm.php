<?php

    header("Content-Type:text/html; charset=UTF-8");
    mb_language("japanese");
    mb_internal_encoding("utf-8");

    if(!empty($_POST['name'])&&($_POST['naiyou'])&&($_POST['sub'])){
        
        $name=$_POST['name'];
        $tel=$_POST['tel'];
        $mail=$_POST['mail'];
        $sub=$_POST['sub'];
        $naiyou=$_POST['naiyou'];
        $mymail="naito.1230@gmail.com";
        $naiyouall="氏名：".$name."\n電話番号：".$tel."\nお問い合わせ内容\n".$naiyou;
        $success=mb_send_mail($mymail,$sub,$naiyouall,"From:".$mail);
        $mymail="gsalt.asano@gmail.com";
        $success=mb_send_mail($mymail,$sub,$naiyouall,"From:".$mail);
    }

    if($success){

        echo("送信しました\n\n");
        echo("<a href='http://g-salt.com/'>戻る</a>");

    }else{
        echo("送信失敗。必須事項を入力してください。");
    }
?>