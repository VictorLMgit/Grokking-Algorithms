/**
 * @param {number[]} arr
 * @return {number[]}
 */
function quickSort(arr) {
    if (arr.length < 2) return arr;
    const pivot = arr[0];
    const lessThanPivot = arr.slice(1).filter(n => n <= pivot);
    const higherThanPivot = arr.slice(1).filter(n => (n > pivot) );
    return quickSort(lessThanPivot).concat(pivot).concat(quickSort(higherThanPivot));
}
