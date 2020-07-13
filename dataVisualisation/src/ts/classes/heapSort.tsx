import BaseSort from "./baseSort.tsx";

function sleep (time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

class HeapSort extends BaseSort{
  constructor(){
    super();
    this.sort = this.heapSort;
  }

  heapSort(A: number[]){
    let C = [ ...this.data ];
    let D = [ ...this.copyOfData ];

    this.statesOfArray = [];

    for(let i: number = C.length - 1; i >= 0; i--){
      this.heapify(D, i);
      C[i] = D.shift()
      this.statesOfArray.push([...C]);
    }
  }
  build_max_heap(A: number[]){
    for(let i: number = 0; i < A.length; i++){
      this.heapify(A, i);
    }
  }
  heapify(A: number[], i: number){
    let parent: number = Math.ceil(i / 2) - 1;

    while(i !== 0){
      parent = Math.ceil(i / 2) - 1;
      if(A[i] > A[parent]){
        this.swap(A, i, parent);
      }
      i--
    }
  }

  swap(A: number[], i: number, j: number){
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }

  createRect(data: number[], isFinal: boolean, p5: any): void{
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
  }
}

export default HeapSort;