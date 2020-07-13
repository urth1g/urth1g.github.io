import Factory from './ts/classes/factory';
import * as p5 from "p5";

function sleep (time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

let numOfItems = document.getElementById('num_of_array_items');
let numRange = document.getElementById('num_range');
let startSortingButton = document.getElementById('startSorting');
let sortType = document.getElementById('sortType');
let delay = document.getElementById('delay');

numOfItems.oninput = changeNumOfArrayItems;
numRange.oninput = changeNumRange;
startSortingButton.onclick = startSorting;
sortType.onchange = sortTypeChange;
delay.oninput = delayChange;


let sort = new Factory('mergeSort');

function changeNumRange(e: any){
	//@ts-ignore
	sort.setMaxNumber(+e.target.value);
	//@ts-ignore
	sort.populateArrayWithRandomNumbers();
	//@ts-ignore
	sort.populateCoordinates();
	//@ts-ignore
	sort.runSketch(true);
}

function changeNumOfArrayItems(e: any){
	//@ts-ignore
	sort.setNumberOfItems(+e.target.value);
	//@ts-ignore
	sort.populateArrayWithRandomNumbers();
	//@ts-ignore
	sort.populateCoordinates();
	//@ts-ignore
	sort.runSketch(true);
}

function startSorting(e: any){

	//@ts-ignore
	if(!sort.alreadySorted){
		//@ts-ignore
		sort.runSketch();
	}else{
		console.log(sort);
	}

}

function sortTypeChange(e: any){
	//@ts-ignore
	sort.removeSketch();

	sort = new Factory(e.target.value);
	//@ts-ignore
	sort.runSketch(true);
	console.log(sort);
}

function delayChange(e: any){
	//@ts-ignore
	sort.setDelay(+e.target.value);
}
//@ts-ignore
sort.runSketch(true);