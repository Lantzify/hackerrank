function diagonalDifference(arr) {
		var sum = [0, 0];

    sum.forEach(function(sumEle, sumIndex){

    			arr.forEach(function(ele, index) {
          if(sumIndex === 1){
          	ele.reverse()
          }
     
						sum[sumIndex] += ele[index]
			});
    
    });

    
	return Math.abs(sum[0] - sum[1]);
}

console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]))