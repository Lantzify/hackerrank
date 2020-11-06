function staircase(n) {
    var myStairCase = "";

    
    for(var height = 1; height <= n; height++) {
			for(var space = 0; space < n - height; space++){
      	myStairCase += "";
      }
			
      for(var step = n - height; step < n; step++){
      	myStairCase += "#"
      }
			if(height < n){
      myStairCase += "\n"
      }
  
    }
    return myStairCase;
}

console.log(staircase(6))