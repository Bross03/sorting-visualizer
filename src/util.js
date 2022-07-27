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
    try{
    if(arr1.length!=arr2.length) return false;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;
    }catch(err){
        console.log(arr1);
        console.log(arr2);
    }
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

//merge sort helper
export const merge=async (arr,left,middle,right)=>{
    let leftLength=middle-left+1;
    let rightLength=right-middle;

    let leftArr=new Array(leftLength);
    let rightArr=new Array(rightLength);

    for(let i=0;i<leftLength;i++){
        leftArr[i]=arr[left+i];
    }
    for(let i=0;i<rightLength;i++){
        rightArr[i]=arr[middle+1+i];
    }

    let i=0;
    let j=0;
    let k=left;
    const arrayBars=document.getElementsByClassName('bar');
    
    while(i<leftLength && j<rightLength){
        const barStyle = arrayBars[k].style;
        if(leftArr[i]<=rightArr[j]){
            barStyle.backgroundColor='red';
            await wait(2);
            barStyle.height=`${leftArr[i]}px`;
            arr[k]=leftArr[i];
            await wait(2);
            barStyle.backgroundColor='blueviolet';
            i++;
        }else{
            barStyle.backgroundColor='red';
            await wait(2);
            barStyle.height=`${rightArr[j]}px`;
            arr[k]=rightArr[j];
            await wait(2);
            barStyle.backgroundColor='blueviolet';
            j++;
        }
        k++;
    }
    while(i<leftLength){
        const barStyle = arrayBars[k].style;
        barStyle.backgroundColor='red';
        await wait(2);
        barStyle.height=`${leftArr[i]}px`;
        arr[k]=leftArr[i];
        await wait(2);
        barStyle.backgroundColor='blueviolet';
        i++;
        k++;
    }
    while(i<rightLength){
        const barStyle = arrayBars[k].style;
        barStyle.backgroundColor='red';
        await wait(2);
        barStyle.height=`${rightArr[i]}px`;
        arr[k]=rightArr[j];
        await wait(2);
        barStyle.backgroundColor='blueviolet';
        j++;
        k++;
    }

}

//Quick Sort helper

export const partition=async (arr,start,end)=>{
    
    const pivotValue=arr[start];
    let swapIndex=start;

    for(let i=start+1;i<=end; i++){
        if(pivotValue>arr[i]){
            swapIndex++;
            if(i!==swapIndex){
                await swap(arr,i,swapIndex);
            }
        }
    }

    if(swapIndex!==start){
        await swap(arr,start,swapIndex);
    }

    return swapIndex;
}

//bogo sort helpers!!!!
export const isSorted=(arr)=>{
    for(let i=1;i< arr.length; i++){
        if(arr[i]<arr[i-1]){
            return false;
        }
    }
    return true;
}
export const shuffle=async (arr)=>{
    for(let i=0;i<arr.length;i++){
        await swap(arr,i, Math.floor(Math.random()*(arr.length-1)));
    }
}