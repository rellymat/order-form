$(document).ready(function(){
    $("#sumbit").click(function(){
        var nam = $("#name").val();
        var qua = $("#quantity").val();
        var ema = $("#email").val();
        var count = 0;
        var thanks = "Thank you, your order is received";
        $("#msg").empty();

        if(qua !== ""){
           if($.isNumeric(qua)){
                $("#null2").text("");
                $("#quantity").css("border-color","");
                count += 1;
            } else {
                $("#null2").text("not a number");
                $("#quantity").css("border-color","red");
            }
        } else {
            $("#quantity").css("border-color","red");
            $("#null2").text("required field");
        }   

        if(ema !== ""){
            if(IsEmail(ema) == true){
                $("#null3").text("");
                $("#wrong").text("");
                $("#email").css("border-color","");
                count += 1;
            } else {
                $("#null3").text("");
                $("#wrong").text("not a valid email");
                $("#email").css("border","red 2px solid");
            }
        } else {
            $("#wrong").text("");
            $("#null3").text("required field");
            $("#email").css("border","red solid 1px");
        } 
        
        if(nam !== ""){
            $("#null1").text("");
            $("#name").css("border-color","");
            count += 1;
        }else {
            $("#name").css("border-color","red");
            $("#null1").text("required field");
        }

        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!regex.test(email)) {
              return false;
            }else{
              return true;
            }
          }

          if(count == 3){
            $("#res").empty();
            $("#res").append("Item Name: " + nam + "<br>");
            $("#res").append("Quantity: " + qua + "<br>");
            $("#res").append("Email: " + ema + "<br>");
            $("#res").append("Message: " + $("#message").val() + "<br>");
            $("#res").append("Color: " + $("input[name='radioColor']:checked").val() + "<br>");
            $("#res").append("Size: " + $("#selectSize").val() + "<br>");
            
            if($("#checkbox").is(":checked"))
                 $("#res").append("Free Shipping: Yes<br>");
            else
                $("#res").append("Free Shipping: No<br>");

            $("#msg").css("color","green");
            $("#msg").append("<br>" + thanks);

                $("#form")[0].reset();
          }
    });
});