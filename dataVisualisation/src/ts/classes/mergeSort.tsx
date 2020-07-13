import BaseSort from "./baseSort.tsx";

function sleep (time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

declare var k: number;
declare var j: number;

class MergeSort extends BaseSort{
  calls: number = 0;

  constructor(){
      super();
      this.sort = this.mergeSort;
  }

  mergeSort(A: number[]){
    if(A.length < 2) return 
   
    let mid = A.length / 2;
    
    let left = A.slice(0, mid);
    let right = A.slice(mid);

    this.mergeSort(left);
    this.mergeSort(right);

    this.merge(left, right, A);
  }


  merge(left: number[], right: number[], A: number[]){

    let coIndex = 0;
    let i = 0, k = 0, j = 0;

    let dataLen = Math.floor(this.data.length / 2);

    let isFinal = left.length + right.length === this.data.length;

    this.calls++

    if(this.calls >= dataLen  && !isFinal){
      coIndex = Math.floor(this.data.length / 2)
    }

    while(k < left.length && j < right.length){
      if(left[k] < right[j]){
         A[i] = left[k];
         this.copyOfData[coIndex] = A[i] 
         k++;
         coIndex++
      }else{
         A[i] = right[j]
         this.copyOfData[coIndex] = A[i]
         coIndex++
         j++
      }
      i++
    }
    
    while(k < left.length){
       A[i] = left[k]
       this.copyOfData[coIndex] = A[i]
       coIndex++
       k++
       i++
    }
    
    while(j < right.length){
      A[i] = right[j]
      this.copyOfData[coIndex] = A[i]
      coIndex++
      j++
      i++;
    }

    this.statesOfArray.push([...this.copyOfData ]);

  }

  createRect(data: number[], isFinal: boolean, p5: any): void{
    const x = 10;

    if(data){
      for(let i = 0; i < data.length; i++){
        //@ts-ignore
        if(_.isEqual(data, this.copyOfData)){
          p5.fill('orange');
          sleep(25 * (i + 1)).then( () => p5.rect(this.coordinates[i], this.height - 5,this.widthOfRect, (data[i] * x * this.ratio + 10) * -1) );
          this.calls = 0;
        }else{
          p5.fill("white");
          p5.rect(this.coordinates[i], this.height - 5,this.widthOfRect, (data[i] * x * this.ratio + 10) * -1 )
        }
        this.writeText(p5, data[i], this.coordinates[i]);
      }
    }

  }

}

export default MergeSort;
