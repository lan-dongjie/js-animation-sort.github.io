function compare(a, b) {
  return a > b;
}
function swap(arr, i, j) {
  if (i === j) {
    return;
  }
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function quick_sort(arr, fn = compare, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }
  let i = left + 1;
  let pivot = arr[left];
  let nowIndex = left;
  for (; i <= right; i++) {
    if (fn(pivot, arr[i])) {
      nowIndex++;
      swap(arr, nowIndex, i);
    }
  }
  swap(arr, nowIndex, left);
  quick_sort(arr, fn, left, nowIndex - 1);
  quick_sort(arr, fn, nowIndex + 1, right);
}
