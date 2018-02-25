/* ##################################################################
Get the variable from localStorage
##################################################################### */
var targetTeamName = localStorage.getItem('targetTeam');

var targetPlayersNames = JSON.parse(localStorage.getItem('targetPlayersSet'));
var targetPicksInfo = JSON.parse(localStorage.getItem('targetPicksSet'));
var targetMoney_Amt = localStorage.getItem('targetMoney');

var offerPlayersNames = JSON.parse(localStorage.getItem('offerPlayersSet'));
var offerPicksInfo = JSON.parse(localStorage.getItem('offerPicksSet'));
var offerMoney_Amt = localStorage.getItem('offerMoney');

/* ##################################################################
Append the new trade and render in HTML
##################################################################### */
var sample_TradeItem = document.getElementById("sample_tradeItem");
var new_TradeItem = sample_TradeItem.cloneNode(true);

// set the attributes
new_TradeItem.id = "added_tradeItem";
new_TradeItem.childNodes[1].innerHTML = targetTeamName; // set target team name
new_TradeItem.childNodes[3].innerHTML = targetPlayersNames.join(", "); // set target players name
new_TradeItem.childNodes[5].innerHTML = offerPlayersNames.join(", ");; // set offer player name


// append to child
document.getElementById("TIP_table").appendChild(new_TradeItem);


var num =JSON.parse(localStorage.getItem('check_completed'));
var percent = num*10;

var percentage  = percent.toString();
document.getElementById("sample_bar").setAttribute("aria-valuenow",percentage);
var s1 = "width: ";
var s2 = "%";
percentage = s1.concat(percentage,s2);
document.getElementById("sample_bar").setAttribute("style",percentage);

if(percent==100){
	document.getElementById("sample_bar").setAttribute("class","progress-bar progress-bar-w");
	var temp = document.getElementById("sample_tradeItem");
	document.getElementById("TC_table").appendChild(temp);


}
else {
	document.getElementById("sample_bar").setAttribute("class","progress-bar progress-bar-warning");
}

function deleteHistory(e){
	console.log(e.parentNode);
	e.parentNode.parentNode.remove();
}



