import MergeSort from './mergeSort';
import InsertionSort from './insertionSort';
import QuickSort from './quickSort';
import HeapSort from './heapSort';
import BaseSort from './baseSort';
import BubbleSort from './bubbleSort';
import RadixSort from './radixSort';
import CocktailSort from './cocktailSort';
import CombSort from './combSort';

class Factory{
	constructor(name: string){
		if(name === 'quickSort'){
			return new QuickSort();
		}else if(name === 'heapSort'){
			return new HeapSort();
		}else if(name === 'mergeSort'){
			return new MergeSort();
		}else if(name === 'insertionSort'){
			return new InsertionSort();
		}else if(name === 'bubbleSort'){
			return new BubbleSort();
		}else if(name === 'radixSort'){
			return new RadixSort();
		}else if(name === 'cocktailSort'){
			return new CocktailSort();
		}else if(name === 'combSort'){
			return new CombSort();
		}

		return null;
	}
}

export default Factory;