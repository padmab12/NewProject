var sortVar1 = [34,21,23,90,6,67];
		var returnVal1 = selectionSort(sortVar1);
		console.log(returnVal1);

		function selectionSort(arr){

		    var len = arr.length;
		    for (var i=0; i < len; i++){
		        //set minimum to this position
		        var s = i;
		        //check the rest of the array to see if anything is smaller
		        for (var j=i+1; j < len; j++){
		            if (arr[j] < arr[s]){
		                s = j;
		            }
		        }
		        if (i != s){
		            var t = arr[i];
				    arr[i] = arr[s];
				    arr[s] = t;
		        }
		    }
		    return arr;
		}
