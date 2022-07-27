import { buildMaxHeap, heapify, merge, swap } from "../util"

export const bubbleSort=async (arr)=>{
    for(let i=0;i<(arr.length-1);i++){
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                await swap(arr,j,j+1);
            }
        }
    }
    return arr;
}
export const heapSort=async (array)=>{
    await buildMaxHeap(array);
    let lastElement=array.length-1;
    while(lastElement>0){
        await swap(array,0,lastElement);
        await heapify(array,0,lastElement);
        lastElement--;
    }
    return array;
}
// export const mergeSort=(arr)=>{
//     if(arr.length<=1) return arr;

//     let mid=Math.floor(arr.length/2);

//     let left=mergeSort(arr.slice(0,mid));
//     let right=mergeSort(arr.slice(mid));
    
//     return merge(left,right);
// }
export const mergeSort=async (arr,left,right)=>{
    if(left>=right){ 
    return
    };

    let mid =left+ parseInt((right-left)/2);
    await mergeSort(arr,left,mid);
    await mergeSort(arr,mid+1,right);
    await merge(arr,left,mid,right);
}
export const quickSort=(array)=>{
    
}
export const insertionSort=async (arr)=>{
    for(let i=1;i<arr.length;i++){
        let currValue=arr[i];

        let j;
        for(j=i-1;j>=0 && arr[j]>currValue;j--){
            
            await swap(arr,j+1,j)
        }

        arr[j+1]=currValue;
    }
    return arr;
}

