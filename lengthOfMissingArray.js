//description:
/*
Description:

You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!

You have to write a method, that return the length of the missing array.
Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, return 0.
When an array in the array is null or empty, return 0 too!
There will always be a missing element and its length will be always between the given arrays. 
*/
var array1 = [ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]
var array2 = [ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]];//2
var array3 = [ [ null ], [ null, null, null ] ]//0
var array4 = [ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]];//5
var array5 = [ null];
var array6 = [[],[4, 3],[3, 2, 4],[0, 4, 0, 0]];//0

function getLengthOfMissingArray(arrayOfArrays) {
	if(arrayOfArrays === null) {
		return 0;

	}
	var len1 = arrayOfArrays.length;
	var arrayLength = [];
	for(var i = 0; i < len1; i++) {
		if(arrayOfArrays[i] === null ) {
			return 0;
		}
		var len2 = arrayOfArrays[i].length;
		if(len2 === 0) {
			return 0;
			//console.log(0);
		}
		arrayLength.push(len2);
	}
	if(arrayLength === null) {
		return 0;
	}
	var len3 = arrayLength.length;
	var temp;
	for(var i = 0; i < len3; i++) {
		for(var j = i+1; j < len3; j++) {
			if(arrayLength[i] > arrayLength[j]) {
				temp = arrayLength[i];
				arrayLength[i] = arrayLength[j];
				arrayLength[j] = temp;
			}
		}
	}
	if(len3 === 1 && arrayOfArrays[0][0] === null) {
		return 0;
		//console.log(0);
	}
	for(var i = 1; i < len3; i++) {
		//console.log(arrayLength[i])
		if( arrayLength[i] === 0 ) {
			console.log(arrayLength[i])
			return 0;
			//console.log(0);
		}
		if(arrayLength[i] !== arrayLength[i-1] + 1) {
			var value = arrayLength[i-1] +1;
			return value;
			//console.log(value);
		}
	}
	return 0;
	//console.log(0);
}
window.onload = function() {
	//console.log([].length);
	getLengthOfMissingArray(array6);
}
/*
数组中的子数组有空数组或null数组都返回0
*/
