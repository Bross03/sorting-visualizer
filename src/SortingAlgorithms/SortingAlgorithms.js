import { buildMaxHeap, heapify, isSorted, merge, partition, shuffle, swap } from "../util"

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
export const mergeSort=async (arr,left=0, right=arr.length-1, speed)=>{
    if(left>=right){ 
    return
    };

    let mid =left+ parseInt((right-left)/2);
    await mergeSort(arr,left,mid, speed);
    await mergeSort(arr,mid+1,right, speed);
    await merge(arr,left,mid,right,speed);
}

export const quickSort=async (arr, start=0, end=arr.length-1, speed)=>{
    if(start>=end){
        return arr;
    }
    let pivotIndex= await partition(arr,start,end,speed);

    await quickSort(arr,start, pivotIndex-1,speed);
    await quickSort(arr,pivotIndex+1,end,speed);

    return arr;
}
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
export const bogoSort=async (arr, speed)=>{
    while(isSorted(arr)==false){
        await shuffle(arr, speed);
    }
    return arr;
}

