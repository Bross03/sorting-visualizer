export const randomNumberInRange=(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const wait=(ms)=> new Promise(resolve => setTimeout(resolve, ms))

export const swap=async (arr, xp, yp)=>{
    const arrayBars=document.getElementsByClassName('bar');
    const barOneStyle = arrayBars[xp].style;
    const barTwoStyle = arrayBars[yp].style;
    let temp=arr[xp];
    barOneStyle.backgroundColor='red';
    barTwoStyle.backgroundColor='red';
    await wait(2);
    let tempAnimation=barOneStyle.height;
    barOneStyle.height=barTwoStyle.height;
    barTwoStyle.height=tempAnimation;
    arr[xp]=arr[yp];
    arr[yp]=temp;
    await wait(2);
    barOneStyle.backgroundColor='blueviolet';
    barTwoStyle.backgroundColor='blueviolet';

}

export const areArraysEqual=(arr1,arr2)=>{
    if(arr1.length!=arr2.length) return false;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;
}

//the following are heap sort helpers

export const heapify=async (heap,i,max)=>{
    let index;
    let leftChildIndex;
    let rightChildIndex;

    while(i<max){
        index=i;

        leftChildIndex=2*i+1;
        rightChildIndex=leftChildIndex+1;

        if(leftChildIndex<max && heap[leftChildIndex]>heap[index]){
            index=leftChildIndex;
        }

        if(rightChildIndex<max && heap[rightChildIndex]>heap[index]){
            index=rightChildIndex;
        }

        if(index===i){
            return;
        }
        await swap(heap,i,index);
        
        i=index;
    }
}
export const buildMaxHeap=async (arr)=>{
    
    let i=Math.floor(arr.length/2 -1);
    while(i>=0){
        await heapify(arr,i,arr.length);
        i--;
    }
}