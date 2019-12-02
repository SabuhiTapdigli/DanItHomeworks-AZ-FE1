let tabsTitle = document.querySelectorAll('.tabs-title');
let tabsContentItem = document.querySelectorAll('.tabs-content-item');
for (let i=0; i<tabsTitle.length; i++) {
    tabsTitle[i].dataset.index =i;
    tabsContentItem[i].dataset=i;
    tabsTitle[i].addEventListener('click', function () {
        tabsTitle.forEach(function (e) {
            e.classList.remove('active');

        });
        tabsContentItem.forEach(function (e) {
            e.style.display='none';
        })
        tabsContentItem[i].style.display='block';
        tabsTitle[i].classList.add('active');
    });
}



