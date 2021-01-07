$(document).ready(function(){
    $("#other").hide();
    $("#otherstate").hide();
	
    $("#hear-about").change(function() {
        if ($(this).val()=="other"){
            $("#other").show();
        }
        else{
            $("#other").hide();
        }
    });
    
    $("#state").change(function() {
        if ($(this).val()=="other"){
            $("#otherstate").show();
        }
        else{
            $("#otherstate").hide();
        }
    });
});
