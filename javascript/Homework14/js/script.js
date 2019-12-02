const tabsHeader = $('.tabs-header');
const tabsItems = $ ('.tabs-content-item');

tabsHeader.on('click', '.tabs-title', function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
    $(tabsItems[$(this).index()]).addClass('active');
});
