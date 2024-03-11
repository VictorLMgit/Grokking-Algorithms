function recursiveBinarySearch(arr,target, left,right)
{
    if(left > right) return -1;  
    mid = (left + right) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return recursiveBinarySearch(arr, target, left, mid - 1);  
    return recursiveBinarySearch(arr, target, mid+1, right);

}

