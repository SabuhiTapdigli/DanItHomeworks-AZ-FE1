function filterBy (arr,data) {
    for (let i=0; i<arr.length; i++) {
        if (typeof arr[i] == typeof data) {
            delete arr[i];
        }

    }
    return arr;
}
let array =[12,24,"string"];
let data = 12;
console.log(filterBy(array,data));

