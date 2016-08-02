function list(names){
	var result = '';
	
	for(var i = 0; i < names.length; ++i){
		if(i == 0 ){
			result += names[i].name;
		}
		else if(i < names.length - 1){
			result += ", " + names[i].name;
		} else {
			result += " & " + names[i].name ;
		}
	}
	console.log(result);
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);