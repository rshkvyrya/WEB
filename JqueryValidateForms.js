/*forma*/
var field = new Array("name", "website", "email");
 
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}
 
function isValidAll(forma,field) {
    $(forma).submit(function(){
        var error1=0,error2=0,error3=0;
        var err_text="";
        $(forma).find(":input").each(function(){
            for(var i=0;i<field.length;i++){
                if($(this).attr("name")=="name"){
                    if($(this).val().length == 0){
                        $(this).css('border', 'red 1px solid');
                        error1=1;
                    }else{
                        if($(this).val().length > 30){
                            $(this).css('border', 'red 1px solid');
                            error1=2;
                        }else{
                            $(this).css('border', 'green 1px solid');
                        }
                    }
                }
                if($(this).attr("name")=="website"){
                    if($(this).val().length == 0){
                        $(this).css('border', 'red 1px solid');
                        error2=1;
                    }else{
                        $(this).css('border', 'green 1px solid');
                    }
                }
                if($(this).attr("name")=="email"){
                    if(!isValidEmailAddress($(this).val()) || $(this).val() == ""){
                        $(this).css('border', 'red 1px solid');
                        error3=1;
                    }else{
                        $(this).css('border', 'green 1px solid');
                    }
                }
            }
       })
 
        if(error1 == 0 && error2 == 0 && error3 == 0){
            alert("Ваше сообщение успешно отправлено!");
            return true;
        }else{
            if(error1==1) err_text += "Введите имя!\n";
            if(error1==2) err_text += "Длинна имени не может превышать 30 символов!\n";
            if(error2==1) err_text += "Введите адрес сайта!\n";
            if(error3==1) err_text += "Неверный email!\n";
            $("#messenger").html(err_text);
            $("#messenger").fadeIn("slow");
            return false;
        }
 
    })
}
isValidAll("#form",field);
