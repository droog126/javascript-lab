
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merg(mergeSort(left), mergeSort(right))
}

function merg(left, right) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    if (left.length) {
        result.push(...left)
    }
    if (right.length) {
        result.push(...right);
    }
    return result;
}


const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('归并排序耗时');
console.log('arr :', mergeSort(arr));
console.timeEnd('归并排序耗时');
// arr : [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// 归并排序耗时: 0.739990234375ms

