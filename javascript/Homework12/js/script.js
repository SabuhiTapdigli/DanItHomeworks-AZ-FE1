
let pictures = document.querySelectorAll('.image-to-show');
let stopbtn=document.querySelector('#Stop-btn');
let resumebtn=document.querySelector('#Resume-btn');
let current = document.querySelector('.active');

let index=0;
showimage();
function showimage(){
    let i;
    for (i=0; i<pictures.length; i++){
        pictures[i].style.display='none';
    }
    index++;
    if(index > pictures.length) {index=1}
    pictures[index-1].style.display ='block';
    let time = setTimeout(showimage,2000);
    stopbtn.addEventListener('click', ()=>{
        clearTimeout(time)
    });
    resumebtn.addEventListener('click',()=>{
        setTimeout(showimage,1000)
    })

}
