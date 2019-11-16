let ul= document.createElement("ul");
document.body.appendChild(ul);

let array=['hello', 'world', 'Baku', 'IBA Tech Academy', '2019'];
let result = array.map((item) => {
    let li=document.createElement("li");
    ul.append(li);
    li.innerHTML=`${item}`;
});

