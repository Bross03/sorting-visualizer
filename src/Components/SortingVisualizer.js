import React, { useState } from "react";
import { bubbleSort, heapSort, insertionSort } from "../SortingAlgorithms/SortingAlgorithms";
import { areArraysEqual, buildMaxHeap, heapify, randomNumberInRange } from "../util";
import './SortingVisualizer.css';
const minValue=5;
const maxValue=700;

function SortingVisualizer(){
    const [preventClick,setPreventClick]=useState(false);
    const generateNewArray=()=>{
        if(!preventClick){
            const newArray=[];
            for(let i=0;i<100;i++){
                newArray.push(randomNumberInRange(minValue,maxValue));
            }
            try{
            setArray(newArray);
            }catch(err){
                return newArray;
            }
        }
    }

    const [array,setArray]=useState(generateNewArray);
    // const [animations,setAnimations]=useState(generateNewArray());
    // useEffect(()=>{
    //     for(let i=0;i<animations.length;i++){
    //         console.log(animations[i]);
    //     }
    // },[animations])
    const sortWithBubbleSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            const mySorted=await bubbleSort(array);
            setArray(mySorted);
            setPreventClick(false);
        }
    }
    const sortWithInsertionSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            const mySorted=await insertionSort(array);
            setArray(mySorted);
            setPreventClick(false);
        }
    }
    const sortWithHeapSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            const mySorted=await heapSort(array);
            setArray(mySorted);
            setPreventClick(false);
        }
    }
    const testHeapSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            for(let i=0;i<5000;i++){
                const newArray=[];
                const length=randomNumberInRange(1,1000)
                for(let j=0;j<length;j++){
                    newArray.push(randomNumberInRange(-10000,10000));
                }
                const javascriptSorted=newArray.slice().sort((a,b)=>a-b);
                const mySorted=await heapSort(newArray);
                console.log(areArraysEqual(javascriptSorted,mySorted));  
            }
            setPreventClick(false);
        }
    }
    return (
        <div className="SortingVisualizer">
            <div className="navbar">
            <button onClick={generateNewArray}>Generate New Array</button>
            <button onClick={sortWithBubbleSort}>Bubble Sort</button>
            <button onClick={generateNewArray}>Merge Sort</button>
            <button onClick={sortWithHeapSort}>Heap Sort</button>
            <button onClick={sortWithInsertionSort}>Insertion Sort</button>
            <button onClick={testHeapSort}>test insertion Sort</button>
            </div>
            <div className="arrayContainer">
            {
            array.map((value, idx)=>{
                return <div className="bar"
                style={{height: `${value}px`}}
                key={idx}></div>
            })
            }
            </div>
        </div>
    )
}

export default SortingVisualizer;