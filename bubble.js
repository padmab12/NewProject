var sortVar = [34,21,23,90,6,67];
		var returnVal = bubbleSort(sortVar);
		console.log(returnVal);
		function bubbleSort(arr){
			var len = arr.length-1;
	        for (var j=0; j<len; j++) {
	            if (arr[j] > arr[j+1]) {
	            	var t = arr[j+1];
	            	arr[j+1] = arr[j];
	            	arr[j] = t;
	            	j = j-2;
	            }
	        }
			return arr;
		}
