function filterBy (arr,type) {
    let array = [];
    for (let i=0; i<arr.length; i++) {
        if (typeof arr[i] !==type) {
            array.push(arr[i]);
        }

    }
    return array;
}
let array =[12,24,'Sabuhi'];
let type = 'string';
console.log(filterBy(array,type));

