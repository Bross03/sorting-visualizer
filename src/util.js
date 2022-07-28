
export const randomNumberInRange=(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const wait=(ms)=> new Promise(resolve => setTimeout(resolve, ms))

export const swap=async (arr, xp, yp, speed)=>{
    const arrayBars=document.getElementsByClassName('bar');
    const barOneStyle = arrayBars[xp].style;
    const barTwoStyle = arrayBars[yp].style;
    const barOneValue=arrayBars[xp].firstChild;
    const barTwoValue=arrayBars[yp].firstChild;
    let temp=arr[xp];
    barOneStyle.backgroundColor='red';
    barTwoStyle.backgroundColor='red';
    if(speed>0){
    await wait(speed);
    }
    let tempAnimation=barOneStyle.height;
    barOneStyle.height=barTwoStyle.height;
    if(barOneValue){
    barOneValue.innerHTML=barOneStyle.height.slice(0, -2);
    }
        barTwoStyle.height=tempAnimation;
    if(barOneValue){
        barTwoValue.innerHTML=barTwoStyle.height.slice(0, -2);
    }
    arr[xp]=arr[yp];
    arr[yp]=temp;
    if(speed>0){
        await wait(speed);
    }
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

export const heapify=async (heap,i,max,speed)=>{
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
        await swap(heap,i,index,speed);
        
        i=index;
    }
}
export const buildMaxHeap=async (arr,speed)=>{
    
    let i=Math.floor(arr.length/2 -1);
    while(i>=0){
        await heapify(arr,i,arr.length,speed);
        i--;
    }
}

//merge sort helper
export const merge=async (arr,left,middle,right,speed)=>{
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
        const barValue=arrayBars[k].firstChild;
        if(leftArr[i]<=rightArr[j]){
            barStyle.backgroundColor='red';
            if(speed>0){
                await wait(speed);
            }
            barStyle.height=`${leftArr[i]}px`;
            if(barValue){
                barValue.innerHTML=leftArr[i];
            }
            arr[k]=leftArr[i];
            if(speed>0){
                await wait(speed);
            }
            barStyle.backgroundColor='blueviolet';
            i++;
        }else{
            barStyle.backgroundColor='red';
            if(speed>0){
                await wait(speed);
            }
            barStyle.height=`${rightArr[j]}px`;
            if(barValue){
                barValue.innerHTML=rightArr[j];
            }
            arr[k]=rightArr[j];
            if(speed>0){
                await wait(speed);
            }
            barStyle.backgroundColor='blueviolet';
            j++;
        }
        k++;
    }
    while(i<leftLength){
        const barStyle = arrayBars[k].style;
        const barValue=arrayBars[k].firstChild;
        barStyle.backgroundColor='red';
        if(speed>0){
            await wait(speed);
        }
        barStyle.height=`${leftArr[i]}px`;
        if(barValue){
            barValue.innerHTML=leftArr[i];
        }
        arr[k]=leftArr[i];
        if(speed>0){
            await wait(speed);
        }
        barStyle.backgroundColor='blueviolet';
        i++;
        k++;
    }
    while(i<rightLength){
        const barStyle = arrayBars[k].style;
        const barValue=arrayBars[k].firstChild;
        barStyle.backgroundColor='red';
        if(speed>0){
            await wait(speed);
        }
        barStyle.height=`${rightArr[i]}px`;
        if(barValue){
            barValue.innerHTML=rightArr[i];
        }
        arr[k]=rightArr[j];
        if(speed>0){
            await wait(speed);
        }
        barStyle.backgroundColor='blueviolet';
        j++;
        k++;
    }

}

//Quick Sort helper

export const partition=async (arr,start,end,speed)=>{
    
    const pivotValue=arr[start];
    let swapIndex=start;

    for(let i=start+1;i<=end; i++){
        if(pivotValue>arr[i]){
            swapIndex++;
            if(i!==swapIndex){
                await swap(arr,i,swapIndex,speed);
            }
        }
    }

    if(swapIndex!==start){
        await swap(arr,start,swapIndex,speed);
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
export const shuffle=async (arr, speed)=>{
    for(let i=0;i<arr.length;i++){
        await swap(arr,i, Math.floor(Math.random()*(arr.length-1)),speed);
    }
}