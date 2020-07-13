import BaseSort from "./baseSort.tsx";

declare var j: number;

class insertionSort extends BaseSort{
	constructor(){
		super();
		this.sort = this.insertionSort;
	}

	insertionSort(A: number[]){
		let j: number = 0;
		for(let i = 0; i < A.length; i++){
			j = i;
			while(A[j] < A[j - 1]){
				let temp = A[j]
				A[j] = A[j-1]
				A[j-1] = temp;
				j--
	        }
    	this.statesOfArray.push([...A ]);
	    }	

	}


}

export default insertionSort;
