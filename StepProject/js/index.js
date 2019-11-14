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


let works = document.getElementById('works');
let more = document.getElementById('moreWorksImages');
let worksPhoto = document.getElementById('worksPhoto');
let amazing = document.getElementById('amazing');

works.addEventListener('click', changeWorksImage);
more.addEventListener('click', loadMoreImages);

function changeWorksImage(e) {
    if (typeof(e.target.id) == String) {
        return;
    } else {
        for (let i = 0; i < works.children.length; i++) {
            works.children[i].id = '';
        }
        e.target.id = 'active_work';
        console.dir(e);
        for (let j = 0; j < works.nextElementSibling.children.length; j++) {
            if (works.nextElementSibling.children[j].className == e.target.innerHTML.replace(/\s+/g, '')) {
                works.nextElementSibling.children[j].style.display = 'block';
            } else if (e.target.innerHTML == 'All') {
                works.nextElementSibling.children[j].style.display = 'block';
            } else {
                works.nextElementSibling.children[j].style.display = 'none';
            }
        }
    }
}

function loadMoreImages() {
    let a = Array.from(worksPhoto.cloneNode(true).children);
    for (let i = 0; i < a.length; i++) {
        worksPhoto.appendChild(a[i]);
    }
    more.style.display = 'none';
}











// const loadedData = [
//     {
//         imgSrc: 'img/Layer%2024.png',
//         hoverText: 'Hover',
//         category: 1
//     },
//     {
//         imgSrc: 'img/Layer%2025',
//         hoverText: 'Hover',
//         category: 2
//     },
//     {
//         imgSrc: 'img/Layer%2026',
//         hoverText: 'Hover',
//         category: 3
//     },
//     {
//         imgSrc: 'img/Layer%2027',
//         hoverText: 'Hover',
//         category: 4
//     },
//     {
//         imgSrc: 'img/Layer%2028',
//         hoverText: 'Hover',
//         category: 1
//     },
//     {
//         imgSrc: 'img/Layer%2029',
//         hoverText: 'Hover',
//         category: 2
//     },
//     {
//         imgSrc: 'img/Layer%2030',
//         hoverText: 'Hover',
//         category: 3
//     },
//     {
//         imgSrc: 'img/Layer%2031',
//         hoverText: 'Hover',
//         category: 4
//     },
//     {
//         imgSrc: 'img/Layer%2032',
//         hoverText: 'Hover',
//         category: 1
//     },
//     {
//         imgSrc: 'img/Layer%2033',
//         hoverText: 'Hover',
//         category: 2
//     },
//     {
//         imgSrc: 'img/Layer%2034',
//         hoverText: 'Hover',
//         category: 3
//     },
//     {
//         imgSrc: 'img/Layer%2024',
//         hoverText: 'Hover',
//         category: 4
//     }
//
// ];
//
// // Prepare func for load more logic
// const loadMore = () => {
//     let items = [];
//
//     // Create out new items
//     for(let item of loadedData) {
//         items.push(`
//                     <a href="#" class="project-item category-${item.category}">
//                         <img src="${item.imgSrc}" alt="">
//                         <div class="project-item--hover">
//                             ${item.hoverText}
//                         </div>
//                     </a>
//                 `);
//
//     }
//
//     // Find containers
//     const wrapper = $('.grid-wrapper');
//     const inner =  $('.grid');
//
//     // Fix current height
//     wrapper.css('height', wrapper.height());
//     // Add new items
//     inner.append(items.join(''));
//     // Animate to new height
//     wrapper.animate({
//         height: inner.height()
//     }, 1000, ()=> {
//         // Restore auto height after animation
//         wrapper.css('height', 'auto')
//     })
// }
//
// $('.load-more').on('click', loadMore);
//
// $('.categories').on('click', '.category-item', function(e) {
//     if (!$(this).hasClass('active')) {
//
//         const wrapper = $('.grid-wrapper');
//         const inner =  $('.grid');
//         wrapper.css('height', wrapper.height());
//         $('.loader').fadeIn(100, ()=> {
//             $('.category-item.active').removeClass('active');
//             $(this).addClass('active');
//             const categoryNum = $(this).attr('data-category');
//
//             if(categoryNum == '0') {
//                 $('.project-item').show();
//             } else {
//                 $('.project-item').hide();
//                 $('.project-item.category-' + categoryNum).show();
//             }
//
//             wrapper.animate({
//                 height: inner.height()
//             }, 600, ()=> {
//                 // Restore auto height after animation
//                 wrapper.css('height', 'auto');
//                 $('.loader').fadeOut(100)
//             })
//         })
//
//
//     }
// })


