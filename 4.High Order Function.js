function bubbleSort(data, comp) {
    for (let index = 0; index < data.length; index++) {
        for (let index2 = 0; index2 < data.length - 1; index2++) {
            if(!comp(data[index2], data[index2+1])){
                data[index2+1] = [data[index2], data[index2] = data[index2+1]][0];
            }
        }
    }
    return data;
}

function comp(a, b) {
    return a > b;
}

console.log(bubbleSort([4, 2, 1, 3, 5], comp));