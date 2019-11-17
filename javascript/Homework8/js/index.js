
$(function () {
    $("input").focus(function () {
        $(this).css('border-color','green');
    });
    $("input").blur(function () {
        $(this).css('border-color','');
        let Price = $('#Price').val();
        if (Price>=0) {
            $('#span').html('<p id="par">Current Price:'+Price+'</p> <input type="reset" id="reset" value="X">');
            $('#par').css('display','inline');
            $("#reset").click(function () {
                $('#Price').val(0);
                $("#reset").hide();
                $('#par').hide();
            })
        }
      else {
            $("input").css('border-color','red');
            $('#error').html('<p>Please enter correct price </p>');
        }
    });
});
