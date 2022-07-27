import React, { useEffect, useState } from "react";
import { bubbleSort, heapSort, insertionSort, mergeSort } from "../SortingAlgorithms/SortingAlgorithms";
import { areArraysEqual, buildMaxHeap, heapify, randomNumberInRange } from "../util";
import './SortingVisualizer.css';
const minValue=5;
const maxValue=500;

function SortingVisualizer(){
    const [preventClick,setPreventClick]=useState(false);
    const [arraySize,setArraySize]=useState(50);
    const [barWidth,setBarWidth]=useState(30);
    const generateNewArray=()=>{
        if(!preventClick){
            const newArray=[];
            for(let i=0;i<arraySize;i++){
                newArray.push(randomNumberInRange(minValue,maxValue));
            }
            try{
            setArray(newArray);
            }catch(err){
                return newArray;
            }
        }
    }
    useEffect(()=>{
        const container=document.querySelector('.arrayContainer');
        generateNewArray();
        setBarWidth(Math.floor(container.offsetWidth / (arraySize * 2)))
    },[arraySize]);

    const handleSliderChange=(event)=>{
        setArraySize(event.target.value);
    }

    const [array,setArray]=useState(generateNewArray);
    
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
    const sortWithMergeSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            console.log(array);
            await mergeSort(array,0,array.length-1);
            console.log(array)
            
            setPreventClick(false);
        }
    }
    const testMergeSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            for(let i=0;i<5000;i++){
                const newArray=[];
                const length=randomNumberInRange(1,1000)
                for(let j=0;j<length;j++){
                    newArray.push(randomNumberInRange(-10000,10000));
                }
                const javascriptSorted=newArray.slice().sort((a,b)=>a-b);
                mergeSort(newArray,0,newArray.length-1);
                console.log(areArraysEqual(javascriptSorted,newArray));  
            }
            setPreventClick(false);
        }
    }
    return (
        <div className="SortingVisualizer">
            <div className="navbar">
            <button onClick={generateNewArray}>Generate New Array</button>
            <div class="slidecontainer">
                <input type="range" min="5" max="300" value={arraySize} className="slider" onChange={handleSliderChange}/>
            </div>
            <button onClick={sortWithBubbleSort}>Bubble Sort</button>
            <button onClick={sortWithMergeSort}>Merge Sort</button>
            <button onClick={sortWithHeapSort}>Heap Sort</button>
            <button onClick={sortWithInsertionSort}>Insertion Sort</button>
            <button onClick={testMergeSort}>test merge Sort</button>
            </div>
            <div className="arrayContainer">
            {
            array.map((value, idx)=>{
                return <div className="bar"
                style={{
                    height: `${value}px`,
                    width: `${barWidth}px`
                    }}
                key={idx}></div>
            })
            }
            </div>
        </div>
    )
}

export default SortingVisualizer;