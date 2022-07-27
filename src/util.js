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
    console.log(barOneStyle.height);
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

// export const merge=(arr,left,right)=>{
//     let tempArr=[...arr]
//     let sortedArr=[];

//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sortedArr.push(left.shift());
//         }else{
//             sortedArr.push(right.shift());
//         }
//     }

//     return [...sortedArr,...left,...right];
// }
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