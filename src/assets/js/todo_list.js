
localStorage.setItem('check_completed', JSON.stringify(3));

function toggleButton(e){
	var checkItem = e.getAttribute("status");
	if (e.className == "btn btn-success btn"){
		e.setAttribute("class","btn btn-default");
		var num = JSON.parse(localStorage.getItem('check_completed'));
		num --;
		localStorage.setItem('check_completed', JSON.stringify(num));

	}
	else{
		e.setAttribute("class","btn btn-success btn");
		var num = JSON.parse(localStorage.getItem('check_completed'));
		num ++;
		localStorage.setItem('check_completed', JSON.stringify(num));
	}

}