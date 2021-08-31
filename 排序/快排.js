function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid_index = Math.floor(arr.length / 2);
    let mid_val = arr.splice(mid_index, 1);
    let left = [];
    let right = [];
    for (let val of arr) {
        if (val <= mid_val) {
            left.push(val)
        } else {
            right.push(val);
        }
    }
    return quickSort(left).concat(mid_val, quickSort(right));

}


const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('耗时');
console.log('arr :', quickSort(arr));
console.timeEnd('耗时');