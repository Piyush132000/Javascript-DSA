
function areDistincit(str, i , j){

	let visited = new Array(256);

	for(let k =i; k <=j; k++){
		if(visited[str.charAt(k)]){
			return false;
		}
		visited[str.charAt(k)]= true;
	}

	return true
}




function longestUniqueSubstring(str){

	let n = str.length;

	let length =0
	for(let i =0; i < n ; i++){
		for(let j = i ; j < n; j++){

			if( areDistincit(str, i , j)){
				length = Math.max( length, j-i+1);
			}
		}
	}

	return length;
}




console.log(longestUniqueSubstring("geeksforgeeks"))