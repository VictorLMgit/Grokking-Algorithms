/**
 * @param {any[]} arr
 * @return {int}
 */
function countElement(arr) {
    if (!arr[0]) return 0;
    return 1 + countElement(arr.slice(1));
}
