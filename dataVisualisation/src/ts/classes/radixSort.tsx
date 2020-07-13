import BaseSort from "./baseSort.tsx";

class RadixSort extends BaseSort{

  constructor(){
    super();
    this.sort = this.radixSort;

  }
  radixSort(A: number[]){
    let keys: number[][] = []
    let d: number = 3; 
    let base: number = 10; 
    let c: number = 1;
    
    this.statesOfArray = [];

    while(c <= d){

      keys = [];

      for(let i: number = 0; i < base; i++){
        keys.push([]);
      }

      for(let i: number = 0; i < A.length; i++){
        let num: any = A[i].toString();
        num = num[num.length - c];
        num = num ? num : '0';
        keys[num].push(A[i]);
      }
      
      A = this.emptyArray(keys);
      this.copyOfData = A;
      this.statesOfArray.push([...A]);
      c++
    }
  }

  emptyArray(A: number[][] ){
    let arr: number[] = [];

    for(let i: number = 0; i < A.length; i++){
      if(A[i].length !== 0){
        arr = [...arr, ...A[i]];
      }
    }
    return arr
  }

}

export default RadixSort;
