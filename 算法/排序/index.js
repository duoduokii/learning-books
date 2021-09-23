/**
 * 冒泡排序
 */

let arr = [3, 2, 5, 6, 1, 0, 7];

function bubbleSort(arr) {
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}

console.log(bubbleSort(arr));

/**
 * 快速排序
 * 思路：快速排序会将数组筛选成较小和较大的两个子数组，然后递归排序两个子数组
 */

// 交换数组两个值的位置
function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

// 以基准值为轴心，划分两个子数组
function partition(arr, left, right) {
	const pointValue = arr[Math.floor(left + (right - left) / 2)];
	let i = left;
	let j = right;
	while (i <= j) {
		while (arr[i] < pointValue) {
			i++;
		}
		while (arr[j] > pointValue) {
			j--;
		}
		if (i <= j) {
			swap(arr, i, j);
			i++;
			j--;
		}
	}
	return i;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (arr.length === 1) return arr;
	const nextIndex = partition(arr, left, right);
	if (left < nextIndex - 1) {
		quickSort(arr, left, nextIndex - 1);
	}
	if (right > nextIndex) {
		quickSort(arr, nextIndex, right);
	}
	return arr;
}
let arr = [3, 2, 5, 1, 6, 2, 4, 0, 7];
console.log(quickSort(arr));
