
//helper to generate a random number
export const randomNumberInRange=(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//method to wait for the speed of the animation
const wait=(ms)=> new Promise(resolve => setTimeout(resolve, ms))


//swap two elements method(it also animates the array)
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

//the following are heap sort helpers

/*
/ Heapifies the array, it rearranges the array
/ to maintain the max heap property
*/
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

//creates the first max heap from an input array
export const buildMaxHeap=async (arr,speed)=>{
    
    let i=Math.floor(arr.length/2 -1);
    while(i>=0){
        await heapify(arr,i,arr.length,speed);
        i--;
    }
}

//merges two sorted arrays
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

/*
/ Uses the element in the beginning of the array as
/ a pivot where all other elements are divided into
/ smaller(left) or larger(right) than the pivot
*/


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

//checks if array is sorted
export const isSorted=(arr)=>{
    for(let i=1;i< arr.length; i++){
        if(arr[i]<arr[i-1]){
            return false;
        }
    }
    return true;
}
//shuffles the array
export const shuffle=async (arr, speed)=>{
    for(let i=0;i<arr.length;i++){
        await swap(arr,i, Math.floor(Math.random()*(arr.length-1)),speed);
    }
}