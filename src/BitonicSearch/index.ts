export class BitonicSearch {
  constructor(list: Array<number>, val: number) {
    console.log(list);
    console.log(this.findBitonic(list, list.length, val));
  }

  // Function for binary search in ascending part of array
  ascendingBinarySearch(
    arr: Array<number>,
    low: number,
    high: number,
    key: number
  ) {
    while (low <= high) {
      let mid = low + (high - low) / 2;
      if (arr[mid] == key) return mid;
      if (arr[mid] > key) high = mid - 1;
      else low = mid + 1;
    }
    return -1;
  }
  // Function for binary search in descending part of array
  descendingBinarySearch(
    arr: Array<number>,
    low: number,
    high: number,
    key: number
  ) {
    while (low <= high) {
      let mid = low + (high - low) / 2;
      if (arr[mid] == key) return mid;
      if (arr[mid] < key) high = mid - 1;
      else low = mid + 1;
    }
    return -1;
  }

  findBitonic(nums: number[], size: number, key: number) {
    let peak_index = this.findPeakElement(nums, 0, size - 1);
    if (key > nums[peak_index]) return -1;
    else if (key == nums[peak_index]) return peak_index;
    else {
      let temp = this.ascendingBinarySearch(nums, 0, peak_index - 1, key);
      if (temp != -1) {
        return temp;
      }
      // Search in right of k
      temp = this.descendingBinarySearch(nums, peak_index + 1, size - 1, key);
      if (temp != -1) {
        return temp;
      }
    }
    return -1;
  }

  findPeakElement(list: Array<number>, lowIndex: number, highIndex: number) {
    while (lowIndex < highIndex) {
      let mid = (lowIndex + highIndex) / 2;
      if (list[mid] > list[mid + 1]) highIndex = mid;
      else lowIndex = mid + 1;
    }
    return lowIndex;
  }
}
