import BaseSort from "./baseSort.tsx";

class QuickSort extends BaseSort{
  constructor(){
      super();
      this.sort = () => this.quickSort(this.copyOfData, 0, this.copyOfData.length - 1);
  }

  quickSort(A: number[], left: number, right: number){

    if(left >= right){
      return
    }


    let pi = this.partition(A, left, right);

    this.quickSort(A, left, pi - 1 );
    this.quickSort(A, pi + 1, right);

  }

  partition(A: number[], left: number, right: number){

    let pivot = A[right];
    let pivotIndex = 0;

    for(let i = 0; i < right; i++){
      if(A[i] <= pivot){
        this.swap(A, i, pivotIndex);
        pivotIndex++
      }
    }

    this.swap(A, pivotIndex, right);
    this.statesOfArray.push([...A]);

    return pivotIndex;
  }

  swap(A: number[],i: number, j: number){
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }

}

export default QuickSort;