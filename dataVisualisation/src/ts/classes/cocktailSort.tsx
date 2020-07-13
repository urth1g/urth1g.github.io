import BaseSort from "./baseSort.tsx";


class cocktailSort extends BaseSort{
	constructor(){
		super();
		this.sort = () => this.cocktailSort(this.copyOfData, 0, this.copyOfData.length, true );
	}

	cocktailSort(A: number[], left: number, right: number, swap: boolean){

	  if(left >= right || !swap){
	    return 
	  }
	  
		let length: number = A.length;

		let _swap: boolean = false;

		for(let i = left; i < length; i++){
			if(A[i] > A[i + 1]){
				while(A[i] > A[i + 1]){
						this.swap(A, i, i + 1);
	      }
	      _swap = true;
	    }
	  }

	  this.statesOfArray.push([...A])

		for(let i = right - 1; i > 0; i--){
		 if(A[i] < A[i - 1]){
		   while(A[i] < A[i - 1]){
		     this.swap(A, i, i - 1);
		   }
		   _swap = true;
		 }
		}

	  this.statesOfArray.push([...A])

		++left
		--right
		this.cocktailSort(A, left, right, _swap);
	}

	swap(A: number[], i: number, j: number){
	  let temp = A[i];
	   A[i] = A[j];
	   A[j] = temp;
	}


}

export default cocktailSort;
