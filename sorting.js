const quickSort = array => {
    if(array.length <= 1) return array
   let left = []
   let right = []
   let pivot = array[array.length-1]
   
   
   for(let i = 0; i < array.length-1; i++){
       if(pivot > array[i]) left.push(array[i])
       else right.push(array[i])
   }
   return [...quickSort(left),pivot,...quickSort(right)]
}

const pivot = (arr, start = 0, end = arr.length + 1) => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
  
    let pivot = arr[start],
        pointer = start;
  
    for (let i = start; i < arr.length; i++) {
      if (arr[i] < pivot  ) {
        pointer++;
        swap(arr, pointer, i);
      }
    };
    swap(arr, start, pointer);
  
    return pointer;
  }

const bubbleSort = array => {
    let tempVar

    for(let i = array.length; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(array[j] > array[j + 1]){
                tempVar = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tempVar
            }
        }
    }
    return array
}

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

const insertionSort = arr => {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
};

const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  };

const merge = (arr1, arr2) => {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
    };
  
    return sorted.concat(arr1.slice().concat(arr2.slice()));
  };