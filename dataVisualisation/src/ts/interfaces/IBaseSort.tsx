interface IBaseSort {
	data: number[];
	statesOfArray: number[][];
	copyOfData: number[];
	coordinates : number[];
	sort: Function;

	populateCoordinates(): void;
	populateArrayWithRandomNumbers(): void;
	setMaxNumber(value: number): void;
	setNumberOfItems(value: number): void;
	runSketch(init: boolean): void;
}

export default IBaseSort;