const tabsHeader = $('.tabs-header');
const tabsItems = $ ('.tabs-content-item');
const tabsItemsContainer = $ ('.tabs-content');


tabsHeader.on('click', '.tabs-header-item', function () {
    tabsItemsContainer.css({
        height: tabsItemsContainer.height()
    });
    $('.active').removeClass('active');
    $(this).addClass('active');
    $(tabsItems[$(this).index()]).addClass('active');
});



// const tabs = $('.tabs');
// const tabsItem = $('.tabs-content-item');
// const tabsContent = $ ('.tabs-content');
//
// tabs.on('click', '.tabs-title', function () {
//     tabsContent.css({
//         height: tabsContent.height()
//     });
//     $('.active').removeClass('active');
//     $(this).addClass('active');
//     $(tabsItem[$(this).index()]).addClass('active');
//
// });