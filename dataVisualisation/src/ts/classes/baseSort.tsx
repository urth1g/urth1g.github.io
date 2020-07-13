import IBaseSort from '../interfaces/IBaseSort.tsx';
import { interval, of, from } from 'rxjs';
import { take, map, skip, takeLast, delay, concatMap } from 'rxjs/operators';
import * as p5 from "p5";


/*function sleep (time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}*/


let numOfItems = document.getElementById('num_of_array_items');
let numRange = document.getElementById('num_range');
let _delay = document.getElementById('delay');

class BaseSort implements IBaseSort {
	data: number[] = [];
	statesOfArray: number[][] = [];
	copyOfData: number[] = [];
	sort: Function = () => '';
	coordinates: number[] = [];
	indexInCorrectPosition: number = null;
	width: number = window.innerWidth - 1;
	height: number = 500;
	color: string = 'white';
	widthOfRect: number = 25;
	textXPos: number = 5;
	//@ts-ignore
	maxNumber: number = +numRange.value;
	//@ts-ignore
	numberOfItems: number = +numOfItems.value;
	ratio:number = 0.16;
	//@ts-ignore
	delay: number = +_delay.value;
	_sketch: any = null;
	alreadySorted: boolean = false;
	sub: any = null;
	currentEl: number = -1;
	source: any = null;
	calls: number = 0;

	constructor(){
		this.populateArrayWithRandomNumbers();
		this.populateCoordinates();
	}

	setMaxNumber(value: number): void{
		this.maxNumber = value;
		this.currentEl = -1;
		this.calls = 0;

		if(this.sub){
			this.sub.unsubscribe();
		}
	}

	setNumberOfItems(value: number): void{
		this.currentEl = -1;
		this.numberOfItems = value;
		this.calls = 0;

		if(this.sub){
			this.sub.unsubscribe();
		}
	}

	setDelay(value: number): void{
		this.delay = value;
		if(this.sub){
			this.sub.unsubscribe();

			if(this.alreadySorted && this.currentEl < this.statesOfArray.length - 1){
				this.indexInCorrectPosition = this.currentEl === -1 ? 1 : this.currentEl + 1;
				this.runSketch(false);
			}
		}
	}

	init(data: number[], p5: any): void{
	  let k: number = 25;
	  const x: number = 10;

	  if(!this.alreadySorted){
		  for(let i = 0; i < data.length; i++){
		  	p5.fill("white");
		    p5.rect(this.coordinates[i], this.height - 5, this.widthOfRect, (data[i] * x * this.ratio + 10) * -1)

	      this.writeText(p5, data[i], this.coordinates[i]);
		    k+= 25;
		  }	
	  }else{
	  	let whichStateIndexToRender = this.currentEl > this.statesOfArray.length - 1 ? 
	  			this.statesOfArray.length - 1
	  			: this.currentEl
	  	console.log(whichStateIndexToRender);
	  	console.log(this.currentEl);
	  	this.createRect(this.statesOfArray[whichStateIndexToRender], false, p5);
	  }
	}

  createRect(data: number[], isFinal: boolean, p5: any): void{
  	const x: number = 10;
	  let c1 = p5.color(10, 218, 250);
	  let c2 = p5.color(10, 82, 250);

  	if(data){
			for(let i = 0; i < data.length; i++){
				let heightOfRect = (data[i] * x * this.ratio + 10) * -1;

	      if(data[i] === this.copyOfData[i]){
	      	let interp = p5.map(i, heightOfRect, this.height - 5 + heightOfRect, 0, 1);
	      	let c = p5.lerpColor(c1,c2,interp);
	      	p5.noStroke();
	      	p5.fill(c);
	        p5.rect(this.coordinates[i], this.height - 5,this.widthOfRect, (data[i] * x * this.ratio + 10) * -1);
	      }else{
	      	let interp = p5.map(i, heightOfRect, this.height - 5 + heightOfRect, 0, 1);
	      	let c = p5.lerpColor(c1,c2,interp);
	      	p5.noStroke();
	      	p5.fill(c);
	        p5.rect(this.coordinates[i], this.height - 5,this.widthOfRect, (data[i] * x * this.ratio + 10) * -1 )
	      }
	      this.writeText(p5, data[i], this.coordinates[i]);
	    }
  	}
    
  }

	populateArrayWithRandomNumbers(): void{
		this.data = [];
		this.statesOfArray = [];
		this.alreadySorted = false;

		for(let i = 0; i < this.numberOfItems; i++){
			let num = Math.round( (Math.random() * this.maxNumber ) );
			this.data[i] = num;
		}

		this.widthOfRect = this.width / this.numberOfItems;

		this.copyOfData = [];
	  this.copyOfData = [ ...this.data ];
	}

	populateCoordinates(): void{
		this.coordinates = [];
	  let k = 0;
	  for(let i = 0; i < this.data.length; i++){
	    this.coordinates.push(k);
	    k+= this.widthOfRect;
	  }
	}

	writeText(p5: any, number: number, coord: number): void{
		const x: number = 10;
		let textWidth: number = p5.textWidth(number.toString());
    if(this.numberOfItems <= 50){
			p5.text(number, coord + this.widthOfRect / 2 - textWidth / 2, this.height - (number * x * this.ratio + 20 ));
    }
	}

	sketch(p5: any): void{

	  p5.setup = () => {

	    let canv = p5.createCanvas(this.width, this.height);
	    p5.background(this.color);
	    document.getElementById('defaultCanvas0').style.maxWidth = '100%';

	    this.init(this.data, p5);
	    if(!this.alreadySorted){
		    this.sort(this.copyOfData);
		    this.alreadySorted = true;
	    }

	    let max = this.maxNumber;
	    let maxItems = this.numberOfItems;

			//@ts-ignore
/*		    this.source = interval(this.delay)
		    .pipe(take(this.statesOfArray.length)).pipe(map((i:any) => {
		    	this.currentEl = i;
		    	return this.statesOfArray[i]
		    }))*/

		  if(this.currentEl === -1){
			  this.source = from(this.statesOfArray)
			  .pipe(concatMap((x,i) => {
			  	this.currentEl = i;
			  	return of(x).pipe(delay(this.delay))
			  }));
		  }else{
			  this.source = from(this.statesOfArray)
			  .pipe(skip(this.currentEl))
			  .pipe(concatMap((x,i) => {
			  	return of(x).pipe(delay(this.delay))
			  }));		  	
		  }


	    this.sub = this.source.subscribe( (x: any ) => {
	    	this.currentEl++;
        p5.clear();
        p5.background(this.color);
  			this.createRect(x, false, p5);
	    });

	  }

	}

	prepareSketch(p5: any): void{

	  p5.setup = () => {
	    let canv = p5.createCanvas(this.width, this.height);
	    p5.background('black');
	    document.getElementById('defaultCanvas0').style.maxWidth = '100%';

	    this.init(this.data, p5);
	  }

	}

	removeSketch(): void{
		if(this._sketch){
		  this._sketch.remove();
		}

		if(this.sub){
			this.sub.unsubscribe();
		}

	}

	runSketch(init: boolean): void{
		if(this._sketch){
		  this._sketch.remove();
		}
		if(!init){
			this._sketch = new p5(this.sketch.bind(this), 'canvas-container');
		}else{
			this._sketch = new p5(this.prepareSketch.bind(this), 'canvas-container');
		}

	}

}

export default BaseSort;
