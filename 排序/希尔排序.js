const shellSort = arr => {
	let len = arr.length,
		temp,
		gap = 1;

	while (gap < len / 3) {
		//动态定义间隔序列
		gap = gap * 3 + 1;
    }
    
    
	for (gap; gap > 0; gap = Math.floor(gap / 3)) {
		for (let i = gap; i < len; i++) {
			temp = arr[i];
			let j = i - gap;
			for (; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;

		}
	}

	return arr;
};

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('耗时');
console.log('arr :', shellSort(arr));
console.timeEnd('耗时');