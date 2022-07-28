import React, { useEffect, useState } from "react";
import { bogoSort, bubbleSort, heapSort, insertionSort, mergeSort, quickSort } from "../SortingAlgorithms/SortingAlgorithms";
import { randomNumberInRange } from "../util";
import './SortingVisualizer.css';
const minValue=5;
const maxValue=400;

function SortingVisualizer(){
    const [preventClick,setPreventClick]=useState(false);
    const [arraySize,setArraySize]=useState(8);
    const [arraySpeed,setArraySpeed]=useState(2);
    const [barWidth,setBarWidth]=useState(30);
    const [timeElapsed,setTimeElapsed]=useState();

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

    const handleSizeSliderChange=(event)=>{
        setArraySize(event.target.value);
    }
    const handleSpeedSliderChange=(event)=>{
        setArraySpeed(parseInt(event.target.value));
    }
    const [array,setArray]=useState(generateNewArray);
    
    const sortWithBubbleSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            setTimeElapsed('...');
            const firstDate=Date.now();
            const mySorted=await bubbleSort(array,arraySpeed);
            const secondDate=Date.now();
            setTimeElapsed(secondDate-firstDate);
            setArray(mySorted);
            setPreventClick(false);
        }
    }
    const sortWithInsertionSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            setTimeElapsed('...');
            const firstDate=Date.now();
            const mySorted=await insertionSort(array,arraySpeed);
            const secondDate=Date.now();
            setTimeElapsed(secondDate-firstDate);
            setArray(mySorted);
            setPreventClick(false);
        }
    }
    const sortWithHeapSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            setTimeElapsed('...');
            const firstDate=Date.now();
            const mySorted=await heapSort(array,arraySpeed);
            const secondDate=Date.now();
            setTimeElapsed(secondDate-firstDate);
            setArray(mySorted);
            setPreventClick(false);
        }
    }
    const sortWithMergeSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            setTimeElapsed('...');
            const firstDate=Date.now();
            await mergeSort(array,0,array.length-1, arraySpeed);
            const secondDate=Date.now();
            setTimeElapsed(secondDate-firstDate);
            setPreventClick(false);
        }
    }
    const sortWithQuickSort=async ()=>{
        if(!preventClick){
            setPreventClick(true);
            setTimeElapsed('...');
            const firstDate=Date.now();
            await quickSort(array,0,array.length-1,arraySpeed);
            const secondDate=Date.now();
            setTimeElapsed(secondDate-firstDate);
            setPreventClick(false);
        }
    }
    const sortWithBogoSort=async()=>{
        if(!preventClick){
            setPreventClick(true);
            setTimeElapsed('...');
            const firstDate=Date.now();
            await bogoSort(array,arraySpeed);
            const secondDate=Date.now();
            setTimeElapsed(secondDate-firstDate);
            setPreventClick(false);
        }
    }
    const revealSecret=()=>{
        const bogo=document.querySelector('.bogoSort');
        console.log(bogo.style.display);
        if(!bogo.style.display || bogo.style.display=='none'){
            bogo.style.display='block';
        }else{
            bogo.style.display='none';
        }

    }
    return (
        <div className="sortingVisualizer">
            <header>
                <h2>Sortin<span onClick={revealSecret}>g</span> Visualizer</h2>
            <div className="navbar">
                <p onClick={generateNewArray}>Generate New Array</p>
                <div className="separation"></div>
                <div className="slidecontainer">
                    <div className="sliderWrapper">
                        <label htmlFor="sizeSlider">Size of Array</label>
                        <div className="sliderAndValue">
                            <input type="range" id="sizeSlider" min="5" max="300" value={arraySize} className="slider" onChange={handleSizeSliderChange}/>
                            <p className="rangeValueSize">{arraySize}</p>
                        </div>
                    </div>
                    <div className="sliderWrapper">
                        <label htmlFor="sizeSlider">Comparison Speed</label>
                        <div className="sliderAndValue">
                            <input type="range" id="speedSlider" min="0" max="500" value={arraySpeed} className="slider" onChange={handleSpeedSliderChange}/>
                            <p className="rangeValueSpeed">{arraySpeed}ms</p>
                        </div>
                    </div>
                </div>
                <div className="separation"></div>
                <div className="algorithms">
                    <p className="bubbleSort" onClick={sortWithBubbleSort}>Bubble Sort</p>
                    <p className="mergeSort" onClick={sortWithMergeSort}>Merge Sort</p>
                    <p className="heapSort" onClick={sortWithHeapSort}>Heap Sort</p>
                    <p className="insertionSort" onClick={sortWithInsertionSort}>Insertion Sort</p>
                    <p className="quickSort" onClick={sortWithQuickSort}>Quick Sort</p>
                    <p className="bogoSort" onClick={sortWithBogoSort}>Bogo Sort</p>
                </div>
            </div>
            </header>
            <div className="arrayContainer">
            {
            array.map((value, idx)=>{
                return <div className="bar"
                style={{
                    height: `${value}px`,
                    width: `${barWidth}px`
                    }}
                key={idx}>{
                    array.length<20?
                    <div>{value}</div>
                    :
                    null
                }</div>
            })
            }
            <h3 className="time">Time elapsed: {timeElapsed} ms</h3>
            </div>
        </div>
    )
}

export default SortingVisualizer;