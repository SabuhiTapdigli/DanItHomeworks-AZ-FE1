let btns = document.querySelectorAll('.btn');

window.addEventListener('keydown', event => {
    switch(event.key) {
        case 'Enter':
            btns[0].style.backgroundColor = 'blue';
            break;
        case 's':
            btns[1].style.backgroundColor = 'blue';
            break;
        case 'e':
            btns[2].style.backgroundColor = 'blue';
            break;
        case 'o':
            btns[3].style.backgroundColor = 'blue';
            break;
        case 'n':
            btns[4].style.backgroundColor = 'blue';
            break;
        case 'l':
            btns[5].style.backgroundColor = 'blue';
            break;
        case 'z':
            btns[6].style.backgroundColor = 'blue';
            break;
    };
});

window.addEventListener('keyup', event => {
    switch (event.key) {
        case 'Enter':
            btns[0].style.backgroundColor = '';
            break;
        case 's':
            btns[1].style.backgroundColor = '';
            break;
        case 'e':
            btns[2].style.backgroundColor = '';
            break;
        case 'o':
            btns[3].style.backgroundColor = '';
            break;
        case 'n':
            btns[4].style.backgroundColor = '';
            break;
        case 'l':
            btns[5].style.backgroundColor = '';
            break;
        case 'z':
            btns[6].style.backgroundColor = '';
            break;
    };
});

