import { buildMaxHeap, heapify, isSorted, merge, partition, shuffle, swap } from "../util"

/*
/ Bubble sort method, it compares every element in the array to the one in front
/ and it swaps if the one in the left is larger
/ Average time complexity: O(n^2)
*/
export const bubbleSort=async (arr, speed)=>{
    for(let i=0;i<(arr.length-1);i++){
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                await swap(arr,j,j+1, speed);
            }
        }
    }
    return arr;
}

/*
/ Heap sort transforms an array into a data structure
/ called a heap, where the largest element is on top
/ then the element is popped and the resulting array
/ is transformed into a heap again, the top element is
/ popped and so on
/ Average time complexity: O(nlog(n))
*/
export const heapSort=async (array, speed)=>{
    
    await buildMaxHeap(array,speed);
    let lastElement=array.length-1;
    while(lastElement>0){
        await swap(array,0,lastElement,speed);
        await heapify(array,0,lastElement,speed);
        lastElement--;
    }
    return array;
}

/*
/ Merge sort user recursion to divide the input array into
/ smaller and smaller sub arrays and sorts them, then it merges
/ the sorted subarrays into bigger and bigger ones until the input
/ array is sorted
/ Average time complexity: O(nlog(n))
*/
export const mergeSort=async (arr,left=0, right=arr.length-1, speed)=>{
    if(left>=right){ 
    return
    };

    let mid =left+ parseInt((right-left)/2);
    await mergeSort(arr,left,mid, speed);
    await mergeSort(arr,mid+1,right, speed);
    await merge(arr,left,mid,right,speed);
}

/*
/ The quick sort algorithm uses partition: it selects a
/ pivot element and puts all elements smaller than it to
/ the left and all elements bigger than it to the right
/ the process is repeat in the subarrays formed(left and
/ right) until the array is sorted
/ Average time complexity: O(nlog(n))
*/
export const quickSort=async (arr, start=0, end=arr.length-1, speed)=>{
    if(start>=end){
        return arr;
    }
    let pivotIndex= await partition(arr,start,end,speed);

    await quickSort(arr,start, pivotIndex-1,speed);
    await quickSort(arr,pivotIndex+1,end,speed);

    return arr;
}

/*
/ Insertion sort starts with the first value of the
/ array and compares it to the next, and sorts them,
/ every next element is put into its correct position
/ in the sorted array until there are no elements left
/ Average time complexity: O(nlog(n))
*/
export const insertionSort=async (arr,speed)=>{
    for(let i=1;i<arr.length;i++){
        let currValue=arr[i];

        let j;
        for(j=i-1;j>=0 && arr[j]>currValue;j--){
            
            await swap(arr,j+1,j,speed)
        }

        arr[j+1]=currValue;
    }
    return arr;
}

/*
/ Bogo sort is probably the worst sorting algorithm
/ it takes an input array, checks if it is sorted, if
/ not, the array is completely shuffled and the process
/ is repeated until it is sorted.
/ Average time complexity: O((n+1)!)
*/
export const bogoSort=async (arr, speed)=>{
    while(isSorted(arr)==false){
        await shuffle(arr, speed);
    }
    return arr;
}

