function sendMessage() {
	//if message is not empty
	var message = document.getElementById('send_Message').value;
	if (message !== ""){
		//get the manager's name, manager's picture
		var manager = document.getElementById('my_manager').innerHTML;
		var manager_picture =  document.getElementById('pic_manager').src;

		var sample_message = document.getElementById("sample_message");
		var new_message = sample_message.cloneNode(true);

		// set the manager's name, manager's picture and the message entered
		new_message.getElementsByTagName("A")[0].innerHTML=manager;
		new_message.getElementsByTagName("P")[0].innerHTML=message;
		new_message.getElementsByTagName("IMG")[0].setAttribute("src",manager_picture)
		document.getElementById("message_board").appendChild(new_message);


		//clear the message in input
		document.getElementById('send_Message').value = "";

	}
	
}