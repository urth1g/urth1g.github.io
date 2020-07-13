import BaseSort from "./baseSort.tsx";


class CombSort extends BaseSort{
  constructor(){
    super();
    this.sort = () => this.combSort(this.copyOfData, this.copyOfData.length);
  }

  combSort(A: number[], gap: number){

    if(gap < 1){
      return 
    }

    let k: number = 0;
    let j: number = gap; 

    for(let i = 0; i < A.length - gap; i++){
      if(A[k] > A[j]){
        this.swap(A, k, j);
      }
      k++
      j++
    }


    gap = Math.floor(gap / 1.3);

    this.statesOfArray.push([...A]);
    this.combSort(A, gap);
  }

  swap(A: number[], i: number, j: number){
    let temp = A[i];
     A[i] = A[j];
     A[j] = temp;
  }

}

export default CombSort;



