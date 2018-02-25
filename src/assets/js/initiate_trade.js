/* ##################################################################
Define and initialize variables across files
##################################################################### */
 var targetPlayersSet = new Set(); // set for all the traget player(s) entered
 var targetPicksSet = new Set() ; // set for all the traget pick(s) entered
 var targetMoney = 0; // default value is 0 for the target money
    
 var offerPlayersSet = new Set(); // set for all the offer player(s) entered
 var offerPicksSet = new Set() ; // set for all the offer pick(s) entered
 var offerMoney = 0; // default value is 0 for the offer money


/* ##################################################################
Functions for my targets
##################################################################### */


// A function that will Add the target players and display it onto the HTML
function addTargetPlayer(){
    // get the input
    var target_player = document.getElementById("target_player").value;
    if ( target_player != "" && !targetPlayersSet.has(target_player) ){
        // add the target_player to the set
        targetPlayersSet.add(target_player)

        // clear the input fields
        document.getElementById("target_player").value = '';

        // display the added players by creating a duplicate span class 
        var displayPlayer_span = document.getElementById("helper_target_players");
        var dup_displayPlayer_span = displayPlayer_span.cloneNode(true);
        dup_displayPlayer_span.setAttribute("id", "new_target_player");
        // add the duplicate span element to the innerHTML
        dup_displayPlayer_span.innerHTML = target_player;
        displayPlayer_span.appendChild(dup_displayPlayer_span);
    }
}


// A function that will clear all the current added players
function clearTargetPlayer(){
    var displayPlayer_div = document.getElementById("helper_target_players");
    while(displayPlayer_div.firstChild){
        displayPlayer_div.removeChild(displayPlayer_div.firstChild);
    }
    // clear the set
    targetPlayersSet.clear()

    // clear the input fields
    document.getElementById("target_player").value = '';
}


// A function that will Add the target picks and display it onto the HTML
function addTargetPick(){
    // get the input
    var target_pick = document.getElementById("target_pick").value;
    if (target_pick != "" && !targetPicksSet.has(target_pick) ){
        // add the target_pick to the set
        targetPicksSet.add(target_pick)

        // clear the input fields
        document.getElementById("target_pick").value = '';

        // display the added players by creating a duplicate span class 
        var displayPick_span = document.getElementById("helper_target_pick");
        var dup_displayPick_span = displayPick_span.cloneNode(true);
        dup_displayPick_span.setAttribute("id", "new_target_pick");
        // add the duplicate span element to the innerHTML
        dup_displayPick_span.innerHTML = target_pick;
        displayPick_span.appendChild(dup_displayPick_span);
    }
}


// A function that will clear all the current added picks
function clearTargetPick(){
    var displayPick_div = document.getElementById("helper_target_pick");
    while(displayPick_div.firstChild){
        displayPick_div.removeChild(displayPick_div.firstChild);
    }

    // clear the set
    targetPicksSet.clear()

    // clear the input fields
    document.getElementById("target_pick").value = '';
}



/* ##################################################################
Functions for my offer
##################################################################### */

// A function that will Add the offer players and display it onto the HTML
function addOfferPlayer(){
    // get the input
    var offer_player = document.getElementById("offer_player").value;
    if ( offer_player != "" && !offerPlayersSet.has(offer_player) ){
        // add the offer player to the set
        offerPlayersSet.add(offer_player)

        // clear the input fields
        document.getElementById("offer_player").value = '';

        // display the added players by creating a duplicate span class 
        var displayPlayer_span = document.getElementById("helper_offer_players");
        var dup_displayPlayer_span = displayPlayer_span.cloneNode(true);
        dup_displayPlayer_span.setAttribute("id", "new_offer_player");
        // add the duplicate span element to the innerHTML
        dup_displayPlayer_span.innerHTML = offer_player;
        displayPlayer_span.appendChild(dup_displayPlayer_span);
    }
}


// A function that will clear all the current added players
function clearOfferPlayer(){
    var displayPlayer_div = document.getElementById("helper_offer_players");
    while(displayPlayer_div.firstChild){
        displayPlayer_div.removeChild(displayPlayer_div.firstChild);
    }

    // clear the set
    offerPlayersSet.clear()

    // clear the input fields
    document.getElementById("offer_player").value = '';
}


// A function that will Add the offer picks and display it onto the HTML
function addOfferPick(){
    // get the input
    var offer_pick = document.getElementById("offer_pick").value;
    if ( offer_pick != "" && !offerPicksSet.has(offer_pick) ){
        // add the offer pick to the set
        offerPicksSet.add(offer_pick)

        // clear the input fields
        document.getElementById("offer_pick").value = '';

        // display the added players by creating a duplicate span class 
        var displayPick_span = document.getElementById("helper_offer_pick");
        var dup_displayPick_span = displayPick_span.cloneNode(true);
        dup_displayPick_span.setAttribute("id", "new_offer_pick");
        // add the duplicate span element to the innerHTML
        dup_displayPick_span.innerHTML = offer_pick;
        displayPick_span.appendChild(dup_displayPick_span);
    }
}


// A function that will clear all the current added picks
function clearOfferPick(){
    var displayPick_div = document.getElementById("helper_offer_pick");
    while(displayPick_div.firstChild){
        displayPick_div.removeChild(displayPick_div.firstChild);
    }

    // clear the set
    offerPicksSet.clear()

    // clear the input fields
    document.getElementById("offer_pick").value = '';
}


/* ##################################################################
Functions for processing the overall trade request
##################################################################### */

function initTradeRequest(){
    // check if the checkboxed is checked
    var checked = document.getElementById("finalcheck").checked;
    if(checked == true){
        // check if the targeting team is empty
        team_Name = document.getElementById('target_team').value;
        if(team_Name == ""){
            alert("Targeting team cannot be empty!")
            return false;
        }
        // store into localStorage
        localStorage.setItem('targetTeam', team_Name);
        localStorage.setItem('targetPlayersSet', JSON.stringify([...targetPlayersSet]));
        localStorage.setItem('targetPicksSet', JSON.stringify([...targetPicksSet]));
        localStorage.setItem('targetMoney', targetMoney);

        localStorage.setItem('offerPlayersSet', JSON.stringify([...offerPlayersSet]));
        localStorage.setItem('offerPicksSet', JSON.stringify([...offerPicksSet]));
        localStorage.setItem('offerMoney', offerMoney);

        // redirect the page
        document.getElementById('submit_form').action = "trade_history.html";
    }
    else{
        alert("Please review your trade and check the box before you submit!");
    }
}
