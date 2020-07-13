import BaseSort from "./baseSort.tsx";


class BubbleSort extends BaseSort{
	constructor(){
		super();
		this.sort = this.bubbleSort;
	}

	bubbleSort(A: number[]){

   	 //this.indexInCorrectPosition = this.currentEl === -1 ? 1 : this.currentEl + 1;

	  for(let i: number = 0; i < A.length; i++){
	    let k: number = 0;

	    while(k < A.length - i){
	      if(A[k] > A[k + 1]){
	        this.swap(A,k, k+1);
	      }
	      k++
	    }

		this.statesOfArray.push([...A]);
	  }
	}

	swap(A: number[], i: number, j: number){
	  let temp = A[i];
	   A[i] = A[j];
	   A[j] = temp;
	}

/*  createRect(data: number[], isFinal: boolean, p5: any): void{
    let k = 25;
    const x = 10;

    if(data){

      let sortedIndex = data.length - this.indexInCorrectPosition++;
      
      for(let i = 0; i < data.length; i++){
        if(i >= sortedIndex){
          p5.fill("orange");
        }else{
          p5.fill("white");
        }
        p5.rect(this.coordinates[i], this.height - 5, this.widthOfRect, (data[i] * x * this.ratio + 10) * -1 )
        this.writeText(p5, data[i], this.coordinates[i]);
        k+= 25;
      }
    }
  }		*/

}

export default BubbleSort;
