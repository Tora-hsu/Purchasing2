$(document).ready(function() {
    $("button").click(function(){
        var input1=$("#input1").val();
        var input2=$("#input2").val();
        var input3=$("#input3").val();
        var input4=$("#input4").val();
        var input5=$("#input5").val();
        var exchange=0.255;
        $("#result1").attr("value",Math.round((parseInt(input1)+parseInt(input2)+parseInt(input3))*exchange));
        // $("#result1").attr("value",exchange);
        $("#result2").attr("value",input4*40);
        $("#result3").attr("value",input4*60);
        $("#result4").attr("value",input5);
        $("#result5").attr("value",Math.round((parseInt(input1)+parseInt(input2)+parseInt(input3))*exchange+parseInt(input4*40))+parseInt(input5));
        $("#result6").attr("value",Math.round((parseInt(input1)+parseInt(input2)+parseInt(input3))*exchange+parseInt(input4*60))+parseInt(input5))
    });
});