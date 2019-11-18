let enter = $('.Enter');
$('.Enter').click(function () {
    if (enter.type ==='password') {
        enter.type ='text'
    }
    else {
        enter.type = 'password';
    }

});

